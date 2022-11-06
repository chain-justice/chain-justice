import axios from 'axios'
import { computed, ComputedRef, Ref, ref, watch } from 'vue'
import { Store } from '@starport/vue/node_modules/vuex'
import { Amount } from '@starport/vue/src/utils/interfaces'


type Response = {
  fetchFaucet:  () => Promise<any>
}

type Params = {
  $s: Store<any>
  opts?: any
}

export default async function ({ $s }: Params): Promise<Response> {
  // computed
  let address = computed<string>(() => $s.getters['common/wallet/address'])
  let API_FAUCET = process.env.VUE_APP_API_FAUCET || 'http://localhost:4500/'

  let fetchFaucet = async () => {
    
    return await axios.post(`${API_FAUCET}`, { address: address.value, coins: ["100token"] } )    
  }



  return {
    fetchFaucet
  }
}
