import { apiCaller } from '@/services/apiCaller'
import { CoinsUrls } from './urls'
import { IBodyGetMarket, ICoin } from './models'

const config = {
  baseURL: process.env.NEXT_PUBLIC_COINGECKO_URL_API,
}

export class CoinsService {
  getMarkets(params: IBodyGetMarket) {
    return apiCaller.get<ICoin[]>(CoinsUrls.markets, {
      params,
      ...config,
    })
  }
}
