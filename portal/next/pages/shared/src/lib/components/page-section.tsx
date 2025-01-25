type PageSectionProps = {
  title: string
  loading?: boolean
}

export const PageSection = ({
  title,
  loading,
  children,
}: React.PropsWithChildren<PageSectionProps>) => {
  return (
    <section className="flex flex-col gap-y-4 w-full">
      <h3 className="font-sans text-2xl font-normal inline-flex gap-x-1">
        {title}
        {loading && (
          <span className="loading loading-spinner text-ds-black dark:text-ds-white" />
        )}
      </h3>

      <div className="relative flex flex-wrap justify-center pb-10 gap-x-4 gap-y-4 lg:justify-start">
        {children}
      </div>
    </section>
  )
}
