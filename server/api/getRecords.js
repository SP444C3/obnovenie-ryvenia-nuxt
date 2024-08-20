import Obnovenie from '../models/Obnovenie';

export default defineEventHandler(async (event) => {
    const obnovenie = await Obnovenie.find();
    return obnovenie;
});