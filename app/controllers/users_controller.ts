// import type { HttpContext } from '@adonisjs/core/http'
import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'

import UserService from '#services/user_service'


export default class UsersController {
    @inject()
    index(_ctx: HttpContext, user_service: UserService) {
        let users = user_service.all()
      return users
    }
  }
  
    

