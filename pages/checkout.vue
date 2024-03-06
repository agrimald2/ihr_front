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

const shippingInfo = useCheckoutStore().shippingInfo
const paymentInfo = useCheckoutStore().paymentInfo
const cartInfo = useCheckoutStore().cartInfo

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

const callPayApi = () => {
  fetch('https://sandbox-api.openpay.mx/v1/mzdtln0bmtms6o3kck8f/tokens', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Basic c2tfZTU2OGM0MmE2YzM4NGI3YWIwMmNkNDdkMmU0MDdjYWI6'
    },
    body: JSON.stringify({
      "card_number": paymentInfo.card_number,
      "holder_name": paymentInfo.name_on_card,
      "expiration_year": paymentInfo.expiration_year,
      "expiration_month": paymentInfo.expiration_month,
      "cvv2": paymentInfo.security_code,
      "address": {
        "city": shippingInfo.city,
        "country_code": "MX",
        "postal_code": shippingInfo.zip_code,
        "line1": shippingInfo.address,
        "line2": "",
        "line3": "",
        "state": ""
      }
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to call API')
    }
    console.log(response)
    return response.json()
  })
  .then(data => {
    console.log(data)
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