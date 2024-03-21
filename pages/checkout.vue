<template>
  <div class="py-12 w-auto">
    <div class="flex justify-center">
      <SharedStepper :steps="steps" :current-step="currentStep" class="w-auto flex items-center"/>
    </div>
    <div class="flex justify-center forms-wrapper overflow-auto">
      <CheckoutShipping v-show="currentStep === 1" />
      <CheckoutPaymentMethod v-show="currentStep === 2" />
      <CheckoutReview v-show="currentStep === 3" />
    </div>
    <div class="max-w-xl mx-auto px-4">
      <div class="flex justify-between">
        <SfButton class="bg-primary-700 min-w-20" @click="goPrevious()">Previous</SfButton>
        <SfButton class="bg-primary-700 min-w-20" @click="goNext()">{{ nextButton }}</SfButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { SfButton } from '@storefront-ui/vue'
import { useCheckoutStore } from '~/store/checkout'
import { useCartStore } from '~~/store/cart'

// const { baseUrl } = useRuntimeConfig()
const baseUrl = 'https://thr-backend.camionerosperuanos.org/api/'
const currentStep = ref(1)
const steps = [
  'Shipping',
  'Payment',
  'Review'
]

const goPrevious = () => {
  if (currentStep.value === 1) return
  currentStep.value--
}

const goNext = () => {
  if (currentStep.value === 3) {
    callPayApi()
    return
  }
  currentStep.value++
}

const fetchPay = (token) => {
  const cartInfo = useCartStore().cartInfo
  const cartTotal = useCartStore().cartTotal
  const shippingInfo = useCheckoutStore().shippingInfo
  const method = useCheckoutStore().paymentMethod
  fetch(`${baseUrl}sale/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "token_id": token,
      "cart_info": cartInfo,
      "method": method,
      "billing_info": shippingInfo,
      "shipping_info": shippingInfo,
      "cart_total": cartTotal
    })
  })
}

const callPayApi = () => {
  const paymentInfo = useCheckoutStore().paymentInfo
  const payload = {
  "card_number": paymentInfo.card_number,
  "holder_name": paymentInfo.name_on_card,
  "expiration_year": paymentInfo.expiration_year,
  "expiration_month": paymentInfo.expiration_month,
  "cvv2": paymentInfo.security_code
  }
  fetch('https://sandbox-api.openpay.pe/v1/mrvfi7f4rsnkp9egkous/tokens', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Basic ' + btoa('sk_4760ff211613450e956d470dfa544929' + ':')
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to call API')
    }
    return response.json()
  })
  .then(data => {
    const token = data.id
    fetchPay(token)
  })
  .catch(error => {
    console.error('Error:', error)
  })
}

const nextButton = computed(() => currentStep.value === 3 ? 'Pay' : 'Next')
</script>


<style scoped>
.forms-wrapper {
  height: 650px;
}
</style>