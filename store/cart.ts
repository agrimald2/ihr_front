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
  }

  const cartInfo = computed(() => {
    return products.value.map((p) => ({
      product_id: p.id,
      quantity: p.quantity,
      price: parseInt(p.price),
      subtotal: Math.ceil(p.quantity * p.price * 100) / 100,
    }))
  })

  const cartTotal = computed(() => {
    const subtotal = (acc, product) => acc + product.quantity * product.price
    return products.value.reduce(subtotal, 0)
  })

  const productCount = computed(() => products.value.length)

  return {
    products,
    productCount,
    addToCart,
    removeFromCart,
    cartInfo,
    cartTotal
  }
})
