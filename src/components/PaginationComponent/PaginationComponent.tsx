import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.tsx'
import { PaginationProps } from '@/components/PaginationComponent/types.ts'

function PaginationComponent({
  handlePrevClick,
  handleNextClick,
  handleNumberClick,
  page,
  pageNumbers,
}: PaginationProps) {
  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevClick} />
        </PaginationItem>
        {pageNumbers.map(num => (
          <PaginationItem key={num}>
            <PaginationLink
              isActive={page === num}
              onClick={event => handleNumberClick(event, num)}
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={handleNextClick} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationComponent
