<template>
  <div class="tx">
    <!-- feedbacks -->
    <div v-if="isTxOngoing" class="feedback">
      <TxOnGoing />
    </div>

    <div v-else-if="isTxSuccess" class="feedback">
      <TxSuccess success_message="Country Established" />

      <div style="width: 100%">
        <SpButton style="width: 100%" @click="resetTx">Done</SpButton>
      </div>
    </div>

    <div v-else-if="isTxError" class="feedback">
      <TxFailed failed_message=" Failed to establish country." />

      <div style="width: 100%">
        <SpButton style="width: 100%" @click="sendTx">Try again</SpButton>

        <div style="width: 100%; height: 8px" />

        <SpButton style="width: 100%" type="secondary" @click="resetTx"
          >Cancel</SpButton
        >
      </div>
    </div>

    <!-- wallet locked-->
    <div v-else-if="showWalletLocked">
      <TxWalletLocked />
    </div>

    <!-- establish -->
    <div v-else>
      <div >
        <!-- TODO show country information when wallet user has established or been belonging to coountry -->
        <div>
          <SpButton type="secondary" style="width: 100%" :disabled="!ableToTx" @click="sendTx"
            >Faucet</SpButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watch } from 'vue'
import { useStore } from 'vuex'

import { useAddress, useAssets } from '@starport/vue/src/composables'
import SpAmountSelect from '@starport/vue/src/components/SpAmountSelect'
import SpButton from '@starport/vue/src/components/SpButton'
import SpCard from '@starport/vue/src/components/SpCard'
import SpClipboard from '@starport/vue/src/components/SpClipboard'
import SpQrCode from '@starport/vue/src/components/SpQrCode'
import { TxFailed, TxSuccess, TxOnGoing, TxWalletLocked } from '@starport/vue/src/components/transaction/common'
import useFaucet from '../../../composables/useFaucet'

export enum UI_STATE {
  'FRESH' = 1,

  'BOOTSTRAPED' = 2,

  'WALLET_LOCKED' = 3,

  'SEND' = 100,
  'SEND_ADD_TOKEN' = 101,

  'TX_SIGNING' = 300,
  'TX_SUCCESS' = 301,
  'TX_ERROR' = 302,

  'RECEIVE' = 400
}

export interface State {
  currentUIState: UI_STATE
}

export let initialState: State = {
  currentUIState: UI_STATE.SEND,
}

export default defineComponent({
  name: 'SpRequestFaucet',

  components: {
    SpCard,
    SpAmountSelect,
    SpQrCode,
    SpButton,
    SpClipboard,
    TxSuccess,
    TxFailed,
    TxOnGoing,
    TxWalletLocked
  },

  async setup() {
    // store
    let $s  = useStore()

    // state
    let state: State = reactive(initialState)

    // composables
    let { address } = useAddress({ $s })
    let { fetchFaucet } = await useFaucet({ $s })

    // actions

    let resetTx = (): void => {
      state.currentUIState = UI_STATE.SEND
    }
    let parseAmount = (amount: string): number => {
      return amount == '' ? 0 : parseInt(amount)
    }
    let sendTx = async (): Promise<void> => {
      state.currentUIState = UI_STATE.TX_SIGNING
      try {
        await fetchFaucet()
        state.currentUIState = UI_STATE.TX_SUCCESS
      } catch (e) {
        console.error(e)
        state.currentUIState = UI_STATE.TX_ERROR
      }
    }
    // computed
    let showSend = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.SEND
    })
    let showReceive = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.RECEIVE
    })
    let showWalletLocked = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.WALLET_LOCKED
    })
    let isTxOngoing = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.TX_SIGNING
    })
    let isTxSuccess = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.TX_SUCCESS
    })
    let isTxError = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.TX_ERROR
    })
    let ableToTx = computed<boolean>(
      () =>
        !!address.value
    )

    watch(
      () => address.value,
      async () => {
        resetTx()
      }
    )

    return {
      //state,
      state,
      // composable
      address,
      // computed
      showSend,
      showReceive,
      showWalletLocked,
      isTxOngoing,
      isTxSuccess,
      isTxError,
      ableToTx,
      // methods
      parseAmount,
      resetTx,
      sendTx,
    }
  }
})
</script>

<style src="./SpRequestFaucet.scss" scoped lang="scss">
</style>
