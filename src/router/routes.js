
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/main-layout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      
    ]
  },

  {
    path: '/products',
    component: () => import('src/layouts/products-layout.vue'),
    children: [
      { path: '', component: () => import('pages/products.vue') }
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
