/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

//importancion normal
import router from '@adonisjs/core/services/router'
//importacion perezosa lazy routing usando funcion de flecha sin nombre
const UsersController = () => import('#controllers/users_controller')
const Users1SController = () => import('#controllers/users_1_s_controller')


router.get('users', [UsersController, 'index'])



router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/name',() => {
  return {
    name: 'pruebita',
  }
})

router.get('/recetas/:categoria',  ({ params }) => {
  console.log(params.categoria)
  console.log(params['*'])
  return {
    categoria: params.categoria,
    recipes: params['*']
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

  //para crear las rutas de todos los metodos
  router.resource('users1' , Users1SController)

