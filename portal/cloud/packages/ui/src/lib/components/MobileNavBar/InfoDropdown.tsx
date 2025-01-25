import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'
import DropDown from './DropDown'
import { dropDownMenuItemsType, navProps } from './types'
import { TutorialIcon, DocsIcon, DiscordIcon, FaqIcon } from '@magickml/icons'
import { InfoCircledIcon } from '@radix-ui/react-icons'

export const DropDownInfoMenu = () => {
  const router = useRouter()

  const handleNavigation = async (args: navProps) => {
    if (args.newTab) window.open(args.target, '_blank')
    else router.push(args.target)
  }

  const dropDownInfoMenuItems: dropDownMenuItemsType[] = [
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
          <InfoCircledIcon className="w-6 h-6 mr-4 " />
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
          <TutorialIcon className="w-6 h-6 mr-4 " />
          <span>Tutorials</span>
        </>
      ),
    },
    {
      id: 'Docs',
      href: 'https://magick-docs.vercel.app/',
      enabled: true,
      newTab: true,
      type: 'link',
      separator: true,
      navigate: handleNavigation,
      children: (
        <>
          <DocsIcon className="w-6 h-6 mr-4 " />
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
          <FaqIcon className="w-6 h-6 mr-4 " />
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
          <DiscordIcon className="w-6 h-6 mr-4 " />
          <span> Join our Discord</span>
        </>
      ),
    },
  ]

  return (
    <DropDown
      dropDownMenuItems={dropDownInfoMenuItems}
      motionKey="infoMenu"
      trigger={
        <AiOutlineInfoCircle className="text-[30px] mr-2 text-black dark:text-white " />
      }
    />
  )
}
