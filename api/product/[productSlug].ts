// const { baseUrl } = useRuntimeConfig()
const baseUrl = 'https://thr-backend.camionerosperuanos.org/api/'

import { objQueryToString } from "../utlis"

function fakeAsyncEndpoint(data: any, delay: number = 1000): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        status: 200,
        statusText: 'OK',
        json: () => Promise.resolve(data),
        // Add other properties and methods as needed
      } as Response)
    }, delay)
  })
}

const fetchProducts = async (query: object={}) => {
  const isSendingQuery = Object.keys(query).length > 0
  let fullUrl = ''
  if (isSendingQuery) {
    const queryString = objQueryToString(query)
    fullUrl = `${baseUrl}product?${queryString}`
  } else {
    fullUrl = `${baseUrl}product`
  }
  try {
    const response = await fetch(fullUrl)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
    throw error
  }
}

const fetchCategories = async () => {
  try {
    const response = await fetch(`${baseUrl}category`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
    throw error
  }
}

export { fetchProducts, fetchCategories }
