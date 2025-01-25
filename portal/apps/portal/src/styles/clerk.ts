// import { type ClerkOptions, type Theme } from '@clerk/types'

type ClerkOptions = any

type Theme = any

import { buttonVariants, formInputStyles } from '@magickml/client-ui'

const commonText = 'text-ds-black dark:text-ds-white font-sans '

const commmonAltText =
  'text-ds-primary-p dark:text-ds-primary-m font-sans font-semibold'

const headerTitle =
  'text-ds-black dark:text-ds-white text-3xl font-montAlt font-bold uppercase'

const authTheme: Theme = {
  elements: {
    headerTitle: headerTitle,
    headerSubtitle: 'text-ds-neutral font-sans',
    card: 'bg-ds-card rounded',
    formButtonPrimary: buttonVariants({
      variant: 'portal-primary',
      size: 'sm',
      className: 'font-bold hover:bg-ds-primary font-sans',
    }),
    socialButtonsBlockButton: buttonVariants({
      variant: 'basic',
      size: 'sm',
      className: 'font-bold',
    }),
    socialButtonsIconButton: buttonVariants({
      variant: 'portal-neutral',
      size: 'sm',
      className: 'hover:bg-ds-primary',
    }),
    socialButtonsBlockButtonText: 'text-ds-white font-sans font-semibold',
    socialButtonsBlockButtonArrow: 'text-ds-primary',
    formHeaderSubtitle: 'text-ds-neutral font-sans',
    formHeader__error: 'text-ds-error font-sans',
    formFieldInput: formInputStyles,
    formFieldLabel: commonText + 'font-semibold',
    formFieldAction: commmonAltText,
    footerActionText: commonText,
    footerActionLink: commmonAltText,
    selectButton: formInputStyles,
    selectOptionsContainer: 'bg-ds-card rounded text-white',
    selectOptionsContainer__role: 'text-red-500 bg-red-500',
    logoBox: 'hidden',
    profileSectionContent__activeDevices: 'h-full',
    dividerText: 'text-ds-neutral',
    formHeaderTitle: commonText,
    identityPreviewText: commonText,
    formResendCodeLink: commmonAltText,
    headerBackIcon: 'text-ds-primary   font-sans',
    headerBackLink: 'text-ds-primary font-sans',
    alternativeMethodsBlockButton: buttonVariants({
      variant: 'portal-primary',
      size: 'sm',
      className: 'hover:bg-ds-primary',
    }),
    alternativeMethodsBlockButtonText: 'font-sans font-semibold',
    footerPagesLink__help: 'text-ds-neutral font-sans',
  },
}

export const clerkAppearance: ClerkOptions['appearance'] = {
  signIn: authTheme,
  signUp: authTheme,
  createOrganization: authTheme,
  userProfile: {
    elements: {
      rootBox: 'w-full h-full',
      card: 'w-full shadow-none !p-0 !m-0',
    },
  },
  // userProfile: {
  //   elements: {
  //     // ...authTheme.elements,
  //     rootBox: 'w-full h-full',
  //     card: 'w-full bg-ds-background shadow-none !p-0 !m-0',
  //     headerTitle,
  //     headerSubtitle:
  //       'text-ds-primary-p dark:text-ds-primary-m font-sans font-semibold',
  //     accordionTriggerButton:
  //       'text-ds-black dark:text-ds-white shadow-none  font-sans font-semibold',
  //     profileSectionPrimaryButton:
  //       'bg-ds-neutral text-ds-white font-sans font-semibold',
  //     navbarButton:
  //       'bg-ds-neutral active:bg-ds-primary data-[active=true]:bg-ds-primary mt-2 text-ds-black font-sans font-semibold shadow-none',
  //     navbarButtons__active: 'bg-ds-primary',
  //     badge: 'bg-ds-primary text-ds-black font-sans font-medium text-xs',
  //     profileSectionTitleText: commonText,
  //     profileSectionContent: commonText,
  //     // profileSectionContent__activeDevices: "h-40",
  //     // activeDeviceListItem: "focus:outline-none",
  //     // activeDeviceListItem__current: "outline outline-ds-primary",
  //     // accordionTriggerButton: "focus:outline-none focus:ring-0 focus:border-0",
  //   },
  // },
}
