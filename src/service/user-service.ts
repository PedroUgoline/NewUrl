import { User } from '../entity/User';

export const createUser = async ({email, password, username}) =>{
    const userCreate = new User({
        email, 
        password,
        username
     });
 
    await userCreate.save(); 

    return userCreate;
};
export const getUser = async ({email, password}) =>{
    const user = await User.findOne({email});
    if (user?.password != password){
        return null;
    }
    return user;
};
