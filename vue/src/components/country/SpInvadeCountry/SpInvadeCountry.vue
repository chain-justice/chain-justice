<template>
  <div class="tx">
    <!-- feedbacks -->
    <div v-if="isTxOngoing" class="feedback">
      <TxOnGoing />
    </div>

    <div v-else-if="isTxSuccess" class="feedback">
      <TxSuccess success_message="Start Invasion" />

      <div style="width: 100%">
        <SpButton style="width: 100%" @click="resetTx">Done</SpButton>
      </div>
    </div>

    <div v-else-if="isTxError" class="feedback">
      <TxFailed failed_message=" Failed to Start Invasion." />

      <div style="width: 100%">

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
    <!-- invasion/prepare -->
    <div v-else>
      <div class="title-wrapper">
        <div class="title" :class="{ active: showInvasion }" @click="switchToInvasion">
          invasion
        </div>

        <div style="width: 24px; height: 100%" />

        <div
          class="title"
          :class="{ active: showPrepare, disabled: !hasCountryInfo }"
          @click="switchToPrepare"
        >
          prepare
        </div>
      </div>

      <div style="width: 100%; height: 32px" />

      <!-- send -->
      <div v-if="showInvasion">
        <div class="enter-address-wrapper">
          <div class="input-label">Invade to</div>

          <div class="input-wrapper">
            <input
              v-model="state.tx.target"
              class="input"
              :class="{
                error: state.tx.target.length > 0
              }"
              placeholder="target country address"
              :disabled="!hasCountryInfo"
            />
            <div
              v-if="state.tx.target.length > 0 && !validTarget"
              class="error-message"
            >
              Invalid address
            </div>
          </div>
        </div>
        <div style="width: 100%; height: 24px" />

        <div>
          <SpButton style="width: 100%" :disabled="!ableToTx" @click="sendInvastionStartTx"
            >Start Invasion</SpButton
          >
        </div>
        <div style="width: 100%; height: 24px" />
        <div>
          <SpButton style="width: 100%" :disabled="!ableToTx" @click="sendInvastionResultTx"
            >Check Result Invasion</SpButton
          >
        </div>
      </div>

      <!-- receive-->
      <div v-else-if="showPrepare">
        <div class="receive-wrapper">
          <div style="width: 100%; height: 95px" />

          <div>
            <SpButton style="width: 100%" :disabled="!ableToTx&&!hasCountryInfo" @click="sendPrepareStartTx"
              >Start Prepare</SpButton
            >
          </div>
          <div style="width: 100%; height: 24px" />
          <div>
            <SpButton style="width: 100%" :disabled="!ableToTx&&!hasCountryInfo" @click="sendPrepareResultTx"
              >Check Result Prepare</SpButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  

<script lang="ts">
import { Bech32 } from '@cosmjs/encoding'
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
import useUserActions from '../../../composables/useUserActions'
import useCountry from '../../../composables/useCountry'

// types
export interface TxData {
  ch: string
  target: string
  memo: string
  fees: Array<AssetForUI>
}

export enum UI_STATE {
  'FRESH' = 1,
  'INVASION' = 10,
  'PREPARE' = 11,

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
    target: '',
    memo: '',
    fees: []
  },
  currentUIState: UI_STATE.SEND,
}

