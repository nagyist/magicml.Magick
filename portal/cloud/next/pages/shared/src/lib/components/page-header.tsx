export type PageHeaderProps = {
  title: string
  description?: string
  loading?: boolean
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  loading,
}) => {
  return (
    <div className="gap-y-4 flex flex-col w-full">
      <h1 className="text-3xl font-semibold font-sans inline-flex gap-x-1">
        {title}
        {loading && (
          <span className="loading loading-spinner text-ds-primary" />
        )}
      </h1>
      {description && (
        <p className="text-base font-normal font-sans">{description}</p>
      )}
    </div>
  )
}
