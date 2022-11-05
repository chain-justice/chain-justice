import { App as Application } from 'vue'

import { registerComponent } from '@starport/vue/src/utils/plugins'
// @ts-ignore
import C from './SpBelongCountry.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, C)
  }
}

export default C
