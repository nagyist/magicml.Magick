import { LazyMotion, domAnimation, m } from 'framer-motion'
import { useRouter } from 'next/router'

type Props = {
  children: React.ReactNode
  className?: string
  name?: string
  variants: any
  isTransitioning?: boolean
  setIsTransitioning?: (value: boolean) => void
}

export const Transition = ({
  children,
  className,
  name,
  variants,
  isTransitioning,
  setIsTransitioning,
}: Props) => {
  const router = useRouter()
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        onAnimationStart={
          setIsTransitioning && (() => setIsTransitioning(true))
        }
        onAnimationComplete={
          setIsTransitioning && (() => setIsTransitioning(false))
        }
        className={className}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        key={router.asPath}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
