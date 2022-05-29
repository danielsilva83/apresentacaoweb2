import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from "@ioc:Adonis/Core/View";

export default class ViewGlob {
  public async handle ({request}: HttpContextContract, next: () => Promise<void>) {
    View.global('csrfField', () => '<input type="hidden" name="_csrf" value="'+ request.csrfToken + '">')
    View.global('csrf_Field', '<input type="hidden" name="_csrf" value="'+ request.csrfToken + '">')
    View.global('csrfToken', request.csrfToken)
    // code for middleware goes here. ABOVE THE NEXT CALL
    await next()
  }
}