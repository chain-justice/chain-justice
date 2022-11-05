import { App as Application } from 'vue'

import { registerComponent } from '@starport/vue/src/utils/plugins'
// @ts-ignore
import SpCountryInfo from './SpCountryInfo.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpCountryInfo)
  }
}

export default SpCountryInfo
