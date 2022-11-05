<template>
  <div class="tx-row">
    <div class="tx-container">
      <div class="tx-icon" :class="tx?.dir">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 13V3"
            stroke="black"
            stroke-width="1.6"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 6L8 2L12 6"
            stroke="black"
            stroke-width="1.6"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div style="width: 16px; height: 100%" />

      <div class="tx-info">
        <div class="tx-direction">
          {{ dirDescription }}
        </div>
        <div class="tx-meta">
          {{ txDate }}
        </div>
      </div>
      <div class="tx-payload">
        <template v-if="tx.amount.length">
          <span
            v-for="(a, index) in tx.amount"
            :key="`${a.amount}-${a.denom}-${index}`"
            class="tx-amount"
            :class="tx?.dir"
          >
            {{ amountSign + ' ' + a.amount }}
            <SpDenom :denom="a.denom" />
          </span>
        </template>
        <div class="tx-denom">
          {{ addrDesc + ' ' + shortAddr }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

import { TxForUI } from '@starport/vue/src/composables/useTxs'
import SpDenom from '@starport/vue/src/components/SpDenom'

enum DIR_DESC {
  self = 'Self',
  in = 'Receive',
  out = 'Send'
}

enum ADDR_DESC {
  self = 'self',
  in = 'from',
  out = 'to'
}

enum AMOUNT_SIGN {
  self = '',
  in = '+',
  out = '-'
}

export default defineComponent({
  name: 'SpCountryListItem',

  props: {
    tx: {
      type: Object as PropType<TxForUI>,
      required: true
    }
  },

  components: { SpDenom },

  setup(props) {
    // computed
    let dirDescription = computed<string>(() => DIR_DESC[props.tx.dir])
    let addrDesc = computed<string>(() => ADDR_DESC[props.tx.dir])
    let addr = computed<string>(() =>
      props.tx.dir === 'in' ? props.tx.sender : props.tx.receiver
    )
    let shortAddr = computed<string>(
      () => addr.value.substring(0, 10) + '...' + addr.value.slice(-4)
    )
    let txDate = computed<string>(() => {
      let date = new Date(props.tx.timestamp)
      return date.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })
    })
    let amountSign = computed<string>(() => AMOUNT_SIGN[props.tx.dir])

    return {
      //computed
      addrDesc,
      shortAddr,
      dirDescription,
      amountSign,
      txDate
    }
  }
})
</script>

<style src="./SpCountryListItem.scss" scoped lang="scss"></style>
