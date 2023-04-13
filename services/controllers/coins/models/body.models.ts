export interface IBodyGetMarket {
  vs_currency: string
  order?: string
  per_page: number
  page: number
  sparkline?: boolean
  price_change_percentage: string
}
