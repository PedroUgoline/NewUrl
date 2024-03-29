import { ResponseToolkit } from '@hapi/hapi'
import { CreateUrlRequest, CreateUserRequest, RedirectRequest, UpdateUrlRequest } from './url-interfaces';
import * as UrlService from '../../service/url-service'
import * as UserService from '../../service/user-service'
import * as Boom from '@hapi/boom';


export const getUrls = async (request, responseToolkit: ResponseToolkit) => {
    const urls = await UrlService.getAllUrl();

    return responseToolkit.response(urls).code(200);
}

export const redirectToUrl = async (request: RedirectRequest, responseToolkit: ResponseToolkit) => {
    const { url_identifier } = request.params;
    const url = await UrlService.getUrlByIdentifier(url_identifier);

    if (!url) {
        throw Boom.notFound(`Url of redirect not found of identifier -> ${url_identifier}`);
    }

    const data = await UrlService.addAccesInUrl(url.id, url.count);

    return responseToolkit.redirect(url.url)
}

export const createUrl = async (request: CreateUrlRequest, responseToolkit: ResponseToolkit) => {
    const { url, urlIndentifier } = request.payload;

    const urlCreate = await UrlService.createUrl({
        url,
        urlIndentifier
    });


    return responseToolkit.response(urlCreate).code(201);

};
export const createUser = async (request: CreateUserRequest, responseToolkit: ResponseToolkit) => {
    const { email, password, username } = request.payload;

    const userCreate = await UserService.createUser({
        email,
        password,
        username
    });
    
    userCreate.save();

    return responseToolkit.response(userCreate).code(201);
};

export const Login = async (request: CreateUserRequest, responseToolkit: ResponseToolkit) => {
    const { email, password } = request.payload;

    const response = await UserService.getUser({email, password});

    if (!response){
        return responseToolkit.response("User not found or wrong password").code(404);
    }

    return responseToolkit.response(response).code(201);
};


export const updateUrl = async (request: UpdateUrlRequest, responseToolkit: ResponseToolkit) => {
    const { url, urlIndentifier } = request.payload;
    const { id } = request.params;


    const urlUpdate = await UrlService.updateUrl({
        id,
        url,
        urlIndentifier
    });

    return responseToolkit.response(urlUpdate).code(201);

};


