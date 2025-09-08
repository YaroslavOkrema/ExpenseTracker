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
import { TransactionType } from '@/types/enums.ts'
import { Button } from '@/components/ui/button.tsx'
import { Trash2 } from 'lucide-react'

function TableComponent({
  transactions,
  removeTransaction,
}: TableComponentProps): JSX.Element {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Опис</TableHead>
          <TableHead>Тип</TableHead>
          <TableHead className="text-left">Сума</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.length === 0 ? (
          <TableRow>
            <TableCell colSpan={3} className="text-center text-gray-500">
              Немає транзакцій
            </TableCell>
          </TableRow>
        ) : (
          transactions.map(transaction => (
            <TableRow key={transaction.description}>
              <TableCell className="font-medium">
                {transaction.description}
              </TableCell>
              <TableCell>
                {transaction.type === TransactionType.INCOME
                  ? 'Дохід'
                  : 'Витрата'}
              </TableCell>
              <TableCell className="text-right">
                {transaction.sum} грн
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
