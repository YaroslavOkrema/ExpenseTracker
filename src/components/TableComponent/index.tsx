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
import { useTableComponent } from '@/components/TableComponent/useTableComponent.ts'
import { formatNumbers } from '@/utils/formatNumbers/formatNumbers.ts'

function TableComponent({
  transactions,
  removeTransaction,
}: TableComponentProps): JSX.Element {
  const { colorForSum } = useTableComponent()

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Опис</TableHead>
          <TableHead>Тип</TableHead>
          <TableHead className="text-right">Сума</TableHead>
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
