export default defineEventHandler(async (event) => {
  if (!verifyToken(event)) {
    setResponseStatus(event, 401);
    return { error: 'Unauthorized' }
  }

  const { id } = await readBody(event);

  if (!id) {
    setResponseStatus(event, 400);
    return { error: 'Bad request' }
  }

  const obnovenie = await Obnovenie.findById(id);

  if (!obnovenie) {
    setResponseStatus(event, 404);
    return { error: 'Not found' }
  }

  const result = await obnovenie.deleteOne();
  return result;
})
