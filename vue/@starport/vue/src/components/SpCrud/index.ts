import { App as Application } from 'vue'

import { registerComponent } from '../../utils/plugins'
// @ts-ignore
import C from './SpCrud.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, C)
  }
}

export default C