export default defineComponent({
  name: 'SpInvadeCountry',

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
    let { invasionStartTx, invasionResultTx, prepareStartTx, prepareResultTx} = await useUserActions({ $s })
    let { hasCountryInfo } = await useCountry({ $s })

    // actions

    let resetTx = (): void => {
      state.currentUIState = UI_STATE.SEND
    }
    let parseAmount = (amount: string): number => {
      return amount == '' ? 0 : parseInt(amount)
    }
    let sendInvastionStartTx = async (): Promise<void> => {
      state.currentUIState = UI_STATE.TX_SIGNING

      let fee: Array<Amount> = state.tx.fees.map((x: AssetForUI) => ({
        denom: x.amount.denom,
        amount: x.amount.amount == '' ? '0' : x.amount.amount
      }))

      let payload: any = {
        creator: address.value,
        toAddress: state.tx.target,
      }

      let memo = state.tx.memo

      try {
        await invasionStartTx(payload, fee, memo)
        state.currentUIState = UI_STATE.TX_SUCCESS
      } catch (e) {
        console.error(e)
        state.currentUIState = UI_STATE.TX_ERROR
      }
    }

    let sendInvastionResultTx = async (): Promise<void> => {
      state.currentUIState = UI_STATE.TX_SIGNING

      let fee: Array<Amount> = state.tx.fees.map((x: AssetForUI) => ({
        denom: x.amount.denom,
        amount: x.amount.amount == '' ? '0' : x.amount.amount
      }))

      let payload: any = {
        creator: address.value,
      }

      let memo = state.tx.memo

      try {
        await invasionResultTx(payload, fee, memo)
        state.currentUIState = UI_STATE.TX_SUCCESS
      } catch (e) {
        console.error(e)
        state.currentUIState = UI_STATE.TX_ERROR
      }
    }
    let sendPrepareStartTx = async (): Promise<void> => {
      state.currentUIState = UI_STATE.TX_SIGNING

      let fee: Array<Amount> = state.tx.fees.map((x: AssetForUI) => ({
        denom: x.amount.denom,
        amount: x.amount.amount == '' ? '0' : x.amount.amount
      }))

      let payload: any = {
        creator: address.value,
      }

      let memo = state.tx.memo

      try {
        await prepareStartTx(payload, fee, memo)
        state.currentUIState = UI_STATE.TX_SUCCESS
      } catch (e) {
        console.error(e)
        state.currentUIState = UI_STATE.TX_ERROR
      }
    }

    let sendPrepareResultTx = async (): Promise<void> => {
      state.currentUIState = UI_STATE.TX_SIGNING

      let fee: Array<Amount> = state.tx.fees.map((x: AssetForUI) => ({
        denom: x.amount.denom,
        amount: x.amount.amount == '' ? '0' : x.amount.amount
      }))

      let payload: any = {
        creator: address.value,
      }

      let memo = state.tx.memo

      try {
        await prepareResultTx(payload, fee, memo)
        state.currentUIState = UI_STATE.TX_SUCCESS
      } catch (e) {
        console.error(e)
        state.currentUIState = UI_STATE.TX_ERROR
      }
    }
    let resetFees = (): void => {
      state.tx.fees = []
    }


    // methods
    let switchToInvasion = (): void => {
      state.currentUIState = UI_STATE.INVASION
    }
    let switchToPrepare = (): void => {
      if (address.value) {
        state.currentUIState = UI_STATE.PREPARE
      }
    }
    let validTarget = computed<boolean>(() => {
      let valid: boolean

      try {
        valid = !!Bech32.decode(state.tx.target)
      } catch {
        valid = false
      }

      return valid
    })
    
    // computed
    let showInvasion = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.INVASION
    })
    let showPrepare = computed<boolean>(() => {
      return state.currentUIState === UI_STATE.PREPARE
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
      () =>{
        console.log(state.tx.target);
        console.log(hasCountryInfo.value);
        
        return !!state.tx.target && !hasCountryInfo.value
      }
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
      showInvasion,
      showPrepare,
      showWalletLocked,
      balances,
      isTxOngoing,
      isTxSuccess,
      isTxError,
      hasCountryInfo,
      ableToTx,
      // methods
      switchToPrepare,
      switchToInvasion,
      parseAmount,
      resetTx,
      sendInvastionStartTx,
      sendInvastionResultTx,
      sendPrepareStartTx,
      sendPrepareResultTx,
      resetFees,
      validTarget
    }
  }
})
</script>

<style src="./SpInvadeCountry.scss" scoped lang="scss">
</style>
