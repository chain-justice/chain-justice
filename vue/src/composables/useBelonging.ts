import axios, { AxiosResponse } from 'axios'
import { Belonging } from 'chain-justice-chain-justice-client-ts/chainjustice.chainjustice.justice'
import { computed, ComputedRef, Ref, ref, watch } from 'vue'
import { Store } from 'vuex'
import { Amount } from '@starport/vue/src/utils/interfaces'


type Response = {
  belonging: Ref<Belonging | undefined>,
  hasBelongingInfo: ComputedRef<boolean>,
  belongCountryTx:  (payload: any, fee: Array<Amount>, memo: string) => Promise<any>
}

type Params = {
  $s: Store<any>
  opts?: any
}

export default async function ({ $s }: Params): Promise<Response> {
  // state
  let belonging = ref<Belonging | undefined>(undefined)
  
  // computed
  let address = computed<string>(() => $s.getters['common/wallet/address'])
  let API_COSMOS = computed<string>(() => $s.getters['common/env/apiCosmos'])
  let hasBelongingInfo = computed<boolean>(() => {
    return belonging.value?.address ? true : false
})

  let normalizeAPIResponse: (resp: AxiosResponse)=>Belonging = (resp: AxiosResponse) => {
    let belonging = resp.data?.belonging
      return {
        ...belonging
      } as Belonging
  }

  let fetchBelongingInfo = async () => {
      return axios.get(
        `${API_COSMOS.value}` +
        `/chain-justice/chain-justice/justice/belonging/${address.value}`
      )    
  }

  let updateBelongingInfo = async () => {
    let res;
    if (address?.value){
      res = normalizeAPIResponse(await fetchBelongingInfo())
    }
    if(res){
      belonging.value = {...res} as Belonging
    }
  }

  let belongCountryTx = async (payload:any, fee: Array<Amount>, memo: string) => {
    let sendMsgFundBelonging = (opts: any) =>
      $s.dispatch('chainjustice.chainjustice.justice/sendMsgBelongContry', opts)
    let send = () =>
      sendMsgFundBelonging({
        value: payload,
        fee,
        memo
      })

      const txResult = await send()
      
      if (txResult.code) {
        throw new Error()
      }
      
    await updateBelongingInfo()
    return txResult
  }
  
  

  // watch
  watch(
    () => address?.value,
    async () => {
      let res;
      if (address?.value){
        res = normalizeAPIResponse(await fetchBelongingInfo())
      }
      if(res){
        belonging.value = {...res} as Belonging
      }
    },
    { immediate: true }
  )

  return {
    belonging,
    hasBelongingInfo,
    belongCountryTx
  }
}
