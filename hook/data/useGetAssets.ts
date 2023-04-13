import { RQEndpoint } from '@/constants'
import { StaticService } from '@/services/controllers/static/static.service'
import { useQuery } from '@tanstack/react-query'

export const useGetAssets = () => {
  const { getAssets } = new StaticService()

  const fetcher = async () => {
    const res = await getAssets()
    return res?.data
  }

  const controller = useQuery([RQEndpoint.GET_ASSETS], fetcher)

  return controller
}
