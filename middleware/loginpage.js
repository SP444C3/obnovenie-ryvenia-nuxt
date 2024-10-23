export default defineNuxtRouteMiddleware(async (to, from) => {
  const toVerify = useCookie("token").value;

  if (!toVerify) {
    return;
  }

  const result = await verifyUser(toVerify)

  if (result) {
    return navigateTo("/manage");
  }
});

async function verifyUser(token) {

  const res = await $fetch("/api/verifyAdminUser", {
    query: { token: token },
  })

  return res;
}
