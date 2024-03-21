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

  const removeFromCart = (id: string) => {
    const index = products.value.findIndex((p) => p.id === id)
    if (index !== -1) {
      products.value.splice(index, 1)
      saveProductsToLocalStorage()
    }
  }

  const incrementItem = (id: string) => {
    const product = products.value.find((p) => p.id === id)
    if (product) {
      product.quantity++
      saveProductsToLocalStorage()
    }
  }

  const decrementItem = (id: string) => {
    const product = products.value.find((p) => p.id === id)
    if (product && product.quantity > 1) {
      product.quantity--
      saveProductsToLocalStorage()
    }
  }

  const cartInfo = computed(() => {
    return products.value.map((p) => ({
      product_id: p.id,
      quantity: p.quantity,
      price: parseInt(p.price),
      sub_total: p.quantity && p.price ? Math.ceil(p.quantity * p.price * 100) / 100 : 0,
    }))
  })

  const cartTotal = computed(() => {
    const subtotal = (acc, product) => acc + product.quantity * product.price
    return products.value.reduce(subtotal, 0).toFixed(2)
  })

  const productCount = computed(() => products.value.length)

  return {
    products,
    productCount,
    addToCart,
    removeFromCart,
    incrementItem,
    decrementItem,
    cartInfo,
    cartTotal
  }
})
