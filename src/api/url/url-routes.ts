import { Server } from "@hapi/hapi"
import * as Validations from './url-validations'
import * as Controller from './url-controller'



export const initRoutes = (server: Server) => {
    server.route([
        {
            method: 'GET',
            path: '/urls',
            handler: Controller.getUrls,
        },
        {
            method: 'GET',
            path: '/urls/{url_identifier}',
            handler: Controller.redirectToUrl,
            options: {
                validate: {
                    params: Validations.UrlIndentifierValidatitor
                }
            }
        },
        {
            method: 'POST',
            path: '/urls',
            handler: Controller.createUrl,
            options: {
                validate: {
                    payload: Validations.UrlPayload
                }
            }
        },
        {
            method: 'PUT',
            path: '/urls/{id}',
            handler: Controller.updateUrl,
            options: {
                validate: {
                    params: Validations.UrlId,
                    payload: Validations.UrlPayload
                }
            }
        },
        {
            method: 'POST',
            path: '/createUser',
            handler: Controller.createUser,
            options: {
                validate: {
                    payload: Validations.CreateUser
                }
            }
        },
        {
            method: 'POST',
            path: '/login',
            handler: Controller.Login,
            options: {
                validate: {
                    payload: Validations.Login
                }
            }
        },
    ])
};