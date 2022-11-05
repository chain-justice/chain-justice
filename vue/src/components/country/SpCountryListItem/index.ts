import { App as Application } from 'vue'

import { registerComponent } from '@starport/vue/src/utils/plugins/index'
// @ts-ignore
import C from './SpCountryListItem.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, C)
  }
}

export default C
