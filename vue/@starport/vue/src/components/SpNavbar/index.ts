import { App as Application } from 'vue'

import { registerComponent } from '@starport/vue/src/utils/plugins'
// @ts-ignore
import SpNavbar from './SpNavbar.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, SpNavbar)
  }
}

export default SpNavbar
