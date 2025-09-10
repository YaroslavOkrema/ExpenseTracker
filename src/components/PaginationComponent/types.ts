export type PaginationProps = {
  page: number
  pageNumbers: number[]
  handlePrevClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
  handleNextClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
  handleNumberClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    number: number,
  ) => void
}
