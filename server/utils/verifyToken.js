import jwt from "jsonwebtoken";
import { parseCookies } from 'h3'


export function verifyToken(req) {
 // const token = req.headers.get("cookie").replace("token=", "");
  const cookies = parseCookies(req)
  const token = cookies?.token

  if (!token) {
    return false;
  }

  try {
    jwt.verify(token, useRuntimeConfig().AUTH_SECRET);
  } catch (e) {
    return false;
  }

  if (jwt.verify(token, useRuntimeConfig().AUTH_SECRET)) {
    return true;
  }
}
