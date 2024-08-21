import Obnovenie from '../models/Obnovenie';

export default defineEventHandler(async (event) => {

    /* const { adminToken } = getQuery(event);
    if (adminToken !== useRuntimeConfig().MANAGE_TOKEN) {
        setResponseStatus(event, 401, 'Unauthorized');
        return {error: 'Unauthorized, token invalid or missing'};
    } */
    
    const obnovenie = await Obnovenie.find();
    return obnovenie;
    
});