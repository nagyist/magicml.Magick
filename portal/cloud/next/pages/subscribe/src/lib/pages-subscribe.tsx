'use client'

import {
  Badge,
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@magickml/client-ui'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { api } from '@magickml/portal-server-provider'
import { useUser } from '@clerk/nextjs'
import { CheckoutKey, SubscribePageProps } from '@magickml/portal-types'
import axios from 'axios'
import clsx from 'clsx'

enum BADGE {
  BEST_VALUE = 'BEST VALUE',
  ACTIVE = 'ACTIVE',
}

type SubscriptionTooltip = {
  title: string
  content: string
}

type SubscriptionOption = {
  id: string
  title: string
  description: string
  price?: string
  pricePeriod?: 'month' | 'year' | 'user'
  features: string[]
  imageUrl: string
  isBestValue?: boolean
  subscriptionTooltip: SubscriptionTooltip
  key: CheckoutKey['name']
}

const subscriptionOptions: SubscriptionOption[] = [
  {
    id: 'apprentice',
    title: 'Apprentice',
    description: 'basic package',
    price: '9.99',
    pricePeriod: 'month',
    features: ['Bring your own API keys'],
    imageUrl: '/images/subscriptions/apprentice.png',
    subscriptionTooltip: {
      title: 'Apprentice Subscription Package',
      content:
        'Opt for a hands-on approach with our Basic Package, where you bring your own API keys to access Large Language Models (LLMs). Ideal for users who prefer managing their compute costs independently, this package offers you the flexibility to use your existing API keys while utilizing our development environment.',
    },
    key: 'APPRENTICE',
  },
  {
    id: 'wizard',
    title: 'Wizard',
    description: 'standard package',
    price: '24.99',
    pricePeriod: 'month',
    features: [
      'Access all AI providers',
      '1000 MP (compute credits) included monthly',
    ],
    imageUrl: '/images/subscriptions/wizard.png',
    isBestValue: true,
    subscriptionTooltip: {
      title: 'Wizard Subscription Package',
      content:
        'Enjoy seamless access to all major Large Language Models (LLMs) without needing separate API keys. We cover the compute costs and provide a single, consolidated bill for convenience. This package allows easy comparison of different LLMs with a nominal 20% markup for the unified access.',
    },
    key: 'WIZARD',
  },
  {
    id: 'spellcaster-guild',
    title: 'Spellcaster Guild',
    description: 'enterprise package',
    features: ['Custom Subscription Solutions'],
    imageUrl: '/images/subscriptions/spellcaster-guild.png',
    subscriptionTooltip: {
      title: 'Spellcaster Guild Subscription',
      content:
        "For a subscription tailored to your organization's unique needs, please reach out to us. Remember, the more information you provide, the better we can tailor our solutions to fit your needs.",
    },
    key: 'GUILD',
  },
]

export const SubscribePage = (props: SubscribePageProps) => {
  const router = useRouter()
  const { user, isSignedIn } = useUser()
  const subscription = user?.publicMetadata.subscription as string | undefined
  const isWizard = subscription?.toUpperCase() === 'WIZARD'
  const isApprentice = subscription?.toUpperCase() === 'APPRENTICE'
  const { mutateAsync: createCheckout } =
    api.billing.createCheckout.useMutation({
      onSuccess: data => {
        typeof data.checkoutSession.url === 'string'
          ? router.push(data.checkoutSession.url)
          : toast.error('Something went wrong')
      },
      onError: error => {
        toast.error(error.message)
      },
    })

  const createPortal = async () => {
    try {
      const response = await axios.get('/api/billing/portal')
      const portalUrl = response.data.url
      if (portalUrl) {
        window.location.href = portalUrl
      } else {
        throw new Error('No portal URL returned')
      }
    } catch (error) {
      console.error(error)
      toast.error('Error accessing billing portal')
    }
  }

  const handleCheckout = async ({
    price,
    name,
  }: {
    price: string
    name: string
  }) => {
    if (!isSignedIn) {
      router.push('/sign-in')
      return
    }
    if (isWizard || isApprentice) {
      await createPortal()
      return
    }
    try {
      await createCheckout({ price, name })
    } catch (error: any) {
      toast.error(error?.message || 'Error processing checkout')
    }
  }

  // const isBestOrActive = (option: SubscriptionOption) =>
  //   option.isBestValue || option.key === subscription?.toUpperCase()

  const isBestOrActive = (option: SubscriptionOption) => {
    if (!isWizard && !isApprentice) {
      if (option.isBestValue) {
        return BADGE.BEST_VALUE
      }
      return false
    }

    if (option.key === subscription?.toUpperCase()) {
      return BADGE.ACTIVE
    }
    return false
  }

  return (
    <div className="mx-4 lg:mx-20 font-sans text-ds-dark-3 dark:text-ds-light-1">
      {/* Header */}
      <div className="text-left lg:text-center mx-auto max-w-7xl pb-4 lg:pb-10 pt-0 sm:pt-10 lg:px-8">
        <div className="mx-auto max-w-2xl hidden lg:block">
          <p className="mt-2 font-montAlt font-bold tracking-tight text-2xl md:text-4xl">
            Become a Magick Maker
          </p>
        </div>
        <p className="mt-4 text-base font-medium lg:text-xl">
          {`Access the most robust and powerful AI Development Environment, as
            well as it's ever growing toolkit and features.`}
        </p>
        <h2 className="mt-4 lg:hidden font-montAlt text-2xl">
          Select a Package:
        </h2>
      </div>

      {/* Main */}
      <div
        className="mx-auto max-w-5xl lg:mt-10 lg:gap-y-0 
        grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-0"
      >
        {subscriptionOptions.map(option => (
          <div
            key={option.id}
            className={clsx(
              option.key === subscription?.toUpperCase() &&
                '!border-ds-primary',
              'max-w-[288px] w-full mx-auto flex flex-col p-6 rounded-lg shadow-lg relative bg-ds-card border border-ds-secondary-p dark:border-ds-secondary-m'
            )}
          >
            {isBestOrActive(option) && (
              <Badge
                className="w-28 h-9 inline-flex justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                text-center bg-ds-primary-m text-black text-sm font-normal font-sans"
              >
                {isBestOrActive(option)}
              </Badge>
            )}
            <Image
              className="h-24 w-24 self-center rounded-lg border border-ds-secondary-p dark:border-ds-secondary-m"
              src={option.imageUrl}
              alt=""
              width={96}
              height={96}
            />
            <h3 className="text-2xl font-semibold mt-1 self-center">
              {option.title}
            </h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-flex items-center justify-center gap-x-1">
                    <p className="mt-1 ">{option.description}</p>
                    <InfoIcon />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="">
                  <h3 className="text-lg font-semibold prose-h3:prose-sm">
                    {option.subscriptionTooltip.title}
                  </h3>
                  <p className="prose-p:prose-sm">
                    {option.subscriptionTooltip.content}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Features */}
            <ul className="mt-6 space-y-4 list-disc text-sm">
              {option.features.map(feature => (
                <li className="ml-4" key={feature}>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="grow" />

            {/* Price */}
            <p className="mt-4 flex items-center text-4xl font-semibold tracking-tight pb-4">
              {option?.price && `$${option.price}`}

              {option.pricePeriod && (
                <span className="ml-1 text-sm font-medium text-gray-500">
                  per
                  <br />
                  {option.pricePeriod}
                </span>
              )}
            </p>

            <Button
              variant="portal-primary"
              onClick={() =>
                handleCheckout({
                  price: props[option.key as keyof SubscribePageProps].price,
                  name: props[option.key as keyof SubscribePageProps].name,
                })
              }
            >
              {option.price ? 'Subscribe' : 'Reach Out'}
            </Button>
          </div>
        ))}
      </div>

      {/* Skip Link */}
      <div className="w-full inline-flex justify-center">
        <Link
          href="/"
          className="mx-auto  mt-14 pb-10 lg:pb-0 text-ds-primary-cta font-medium text-lg"
        >
          Skip for now
        </Link>
      </div>
    </div>
  )
}

const InfoIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="info">
        <path
          id="Vector"
          d="M11.6982 7.5H13.6982V9.5H11.6982V7.5ZM11.6982 11.5H13.6982V17.5H11.6982V11.5ZM12.6982 2.5C7.17824 2.5 2.69824 6.98 2.69824 12.5C2.69824 18.02 7.17824 22.5 12.6982 22.5C18.2182 22.5 22.6982 18.02 22.6982 12.5C22.6982 6.98 18.2182 2.5 12.6982 2.5ZM12.6982 20.5C8.28824 20.5 4.69824 16.91 4.69824 12.5C4.69824 8.09 8.28824 4.5 12.6982 4.5C17.1082 4.5 20.6982 8.09 20.6982 12.5C20.6982 16.91 17.1082 20.5 12.6982 20.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
