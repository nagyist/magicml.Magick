'use client'

import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

type CookieBannerProps = {
  showBanner: boolean
  acceptCookies: () => void
  declineCookies: () => void
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  showBanner,
  acceptCookies,
  declineCookies,
}) => {
  return (
    <div
      aria-live="assertive"
      className="fixed inset-x-0 bottom-0 z-50 flex items-end px-4 py-6 pointer-events-none sm:items-start sm:p-6"
    >
      <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
        <Transition
          show={showBanner}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="z-50 w-full max-w-sm p-4 rounded-lg shadow-lg pointer-events-auto bg-[#262730] ring-1 ring-[#101112]">
            <div className="flex items-start">
              <div className="flex-1 w-0 ml-3">
                <p className="text-sm font-medium text-white">
                  We use tracking cookies to understand how you use the product
                  and help us improve it. Please accept cookies to help us
                  improve.
                </p>
                <div className="flex justify-between mx-4 mt-4">
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 ease-in-out bg-transparent rounded-md shadow-sm text-secondary-lightest ring-1 ring-inset ring-gray-300 hover:bg-secondary-highlight/20"
                    onClick={declineCookies}
                  >
                    Decline Cookies
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-3 py-2 text-sm font-semibold text-black transition-colors duration-200 ease-in-out rounded-md shadow-sm disabled:opacity-25 dark:text-white hover:text-white bg-secondary-highlight hover:bg-secondary-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent"
                    onClick={acceptCookies}
                  >
                    Accept Cookies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}
