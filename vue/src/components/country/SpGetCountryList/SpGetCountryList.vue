<template>
  <div class="tx-list">
    <div class="title">Country List</div>
    <div v-if="!address || list.length <= 0" class="empty">
      Country List is empty
    </div>
    <div v-else-if="list.length > 0" class="list">
      <div v-for="(country, index) in list" :key="`${index}`">
        <SpCountryListItem
          :key="country.index"
          :country="country"
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

import { useAddress  } from '@starport/vue/src/composables'
import SpSpinner from '@starport/vue/src/components/SpSpinner'
import SpCountryListItem from '../SpCountryListItem'
import { useCountryList } from '../../../composables'
import { CountryForUI } from '../../../composables/useCountryList'

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
    let { pager, normalize } = await useCountryList({
      $s,
      opts: { order: 'desc', realTime: true }
    })
    
    // computed
    let list = computed<CountryForUI[]>(() => {
      return pager.value.page.value
        .map(normalize)
        .slice(0, state.listSize)
    })
    
    let leftToShowMore = computed<boolean>(
      () =>
        state.listSize < state.listMaxSize &&
        pager.value.page.value.length > state.listSize
    )

    // methods
    let reloadItems = async () => {
      state.isNewTxLoading = true
      await pager.value.load()
      state.isNewTxLoading = false
    }
    let showMoreItems = () => {
      state.listSize = state.listMaxSize
    }


    return {
      // computed
      address,
      list,
      leftToShowMore,
      /// methods
      showMoreItems,
      state
    }
  }
})
</script>

<style src="./SpGetCountryList.scss" scoped lang="scss">
</style>
