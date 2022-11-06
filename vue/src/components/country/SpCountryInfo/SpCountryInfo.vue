<template>
  <section>
    <header class="country-info-header">
      <h2 class="title">Your Country Info</h2>
      <!-- <div v-if="balances.assets.length" class="country-info-header__search">
        <div class="country-info-header__search-content">
          <div class="search-container">
            <span class="search-icon">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 12.5C9.81371 12.5 12.5 9.81371 12.5 6.5C12.5 3.18629 9.81371 0.5 6.5 0.5C3.18629 0.5 0.5 3.18629 0.5 6.5C0.5 9.81371 3.18629 12.5 6.5 12.5Z"
                  stroke="black"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5002 14.5002L10.7422 10.7422"
                  stroke="black"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input
              ref="searchInput"
              v-model="searchQuery"
              type="search"
              autocomplete="off"
              placeholder="Search assets"
              class="input--search"
              @input="resetDisplayLimit"
            />
            <span
              v-if="searchQuery"
              class="clear-icon"
              @click.prevent="resetSearch"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C12.4183 16 16 12.4182 16 8C16 3.5818 12.4183 0 8 0C3.58172 0 0 3.5818 0 8C0 12.4182 3.58172 16 8 16ZM11.5442 4.45588C11.8382 4.74977 11.8382 5.22656 11.5442 5.52068L9.06483 8L11.5442 10.4793C11.8382 10.7734 11.8382 11.2502 11.5442 11.5441C11.2501 11.8382 10.7734 11.8382 10.4793 11.5441L8 9.0648L5.52065 11.5441C5.22662 11.8382 4.74989 11.8382 4.45582 11.5441C4.16179 11.2502 4.16179 10.7734 4.45582 10.4793L6.93517 8L4.45582 5.52068C4.16179 5.22656 4.16179 4.74977 4.45582 4.45588C4.74986 4.16176 5.22659 4.16176 5.52065 4.45588L8 6.9352L10.4793 4.45588C10.7734 4.16176 11.2501 4.16176 11.5442 4.45588Z"
                  fill="black"
                  fill-opacity="0.20"
                />
              </svg>
            </span>
          </div>
        </div>
      </div> -->
    </header>
    <table class="country-info-table">
      <thead class="country-info-table__thead">
        <tr>
          <td>parameter</td>
          <td class="country-info-table__align-right">value</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr
          class="country-info-table__row"
        >
          <td class="country-info-table__denom">
            <div class="sp-denom-name">
              <span>country_address</span>
            </div>
          </td>
          <td class="country-info-table__amount">
            <div class="copy">{{shotenCountryAddress}}</div>
          </td>
          <td><SpClipboard v-if="countryAddress" :text="countryAddress" /></td>
        </tr>
        <!-- <tr
          class="country-info-table__row"
        >
          <td class="country-info-table__denom">
            <div class="sp-denom-name">
              <span>boss</span>
            </div>
          </td>
          <td class="country-info-table__amount">
            {{address}}
          </td>
        </tr> -->
        <!-- <tr
          class="country-info-table__row"
        >
          <td class="country-info-table__denom">
            <div class="sp-denom-name">
              <span>citizens</span>
            </div>
          </td>
          <td class="country-info-table__amount">
            {{nmembers}}
          </td>
        </tr> -->
        <tr
          class="country-info-table__row"
        >
          <td class="country-info-table__denom">
            <div class="sp-denom-name">
              <span>foods</span>
            </div>
          </td>
          <td class="country-info-table__amount">
            {{food}}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import { useAddress } from '@starport/vue/src/composables'
import SpDenom from '@starport/vue/src/components/SpDenom'
import useCountry from '../../../composables/useCountry'
import SpClipboard from '@starport/vue/src/components/SpClipboard'
import {shortenAddress} from '../../../utils/wallet'

export default defineComponent({
  name: 'SpCopuntryInfo',
  components: { SpDenom, SpClipboard },


  async setup() {
    // store
    let $s = useStore()

    // composables
    let { address } = useAddress({ $s })
    let { belongingCountry, hasCountryInfo } = await useCountry({ $s })

    let shotenCountryAddress = computed<string>(
      () => shortenAddress(belongingCountry.value?.index)
    )
    
    let countryAddress = computed<string>(
      () => belongingCountry.value?.index || ""
    )

    let ownerAddress = computed<string>(
      () => shortenAddress(belongingCountry.value?.address)
    )

    let nmenbers = computed<string>(
      () => belongingCountry.value?.nmembers || ""
    )

    let food = computed<string>(
      () => belongingCountry.value?.food || ""
    )




    return {
      address,
      belongingCountry,
      hasCountryInfo,
      shotenCountryAddress,
      countryAddress,
      ownerAddress,
      nmenbers,
      food
    }
  }
})
</script>

<style src="./SpCountryInfo.scss" lang="scss" scoped>
</style>
