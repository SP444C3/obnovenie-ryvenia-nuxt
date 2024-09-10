import jwt from 'jsonwebtoken';

export function verifyToken(req) {
  const token = req.headers.get('cookie').replace("token=", '');

  if (jwt.verify(token, useRuntimeConfig().AUTH_SECRET)) {
    return true;
  }
  return false;

} 