import jwt from "jsonwebtoken";
import { defineEventHandler, setCookie } from "h3";

export default defineEventHandler((event) => {
  const { password: providedPassword } = getQuery(event);
  if (providedPassword !== useRuntimeConfig().MANAGE_TOKEN) {
    return { error: "Nesprávne heslo" };
  } else {
    const token = jwt.sign({ user: "admin" }, useRuntimeConfig().AUTH_SECRET, {
      expiresIn: "1d",
    });
    setCookie(event, "token", token, {
      maxAge: 60 * 60 * 24 * 7,
      secure: true,
      httpOnly: true,
    });
    return { verified: true };
  }
});
