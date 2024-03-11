// const { baseUrl } = useRuntimeConfig()
const baseUrl = 'https://thr-backend.camionerosperuanos.org/api/'
const image_urls = [
  'https://i.pinimg.com/474x/df/73/59/df7359c1ad8148f823e78532733d8299.jpg',
  'https://i.pinimg.com/474x/98/30/63/983063981b5eeef9e2d458f13268f453.jpg',
  'https://i.pinimg.com/474x/d7/72/de/d772deb8dde277889808cc3684ba9865.jpg',
  'https://i.pinimg.com/474x/67/fe/cc/67fecc9332e4336c8e361ec8c2e0e950.jpg',
  'https://i.pinimg.com/474x/9f/08/8f/9f088fe609765c4bd29ef9a4a87b1dca.jpg',
  'https://i.pinimg.com/474x/6e/ae/c1/6eaec1d3be5e8f1630555f999d676faa.jpg',
  'https://i.pinimg.com/474x/cf/3f/6a/cf3f6aac0ada3ab82e1d8765897cccc8.jpg',
  'https://i.pinimg.com/474x/4c/dc/f5/4cdcf5d1fcc8dafefa33f669fb2f43de.jpg',
  'https://i.pinimg.com/474x/8a/d6/f2/8ad6f2a6db8462ca5a5308627378fb3a.jpg',
  'https://i.pinimg.com/474x/3d/9f/37/3d9f37f9cee18492146cfed697b5c7e6.jpg',
  'https://i.pinimg.com/474x/74/ed/78/74ed78106019d952db8350e59ed016a8.jpg',
  'https://i.pinimg.com/474x/e3/4b/8c/e34b8c0cdf7ca831dcbb3e9719432b0a.jpg',
]
const shuffleArray = (array, seed) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // Use a custom random function with seed
  const customRandom = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(customRandom() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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

const getProduct = async (id: any) => {
  const response = await fetch(`${baseUrl}product/${id}`)
  if (!response.ok) {
    throw new Error('Network Error')
  }
  // return response.json()
  const shuffledImageUrls = shuffleArray(image_urls.slice(), 123)
  const product = await response.json()
  return { ...product, images: shuffledImageUrls}
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
    const products = await response.json()
    let seed = 123
    return products.results.map((p) => {
      const shuffledImageUrls = shuffleArray(image_urls.slice(), seed++)
      return {
        ...p,
        images: shuffledImageUrls
      }
    })
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

export { fetchProducts, fetchCategories, getProduct }
