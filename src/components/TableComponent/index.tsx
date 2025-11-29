import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx'
import type { TableComponentProps } from '@/components/TableComponent/types.ts'
import type { JSX } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { Trash2 } from 'lucide-react'
import { useTableComponent } from '@/components/TableComponent/useTableComponent.ts'
import { formatNumbers } from '@/utils/formatNumbers/formatNumbers.ts'
import { formatDate } from '@/utils/format-date'

function TableComponent({
  transactions,
  removeTransaction,
}: TableComponentProps): JSX.Element {
  const { colorForSum, locale } = useTableComponent()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{locale.description}</TableHead>
          {/*<TableHead>{locale.type}</TableHead>*/}
          <TableHead>{locale.date}</TableHead>
          <TableHead className="text-right">{locale.sum}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.length === 0 ? (
          <TableRow>
            <TableCell colSpan={3} className="text-center text-gray-500">
              {locale.noTransactions}
            </TableCell>
          </TableRow>
        ) : (
          transactions.map(transaction => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">
                {transaction.description}
              </TableCell>
              {/*<TableCell>
                {transaction.type === TransactionType.INCOME
                  ? locale.income
                  : locale.expense}
              </TableCell>*/}
              <TableCell>{formatDate(transaction.date)}</TableCell>
              <TableCell
                className={`text-right ${colorForSum(transaction.type)}`}
              >
                {formatNumbers(Number(transaction.sum))} ₴
              </TableCell>
              <TableCell>
                <Button
                  variant="link"
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => removeTransaction(transaction.id)}
                >
                  <Trash2 size={3} />
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

export default TableComponent
