'use client'
// DOCUMENTED
import JSZip from 'jszip'
import posthog from 'posthog-js'
import { useConfig, usePubSub } from '@magickml/providers'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { useSelector } from 'react-redux'
import { Menu, MenuItem, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import css from '../menuBar.module.css'
import { styled } from '@mui/material/styles'
import { NestedMenuItem } from 'mui-nested-menu'
import {
  RootState,
  Tab,
  rootApi,
  useAppDispatch,
  useNewSpellMutation,
} from 'client/state'
import { useModal } from '../../../contexts/ModalProvider'
import { enqueueSnackbar } from 'notistack'
import axios from 'axios'
import { PRODUCTION } from 'clientConfig'
import { v4 } from 'uuid'

function toTitleCase(str: string) {
  return str
    .split('_') // Split the string by underscores
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' ') // Join the words with a space
}

/**
 * MenuBar component
 *
 * @returns {React.JSX.Element}
 */
const NewMenuBar = (props: any) => {
  const dispatch = useAppDispatch()
  const [newSpell] = useNewSpellMutation()
  const config = useConfig()
  const { publish, events } = usePubSub()
  const [snapEnabled, setSnapEnabled] = useState(true)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { currentTab } = useSelector((state: RootState) => state.tabLayout)
  const globalConfig = useSelector((state: RootState) => state.globalConfig)
  const { openModal } = useModal()
  const hiddenFileInput = useRef<HTMLInputElement>(null)
  const token = globalConfig?.token
  const activeTabRef = useRef<Tab | null>(null)

  useEffect(() => {
    if (!currentTab || !currentTab.id) return
    activeTabRef.current = currentTab
  }, [currentTab])

  // Grab all events we need
  const { $SAVE_SPELL, $EXPORT, $EXPORT_AGENT, $DELETE, TOGGLE_SNAP } = events

  /**
   * Save handler
   */
  const onSave = () => {
    if (!activeTabRef.current) return
    publish($SAVE_SPELL(activeTabRef.current?.id))
  }

  /**
   * New handler
   */
  const onNew = () => {
    openModal({
      modal: 'createSpellModal',
    })
  }

  /**
   * Import handler
   */
  const onImport = () => {
    openModal({
      modal: 'createSpellModal',
    })
  }

  /**
   * Export handler
   */
  const onExport = () => {
    if (!activeTabRef.current) return
    publish($EXPORT(activeTabRef.current.id))
  }

  const onExportAgent = () => {
    if (!activeTabRef.current) return
    publish($EXPORT_AGENT(activeTabRef.current.id))
  }

  /**
   * Undo handler
   */
  const onUndo = () => {
    // if (!activeTabRef.current) return
    // publish($UNDO(activeTabRef.current.id))
  }

  /**
   * Redo handler
   */
  const onRedo = () => {
    // if (!activeTabRef.current) return
    // publish($REDO(activeTabRef.current.id))
  }

  /**
   * Delete handler
   */
  const onDelete = () => {
    if (!activeTabRef.current) return
    publish($DELETE(activeTabRef.current.id))
  }

  /**
   * Toggle snap handler
   */
  const toggleSnapFunction = () => {
    if (!activeTabRef.current) return
    publish(TOGGLE_SNAP)
    setSnapEnabled(!snapEnabled)
  }

  const loadFile = async (selectedFile: any, replace: boolean) => {
    if (!token && PRODUCTION) {
      enqueueSnackbar('You must be logged in to create a project', {
        variant: 'error',
      })
      return
    }
    const fileReader = new FileReader()
    fileReader.readAsText(selectedFile)
    fileReader.onload = async event => {
      const data = JSON.parse(event?.target?.result as string)

      delete data['id']

      // upload agents
      await axios({
        url: `${globalConfig.apiUrl}/projects?projectId=${globalConfig.projectId}`,
        method: 'POST',
        data: { ...data, projectId: globalConfig.projectId, replace },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      dispatch(rootApi.util.invalidateTags(['Spells', 'Agents', 'Documents']))
    }
  }

  const importAgent = async (file: File) => {
    try {
      const zip = new JSZip()
      const contents = await zip.loadAsync(file)

      // First pass: Extract all spells and build a map of original IDs to new IDs
      const idMapping: Record<string, string> = {}
      const spellDataMap: Record<string, any> = {}
      const spellNameToIdMap: Record<string, string> = {}

      for (const filename of Object.keys(contents.files)) {
        if (!contents.files[filename].dir && filename.endsWith('.spell.json')) {
          const content = await contents.files[filename].async('string')
          const spellData = JSON.parse(content)

          if (!spellData.id || !spellData.name) {
            console.warn(`Skipping spell with missing id or name: ${filename}`)
            continue
          }

          // Generate a new ID for this spell
          const newId = v4()

          // Store the mapping from old ID to new ID
          idMapping[spellData.id] = newId

          // Also store a mapping from spell name to new ID
          spellNameToIdMap[spellData.name] = newId

          // Store the spell data for the second pass
          spellDataMap[spellData.id] = {
            ...spellData,
            originalId: spellData.id,
          }

          console.log(
            `Mapped spell: ${spellData.name} (${spellData.id} → ${newId})`
          )
        }
      }

      // Second pass: Update all references and import spells
      const importedSpells = []

      for (const originalId in spellDataMap) {
        const spellData = spellDataMap[originalId]
        const newId = idMapping[originalId]

        // Deep clone the graph to avoid modifying the original
        const updatedGraph = JSON.parse(JSON.stringify(spellData.graph))

        // Update all subspell references in the graph
        if (updatedGraph && updatedGraph.nodes) {
          for (const node of updatedGraph.nodes) {
            if (node.type === 'action/subspell/run' && node.configuration) {
              // Handle reference by ID
              if (
                node.configuration.spellId &&
                idMapping[node.configuration.spellId]
              ) {
                node.configuration.spellId =
                  idMapping[node.configuration.spellId]
                console.log(
                  `Updated ID reference in ${spellData.name}: ${node.configuration.spellId}`
                )
              }
              // Handle reference by name
              else if (
                node.configuration.spellName &&
                spellNameToIdMap[node.configuration.spellName]
              ) {
                // If spell was referenced by name, update the ID based on the name
                node.configuration.spellId =
                  spellNameToIdMap[node.configuration.spellName]
                console.log(
                  `Updated name-based reference in ${spellData.name}: ${node.configuration.spellName} → ${node.configuration.spellId}`
                )
              }
            }
          }
        }

        // Create new spell with updated references
        const response = await newSpell({
          id: newId,
          graph: updatedGraph,
          name: spellData.name,
          projectId: config.projectId,
          type: spellData.type || 'standard',
        })

        if ('error' in response) {
          throw new Error(
            `Failed to import spell ${spellData.name}: ${response.error}`
          )
        }

        importedSpells.push({
          name: spellData.name,
          id: newId,
          originalId: originalId,
        })

        console.log(`Imported spell ${spellData.name} with new ID ${newId}`)

        posthog.capture('spell_imported', {
          projectId: config.projectId,
          spellName: spellData.name,
        })
      }

      enqueueSnackbar('Agent imported successfully', { variant: 'success' })
    } catch (error: any) {
      console.error('Error importing agent:', error)
      enqueueSnackbar(`Error importing agent: ${error.message}`, {
        variant: 'error',
      })
    }
  }

  const onImportAgent = () => {
    console.log('Clicking import project')
    hiddenFileInput.current?.click()
  }

  const handleFileInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      if (file.name.endsWith('.zip')) {
        importAgent(file)
      } else {
        // Existing logic for non-zip files
        loadFile(file, false)
      }
    }
  }

  // Menu bar entries
  const menuBarItems: any = {
    file: {
      items: {
        new_spell: {
          onClick: onNew,
          hotKey: 'alt+n, meta+n',
        },
        import_spell: {
          onClick: onImport,
          hotKey: 'alt+i, meta+i',
        },
        save_spell: {
          onClick: onSave,
          hotKey: 'alt+s, meta+s',
        },
        export_spell: {
          onClick: onExport,
          hotKey: 'meta+shift+e,ctrl+shift+e',
        },
        export_agent: {
          onClick: onExportAgent,
          hotKey: 'meta+shift+g',
        },
        import_agent: {
          onClick: onImportAgent,
        },
      },
    },
    edit: {
      items: {
        undo: {
          onClick: onUndo,
          hotKey: 'alt+z, meta+z',
        },
        redo: {
          onClick: onRedo,
          hotKey: 'ctrl+shift+z, meta+shift+z',
        },
        delete: {
          onClick: onDelete,
          hotKey: 'delete',
        },
      },
    },
    settings: {
      items: {
        snap: {
          onClick: toggleSnapFunction,
          isActive: snapEnabled,
        },
      },
    },
  }

  /**
   * Parse command string to Unicode equivalents for better readability
   *
   * @param {string} commandString
   * @returns {string}
   */
  const parseStringToUnicode = (commandString: string) => {
    let formattedCommand = commandString

    const userAgent = navigator.userAgent

    if (userAgent.indexOf('Win') !== -1) {
      formattedCommand = formattedCommand.replace('option', 'alt')
    } else if (userAgent.indexOf('Linux') !== -1) {
      formattedCommand = formattedCommand.replace('option', 'alt')
    } else {
      formattedCommand = formattedCommand.replace('alt', '\u2325')
    }

    formattedCommand = formattedCommand.replace('shift', '\u21E7')
    formattedCommand = formattedCommand.replace('cmd', '\u2318')
    formattedCommand = formattedCommand.replace('control', '\u2303')
    formattedCommand = formattedCommand.replace('ctrl', '\u2303')
    formattedCommand = formattedCommand.replace('meta', '\u2318')
    formattedCommand = formattedCommand.replace(/[`+`]/g, ' ')

    return formattedCommand
  }

  /**
   * ListItem component
   *
   * @param {any} props
   * @returns {React.JSX.Element}
   */
  const ListItem = ({
    item,
    label,
    topLevel,
    onClick,
    hotKeyLabel,
  }: {
    item: any
    label: string
    topLevel: boolean
    onClick: () => void
    hotKeyLabel: string
  }) => {
    label = label ? label.replace(/_/g, ' ') : label
    let children
    if (item.items && Object.keys(item.items)) {
      children = (
        <ul className={css['menu-panel']}>
          {Object.entries(item.items as [string, Record<string, any>][]).map(
            ([key, item]: [string, Record<string, any>]) => {
              // Add hotkeys for each sub-menu item
              if (item.hotKey) {
                useHotkeys(
                  item.hotKey,
                  event => {
                    console.log('HOTKEYS', item.hotKey)
                    event.preventDefault()
                    item.onClick()
                  },
                  { enableOnFormTags: ['INPUT'] },
                  [item.onClick]
                )
              }

              return (
                <ListItem
                  item={item}
                  label={key}
                  topLevel={false}
                  key={key}
                  onClick={item.onClick}
                  hotKeyLabel={item.hotKey ? item.hotKey.split(',')[0] : ''}
                />
              )
            }
          )}
        </ul>
      )
    }

    return (
      <li
        className={`${css[topLevel ? 'menu-bar-item' : 'list-item']}`}
        onClick={onClick}
      >
        <span>
          {Object.entries(item as [string, Record<string, any>][]).map(
            ([key]: [string, Record<string, any>]) => {
              if (key === 'isActive')
                return (
                  <span
                    key={key}
                    className={
                      item.isActive
                        ? css['preference-active']
                        : css['preference-notActive']
                    }
                  >
                    ●{' '}
                  </span>
                )
            }
          )}
          {label}
        </span>
        {hotKeyLabel && <span>{parseStringToUnicode(hotKeyLabel)}</span>}
        {children && <div className={css['folder-arrow']}> ❯ </div>}
        {children}
      </li>
    )
  }

  /**
   * Click handler
   *
   * @param {() => void} func
   */

  const handleMenuIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setIsMenuOpen(true)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  const NestedMenu = styled(NestedMenuItem)(({ theme }) => ({
    backgroundColor: '#2B2B30',
    // change bg color of menu item
    '& .MuiListItem-root': {
      background: '#2B2B30',
      color: '#FFFFFF',
      '&:hover': {
        background: 'red',
      },
    },
  }))

  return (
    <div>
      <input
        id="import"
        type="file"
        accept=".zip,.json"
        ref={hiddenFileInput}
        onChange={handleFileInputChange}
        style={{ display: 'none' }}
      />
      <IconButton
        onClick={handleMenuIconClick}
        style={props.style ? props.style : { borderRadius: 0 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-bar"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        sx={{
          '& .MuiMenu-paper': {
            background: '#2B2B30',
            width: '180px',
            shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          },
        }}
        MenuListProps={{ sx: { py: 0 } }}
        variant="menu"
      >
        <MenuItem
          onClick={e => {
            window.parent.postMessage({ type: 'redirect', href: '/' }, '*')
            handleMenuClose()
          }}
          sx={{
            '&:hover, &:focus': {
              background: '#49545A',
              outline: 'none',
            },
          }}
          divider={true}
        >
          Home
        </MenuItem>
        {Object.keys(menuBarItems).map((item, index) => (
          <NestedMenu
            key={index}
            parentMenuOpen={isMenuOpen}
            label={Object.keys(menuBarItems)[index].toUpperCase()}
            divider={true}
            sx={{
              '&:hover, &:focus': {
                background: '#49545A',
                outline: 'none',
              },
            }}
            MenuProps={{
              sx: {
                '& .MuiMenu-paper': {
                  background: '#2B2B30',
                  width: '180px',
                  shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  paddingY: 0,
                },
                // remove menulist padding
                '& .MuiMenu-list': {
                  padding: 0,
                  '& .MuiListItem-root': {
                    padding: 0,
                  },
                },
              },
            }}
          >
            {Object.keys(menuBarItems[item].items).map(
              (subMenuKey, subIndex) => {
                const hotKeyLabel = menuBarItems[item]
                  ? menuBarItems[item].items[subMenuKey].hotKey
                  : null
                // add useHotkeys for each sub-menu item
                if (hotKeyLabel) {
                  useHotkeys(
                    menuBarItems[item].items[subMenuKey].hotKey,
                    event => {
                      event.preventDefault()
                      menuBarItems[item].items[subMenuKey].onClick()
                    },
                    { enableOnFormTags: ['INPUT'] },
                    [menuBarItems[item].items[subMenuKey].onClick]
                  )
                }

                return (
                  <MenuItem
                    key={subIndex}
                    onClick={e => {
                      menuBarItems[item].items[subMenuKey].onClick(e)
                      handleMenuClose()
                    }}
                    sx={{
                      '&:hover, &:focus': {
                        background: '#49545A',
                        outline: 'none',
                      },
                    }}
                    divider={true}
                  >
                    <div className={(css as any)['menu-item']}>
                      <p>
                        {menuBarItems[item].items[subMenuKey].hasOwnProperty(
                          'isActive'
                        ) && (
                          <span
                            className={
                              menuBarItems[item].items[subMenuKey].isActive
                                ? css['preference-active']
                                : css['preference-notActive']
                            }
                          >
                            ●{' '}
                          </span>
                        )}
                        {toTitleCase(subMenuKey)}
                      </p>

                      {hotKeyLabel &&
                        parseStringToUnicode(
                          hotKeyLabel.slice(0, hotKeyLabel.indexOf(','))
                        )}
                    </div>
                  </MenuItem>
                )
              }
            )}
          </NestedMenu>
        ))}
      </Menu>
    </div>
  )
}

export default NewMenuBar
