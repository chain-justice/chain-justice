<template>
    <div class="container">
      <div class="row row-sm-revers">
        <div class="col-md-6">
          <Suspense>
            <template #default>
              <SpCountryInfo />
            </template>
            <template #fallback>
              <div>Loading</div>
            </template>
          </Suspense>
          <SpCountryList />
        </div>
        <div class="col-md-5 col-lg-4 col-md-offset-1 col-lg-offset-2">
          <Suspense>
            <template #default>
              <SpFundCountry />
            </template>
            <template #fallback>
              <div class="tx-list">
                <div class="title">Country</div>
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
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { SpFundCountry, SpCountryInfo, SpCountryList } from '../components/country'
  import { useBelongings } from '../composables'
  
  export default defineComponent(    
    {
      name: 'Country',
    
      components: { SpFundCountry, SpCountryList, SpCountryInfo },
    
      setup() {
        // store
        let $s = useStore()
        
        // composable
        let {belonging, hasCountryInfo} = useBelongings({ $s })
    
        // computed
        let address = computed(() => $s.getters['common/wallet/address'])
        

        return {
          address,
          belonging,
          hasCountryInfo,
        }
      }
    }
  )
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
  