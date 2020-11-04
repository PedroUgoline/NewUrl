import { Url } from '../entity/Url';
import { nanoid } from 'nanoid';
import { createQueryBuilder } from 'typeorm';


export const getAllUrl = async () => {
    return await Url.find();
};

export const getUrlByIdentifier = async (urlIndentifier) => {
    return await Url.findOne({urlIndentifier});
};

export const createUrl = async ({url, urlIndentifier}) =>{
    const urlCreate = new Url({
        url, 
        urlIndentifier: urlIndentifier || getIdentifier()
     });
 
    await urlCreate.save(); 

    return urlCreate;
};

export const updateUrl = async ({id, url, urlIndentifier})=> {
    const urlUpdate = await createQueryBuilder(Url)
    .update()
    .where(
        {
            id
        }
    )
    .set(
        {
            url, 
            urlIndentifier: urlIndentifier || getIdentifier()
        }
    )
    .execute();

    return urlUpdate;
};

const getIdentifier = () => {
    return nanoid(10);
};