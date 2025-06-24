import { CgProfile } from 'react-icons/cg'
import {
  Cog6ToothIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import DropDown from './DropDown'
import { dropDownMenuItemsType, navProps } from './types'
import { Switch } from '@magickml/client-ui'
import { LoginIcon, DarkIcon, LightIcon, DashboardIcon } from '@magickml/icons'
import { useClerk } from '@clerk/nextjs'

export const DropDownUserMenu = () => {
  const { theme, setTheme } = useTheme()
  const { signOut, session } = useClerk()

  const router = useRouter()
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    if (prefersDarkMode?.matches && theme !== 'light') setTheme('dark')
    if (!prefersDarkMode?.matches && theme !== 'dark') setTheme('light')
  }, [theme, setTheme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleNavigation = async (args: navProps) => {
    router.push(args.target)
  }

  const dropDownUserMenuItems: dropDownMenuItemsType[] = [
    {
      id: 'logIn',
      children: (
        <div
          className="flex w-full"
          onClick={
            session?.status === 'active'
              ? () => signOut(() => router.push('/'))
              : () => router.push('/sign-in')
          }
        >
          {session?.status === 'active' ? (
            <>
              <ArrowRightOnRectangleIcon className="w-6 h-6 mr-2" />
              <span>Log out</span>
            </>
          ) : (
            <>
              <LoginIcon className="w-6 h-6 mr-2" />
              <span>Log In</span>
            </>
          )}
        </div>
      ),
      enabled: true,
      type: 'button',
      separator: true,
    },
    {
      id: 'account',
      enabled: session?.status === 'active' ? true : false,
      children: (
        <>
          <UserCircleIcon className="w-6 h-6 mr-2" />
          <span>Account</span>
        </>
      ),
      type: 'link',
      href: '/account',
      navigate: handleNavigation,
      separator: true,
    },
    {
      id: 'dashboard',
      enabled: false,
      children: (
        <>
          <DashboardIcon className="w-6 h-6 mr-2" />
          <span>My Dashboard</span>
        </>
      ),
      type: 'link',
      href: '/dashboard',
      navigate: handleNavigation,
      separator: true,
    },
    {
      id: 'theme',
      children: (
        <>
          <DarkIcon
            className={clsx(
              'w-6 h-6 mr-2',
              theme === 'dark' ? '' : 'text-[#aeaeae]'
            )}
            onClick={handleThemeSwitch}
          />
          <Switch
            checked={theme === 'dark' ? false : true}
            className="mr-2"
            size={'small'}
            secondary={'bg-secondary'}
            secondaryThumb={'bg-secondary'}
            translateX={'small'}
            onClick={handleThemeSwitch}
          />
          <LightIcon
            className={clsx(
              'w-6 h-6 mr-2',
              theme === 'dark' ? 'text-[#3D454A]' : ''
            )}
            onClick={handleThemeSwitch}
          />
          <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
        </>
      ),
      enabled: true,
      type: 'button',
      separator: session?.status === 'active' ? true : false,
    },
    {
      id: 'settings',
      enabled: session?.status === 'active' ? true : false,
      children: (
        <>
          <Cog6ToothIcon className="w-6 h-6 mr-2" />
          <span>Settings</span>
        </>
      ),
      type: 'link',
      href: '/settings',
      navigate: handleNavigation,
    },
  ]

  return (
    <DropDown
      dropDownMenuItems={dropDownUserMenuItems}
      trigger={<CgProfile className="text-[30px] text-black dark:text-white" />}
    />
  )
}
