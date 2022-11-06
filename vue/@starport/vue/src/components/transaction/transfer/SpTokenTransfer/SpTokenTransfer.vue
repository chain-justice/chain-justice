<template>
  <div class="tx">
    <!-- feedbacks -->
    <div v-if="isTxOngoing" class="feedback">
      <TxOnGoing />
    </div>

    <div v-else-if="isTxSuccess" class="feedback">
      <TxSuccess success_message="Assets transferred" />

      <div
        v-for="(x, i) in state.tx.amount"
        :key="'amount' + i"
        class="tx-feedback-subtitle amount"
        :index="i"
      >
        {{ parseAmount(x.amount.amount) }} {{ x.amount.denom }}
      </div>

      <div style="width: 100%; height: 8px" />

      <div style="width: 100%">
        <SpButton style="width: 100%" @click="resetTx">Done</SpButton>
      </div>
    </div>

    <div v-else-if="isTxError" class="feedback">
      <TxFailed failed_message="Your tokens could not be transferred and will remain on your wallet." />

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
      
    </div>

    <!-- send/receive -->
    <div v-else>
      <div class="title-wrapper">
        <div class="title" :class="{ active: showSend }" @click="switchToSend">
          Send
        </div>

        <div style="width: 24px; height: 100%" />

        <div
          class="title"
          :class="{ active: showReceive, disabled: !hasAnyBalance }"
          @click="switchToReceive"
        >
          Receive
        </div>
      </div>

      <div style="width: 100%; height: 32px" />

      <!-- send -->
      <div v-if="showSend">
        <div class="enter-address-wrapper">
          <div class="input-label">Send to</div>

          <div class="input-wrapper">
            <input
              v-model="state.tx.receiver"
              class="input"
              :class="{
                error: state.tx.receiver.length > 0 && !validReceiver
              }"
              placeholder="Recipient address"
              :disabled="!hasAnyBalance"
            />
            <div
              v-if="state.tx.receiver.length > 0 && !validReceiver"
              class="error-message"
            >
              Invalid address
            </div>
          </div>
        </div>

        <div style="width: 100%; height: 21px" />
        <div v-if="hasAnyBalance">
          <SpAmountSelect
            class="token-selector--main"
            :selected="state.tx.amount"
            :balances="balances.assets"
            @update="handleTxAmountUpdate"
          />
          <div style="width: 100%; height: 34px" />
        </div>

        <div
          :class="[
            'advanced-label',
            { 'advanced-label--disabled': !hasAnyBalance }
          ]"
          @click="hasAnyBalance && (state.advancedOpen = !state.advancedOpen)"
        >
          Advanced
          <template v-if="hasAnyBalance">
            <svg
              v-if="!state.advancedOpen"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="margin-left: 7px"
            >
              <path
                d="M5.99998 7.4L0.599976 2L1.99998 0.599998L5.99998 4.6L9.99998 0.599998L11.4 2L5.99998 7.4Z"
                fill="black"
              />
            </svg>
            <svg
              v-else
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="margin-left: 7px"
            >
              <path
                d="M10.0001 7.4001L6.0001 3.4001L2.0001 7.4001L0.600098 6.0001L6.0001 0.600098L11.4001 6.0001L10.0001 7.4001Z"
                fill="black"
              />
            </svg>
          </template>
        </div>

        <div
          v-if="state.advancedOpen && hasAnyBalance"
          style="width: 100%; height: 24px"
        />

        <div v-if="state.advancedOpen && hasAnyBalance" class="advanced">
          <div class="input-label">Fees</div>

          <div style="width: 100%; height: 14px" />
          <SpAmountSelect
            class="token-selector"
            :selected="state.tx.fees"
            :balances="balances.assets"
            @update="handleTxFeesUpdate"
          />

          <div style="width: 100%; height: 35px" />

          <div class="input-label">Reference (memo)</div>

          <div class="input-wrapper">
            <input
              v-model="state.tx.memo"
              class="input"
              placeholder="Enter a reference"
            />
          </div>

          <div style="width: 100%; height: 16px" />

          <div class="input-label">Channel</div>

          <div class="input-wrapper">
            <input
              v-model="state.tx.ch"
              class="input"
              placeholder="Enter a channel"
            />
          </div>
        </div>

        <div style="width: 100%; height: 24px" />

        <div>
          <SpButton style="width: 100%" :disabled="!ableToTx" @click="sendTx"
            >Send</SpButton
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
                <!-- <div class="copy"><SpClipboard :text="address" /></div> -->
              </div>
            </template>
          </SpCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Bech32 } from '@cosmjs/encoding'
import long from 'long'
import { computed, defineComponent, reactive, watch } from 'vue'
import { useStore } from 'vuex'

import { AssetForUI } from '@/composables/useAssets'
import { Amount } from '@/utils/interfaces'

