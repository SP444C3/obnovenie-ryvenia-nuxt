export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.client) return;

  const toVerify = useCookie("token").value;

  if (!toVerify) {
    return navigateTo("/login");
  }

  const result = await verifyAdminUser(toVerify);

  if (!result) {
    return navigateTo("/login");
  }

  return;
});

async function verifyAdminUser(token) {
  const res = await $fetch("/api/verifyAdminUser", {
    query: { token: token },
  });

  return res;
}
