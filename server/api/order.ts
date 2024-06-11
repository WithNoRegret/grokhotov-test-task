export default defineEventHandler(async (event) => {
  const { items, setup } = await readBody(event);

  if (!items) return;

  const response = await $fetch('https://some/random/api/', {
    method: 'POST',
    body: { items, setup },
  });

  return response;
});