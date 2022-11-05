import axios, { AxiosResponse } from 'axios'
import { computed, ComputedRef, watch } from 'vue'
import { Store } from 'vuex'

import useAPIPagination, {
  Pager,
  Response as APIPagination
} from '@starport/vue/src/composables/useAPIPagination'

type Response = {
  normalize: (tx: object) => CountryForUI
  pager: ComputedRef<Pager>
}

type Params = {
  $s: Store<any>
  opts: {
    order: 'asc' | 'desc'
    realTime: boolean
  }
}

type TxDirection = 'in' | 'out' | 'self'

export type CountryForUI = {
  index: string
  address: string
  food: string
  nmenbers: string
  belonging: boolean
}

export default async function ({
  $s,
  opts: {}
}: Params): Promise<Response> {
  // methods
  let normalizeAPIResponse = (resp: AxiosResponse) => {
    let { country, pagination } = resp.data
    return {
      data: country,
      total: Number(pagination?.total || 0)
    }
  }

  let normalize = (country: any): CountryForUI => {
    
    let normalized: any = {...country}
    normalized.belonging = country.index === address.value

    return normalized as CountryForUI
  }
  let fetchCountryList = async (offset: number) =>
    axios.get(
      `${API_COSMOS.value}` +
        `/chain-justice/chain-justice/justice/country` +
        `?pagination.offset=${offset}`
    )

  // store
  let address = computed<string>(() => $s.getters['common/wallet/address']) // TODO use useAddress
  let API_COSMOS = computed<string>(() => $s.getters['common/env/apiCosmos'])

  // computed

  // composables
  let countryListApiPagination: APIPagination = await useAPIPagination({
    opts: {},
    getters: {
      fetchList: async ({ offset }) =>
        normalizeAPIResponse(
          await fetchCountryList(offset)
        )
    }
  })

  await countryListApiPagination.pager.load()

  // computed
  let countryListApiPaginationPager: ComputedRef<Pager> = computed(() => countryListApiPagination.pager )

  //watch
  watch(
    () => address.value,
    async () => {
      await countryListApiPaginationPager.value.load()
    }
  )

  // TODO create real time update function, need to check event
  // if (realTime) {
  //   client.value.on('newblock', async () => {
  //     // there's got bet a better way to diff latest vs. current while sparing this wasted round-trip
  //     let recv = await fetchTxs(0, RECEIVED_EVENT.value, orderParam)
  //     let sent = await fetchTxs(0, SENT_EVENT.value, orderParam)

  //     let currentTotal = recvAndSentPager.value.total.value
  //     let latestTotal =
  //       Number(recv.data.pagination?.total || 0) + Number(sent.data.pagination?.total || 0)
  //     let diff = latestTotal - currentTotal

  //     newTxs.value = diff
  //   })
  // }

  return {
    pager: countryListApiPaginationPager,
    normalize,
  }
}
