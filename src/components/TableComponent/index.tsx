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

function TableComponent({ transactions }: TableComponentProps): JSX.Element {
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
          transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {transaction.description}
              </TableCell>
              <TableCell>
                {transaction.type === 'income' ? 'Дохід' : 'Витрата'}
              </TableCell>
              <TableCell className="text-right">
                {transaction.sum} грн
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}

export default TableComponent
