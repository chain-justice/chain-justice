<template>
  <Suspense>
    <template #default>
      <SpRequestFaucet />
    </template>
    <template #fallback>
      <div class="tx-list">
        <div class="title"></div>
      </div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@starport/vue/node_modules/vuex'

import { useAddress } from '@starport/vue/src/composables'
import SpRequestFaucet from '../SpRequestFaucet'

export default defineComponent({
  // TODO　このコンポーネントは SpTokenTransferList と被っているので一般化する
  name: 'SpTokenTransferList',

  components: { SpRequestFaucet },

  setup() {
    let $s = useStore()

    // composables
    let { address } = useAddress({ $s })

    return { address }
  }
})
</script>

<style src="./SpFaucet.scss" lang="scss" scoped></style>
