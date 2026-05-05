import { useMemo, useState } from 'react'
import * as React from 'react'
import {
    DEFAULT_PAGE,
    ITEMS_PER_PAGE,
} from '@/pages/CardPageComponent/constants'
import { getVisiblePageNumbers } from '@/components/PaginationComponent/helpers'

export const usePagination = (totalItems: number) => {
    const [page, setPage] = useState<number>(DEFAULT_PAGE)

    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)

    const startIndex = (page - DEFAULT_PAGE) * ITEMS_PER_PAGE

    const handlePageChange = (newPage: number): void => {
        if (newPage >= DEFAULT_PAGE && newPage <= totalPages) {
            setPage(newPage)
        }
    }

    const handlePrevClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ): void => {
        event.preventDefault()
        handlePageChange(page - DEFAULT_PAGE)
    }

    const handleNextClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ): void => {
        event.preventDefault()
        handlePageChange(page + DEFAULT_PAGE)
    }

    const handleNumberClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        number: number,
    ): void => {
        event.preventDefault()
        handlePageChange(number)
    }

    const pageNumbers = useMemo(
        () => getVisiblePageNumbers(page, totalPages),
        [page, totalPages],
    )

    return {
        page,
        setPage,
        totalPages,
        startIndex,
        handlePageChange,
        handlePrevClick,
        handleNextClick,
        handleNumberClick,
        pageNumbers,
    }
}
