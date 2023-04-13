import { RQEndpoint } from '@/constants'
import { CoinsService } from '@/services/controllers/coins/coins.service'
import { IBodyGetMarket } from '@/services/controllers/coins/models'
import { useQuery } from '@tanstack/react-query'

interface IArgs {
  params: IBodyGetMarket
}

export const useGetCoins = (args: IArgs) => {
  const { getMarkets } = new CoinsService()

  const fetcher = async () => {
    const res = await getMarkets(args.params)
    return res?.data
  }

  const controller = useQuery([RQEndpoint.GET_COINS, args.params], fetcher)

  return controller
}
