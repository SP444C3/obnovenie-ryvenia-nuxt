import Obnovenie from "../models/Obnovenie";

export default defineEventHandler(async (event) => {
  const { token, id } = getQuery(event);

  try {
    if (!token || !id) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad request"
      })
    }

    let obnovenie

    try{
    obnovenie = await Obnovenie.findById(id);
    } catch (e) {
      throw createError({
        statusCode: 404,
        statusMessage: "Not found"
      })
    }

    if (!obnovenie) {
      throw createError({
        statusCode: 404,
        statusMessage: "Not found"
      })
    }

    if (obnovenie.token !== token) {
     throw createError({
       statusCode: 401,
       statusMessage: "Unauthorized"
     })
    }

    return obnovenie;
  } catch (e) {
    return e;
  }
});
