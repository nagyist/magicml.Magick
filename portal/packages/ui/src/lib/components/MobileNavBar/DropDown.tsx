import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@magickml/client-ui'
import { dropDownMenuItemsType } from './types'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

type Props = {
  trigger: React.ReactNode
  dropDownMenuItems: dropDownMenuItemsType[]
  sideOffset?: number
  motionKey?: string
}

const DropDown = ({
  trigger,
  dropDownMenuItems,
  sideOffset = 0,
  motionKey,
}: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <AnimatePresence>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
        {open && (
          <DropdownMenuContent sideOffset={sideOffset} asChild>
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              exit={{ y: 1000 }}
              transition={{ duration: 0.2 }}
              className="w-screen rounded-none p-4 dark:bg-[#262B2E] shadow-md !rounded-t-lg"
              key={motionKey}
            >
              <DropdownMenuLabel className="flex justify-center">
                <span className="w-8 h-1 bg-black rounded-full dark:bg-white"></span>
              </DropdownMenuLabel>
              {dropDownMenuItems.map(
                (item, index) =>
                  item.enabled && (
                    <>
                      <DropdownMenuItem
                        key={index + item.id}
                        className="flex items-center p-4"
                      >
                        {item.type === 'link' ? (
                          <span
                            onClick={() =>
                              item.navigate &&
                              item.navigate({
                                target: item.href ?? '',
                                newTab: item.newTab,
                              })
                            }
                            className="flex flex-grow"
                          >
                            {item.children}
                          </span>
                        ) : (
                          item.children
                        )}
                      </DropdownMenuItem>
                      {item.separator && (
                        <DropdownMenuSeparator className="bg-[#939191]" />
                      )}
                    </>
                  )
              )}
            </motion.div>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </AnimatePresence>
  )
}

export default DropDown
