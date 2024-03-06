import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useEmitter  } from '~~/composables/useEmitter'

export const useCheckoutStore = defineStore('checkout', () => {
  const shippingInfo = ref({})
  const paymentInfo = ref({})
  const cartInfo = ref({})

  const updateShippingInfo = (info: any) => {
    shippingInfo.value = info
  }

  const updatePaymentInfo = (info: any) => {
    paymentInfo.value = info
  }

  const updateCartInfo = (info: any) => {
    cartInfo.value = info
  }

  return {
    shippingInfo,
    paymentInfo,
    cartInfo,
    updateCartInfo,
    updatePaymentInfo,
    updateShippingInfo
  }
})