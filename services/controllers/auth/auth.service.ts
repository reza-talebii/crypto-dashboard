import { apiCaller } from '@/services/apiCaller'
import { AuthUrls } from './urls'
import { IBodyLogin, IBodyRegister } from './models'
import { IUser, TemplateAuthResponse } from '@/models/interfaces'

export class AuthService {
  register(body: IBodyRegister) {
    return apiCaller.post<TemplateAuthResponse<undefined>>(AuthUrls.register, body)
  }
  login(body: IBodyLogin) {
    return apiCaller.post<TemplateAuthResponse<IUser>>(AuthUrls.login, body)
  }
}
