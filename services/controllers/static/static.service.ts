import { apiCaller } from '@/services/apiCaller'
import { StaticUrls } from './urls'
import { IAssets, ICity, IParamsGetCities, IProvince } from './models'

const config = {
  baseURL: process.env.NEXT_PUBLIC_PRODUCTION_URL,
}

export class StaticService {
  getProvince() {
    return apiCaller.get<IProvince[]>(StaticUrls.getProvince, config)
  }
  getCities(body: IParamsGetCities) {
    return apiCaller.post<ICity[]>(StaticUrls.getCities, body, config)
  }
  getAssets() {
    return apiCaller.get<IAssets[]>(StaticUrls.getAssets, config)
  }
}
