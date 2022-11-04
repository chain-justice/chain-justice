<template>
  <div class="tx">
    <!-- feedbacks -->
    <div v-if="isTxOngoing" class="feedback">
      <div class="loading-spinner">
        <SpSpinner size="46"></SpSpinner>
      </div>
      <div style="width: 100%; height: 24px" />

      <div class="tx-ongoing-title">Opening Keplr</div>

      <div style="width: 100%; height: 8px" />

      <div class="tx-ongoing-subtitle">Sign transaction...</div>
    </div>

    <div v-else-if="isTxSuccess" class="feedback">
      <div class="check-icon">
        <svg
          width="64"
          height="63"
          viewBox="0 0 64 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="32"
            cy="31.5"
            r="29.5"
            stroke="#00CF30"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M19 30.1362L28.6557 40L45 23"
            stroke="#00CF30"
            stroke-width="4"
          />
        </svg>
      </div>

      <div style="width: 100%; height: 24px" />

      <div class="tx-feedback-title">Country Established</div>

      <div style="width: 100%; height: 8px" />

      <div style="width: 100%; height: 8px" />

      <div style="width: 100%">
        <SpButton style="width: 100%" @click="resetTx">Done</SpButton>
      </div>
    </div>

    <div v-else-if="isTxError" class="feedback">
      <div class="warning-icon">
        <svg
          width="58"
          height="54"
          viewBox="0 0 58 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29 44.5625C29.7249 44.5625 30.3125 43.9749 30.3125 43.25C30.3125 42.5251 29.7249 41.9375 29 41.9375C28.2751 41.9375 27.6875 42.5251 27.6875 43.25C27.6875 43.9749 28.2751 44.5625 29 44.5625Z"
            fill="#FE475F"
          />
          <path
            d="M1.4375 52.4375L29 1.25L56.5625 52.4375H1.4375Z"
            stroke="#FE475F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29 19.625V34.0625"
            stroke="#FE475F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29 44.5625C29.7249 44.5625 30.3125 43.9749 30.3125 43.25C30.3125 42.5251 29.7249 41.9375 29 41.9375C28.2751 41.9375 27.6875 42.5251 27.6875 43.25C27.6875 43.9749 28.2751 44.5625 29 44.5625Z"
            stroke="#FE475F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div style="width: 100%; height: 24px" />

      <div class="tx-feedback-title">Something went wrong</div>

      <div style="width: 100%; height: 16px" />

      <div class="tx-feedback-subtitle">
        Failed to establish country.
      </div>

      <div style="width: 100%; height: 24px" />

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
      <div class="wallet-locked-wrapper">unlock your wallet</div>
    </div>

    <!-- establish -->
    <div v-else>
      <div v-if="showSend">
        <!-- TODO show country information when wallet user has established or been belonging to coountry -->
        <div>
          <SpButton style="width: 100%" :disabled="!ableToTx" @click="sendTx"
            >Establish Country</SpButton
          >
        </div>
      </div>

      <!-- receive-->
      <div v-else-if="showReceive">
        <div class="receive-wrapper">
          <SpCard>
            <template #top>
              <div class="qrcode-wrapper">
                <SpQrCode :value="address" color="#000" width="112" />
              </div>
            </template>

            <template #bottom>
              <div class="address-wrapper">
                <div class="address">
                  {{ address }}
                </div>
                <div class="copy"><SpClipboard :text="address" /></div>
              </div>
            </template>
          </SpCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watch } from 'vue'
import { useStore } from 'vuex'

import { AssetForUI } from '../../../../composables/useAssets'
import { Amount } from '../../../../utils/interfaces'

import { useAddress, useAssets } from '../../../../composables'
import SpAmountSelect from '../../../SpAmountSelect'
import SpButton from '../../../SpButton'
import SpCard from '../../../SpCard'
import SpClipboard from '../../../SpClipboard'
import SpQrCode from '../../../SpQrCode'
import SpSpinner from '../../../SpSpinner'

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
    SpSpinner
  },

  setup() {
    // store
    let $s = useStore()

    // state
    let state: State = reactive(initialState)

    // composables
    let { address } = useAddress({ $s })
    let { balances } = useAssets({ $s })

    // actions
    let sendMsgFundCountry = (opts: any) =>
      $s.dispatch('chainjustice.chainjustice.justice/sendMsgFundCountry', opts)

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

      let send;

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
        send = () =>
          sendMsgFundCountry({
            value: payload,
            fee,
            memo
          })

        const txResult = await send()

        if (txResult.code) {
          throw new Error()
        }
        state.currentUIState = UI_STATE.TX_SUCCESS
      } catch (e) {
        console.error(e)
        state.currentUIState = UI_STATE.TX_ERROR
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
        !!address.value
    )

    //watch
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
