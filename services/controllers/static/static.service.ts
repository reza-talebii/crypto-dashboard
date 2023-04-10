import { apiCaller } from '@/services/apiCaller'
import { StaticUrls } from './urls'
import { ICity, IParamsGetCities, IProvince } from './models'

const config = {
  baseURL: 'http://localhost:3000/',
}

export class StaticService {
  getProvince() {
    return apiCaller.get<IProvince[]>(StaticUrls.getProvince, config)
  }
  getCities(body: IParamsGetCities) {
    return apiCaller.post<ICity[]>(StaticUrls.getCities, body, config)
  }
}
