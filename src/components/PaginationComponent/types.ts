export type PaginationProps = {
  page: number
  pageNumbers: number[]
  handlePrevClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleNextClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleNumberClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    number: number,
  ) => void
}
