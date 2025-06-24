import { ColumnDef } from '@tanstack/react-table'
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import {
  Button,
  buttonVariants,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@magickml/client-ui'

import { type Transaction } from '@magickml/portal-db'

const ButtonHeader = ({ column, name }: { column: any; name: string }) => {
  return (
    <div
      className={buttonVariants({
        variant: 'ghost',
      })}
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {name}
      <CaretSortIcon className="ml-2 h-4 w-4" />
    </div>
  )
}

export const transactionsColumns: ColumnDef<Transaction>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'cost',
    header: ({ column }) => <ButtonHeader column={column} name="Cost" />,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'success',
    header: 'Success',
    cell: info => (info.getValue() ? 'Yes' : 'No'),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'source',
    header: ({ column }) => <ButtonHeader column={column} name="Source" />,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => <ButtonHeader column={column} name="Created At" />,
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: 'actions',
    cell: ({ row }) => <ActionsCell transaction={row.original} />,
  },
]

const ActionsCell = ({ transaction }: { transaction: Transaction }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Copy Data</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
