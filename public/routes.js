module.exports = {

  configRouter: function (router) {

    router.map({
      '/home': {
        component: require('./pages/home.vue'),
        subRoutes: {
          '/': {
            component: require('./pages/home/home.vue')
          }
        }
      },
      '/discipline': {
        component: require('./pages/discipline.vue'),
        subRoutes: {
          '/': {
            component: require('./pages/discipline/index.vue')
          },
          '/:id_discipline': {
            component: require('./pages/discipline/show.vue')
          }
        }
      }
    })

    router.alias({
      '': '/home'
    })
  }
}
