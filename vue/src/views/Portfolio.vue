<template>
  <div class="container">
    <div class="row row-sm-revers">
      <div class="col-md-6">
        <SpAssets />
        <SpTokenTransferList />
      </div>
      <div class="col-md-5 col-lg-4 col-md-offset-1 col-lg-offset-2">
        <SpTokenTransfer />
        <SpFaucet />
      </div>
    </div>
  </div>
</template>

<script>
import { SpAssets, SpTokenTransfer, SpTokenTransferList } from '@starport/vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { SpFaucet } from '../components/faucet'

export default {
  name: 'Portfolio',

  components: { SpTokenTransfer, SpAssets, SpTokenTransferList, SpFaucet },

  setup() {
    // store
    const $s = useStore()
    
    // computed
    const address = computed(() => $s.getters['common/wallet/address'])
    

    return {
      address
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  flex-grow: 1;
  padding: 20px;
}
</style>
