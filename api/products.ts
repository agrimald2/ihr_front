export async function fetchProducts() {
  const config = useRuntimeConfig()
  console.log('baseURL', config.public.apiBase)
  const { data, error } = await useFetch('/product/', {
    baseURL: config.public.apiBase
  })
  if (error) {
    throw new Error(`Failed to fetch products: ${error.value}`)
  }
  return data;
}
