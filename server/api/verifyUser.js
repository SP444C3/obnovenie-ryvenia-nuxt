import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const { token } = getQuery(event);

  if (jwt.verify(token, useRuntimeConfig().AUTH_SECRET)) {
    return true;
  }

  return false;
})
