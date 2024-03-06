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
  if (currentStep.value === 3) return
  currentStep.value++
}

const nextButton = computed(() => currentStep.value === 3 ? 'Pay' : 'Next')
</script>

<style scoped>
.forms-wrapper {
  height: 650px;
}
</style>