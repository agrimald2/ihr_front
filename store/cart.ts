import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useEmitter  } from '~~/composables/useEmitter'

export const useCartStore = defineStore('cart', () => {
  // const products = ref<Product[]>([])
  const products = ref<any[]>([])

  function addToCart(product: any) {
    const ids = products.value.map((p) => p.id)
    if (ids.includes(product.id)) return
    products.value.push(product)
    useEmitter().emit('added-to-cart')
  }

  function removeFromCart(index: number) {
    products.value.splice(index, 1);
  }

  return {
    products,
    addToCart,
    removeFromCart,
  }
})
