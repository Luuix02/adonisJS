/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/name', async () => {
  return {
    name: 'pruebita',
  }
})

router.get('/telefono/:id', async ({ params }) => {
  return {
    phone: params.phone,
    name: params.name
  }
})

router.get('/posts/:id/comments/:commentId', ({ params }) => {
  
  console.log(params.id)
  console.log(params.commentId)
})

router
  .group(() => {
    router.get('users', () => {})
    router.get('payments', () => {})
  })
  .prefix('/api')

