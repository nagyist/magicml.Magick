'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselOptions,
  Button,
} from '@magickml/client-ui'
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useSession } from '@clerk/nextjs'

type Slide = {
  id: number
  title: string
  description: string
  buttonText: string
  imageUrl: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Discover Magick Templates',
    description:
      'Select from our expertly designed templates or embark on a creative journey starting from scratch. Explore and master our visual, node-based AI Development Environment to bring your unique AI vision to life.',
    buttonText: 'Create Agent',
    imageUrl: '/images/banners/magick-banner-1.png',
  },
  {
    id: 2,
    title: 'Craft Your Own BabyAGI',
    description:
      'Leverage our intuitive template to design and personalize your own BabyAGI. Observe its intelligent processing in action and enhance its capabilities to meet your desires!',
    buttonText: 'Create BabyAGI',
    imageUrl: '/images/banners/magick-banner-2.png',
  },
  {
    id: 3,
    title: 'Empowered Knowledge Bots',
    description:
      'Simply upload your documents and marvel as it masters the content. Pose your queries and experience its precision in delivering informed answers based on the knowledge it has absorbed.',
    buttonText: 'Create Knowledge Bot',
    imageUrl: '/images/banners/magick-banner-4.png',
  },
  {
    id: 5,
    title: 'Build a Thinking Agent',
    description:
      "Utilize our template to craft a unique 'Philosopher' Agent. It utilizes a chain of thought loop to think through philosophical problems using different forms of reasoning.",
    buttonText: 'Create Philosopher',
    imageUrl: '/images/banners/magick-banner-3.png',
  },
]

const options: CarouselOptions = {
  align: 'center',
  axis: 'x',
  loop: true,
}

const autoplayOptions: AutoplayOptionsType = {
  delay: 9000,
  rootNode: emblaRoot => emblaRoot.parentElement,
}

const plugins = [Autoplay(autoplayOptions)]

export function CarouselHero() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const router = useRouter()
  const { isSignedIn } = useSession()

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (isSignedIn) {
      router.push('/templates')
    } else {
      router.push('/sign-in')
    }
  }

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const paginate = (direction: 'prev' | 'next') => {
    if (!api) {
      return
    }

    direction === 'next' ? api.scrollNext() : api.scrollPrev()
  }
  return (
    <div className="flex flex-col w-full">
      <Carousel
        setApi={setApi}
        plugins={plugins}
        opts={options}
        orientation="horizontal"
        className="w-full mx-auto lg:border-b border-ds-primary-p dark:border-ds-primary-m relative"
      >
        <button
          onClick={() => paginate('prev')}
          className="top-1/2 left-3.5 z-20 transform -translate-y-1/2 hidden lg:block absolute"
        >
          <Arrow />
        </button>
        <button
          onClick={() => paginate('next')}
          className="top-1/2 right-3.5 z-20 transform -translate-y-1/2 rotate-180 hidden lg:block absolute"
        >
          <Arrow />
        </button>
        <CarouselContent className="h-64 lg:h-[448px] rounded-none">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="w-full h-full">
              <div className="relative h-full">
                {/* BG Image */}
                <Image
                  alt="magick-banner"
                  src={slide.imageUrl}
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                />
                {/* Overlay */}
                <div
                  className="w-full h-full absolute z-10
                bg-gradient-to-r from-black/90 via-black/75 to-transparent"
                />
                {/* Content */}
                <div className="lg:mt-4 lg:ml-14 flex flex-col gap-y-2 lg:gap-y-8 items-start justify-center p-6 z-30 absolute w-full">
                  <h3 className="text-ds-white text-base lg:text-[34px] max-w-2xs lg:max-w-lg lg:leading-8 font-bold font-montAlt">
                    {slide.title}
                  </h3>
                  <div className="text-ds-white text-xs lg:text-2xl font-medium max-w-2xs lg:max-w-lg font-sans lg:leading-8">
                    {slide.description}
                  </div>
                </div>
                {/* Button */}
                <div className="absolute bottom-2 lg:bottom-6 lg:left-20 z-30 w-full flex items-center justify-center lg:items-start lg:justify-start">
                  <Button
                    variant="portal-primary"
                    size="md"
                    className="lg:hidden text-base mt-2 font-bold w-[calc(100vw-3rem)]"
                    onClick={onButtonClick}
                  >
                    {slide.buttonText}
                  </Button>
                  <Button
                    variant="portal-primary"
                    size="lg"
                    className="hidden lg:flex mt-0 text-2xl font-bold w-96"
                    onClick={onButtonClick}
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Mobile Pagination */}
      <div className="flex justify-center gap-2 mt-4 lg:hidden">
        {Array.from(Array(count).keys()).map((_, index) => (
          <button key={index} onClick={() => api?.scrollTo(index)}>
            <Line
              className={clsx(
                current === index + 1 ? 'text-ds-primary' : 'text-ds-neutral'
              )}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

const Arrow = () => {
  return (
    <svg
      width="33"
      height="36"
      viewBox="0 0 33 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_7293_20271)">
        <path
          d="M26.8072 27.409L26.8072 20.8608L21.0962 16.9818L26.7982 13.1117L26.7982 6.59009C26.7982 5.66796 25.7821 5.08276 24.9728 5.55269L6.69193 15.9622C5.88264 16.4232 5.88264 17.5848 6.69193 18.0458L24.9728 28.4464C25.7911 28.9164 26.8072 28.3312 26.8072 27.409Z"
          fill="#363D44"
        />
        <path
          d="M26.8072 27.409L26.8072 20.8608L21.0962 16.9818L26.7982 13.1117L26.7982 6.59009C26.7982 5.66796 25.7821 5.08276 24.9728 5.55269L6.69193 15.9622C5.88264 16.4232 5.88264 17.5848 6.69193 18.0458L24.9728 28.4464C25.7911 28.9164 26.8072 28.3312 26.8072 27.409Z"
          fill="white"
          fillOpacity="0.98"
        />
        <path
          d="M27.0881 20.4472L27.3072 20.596L27.3072 20.8608L27.3072 27.409C27.3072 28.725 25.8675 29.5363 24.7244 28.8804C24.7242 28.8803 24.724 28.8801 24.7238 28.88L6.44468 18.4804L6.44442 18.4803C5.29848 17.8274 5.29848 16.1806 6.44442 15.5277L6.44452 15.5277L24.7218 5.1203C24.7224 5.11993 24.723 5.11956 24.7237 5.11919C25.8619 4.46008 27.2982 5.27857 27.2982 6.59009L27.2982 13.1117L27.2982 13.3766L27.079 13.5254L21.9863 16.982L27.0881 20.4472Z"
          stroke="#1BC5EB"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_7293_20271"
          x="0.0849609"
          y="0.135742"
          width="32.7227"
          height="35.2266"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.75" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7293_20271"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_7293_20271"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

type LineProps = {
  className?: string
}

const Line: React.FC<LineProps> = ({ className }) => {
  return (
    <svg
      width="42"
      height="4"
      viewBox="0 0 42 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        id="Line 41 (Stroke)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.597656 1.61914C0.597656 0.790713 1.26923 0.119141 2.09766 0.119141L39.5488 0.119141C40.3773 0.119141 41.0488 0.790713 41.0488 1.61914C41.0488 2.44757 40.3773 3.11914 39.5488 3.11914L2.09766 3.11914C1.26923 3.11914 0.597656 2.44757 0.597656 1.61914Z"
        fill="currentColor"
      />
    </svg>
  )
}
