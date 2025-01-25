import Image from 'next/image'
import { DocumentIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export interface LegalLayoutProps {
  children: React.ReactNode
  title: string
  pdfLink: string
  lastUpdated?: string
}

export const LegalLayout = ({
  children,
  title,
  lastUpdated,
  pdfLink,
}: LegalLayoutProps) => {
  return (
    <div className="h-screen px-6 py-10  lg:py-32 overflow-auto text-ds-black bg-ds-white lg:px-8 w-full">
      <main className="mx-auto leading-7 min-w-full">
        <div className="max-w-7xl mx-auto flex flex-col gap-y-6">
          <Link className="text-ds-primary link" href="/">
            Go back
          </Link>
          <Image
            src="/images/oneirocom-logo.png"
            width={300}
            height={300}
            alt="Oneirocom Logo"
            className="object-contain ml-auto"
          />
          <div className="mb-4">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-base font-semibold leading-7 text-ds-primary">
                <span className="underline">Last Updated</span>: {` `}
                <time
                  dateTime={new Date(lastUpdated).toISOString().split('T')[0]}
                >
                  {lastUpdated}
                </time>
              </p>
            )}
            <Link
              href={pdfLink}
              className="text-ds-black bg-ds-white border-ds-black outline-0 btn btn-sm hover:bg-ds-white"
            >
              <DocumentIcon className="w-5 h-5 mr-2" />
              View PDF
            </Link>
          </div>

          {children}
        </div>
      </main>
    </div>
  )
}
