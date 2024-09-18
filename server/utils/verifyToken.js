import jwt from "jsonwebtoken";

export function verifyToken(req) {
  const token = req.headers.get("cookie").replace("token=", "");

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
