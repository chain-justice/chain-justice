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
          <SpButton style="width: 100%" :disabled="!ableToTx" @click="sendTx"
            >Establish Country</SpButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watch } from 'vue'
import { useStore } from 'vuex'

import { AssetForUI } from '@starport/vue/src/composables/useAssets'
import { Amount } from '@starport/vue/src/utils/interfaces'

import { useAddress, useAssets } from '@starport/vue/src/composables'
import SpAmountSelect from '@starport/vue/src/components/SpAmountSelect'
import SpButton from '@starport/vue/src/components/SpButton'
import SpCard from '@starport/vue/src/components/SpCard'
import SpClipboard from '@starport/vue/src/components/SpClipboard'
import SpQrCode from '@starport/vue/src/components/SpQrCode'
import {TxFailed, TxSuccess, TxOnGoing, TxWalletLocked} from '@starport/vue/src/components/transaction/common'
import useCountry from '../../../composables/useCountry'

// types
export interface TxData {
  ch: string
  memo: string
  fees: Array<AssetForUI>
}

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
  tx: TxData,
  currentUIState: UI_STATE
}

export let initialState: State = {
  tx: {
    ch: '',
    memo: '',
    fees: []
  },
  currentUIState: UI_STATE.SEND,
}

export default defineComponent({
  name: 'SpFundCountry',

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
    let $s = useStore()

    // state
    let state: State = reactive(initialState)

    // composables
    let { address } = useAddress({ $s })
    let { balances } = useAssets({ $s })
    let { hasCountryInfo, establishCountryTx, updateBelongingCountryInfo } = await useCountry({ $s })

    // actions

    let resetTx = (): void => {
      state.currentUIState = UI_STATE.SEND
    }
    let parseAmount = (amount: string): number => {
      return amount == '' ? 0 : parseInt(amount)
    }
    let sendTx = async (): Promise<void> => {
      state.currentUIState = UI_STATE.TX_SIGNING

      let fee: Array<Amount> = state.tx.fees.map((x: AssetForUI) => ({
        denom: x.amount.denom,
        amount: x.amount.amount == '' ? '0' : x.amount.amount
      }))

      let payload: any = {
        creator: address.value
      }

      let memo = state.tx.memo

      // let isIBC = state.tx.ch !== ''
      // let send;

      try {
        // if (isIBC) {
        //   payload = {
        //     ...payload,
        //     sourcePort: 'transfer',
        //     sourceChannel: state.tx.ch,
        //     sender: address.value,
        //     timeoutHeight: 0,
        //     timeoutTimestamp: long
        //       .fromNumber(new Date().getTime() + 60000)
        //       .multiply(1000000),
        //   }

        //   send = () =>
        //     sendMsgTransfer({
        //       value: payload,
        //       fee,
        //       memo
        //     })
        // } else {
        await establishCountryTx(payload, fee, memo)
        state.currentUIState = UI_STATE.TX_SUCCESS
      } catch (e) {
        console.error(e)
        state.currentUIState = UI_STATE.TX_ERROR
        // TODO FundCountryするとなぜかエラーになるが、実際はうまくできているのでエスケープ
        // state.currentUIState = UI_STATE.TX_SUCCESS
      }
    }
    let resetFees = (): void => {
      state.tx.fees = []
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
    let hasAnyBalance = computed<boolean>(
      () =>
        balances.value.assets.length > 0 &&
        balances.value.assets.some((x) => parseAmount(x.amount.amount) > 0)
    )
    let isTxOngoing = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.TX_SIGNING
    })
    let isTxSuccess = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.TX_SUCCESS
    })
    let isTxError = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.TX_ERROR
    })
    let validTxFees = computed<boolean>(() =>
      state.tx.fees.every((x) => {
        let parsedAmount = parseAmount(x.amount.amount)

        return !isNaN(parsedAmount) && parsedAmount > 0
      })
    )
    let ableToTx = computed<boolean>(
      () =>
        validTxFees.value &&
        !!address.value &&
        !hasCountryInfo.value
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
      balances,
      hasAnyBalance,
      isTxOngoing,
      isTxSuccess,
      isTxError,
      ableToTx,
      // methods
      parseAmount,
      resetTx,
      sendTx,
      resetFees,
    }
  }
})
</script>

<style src="./SpFundCountry.scss" scoped lang="scss">
</style>
