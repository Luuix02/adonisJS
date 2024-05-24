import UserService from '#services/user_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'


export default class Users1SController {

   @inject()
  async index({ response }: HttpContext,user_service: UserService) {
    const users = await user_service.all()
    return response.json(users)
  }

  async create({}: HttpContext) {}


  async store({ request, response }: HttpContext, user_service: UserService) {
    const data = request.only(['name','hincha'])
    const user = await user_service.create(data)
    return response.status(200).json(user)
  }

  async show({ params, response }: HttpContext) {
    const user = await User.find(params.id)
    if(!user){
      return response.status(404).json({message: 'User not found'})
    }
    return response.json(user)
  }

  async edit({ params }: HttpContext) {}

 
  async update({ params, request, response }: HttpContext) {
    const data = request.only(['fullName', 'email','password'])
    const user = await User.find(params.id)
    if(!user){
      return response.status(404).json({message: 'User not found'})
    }
    user.merge(data)
    await user.save()
    return response.json(user)
  }


  async destroy({ params, response }: HttpContext) {
    const user = await User.find(params.id)
    if(!user){
      return response.status(404).json({message: 'User not found'})
    }
    await user.delete()
    return response.status(204).json(null)
  }
}