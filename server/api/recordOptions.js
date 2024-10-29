import { validOptions } from "../utils/validOptions";

export default defineEventHandler(async (event) => {
  
  const userInput = await readBody(event);
  const headers = JSON.parse(event.node.req.headers.authorization.replace("Bearer ", ""))

  if (!inputIsValid(userInput)) {

    setResponseStatus(event, 400);
    return { error: "Invalid input" };

  }

  const item = await $fetch('/api/getRecord', {
    params: { id: headers.id, token: headers.token },
  })

  item.options = userInput;
  item.responded = true

  return await Obnovenie.findOneAndUpdate({ _id: headers.id }, item, {
    new: false,
    upsert: true
  })

});


function inputIsValid(input) {
  
  for (const key in input) {
    if (!validOptions[key].includes(input[key])) {
      return false;
    }
  }

  return true;
}
