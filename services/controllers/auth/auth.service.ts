import { apiCaller } from '@/services/apiCaller'
import { AuthUrls } from './urls'
import { IBodyLogin, IBodyRegister, IResponseAuth } from './models'

export class AuthService {
  register(body: IBodyRegister) {
    return apiCaller.post<IResponseAuth>(AuthUrls.register, body)
  }
  login(body: IBodyLogin) {
    return apiCaller.post<IResponseAuth>(AuthUrls.login, body)
  }
}
