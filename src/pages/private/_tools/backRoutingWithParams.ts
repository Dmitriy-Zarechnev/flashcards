import { PATH } from '@/shared'

export function getBackToDeckRoutingParams() {
  const currentPage = sessionStorage.getItem('currentPage')
  const itemsPerPage = sessionStorage.getItem('itemsPerPage')

  return PATH.DECKSPAGE + `?currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`
}
