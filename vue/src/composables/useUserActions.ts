import axios, { AxiosResponse } from 'axios'
import { Country } from 'chain-justice-chain-justice-client-ts/chainjustice.chainjustice.justice'
import { computed, ComputedRef, Ref, ref, watch } from 'vue'
import { Store } from 'vuex'
import { Amount } from '@starport/vue/src/utils/interfaces'
import useBelonging from './useBelonging'


type Response = {
  invasionStartTx : (payload: any, fee: Array<Amount>, memo: string) => Promise<any>,
  invasionResultTx : (payload: any, fee: Array<Amount>, memo: string) => Promise<any>
  prepareStartTx : (payload: any, fee: Array<Amount>, memo: string) => Promise<any>,
  prepareResultTx : (payload: any, fee: Array<Amount>, memo: string) => Promise<any>
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

  let invasionStartTx = async (payload:any, fee: Array<Amount>, memo: string) => {
    let sendMsgInvasionStart = (opts: any) =>
      $s.dispatch('chainjustice.chainjustice.justice/sendMsgInvasionStart', opts)
    let send = () =>
        sendMsgInvasionStart({
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
  let invasionResultTx = async (payload:any, fee: Array<Amount>, memo: string) => {
    let sendMsgInvasionResult = (opts: any) =>
      $s.dispatch('chainjustice.chainjustice.justice/sendMsgInvasionResult', opts)
    let send = () =>
        sendMsgInvasionResult({
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

  let prepareStartTx = async (payload:any, fee: Array<Amount>, memo: string) => {
    let sendMsgPrepareStart = (opts: any) =>
      $s.dispatch('chainjustice.chainjustice.justice/sendMsgPrepareStart', opts)
    let send = () =>
        sendMsgPrepareStart({
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
  
  let prepareResultTx = async (payload:any, fee: Array<Amount>, memo: string) => {
    let sendMsgPrepareResult = (opts: any) =>
      $s.dispatch('chainjustice.chainjustice.justice/sendMsgPrepareResult', opts)
    let send = () =>
        sendMsgPrepareResult({
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

  return {
    invasionStartTx,
    invasionResultTx,
    prepareStartTx,
    prepareResultTx,
  }
}
