import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useEmitter  } from '~~/composables/useEmitter'

export const useCheckoutStore = defineStore('checkout', () => {
  const shippingInfo = ref({})
  const paymentInfo = ref({})

  const updateShippingInfo = (info: any) => {
    shippingInfo.value = info
  }

  const updatePaymentInfo = (info: any) => {
    paymentInfo.value = info
  }

  return {
    shippingInfo,
    paymentInfo,
    updatePaymentInfo,
    updateShippingInfo
  }
})