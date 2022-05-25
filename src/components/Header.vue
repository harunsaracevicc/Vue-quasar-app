<template>
  <q-header bordered class="bg-dark row justify-between shadow-8 items-center "
      reveal
      reveal-offset="100">
        <div>
        <q-toolbar class="q-pt-sm q-pb-sm">
          <q-icon name="polymer" size="3rem" color="white" class="q-ml-lg" style="cursor:pointer"/>
        </q-toolbar>
        </div>

        <div class="row nav items-center" style="gap:10px" > 
          <q-tabs class="q-pt-sm q-pb-sm q-mr-lg row" >
              <div class="row item text-white items-center" style="padding-right:10px ">
                <q-route-tab to="/home" label="Home" />
                <q-route-tab to="/products" label="Products" />
                <q-route-tab to="/page3" label="Contact" />
                <q-route-tab to="/page4" label="About us"  />
 
                <div class="q-pa-sm q-gutter-sm">
                  
                  <q-btn-dropdown rounded color="primary" icon="shopping_cart"  >
                    
                    
                  
                    <q-list>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Photos</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                  <q-badge color="red" text-color="black" >{{count}} </q-badge>

                  
                </div>
                  
                
              
              </div>
          </q-tabs>
        </div>

      </q-header>
</template>

<script>

</script>
