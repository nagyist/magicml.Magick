import { FiSkipBack, FiSkipForward } from 'react-icons/fi'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'
import { useReactTable } from '@tanstack/react-table'

interface TablePaginationProps {
  table: ReturnType<typeof useReactTable>
}

function TablePagination({ table }: TablePaginationProps) {
  return (
    <div className="flex items-center gap-2 my-4 ml-4">
      <button
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
        className={`border rounded p-1 ${
          !table.getCanPreviousPage() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <FiSkipBack className="text-lg" />
      </button>
      <button
        className={`border rounded p-1 ${
          !table.getCanPreviousPage() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <MdOutlineNavigateBefore className="text-lg" />
      </button>
      <button
        className={`border rounded p-1 ${
          !table.getCanNextPage() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <MdOutlineNavigateNext className="text-lg" />
      </button>
      <button
        className={`border rounded p-1 ${
          !table.getCanNextPage() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        <FiSkipForward className="text-lg" />
      </button>
      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </span>
    </div>
  )
}

export default TablePagination
