import axios, { AxiosResponse } from 'axios'
import { Country } from 'chain-justice-chain-justice-client-ts/chainjustice.chainjustice.justice'
import { computed, ComputedRef, Ref, ref, watch } from 'vue'
import { Store } from 'vuex'
import { Amount } from '@starport/vue/src/utils/interfaces'


type Response = {
  ownedCountry: Ref<Country | undefined>,
  hasCountryInfo: ComputedRef<boolean>,
  establishCountryTx:  (payload: any, fee: Array<Amount>, memo: string) => Promise<any>
}

type Params = {
  $s: Store<any>
  opts?: any
}

export default async function ({ $s }: Params): Promise<Response> {
  // state
  let ownedCountry = ref<Country | undefined>(undefined)
  
  // computed
  let address = computed<string>(() => $s.getters['common/wallet/address'])
  let API_COSMOS = computed<string>(() => $s.getters['common/env/apiCosmos'])
  let hasCountryInfo = computed<boolean>(() => {
    return ownedCountry.value?.address ? true : false
})

  let normalizeAPIResponse: (resp: AxiosResponse)=>Country = (resp: AxiosResponse) => {
    let belonging = resp.data?.belonging
      return {
        ...belonging
      } as Country
  }

  let fetchOwnedCountryInfo = async () => {
      return axios.get(
        `${API_COSMOS.value}` +
        `/chain-justice/chain-justice/justice/belonging/${address.value}`
      )    
  }

  let updateOwnedCountryInfo = async () => {
    let res;
    if (address?.value){
      res = normalizeAPIResponse(await fetchOwnedCountryInfo())
    }
    if(res){
      ownedCountry.value = {...res} as Country
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
      
    await updateOwnedCountryInfo()
    return txResult
  }
  
  
  

  // watch
  watch(
    () => address?.value,
    async () => {
      let res;
      if (address?.value){
        res = normalizeAPIResponse(await fetchOwnedCountryInfo())
      }
      if(res){
        ownedCountry.value = {...res} as Country
      }
    },
    { immediate: true }
  )

  return {
    ownedCountry,
    hasCountryInfo,
    establishCountryTx
  }
}