import { useAddress, useAssets } from '../../../../composables'
import SpAmountSelect from '../../../SpAmountSelect'
import SpButton from '../../../SpButton'
import SpCard from '../../../SpCard'
import SpClipboard from '../../../SpClipboard'
import SpQrCode from '../../../SpQrCode'
import {TxSuccess, TxFailed, TxOnGoing, TxWalletLocked} from '../../common'

// types
export interface TxData {
  receiver: string
  ch: string
  amount: Array<AssetForUI>
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
  tx: TxData
  currentUIState: UI_STATE
  advancedOpen: boolean
}

export let initialState: State = {
  tx: {
    receiver: '',
    ch: '',
    amount: [],
    memo: '',
    fees: []
  },
  currentUIState: UI_STATE.SEND,
  advancedOpen: false
}

export default defineComponent({
  name: 'SpTokenTransfer',

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

  setup() {
    // store
    let $s = useStore()

    // state
    let state: State = reactive(initialState)

    // composables
    let { address } = useAddress({ $s })
    let { balances } = useAssets({ $s })

    // actions
    let sendMsgSend = (opts: any) =>
      $s.dispatch('cosmos.bank.v1beta1/sendMsgSend', opts)
    let sendMsgTransfer = (opts: any) =>
      $s.dispatch('ibc.applications.transfer.v1/sendMsgTransfer', opts)

    // methods
    let switchToSend = (): void => {
      state.currentUIState = UI_STATE.SEND
    }
    let switchToReceive = (): void => {
      if (address.value) {
        state.currentUIState = UI_STATE.RECEIVE
      }
    }
    let parseAmount = (amount: string): number => {
      return amount == '' ? 0 : parseInt(amount)
    }
    let resetTx = (): void => {
      state.tx.amount = []
      state.tx.receiver = ''
      state.tx.memo = ''
      state.tx.ch = ''
      state.tx.fees = []

      state.currentUIState = UI_STATE.SEND
    }
    let sendTx = async (): Promise<void> => {
      state.currentUIState = UI_STATE.TX_SIGNING

      let fee: Array<Amount> = state.tx.fees.map((x: AssetForUI) => ({
        denom: x.amount.denom,
        amount: x.amount.amount == '' ? '0' : x.amount.amount
      }))

      let amount: Array<Amount> = state.tx.amount.map((x: AssetForUI) => ({
        denom: x.amount.denom,
        amount: x.amount.amount == '' ? '0' : x.amount.amount
      }))

      let memo = state.tx.memo

      let isIBC = state.tx.ch !== ''

      let send

      let payload: any = {
        amount,
        toAddress: state.tx.receiver,
        fromAddress: address.value
      }

      try {
        if (isIBC) {
          payload = {
            ...payload,
            sourcePort: 'transfer',
            sourceChannel: state.tx.ch,
            sender: address.value,
            receiver: state.tx.receiver,
            timeoutHeight: 0,
            timeoutTimestamp: long
              .fromNumber(new Date().getTime() + 60000)
              .multiply(1000000),
            token: state.tx.amount[0]
          }

          send = () =>
            sendMsgTransfer({
              value: payload,
              fee,
              memo
            })
        } else {
          send = () =>
            sendMsgSend({
              value: payload,
              fee,
              memo
            })
        }

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
    let handleTxAmountUpdate = ({ selected }) => {
      state.tx.amount = selected
    }
    let handleTxFeesUpdate = ({ selected }) => {
      state.tx.fees = selected
    }
    let bootstrapTxAmount = () => {
      if (hasAnyBalance.value) {
        let firstBalance: AssetForUI = balances.value.assets[0]

        state.tx.amount[0] = {
          ...firstBalance,
          amount: {
            amount: '',
            denom: firstBalance.amount.denom
          }
        }
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
    let validTxAmount = computed<boolean>(
      () =>
        state.tx.amount.length > 0 &&
        state.tx.amount.every((x) => {
          let parsedAmount = parseAmount(x.amount.amount)

          return !isNaN(parsedAmount) && parsedAmount > 0
        })
    )
    let validReceiver = computed<boolean>(() => {
      let valid: boolean

      try {
        valid = !!Bech32.decode(state.tx.receiver)
      } catch {
        valid = false
      }

      return valid
    })
    let ableToTx = computed<boolean>(
      () =>
        validTxAmount.value &&
        validReceiver.value &&
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
    watch(
      () => balances.value.assets,
      async (newValue, oldValue) => {
        if (newValue.length > 0 && oldValue.length === 0) {
          bootstrapTxAmount()
        }
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
      validReceiver,
      // methods
      switchToSend,
      switchToReceive,
      parseAmount,
      resetTx,
      sendTx,
      resetFees,
      handleTxAmountUpdate,
      handleTxFeesUpdate
    }
  }
})
</script>

<style src="./SpTokenTransfer.scss" scoped lang="scss">
</style>
