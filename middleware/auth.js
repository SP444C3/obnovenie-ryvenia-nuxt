export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.client) return;

  const toVerify = useCookie("token").value;

  if (!toVerify) {
    return navigateTo("/login");
  }

  const result = await verifyUser(toVerify);

  if (!result) {
    return navigateTo("/login");
  }

  return;
});

async function verifyUser(token) {
  const res = await $fetch("/api/verifyUser", {
    query: { token: token },
  });

  return res;
}
