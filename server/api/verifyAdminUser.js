import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const { token } = getQuery(event);

  try {
    jwt.verify(token, useRuntimeConfig().AUTH_SECRET);
  } catch (e) {
    return false;
  }

  if (jwt.verify(token, useRuntimeConfig().AUTH_SECRET)) {
    return true;
  }
});
