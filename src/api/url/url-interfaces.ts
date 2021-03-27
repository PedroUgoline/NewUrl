import { Request } from "@hapi/hapi";

export interface RedirectRequest extends Request{
    params: {
        url_identifier:string;
    }
}

export interface CreateUrlRequest extends Request {
    payload:{
        urlIndentifier?: string;
        url:string;
    }
}


export interface CreateUserRequest extends Request {
    payload:{
        email: string;
        password: string;
        username: string;
    }
}

export interface UpdateUrlRequest extends Request {
    params: {
        id:string;
    }
    payload:{
        urlIndentifier?: string;
        url:string;
    }
}