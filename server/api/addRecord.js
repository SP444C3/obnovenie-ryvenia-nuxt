import { generateToken } from "../utils/tokenGenerator";

export default defineEventHandler(async (event) => {
  if (!verifyToken(event)) {
    setResponseStatus(event, 401);
    return { error: "Unauthorized" };
  }

  const { name } = await readBody(event);

  if (!name) {
    setResponseStatus(event, 400);
    return { error: "Bad request" };
  }

  const obnovenie = new Obnovenie({ name: name, token: generateToken() });
  const result = await obnovenie.save();
  
  return result;
});
