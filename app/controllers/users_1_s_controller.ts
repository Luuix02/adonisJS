import type { HttpContext } from '@adonisjs/core/http'

export default class Users1SController {
  /**
   * Display a list of resource
   * mostrar una lista de recursos
   en este caso me mostrara la lista de los usuarios
   */
  async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   * Crear un nuevo registro
   * se puede llamar a la db la info del usuario, cualquier atributo puede ser llamado en este paso
   * cosas externas para crear un nuevo registro o data en la db
   * 
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   * cuando el formulario se carga, lo hace a través de un btn para poder guardar esa info en la db
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   * es como buscar por el id, trae la data de un unico usuario
   * 
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   * trae los recursos para hacer la accion de editar
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   * 
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   * eliminar
   */
  async destroy({ params }: HttpContext) {}
}