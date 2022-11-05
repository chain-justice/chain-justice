<template>
  <Suspense v-if="address">
    <template #default>
      <SpGetCountryList />
    </template>
    <template #fallback>
      <div class="tx-list">
        <div class="title">Country List</div>
        <div v-for="n in 4" :key="n" class="loading__row">
          <div class="loading__col">
            <span class="loading__avatar"></span>
            <span class="loading__denom"></span>
          </div>

          <div class="loading__col loading__col--justify-end">
            <span class="loading__amount"></span>
          </div>
        </div>
      </div>
    </template>
  </Suspense>
  <div v-else class="tx-list">
    <div class="title">Country List</div>
    <div class="empty">Country List is empty</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import { useAddress } from '@starport/vue/src/composables'
import SpGetCountryList from '../SpGetCountryList'

export default defineComponent({
  // TODO　このコンポーネントは SpTokenTransferList と被っているので一般化する
  name: 'SpTokenTransferList',

  components: { SpGetCountryList },

  setup() {
    let $s = useStore()

    // composables
    let { address } = useAddress({ $s })

    return { address }
  }
})
</script>

<style src="./SpCountryList.scss" lang="scss" scoped></style>
