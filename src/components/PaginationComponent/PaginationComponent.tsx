import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination.tsx'
import { PaginationProps } from '@/components/PaginationComponent/types.ts'
import { JSX } from 'react'
import { useLocales } from '@/context/LocalesContext'
import { Button } from '@/components/ui/button.tsx'

function PaginationComponent({
  handlePrevClick,
  handleNextClick,
  handleNumberClick,
  page,
  pageNumbers,
}: PaginationProps): JSX.Element {
  const { translations } = useLocales()

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <Button
            type="button"
            variant="ghost"
            className="cursor-pointer"
            onClick={handlePrevClick}
          >
            {translations.tracker.prev}
          </Button>
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
          <Button
            className="cursor-pointer"
            variant="ghost"
            onClick={handleNextClick}
          >
            {translations.tracker.next}
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationComponent
