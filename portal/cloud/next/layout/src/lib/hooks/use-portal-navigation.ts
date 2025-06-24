'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import {
  NavigationV2Item,
  baseNavigation,
  userNavigation,
  adminNavigation,
} from '../navigation/navigation-config'
import { Roles } from '@magickml/portal-config'

export const usePortalNavigation = () => {
  const { user, isSignedIn } = useUser()
  const [navigation, setNavigation] =
    useState<NavigationV2Item[]>(baseNavigation)

  useEffect(() => {
    if (isSignedIn) {
      const metadata = user.publicMetadata
      switch (metadata?.role) {
        case Roles.ADMIN:
          setNavigation([
            ...userNavigation,
            ...adminNavigation,
            ...baseNavigation,
          ])
          break
        case Roles.TESTER:
        case Roles.USER:
          setNavigation([...userNavigation, ...baseNavigation])
          break
        default:
          setNavigation([...baseNavigation])
          break
      }
    }
  }, [isSignedIn, user])

  return navigation
}
