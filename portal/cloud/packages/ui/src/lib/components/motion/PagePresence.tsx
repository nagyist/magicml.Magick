import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
type Props = {
  children?: React.ReactNode
}

export const PagePresence = ({ children }: Props) => {
  const router = useRouter()
  return (
    <AnimatePresence
      initial={true}
      onExitComplete={() => window.scrollTo(0, 0)}
      custom={router.route}
    >
      {children}
    </AnimatePresence>
  )
}
