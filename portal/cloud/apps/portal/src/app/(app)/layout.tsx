import { MainLayout } from '@magickml/portal-layout-next/server'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <MainLayout classNames="p-2 lg:p-10 gap-y-10">{children}</MainLayout>
}
