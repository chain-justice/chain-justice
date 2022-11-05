<template>
  <div class="tx-row">
    <div class="tx-container">
      <div class="tx-icon">
      </div>

      <div style="width: 16px; height: 100%" />

      <div class="tx-info">
        <div class="tx-direction" v-if="index?.length">
          address: {{ index }}
        </div>
        <div class="tx-meta" v-if="address?.length">
          boss: {{ address }}
        </div>
      </div>
      <div class="tx-payload">
        <template v-if="food?.length">
          <span
            class="tx-amount"
          >
            foods: {{food}}
            <!-- <SpDenom :denom="a.denom" /> -->
          </span>
        </template>
        <!-- 国に所属するメンバーがレスポンスで帰るようになったらコメントアウトはずす -->
        <!-- <div class="tx-denom" v-if="nmenbers?.length">
          members: {{ nmenbers }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SpDenom from '@starport/vue/src/components/SpDenom'
import { CountryForUI } from '../../../composables/useCountryList'


export default defineComponent({
  name: 'SpCountryListItem',

  props: {
    country: {
      type: Object as PropType<CountryForUI>,
      required: true
    }
  },

  components: { SpDenom },

  setup(props) {

    return {
      ...props.country
    }
  }
})
</script>

<style src="./SpCountryListItem.scss" scoped lang="scss"></style>
