import { createConnection } from "typeorm";


export const createConnectionToDB = async () => {
    await createConnection();
};