export const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  return date.toLocaleDateString('ek-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
