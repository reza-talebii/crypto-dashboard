import { apiCaller } from '@/services/apiCaller'
import { StaticUrls } from './urls'
import { ICity, IParamsGetCities, IProvince } from './models'

export class StaticService {
  getProvince() {
    return apiCaller.get<IProvince[]>(StaticUrls.getProvince)
  }
  getCities(body: IParamsGetCities) {
    return apiCaller.post<ICity[]>(StaticUrls.getCities, body)
  }
}
