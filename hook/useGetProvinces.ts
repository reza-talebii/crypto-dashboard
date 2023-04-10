import { RQEndpoint } from '@/constants'
import { StaticService } from '@/services/controllers/static/static.service'
import { useQuery } from '@tanstack/react-query'

export const useGetProvinces = () => {
  const { getProvince } = new StaticService()

  const fetcher = async () => {
    const res = await getProvince()
    return res?.data
  }

  const controller = useQuery([RQEndpoint.GET_PROVINCE], fetcher)

  return controller
}
