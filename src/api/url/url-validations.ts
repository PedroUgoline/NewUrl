import * as Joi from '@hapi/joi';


export const UrlId = Joi.object({
    id: Joi.string().uuid().required(),
});

export const UrlPayload = Joi.object({
    urlIndentifier : Joi.string().trim().token().optional(),
    url: Joi.string().trim().uri().optional()
});

export const CreateUser = Joi.object({
    email : Joi.string().trim(),
    password: Joi.string().trim()
});
export const Login = Joi.object({
    email : Joi.string().trim(),
    password: Joi.string().trim()
});
export const UrlIndentifierValidatitor = Joi.object({
    url_identifier : Joi.string().trim().token().required()
});