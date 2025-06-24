'use client'

import { useUser } from '@clerk/nextjs'
import {
  Progress,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@magickml/client-ui'
import Image from 'next/legacy/image'
import { FC } from 'react'
import { api } from '@magickml/portal-server-provider'
import { InfoIcon } from '@magickml/icons'

/**
 * The SideDrawerMP component represents a section in a side drawer that
 * displays MP (Magick Points) information.
 *
 * @returns {JSX.Element} The rendered JSX element.
 */
export const MP: FC = () => {
  const user = useUser()

  const subscription = user.user?.publicMetadata.subscription as
    | string
    | undefined

  const { data: budget } = api.billing.getBudget.useQuery()

  const isWizard = subscription?.toUpperCase() === 'WIZARD'

  const getProgressValue = () => {
    const maxMP = isWizard ? 1000 : 200 // Maximum MP based on subscription
    const currentMP =
      Number((budget?.promotional_balance || 0).toFixed(2) || 0) * 100 // Current MP
    const percentage = (currentMP / maxMP) * 100 // Calculate percentage of the max MP

    if (isNaN(percentage) || percentage < 0) return 0 // Ensure value is not NaN or negative
    return percentage > 100 ? 100 : percentage // Cap the value at 100%
  }

  const getWalletBalanceDisplay = () => {
    // Check if the user is currently a wizard
    if (isWizard) {
      // If they have a balance, display it; otherwise, show zero
      return `$${Number(budget?.balance || 0).toFixed(2)}`
    } else {
      // For non-wizard users, show the balance if it exists and is greater than 0,
      // otherwise show 'N/A'
      return Number(budget?.balance || 0) > 0
        ? `$${Number(budget?.balance || 0).toFixed(2)}`
        : 'N/A'
    }
  }

  return (
    <div className="w-full h-full flex flex-col px-5 box-border items-start justify-start gap-[5px]">
      <div className="self-stretch flex flex-row py-[5px] items-center justify-between">
        <div className="flex flex-row items-center gap-[5px]">
          <Image
            className="relative w-[15px] h-[15px] overflow-hidden flex-shrink-0 object-cover"
            alt="Magic Points Icon"
            src="/images/icons/mp.svg"
            width={15}
            height={15}
          />
          <div className="text-md font-medium font-montAlt">
            Magick Power (MP)
          </div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="inline-flex items-center justify-center font-medium cursor-pointer">
                <InfoIcon />
              </div>
            </TooltipTrigger>
            <TooltipContent className="">
              <h3 className="text-lg font-semibold prose-h3:prose-sm">
                Magick Power (MP)
              </h3>
              <p className="prose-p:prose-sm py-1">
                Magick Power (MP) is your monthly balance from your
                subscription.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="self-stretch relative ">
        <div className="-top-1 -left-1 absolute rounded-[20px] w-full h-5" />

        <Progress value={getProgressValue()} />

        {/* MP Info container */}
        <div className="relative w-full text-center mt-2">
          <p className="text-ds-secondary-p dark:text-ds-secondary-m font-normal text-xs">
            {`${Number(budget?.promotional_balance.toFixed(2) || 0) * 100} / ${
              isWizard ? '1000' : '200 Free Trial'
            } MP`}
          </p>
        </div>
      </div>
      <div className="relative w-full pt-1">
        <p
          className={`text-ds-secondary-p dark:text-ds-secondary-m text-lg font-medium ${
            isWizard ? 'opacity-1' : 'opacity-25'
          }`}
        >
          Wallet Balance: {getWalletBalanceDisplay()}
        </p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="absolute inline-flex items-center justify-center font-medium cursor-pointer right-0 top-1/2 transform -translate-y-1/2">
                <InfoIcon
                  className={` ${isWizard ? 'opacity-1' : 'opacity-25'}`}
                />
              </div>
            </TooltipTrigger>

            <TooltipContent className="">
              <h3 className="text-lg font-semibold prose-h3:prose-sm">
                Wallet
              </h3>
              <p className="prose-p:prose-sm py-1">
                Money available for compute power. Accessible with a Wizard
                subscription.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
