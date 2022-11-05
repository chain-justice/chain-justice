import axios, { AxiosResponse } from 'axios'
import { Country } from 'chain-justice-chain-justice-client-ts/chainjustice.chainjustice.justice'
import { computed, ComputedRef, Ref, ref, watch } from 'vue'
import { Store } from 'vuex'
import { Amount } from '@starport/vue/src/utils/interfaces'
import useBelonging from './useBelonging'


type Response = {
  belongingCountry: Ref<Country | undefined>,
  hasCountryInfo: ComputedRef<boolean>,
  establishCountryTx:  (payload: any, fee: Array<Amount>, memo: string) => Promise<any>,
  updateBelongingCountryInfo: () => Promise<void>
}

type Params = {
  $s: Store<any>
  opts?: any
}

export default async function ({ $s }: Params): Promise<Response> {
  // state
  let belongingCountry = ref<Country | undefined>(undefined)

  // composable
  // TODO getリクエストが連発する、循環参照（？）
  let { belonging } = await useBelonging({$s})

  // computed
  let address = computed<string>(() => $s.getters['common/wallet/address'])
  let API_COSMOS = computed<string>(() => $s.getters['common/env/apiCosmos'])
  let hasCountryInfo = computed<boolean>(() => {
    return belongingCountry.value?.address ? true : false
})

  let normalizeAPIResponse: (resp: AxiosResponse)=>Country = (resp: AxiosResponse) => {
    let _country = resp.data?.country
      return {
        ..._country
      } as Country
  }

  let fetchcBelongingCountryInfo = async () => {
    return axios.get(
      `${API_COSMOS.value}` +
      `/chain-justice/chain-justice/justice/country/${belonging.value?.country}`
    )    
  }

  let updateBelongingCountryInfo = async () => {
    let res;
    if (!belonging?.value?.country) return null
    if (address?.value){
      res = normalizeAPIResponse(await fetchcBelongingCountryInfo())
    }
    if(res){
      belongingCountry.value = {...res} as Country
    }
  }

  let establishCountryTx = async (payload:any, fee: Array<Amount>, memo: string) => {
    let sendMsgFundCountry = (opts: any) =>
      $s.dispatch('chainjustice.chainjustice.justice/sendMsgFundCountry', opts)
    let send = () =>
      sendMsgFundCountry({
        value: payload,
        fee,
        memo
      })

      const txResult = await send()
      
      if (txResult.code) {
        throw new Error()
      }
      
    return txResult
  }
  
  
  

  // watch
  watch(
    () => belonging.value,
    async () => {
      await updateBelongingCountryInfo()
    },
    { immediate: true }
  )

  return {
    belongingCountry,
    hasCountryInfo,
    establishCountryTx,
    updateBelongingCountryInfo
  }
}
