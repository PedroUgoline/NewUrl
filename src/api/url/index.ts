import { Server } from '@hapi/hapi';
import { initRoutes } from './url-routes';



export const init = (server: Server)=>{
    initRoutes(server);
}