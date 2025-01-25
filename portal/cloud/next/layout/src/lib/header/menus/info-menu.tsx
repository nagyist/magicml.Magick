'use client'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { dropDownMenuItemsType, navProps } from '@magickml/portal-ui'
import { DocsIcon, FaqIcon, TutorialIcon, DiscordIcon } from '@magickml/icons'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import SheetPopover from './sheet-popover'
import { useState } from 'react'

export const InfoMenu = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const handleClose = () => {
    setPopoverOpen(false)
    setSheetOpen(false)
  }
  const router = useRouter()
  const handleNavigation = async (args: navProps) => {
    if (args.newTab) window.open(args.target, '_blank')
    else router.push(args.target)
  }

  const dropDownMenuItems: dropDownMenuItemsType[] = [
    {
      href: 'http://magickml.com/',
      id: 'Magick',
      enabled: true,
      newTab: true,
      type: 'link',
      separator: true,
      navigate: handleNavigation,
      children: (
        <>
          <InfoCircledIcon className="w-6 h-6 mr-4" />
          <span>About Magick</span>
        </>
      ),
    },
    {
      id: 'Academy',
      href: 'https://www.youtube.com/@magickml',
      enabled: true,
      type: 'link',
      separator: true,
      navigate: handleNavigation,
      children: (
        <>
          <TutorialIcon className="w-6 h-6 mr-4" />
          <span>Tutorials</span>
        </>
      ),
    },
    {
      id: 'Docs',
      href: 'https://docs.magickml.com/',
      enabled: true,
      newTab: true,
      type: 'link',
      separator: true,
      navigate: handleNavigation,
      children: (
        <>
          <DocsIcon className="w-6 h-6 mr-4" />
          <span>Read our Docs</span>
        </>
      ),
    },
    {
      id: 'Updates',
      href: '/updates',
      enabled: true,
      type: 'link',
      separator: true,
      navigate: handleNavigation,
      children: (
        <>
          <FaqIcon className="w-6 h-6 mr-4" />
          <span>FAQs & Updates</span>
        </>
      ),
    },
    {
      id: 'Discord',
      href: 'https://bit.ly/magick-discord-cloud',
      enabled: true,
      newTab: true,
      type: 'link',
      navigate: handleNavigation,
      children: (
        <>
          <DiscordIcon className="w-6 h-6 mr-4" />
          <span> Join our Discord</span>
        </>
      ),
    },
  ]

  const renderItems = () => {
    return dropDownMenuItems.map((item, index, array) =>
      item.enabled && item.type === 'link' ? (
        <div
          key={index + item.id}
          className={`py-2 ${
            index === array.length - 1 ? 'border-b-0' : 'border-b'
          } border-b-black cursor-pointer dark:border-b-[#e9edf1] hover:bg-[#c1c2c3] inline-flex justify-start w-full items-start dark:hover:bg-[#171b1c]`}
          onClick={() => {
            // close()
            item.navigate &&
              item.navigate({
                target: item.href ?? '',
                newTab: item.newTab,
              })
            handleClose()
          }}
        >
          <span className="inline-flex ml-6">{item.children}</span>
        </div>
      ) : (
        item.children
      )
    )
  }

  return (
    <SheetPopover
      sheetOpen={sheetOpen}
      setSheetOpen={setSheetOpen}
      popoverOpen={popoverOpen}
      setPopoverOpen={setPopoverOpen}
      triggerIcon={
        <AiOutlineInfoCircle
          className="text-black dark:text-[#e9edf1] h-6 w-6 lg:w-8 lg:h-8 color-transition"
          width={32}
          height={32}
          color="currentColor"
        />
      }
    >
      {renderItems()}
    </SheetPopover>
  )
}
