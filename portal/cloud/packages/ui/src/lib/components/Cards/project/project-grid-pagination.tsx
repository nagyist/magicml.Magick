type ProjectGridPagnitionProps = {
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
}

export const ProjectGridPagination: React.FC<ProjectGridPagnitionProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const renderPaginationButton = (
    label: string,
    action: any,
    isDisabled: boolean
  ) => (
    <button
      onClick={action}
      disabled={isDisabled}
      className="self-stretch flex flex-col disabled:opacity-50 disabled:pointer-events-none items-start justify-start gap-2 text-left font-normal px-5 active:scale-95 hover:scale-[1.02] transform transition-all duration-200 ease-in-out"
    >
      <div className="self-stretch rounded-lg border-2  bg-white dark:bg-transparent border-secondary-highlight dark:border-[#3c3f41] color-transition flex flex-row items-center py-2.5 px-3.5 justify-center gap-[10px]">
        <div className="text-black font-berkley-mono dark:text-white color-transition">
          {label}
        </div>
      </div>
    </button>
  )

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="inline-flex mt-2">
        {renderPaginationButton(
          'Prev',
          () => setCurrentPage(currentPage - 1),
          currentPage === 1
        )}
        {renderPaginationButton(
          'Next',
          () => setCurrentPage(currentPage + 1),
          currentPage >= totalPages
        )}
      </div>
    </div>
  )
}
