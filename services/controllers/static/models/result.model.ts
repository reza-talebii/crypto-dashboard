export interface IProvince {
  id: number
  name: string
  value: string
}

export interface ICity {
  id: number
  name: string
  value: string
  province_id: number
}

export interface IAssets {
  id: number
  name: string
  value: string
  price: number
  symbol: string
  color: string
  percent: number
}
