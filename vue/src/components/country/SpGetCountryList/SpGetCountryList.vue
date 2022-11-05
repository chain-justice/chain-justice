<template>
  <div class="tx-list">
    <div class="title">Country List</div>
    <div v-if="newTxs" class="load-more" role="button" @click="loadNewItems">
      <template v-if="state.isNewTxLoading">
        <SpSpinner :size="16"></SpSpinner>
      </template>
      <template v-else>
        {{ showMoreText }}
      </template>
    </div>
    <div v-if="!address || Object.keys(txByMonth).length <= 0" class="empty">
      Country List is empty
    </div>
    <div v-else-if="Object.keys(txByMonth).length > 0" class="list">
      <div v-for="(txs, month, index) in txByMonth" :key="`${index}`">
        <h3 class="tx-list__subheading" v-text="getMonthGroup(month)"></h3>
        <SpCountryListItem
          v-for="(tx, i) in txs"
          :key="`${tx.hash}-${tx.timestamp}-${i}`"
          :tx="tx"
        />
      </div>
    </div>
    <div
      v-if="leftToShowMore"
      class="show-more"
      role="button"
      @click="showMoreItems"
    >
      Show more
      <span class="arrow-icon">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.0001 7.4001L0.600098 2.0001L2.0001 0.600098L6.0001 4.6001L10.0001 0.600098L11.4001 2.0001L6.0001 7.4001Z"
            fill="black"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

import { useAddress, useTxs } from '@starport/vue/src/composables'
import { TxForUI } from '@starport/vue/src/composables/useTxs'
import SpSpinner from '@starport/vue/src/components/SpSpinner'
import SpCountryListItem from '../SpCountryListItem'

export interface State {
  listSize: number
  listMaxSize: number
  isNewTxLoading: boolean
}

export let initialState: State = {
  listSize: 10,
  listMaxSize: 15,
  isNewTxLoading: false
}

export default defineComponent({
  name: 'SpGetCountryList',

  components: { SpSpinner, SpCountryListItem },

  async setup() {
    // store
    let $s = useStore()

    // state
    let state: State = reactive(initialState)

    // composables
    let { address } = useAddress({ $s })
    let { pager, normalize, newTxs, filterSupportedTypes } = await useTxs({
      $s,
      opts: { order: 'desc', realTime: true }
    })
    
    // computed
    let list = computed<TxForUI[]>(() => {
      return pager.value.page.value
        .filter(filterSupportedTypes)
        .map(normalize)
        .slice(0, state.listSize)
        .sort((a, b) => b.height - a.height)
    })
    let txByMonth = computed(() => {
      const groupByYear = groupBy('timestamp')
      return groupByYear(list.value)
    })
    let leftToShowMore = computed<boolean>(
      () =>
        state.listSize < state.listMaxSize &&
        pager.value.page.value.length > state.listSize
    )
    let showMoreText = computed<string>(
      () => `${newTxs.value} new ${newTxs.value > 1 ? 'items' : 'item'}`
    )

    // methods
    let loadNewItems = async () => {
      state.isNewTxLoading = true
      await pager.value.load()
      state.isNewTxLoading = !!newTxs.value
    }
    let showMoreItems = () => {
      state.listSize = state.listMaxSize
    }
    let getTxMonth = (timestamp): string =>
      new Date(timestamp).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long'
      })
    let groupBy = (key) => (array) =>
      array.reduce((acc, obj) => {
        const property = getTxMonth(obj[key])
        acc[property] = (acc[property] || []).concat(obj)
        return acc
      }, {})
    let getMonthGroup = (month) => {
      const currentYear = new Date().getFullYear()
      const monthYear = Number(month.replace(/\D/g, ''))

      return monthYear < currentYear ? month : month.replace(/[0-9]/g, '')
    }

    return {
      // state
      newTxs,
      // computed
      address,
      list,
      leftToShowMore,
      showMoreText,
      /// methods
      loadNewItems,
      showMoreItems,
      txByMonth,
      getTxMonth,
      getMonthGroup,
      state
    }
  }
})
</script>

<style src="./SpGetCountryList.scss" scoped lang="scss">
</style>
