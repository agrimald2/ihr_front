<template>
  <div class="p-4 my-4 max-w-xl">
    <fieldset>
      <div class="grid grid-cols-2 gap-4 items-stretch mt-8">
        <label v-for="{ label, value, logo, active } in paymentMethods" :key="value" class="relative">
          <input type="radio" class="peer sr-only" :disabled="!active" />
          <div
            class="h-1/3 flex flex-col items-center justify-center py-7 px-4 cursor-pointer rounded-md border border-neutral-200 -outline-offset-2 hover:border-primary-200 hover:bg-primary-100 peer-focus:border-primary-200 peer-focus:bg-primary-100 active:border-primary-300 active:bg-primary-200 peer-checked:outline peer-checked:outline-2 peer-checked:outline-primary-700 peer-disabled:opacity-50 peer-disabled:bg-neutral-100 peer-disabled:border-neutral-200 peer-disabled:cursor-not-allowed peer-disabled:[&_img]:grayscale">
            <img :src="logo" :alt="label" class="h-6 select-none" />
            <p v-if="!active" class="absolute bottom-2 select-none text-disabled-900 typography-text-xs mt">Coming soon
            </p>
          </div>
        </label>
      </div>
    </fieldset>
    <section class="my-4 flex flex-col gap-8">
      <label class="flex items-center">
        <SfSwitch v-model="checkOpenPay" value="value" />
        <span class="ml-[10px] cursor-pointer">
          <img src="/images/openpay.png" alt="Openpay" width="125px">
        </span>
      </label>
      <label class="flex items-center">
        <SfSwitch v-model="checkMercado" value="value" />
        <span class="ml-[10px] cursor-pointer">
          <img src="/images/mercadopago.png" alt="Openpay" width="125px">
        </span>
      </label>
    </section>
    <form>
      <div class="grid grid-cols-6 gap-3">
        <div class="col-span-6 sm:col-span-6">
          <label for="card-number" class="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
          <input v-model="cardNumber" type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000"
            class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
        </div>
        <div class="col-span-2 sm:col-span-2">
          <label for="expiration-month" class="block text-sm font-medium text-gray-700 mb-2">Month</label>
          <input v-model="expirationMonth" type="text" name="expiration-month" id="expiration-month" placeholder="00"
            class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
        </div>
        <div class="col-span-2 sm:col-span-2">
          <label for="expiration-date" class="block text-sm font-medium text-gray-700 mb-2">Year</label>
          <input v-model="expirationYear" type="text" name="expiration-date" id="expiration-date" placeholder="0000"
            class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
        </div>
        <div class="col-span-2 sm:col-span-2">
          <label for="cvv" class="block text-sm font-medium text-gray-700 mb-2"> Code</label>
          <input v-model="securityCode" type="text" name="cvv" id="cvv" placeholder="000"
            class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
        </div>
        <div class="col-span-6 sm:col-span-6">
          <label for="card-holder" class="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
          <input v-model="nameOnCard" type="text" name="card-holder" id="card-holder" placeholder="Full Name"
            class="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { SfSwitch } from '@storefront-ui/vue'
import { useCheckoutStore } from '~/store/checkout'

const nameOnCard = ref('')
const cardNumber = ref('')
const expirationMonth = ref('')
const expirationYear = ref('')
const securityCode = ref('')
const checkOpenPay = ref(true)
const checkMercado = ref(false)


const paymentInfo = [nameOnCard, cardNumber, expirationMonth, expirationYear, securityCode]
const paymentKeys = ['name_on_card', 'card_number', 'expiration_month', 'expiration_year', 'security_code']

watch(paymentInfo, (value: any) => {
  const data = {}
  value.forEach((element: any, index: number) => {
    data[paymentKeys[index]] = element
  })
  data['payment_method'] = 0
  // TODO: add correct methods and set code for each of them
  useCheckoutStore().updatePaymentInfo(data)
})

watch(checkMercado, (value) => {
  checkOpenPay.value = !value
  value ? useCheckoutStore().updatePaymentMethod(1) : useCheckoutStore().updatePaymentMethod(0)
})

watch(checkOpenPay, (value) => {
  checkMercado.value = !value
  value ? useCheckoutStore().updatePaymentMethod(0) : useCheckoutStore().updatePaymentMethod(1)
})

// List of payment methods
const paymentMethods = [
  {
    label: 'Credit card',
    value: 'credit-card',
    logo: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/visa-logo.svg',
    active: true,
  },
  {
    label: 'Crypto',
    value: 'crypto',
    logo: 'https://pngimg.com/d/bitcoin_PNG12.png',
    active: true,
  },
  {
    label: 'ApplePay',
    value: 'applepay',
    logo: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/apple-pay-logo.svg',
    active: true,
  },
  {
    label: 'GooglePay',
    value: 'googlepay',
    logo: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/google-pay-logo.svg',
    active: false,
  },
]


</script>
