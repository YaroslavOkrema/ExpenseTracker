import { MAX_VISIBLE_PAGES } from '@/components/PaginationComponent/constants.ts'

export function getVisiblePageNumbers(
  page: number,
  totalPages: number,
): number[] {
  if (totalPages <= MAX_VISIBLE_PAGES) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const half = Math.floor(MAX_VISIBLE_PAGES / 2)

  let start = page - half
  let end = page + half

  if (start < 1) {
    start = 1
    end = MAX_VISIBLE_PAGES
  }

  if (end > totalPages) {
    end = totalPages
    start = totalPages - MAX_VISIBLE_PAGES + 1
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}
