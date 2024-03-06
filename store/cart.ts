import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useEmitter  } from '~~/composables/useEmitter'

const getCartProductsFromLocalStorage = (localStorage: any) => {
  const storedProducts = localStorage.getItem('cartProducts')
  return storedProducts ? JSON.parse(storedProducts) : []
}

export const useCartStore = defineStore('cart', () => {
  const products = ref<any[]>(getCartProductsFromLocalStorage(localStorage))

  const saveProductsToLocalStorage = () => {
    localStorage.setItem('cartProducts', JSON.stringify(products.value))
  }

  const addToCart = (product: any, quantity: number) => {
    const ids = products.value.map((p) => p.id)
    if (ids.includes(product.id)) {
      const existingProductIndex = products.value.findIndex((p) => p.id === product.id)
      products.value[existingProductIndex].quantity += quantity
    } else {
      console.log('count :', quantity)
      products.value.push({ ...product, quantity: quantity})
    }
    saveProductsToLocalStorage()
    useEmitter().emit('added-to-cart')
  }

  const removeFromCart = (index: number) => {
    products.value.splice(index, 1)
    saveProductsToLocalStorage()
    // Add any additional logic here
  }

  const productCount = computed(() => products.value.length)

  return {
    products,
    productCount,
    addToCart,
    removeFromCart,
  }
})
