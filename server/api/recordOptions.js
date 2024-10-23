import { useFetch } from "nuxt/app";
import validOptions from "../utils/validOptions";

export default defineEventHandler(async (event) => {
  
  const userInput = await readBody(event);

  if (!inputIsValid(userInput)) {

    setResponseStatus(event, 400);
    return { error: "Invalid input" };

  }

  return;

});

function inputIsValid(input) {
  
  for (const key in input) {
    if (!validOptions[key].includes(input[key])) {
      return false;
    }
  }

  return true;
}
