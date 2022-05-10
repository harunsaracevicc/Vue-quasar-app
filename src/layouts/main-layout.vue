<template>
  <q-layout view="lHr lpR lFr " >


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
                <q-route-tab to="/page1" label="Home" />
                <q-route-tab to="/products" label="Products" />
                <q-route-tab to="/page3" label="Contact" />
                <q-route-tab to="/page4" label="About us"  />
 
                <div class="q-pa-sm q-gutter-sm">
                  <q-btn round color="primary" icon="shopping_cart" />
                </div>
                
              
              </div>
          </q-tabs>
        </div>

      </q-header>
      
      

      <q-layout
        class="q-layout--main  "
        style="min-height: auto ">
          <q-page-container>   
           <q-layout>
            <div class="bg-dark shadow-5 ">
              
                  <h2 class="intro-text text-white q-pa-xl shadow-15  bg-transparent " >
                    <q class="text-dark "><span class="text-white q-ml-md">Technology is best <span class="q-ml-xl">when it <span class="text-dark">brings</span></span> <span class="q-ml-xl">people together.</span></span></q>
                  </h2>
             
              <div class="intro-bg ">
                
              </div>
              
            </div>
          </q-layout>
           
            
          <q-separator></q-separator>

              <q-page class="q-pa-sm">
                <div class="q-gutter-md row items-start">
                </div>
                <div class="q-pa-xl q-ma-xl">
                  <div class="row q-pa-xl justify-center full-height full-width text-center  ">
                    
                      <div>
                        <h2 class="text-dark">Bestseller</h2>
                        <div class="row justify-between" style="gap: 80px 30px">

                          <q-card class="my-card shadow-5 row"  bordered>
                                  <q-img
                                  class="q-mt-xs"
                                    src="../assets/iphone13promax.png"
                                  />
                                  

                                      <q-card-section class="row justify-center " style="gap:10px">
                                        
                                        <div class="text-overline text-orange-9">White</div>
                                        <div class="text-h6 q-mt-sm q-mb-xs">Iphone 13 Pro Max</div>
                                        <q-btn color="primary" label="Add to cart" outline ></q-btn>
                                        
                                      </q-card-section>

                                      <q-card-actions class="row item-between">
                                        
                                          <q-btn flat color="grey" label="Read more" />

                                          <q-btn
                                          class="read-more-downkey"
                                            color="grey"
                                            round
                                            flat
                                            dense
                                            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                            @click="expanded = !expanded"
                                          />
                                      
                                      </q-card-actions>

                                      <q-slide-transition>
                                        <div v-show="expanded">
                                          <q-separator />
                                          <q-card-section class="text-subitle2">
                                            {{ lorem }}
                                          </q-card-section>
                                        </div>
                                      </q-slide-transition>
                          </q-card>

                          <q-card class="my-card shadow-5 row"  bordered>
                                          <q-img class="q-mt-sm"
                                            src="../assets/iphone12promax.png"
                                          />


                                              <q-card-section class="row justify-center " style="gap:10px">
                                                
                                                <div class="text-overline text-orange-9">Black</div>
                                                <div class="text-h6 q-mt-sm q-mb-xs">Iphone 12 Pro Max</div>
                                                <q-btn color="primary" label="Add to cart" outline ></q-btn>
                                                
                                              </q-card-section>

                                              <q-card-actions class="row item-between">
                                                
                                                  <q-btn flat color="grey" label="Read more" />

                                                  <q-btn
                                                  
                                                  class="read-more-downkey"
                                                    color="grey"
                                                    round
                                                    flat
                                                    dense
                                                    :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                    @click="expanded = !expanded"
                                                  />
                                              
                                              </q-card-actions>

                                              <q-slide-transition>
                                                <div v-show="expanded">
                                                  <q-separator />
                                                  <q-card-section class="text-subitle2">
                                                    {{ lorem }}
                                                  </q-card-section>
                                                </div>
                                              </q-slide-transition>
                          </q-card>

                          <q-card class="my-card shadow-5 row"  bordered>
                                          <q-img 
                                            class="q-mt-sm"
                                            src="../assets/iphone11promax.png"
                                          />

                                                
                                              <q-card-section class="row justify-center " style="gap:10px">
                                                
                                                <div class="text-overline text-orange-9" style="min-width:100%">Grey</div>
                                                <div class="text-h6 q-mt-sm q-mb-xs " > Iphone 11 Pro Max</div>
                                                <q-btn
                                                  
                                                  color="primary"
                                                  label="Add to cart"
                                                  outline
                                                  
                                                  ></q-btn>
                                                
                                                
                                              </q-card-section>

                                              <q-card-actions class="row item-between">
                                                
                                                  <q-btn flat color="grey" label="Read more" />

                                                  <q-btn
                                                  class="read-more-downkey"
                                                    color="grey"
                                                    round
                                                    flat
                                                    dense
                                                    :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                                                    @click="expanded = !expanded"
                                                  />
                                              
                                              </q-card-actions>

                                              <q-slide-transition>
                                                <div v-show="expanded">
                                                  <q-separator />
                                                  <q-card-section class="text-subitle2">
                                                    {{ lorem }}
                                                  </q-card-section>
                                                </div>
                                              </q-slide-transition>
                          </q-card>

                        </div>        
                      </div>

                      <q-separator></q-separator>
                        
             
                  </div>
                </div>
              </q-page>
          </q-page-container>
      </q-layout>

<q-separator></q-separator>

 


  </q-layout>


</template>

<script>
import { ref } from 'vue'



export default {

  setup () {
   
    return {
        small: ref(false),
        mediumlog: ref(false),
        mediumreg: ref(false),
        fullWidth: ref(false),
        fullHeight: ref(false),
        expanded: ref(false),
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        slide: ref(1),
        autoplay: ref(true),
    }
  },
}

 
</script>

<style>


.intro-text{

  opacity: 1;
  z-index: 1;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(0%, -50%);
  text-transform: uppercase;
  
}


.intro-bg{
  width: 100%;
  height: 100vh;
  background: url(../assets/header-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.6;

}

.intro-text{
  position: absolute;
}




.read-more-downkey{
  position: absolute;
  right: 0;
}

q-card{
  justify-content: center;
}

.my-card{
  width: 100%;
  max-width: 250px;
  
}
.login-btn{
  background-color: #1976D2;
  color:#fff;
  text-decoration: none;
  text-transform: none;
}



  .q-header .q-tab__content, .q-footer .q-tab__content {
    /* min-width: 128px; */
    min-width: 80px;
}

body.desktop .q-focus-helper{
  border-radius: 10px !important;
 
}
body.desktop .q-focus-helper{
  color: #fff;
  z-index: 1;
}


</style>