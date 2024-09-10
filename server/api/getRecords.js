import Obnovenie from "../models/Obnovenie";
import { verifyToken } from "#imports";

export default defineEventHandler(async (event) => {
  if (!verifyToken(event)) {
    setResponseStatus(event, 401);
    return { error: 'Unauthorized' }
  }

  const obnovenie = await Obnovenie.find();
  return obnovenie;
});
