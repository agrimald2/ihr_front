import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useEmitter  } from '~~/composables/useEmitter'

export const useCheckoutStore = defineStore('checkout', () => {
  const shippingInfo = ref({})
  const paymentInfo = ref({})
  const paymentMethod = ref(0)

  const updateShippingInfo = (info: any) => {
    shippingInfo.value = info
  }

  const updatePaymentInfo = (info: any) => {
    paymentInfo.value = info
  }

  const updatePaymentMethod = (info: any) => {
    paymentMethod.value = info
  }

  return {
    shippingInfo,
    paymentInfo,
    paymentMethod,
    updatePaymentInfo,
    updateShippingInfo,
    updatePaymentMethod
  }
})