'use client'

import { api } from '@magickml/portal-server-provider'
import Cookies from 'js-cookie'
import SheetPopover from './sheet-popover'
import Link from 'next/link'
import { AgentIcon, LightIcon, DarkIcon, LoginIcon } from '@magickml/icons'
import {
  Switch,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@magickml/client-ui'
import { CgProfile } from 'react-icons/cg'
import { useRouter } from 'next/navigation'
import {
  Cog6ToothIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import clsx from 'clsx'
import { useClerk, useUser } from '@clerk/nextjs'
import { MP } from '../mp-bar'

export const UserMenu = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const handleClose = () => {
    setPopoverOpen(false)
    setSheetOpen(false)
  }
  const { theme, setTheme } = useTheme()
  const { signOut } = useClerk()
  const { isSignedIn, user } = useUser()
  const utils = api.useUtils()

  const router = useRouter()

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleLogout = async () => {
    signOut().then(() => {
      Cookies.remove('workspace')
      utils.invalidate()
      router.push('/templates')
      toast.success('See you soon!')
    })
  }

  const dropDownStyles =
    'flex items-center gap-2 px-6 border-t border-t-black dark:border-t-[#e9edf1] w-full pt-4'

  const dropDownMenuItems = [
    {
      enabled: isSignedIn,
      children: (
        <Link
          id="your-account"
          key="your-account"
          href="/account"
          className={dropDownStyles}
          onClick={handleClose}
        >
          <UserCircleIcon className="w-6 h-6 mr-2" />
          <span className="link-hover">Account</span>
        </Link>
      ),
    },
    {
      enabled: isSignedIn,
      children: (
        <Link
          href="/billing"
          id="usermenu-settings"
          key="usermenu-settings"
          className={dropDownStyles}
          onClick={handleClose}
        >
          <Cog6ToothIcon className="w-6 h-6 mr-2" />
          <span className="link-hover">Billing</span>
        </Link>
      ),
    },
    {
      enabled: isSignedIn,
      children: (
        <Link
          key="your-agents"
          id="your-agents"
          href="/"
          className={dropDownStyles}
          onClick={handleClose}
        >
          <AgentIcon className="w-6 h-6 mr-2" />
          <span className="link-hover">My Creations</span>
        </Link>
      ),
    },
    {
      children: (
        <button
          id="theme-switcher"
          key="theme-switcher"
          className={
            isSignedIn ? dropDownStyles : 'flex items-center gap-2 px-6 w-full'
          }
        >
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
        </button>
      ),
      enabled: true,
    },
    {
      id: 'logIn',
      enabled: true,
      children: (
        <button
          key="login-logout"
          onClick={() => {
            isSignedIn ? handleLogout() : router.push('/sign-in')
            handleClose()
          }}
          className={dropDownStyles}
        >
          {isSignedIn ? (
            <>
              <ArrowRightOnRectangleIcon className="w-6 h-6 mr-2" />
              <span>Log out</span>
            </>
          ) : (
            <>
              <LoginIcon className="w-6 h-6 mr-2" />
              <span className="link-hover">Log in</span>
            </>
          )}
        </button>
      ),
    },
  ]

  const renderItems = () => {
    return dropDownMenuItems.map(
      (item, index, array) => item.enabled && item.children
    )
  }

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    if (prefersDarkMode?.matches && theme !== 'light') setTheme('dark')
    if (!prefersDarkMode?.matches && theme !== 'dark') setTheme('light')
  }, [theme, setTheme])

  return (
    <>
      <SheetPopover
        sheetOpen={sheetOpen}
        setSheetOpen={setSheetOpen}
        popoverOpen={popoverOpen}
        setPopoverOpen={setPopoverOpen}
        triggerIcon={
          isSignedIn && user.hasImage ? (
            <UserAvatar
              className="border-ds-secondary h-6 w-6 lg:w-8 lg:h-8 color-transition"
              imagePath={user.imageUrl}
              username={user.username}
            />
          ) : (
            <CgProfile
              className="text-black dark:text-[#e9edf1]  h-6 w-6 lg:w-8 lg:h-8 color-transition"
              width={32}
              height={32}
              color="currentColor"
            />
          )
        }
      >
        {isSignedIn && (
          <div className="flex flex-col items-center justify-center w-full">
            <UserAvatar
              className="w-32 h-32"
              imagePath={user.imageUrl}
              username={user.username}
            />
            <h2 className="pt-4 text-base font-bold text-center">
              {user.username}
            </h2>
            <MP />
          </div>
        )}

        {renderItems()}
      </SheetPopover>
    </>
  )
}

const UserAvatar = ({
  imagePath,
  username,
  className,
}: {
  imagePath: string
  username: string | null
  className?: string
}) => {
  return (
    <Avatar className={clsx('self-center border border-ds-primary', className)}>
      <AvatarImage
        className="object-cover w-full h-full rounded-full"
        src={imagePath}
        alt={username ?? 'User'}
      />
      <AvatarFallback>{username?.charAt(0)}</AvatarFallback>
    </Avatar>
  )
}
