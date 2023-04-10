import { RQEndpoint } from '@/constants'
import { StaticService } from '@/services/controllers/static/static.service'
import { useQuery } from '@tanstack/react-query'

interface IArgs {
  provinceId?: number
}

export const useGetCities = ({ provinceId }: IArgs) => {
  const { getCities } = new StaticService()

  const fetcher = async () => {
    const res = await getCities({ provinceId })
    return res?.data
  }

  const controller = useQuery([RQEndpoint.GET_CITIES, provinceId], fetcher)

  return controller
}
