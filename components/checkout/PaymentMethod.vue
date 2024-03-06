<template>
  <div class="p-4 my-4 max-w-xl">
    <fieldset>
      <div class="grid grid-cols-2 gap-4 items-stretch my-16">
        <label v-for="{ label, value, logo, active } in paymentMethods" :key="value" class="relative">
          <input type="radio" class="peer sr-only" :disabled="!active" />
          <div
            class="h-1/3 flex flex-col items-center justify-center py-7 px-4 cursor-pointer rounded-md border border-neutral-200 -outline-offset-2 hover:border-primary-200 hover:bg-primary-100 peer-focus:border-primary-200 peer-focus:bg-primary-100 active:border-primary-300 active:bg-primary-200 peer-checked:outline peer-checked:outline-2 peer-checked:outline-primary-700 peer-disabled:opacity-50 peer-disabled:bg-neutral-100 peer-disabled:border-neutral-200 peer-disabled:cursor-not-allowed peer-disabled:[&_img]:grayscale"
          >
            <img :src="logo" :alt="label" class="h-6 select-none" />
            <p v-if="!active" class="absolute bottom-2 select-none text-disabled-900 typography-text-xs mt">Coming soon</p>
          </div>
        </label>
      </div>
    </fieldset>
    <form class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="col-span-2 grid-cols-1 flex-col flex w-1/2">
        <label class="typography-text-sm font-medium">Name on card</label>
        <input v-model="nameOnCard" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nombre del titular">
      </div>
      <div class="grid-cols-2 flex-col flex w-auto">
        <label class="typography-text-sm font-medium">Card Number</label>
        <input v-model="cardNumber" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber" type="text" placeholder="Numero de la tarjeta">
      </div>
      <div class="grid-cols-1 flex-col flex w-auto">
        <label class="typography-text-sm font-medium">Expiracy Month</label>
        <input v-model="expiracyMonth" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="expiracyMonth" type="text" placeholder="Mes de expiración">
      </div>
      <div class="grid-cols-1 flex-col flex w-auto">
        <label class="typography-text-sm font-medium">Expiracy Year</label>
        <input v-model="expiracyYear" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="expiracyYear" type="text" placeholder="Año de expiración" name="expiracyYear" required />
      </div>
      <div class="grid-cols-1 flex-col flex w-auto">
        <label class="typography-text-sm font-medium">Security Code</label>
        <input v-model="securityCode" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="securityCode" type="text" placeholder="CVV" name="securityCode" required />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useCheckoutStore } from '~/store/checkout'

const nameOnCard = ref('')
const cardNumber = ref('')
const expiracyMonth = ref('')
const expiracyYear = ref('')
const securityCode = ref('')

const paymentInfo = [nameOnCard, cardNumber, expiracyMonth, expiracyYear, securityCode]

const paymentKeys = ['nameOnCard', 'cardNumber', 'expiracyMonth', 'expiracyYear', 'securityCode']

watch(paymentInfo, (value: any) => {
  const data = {}
  value.forEach((element: any, index: number) => {
    data[paymentKeys[index]] = element
  })
  data['payment_method'] = 0
  // TODO: add correct methods and set code for each of them
  useCheckoutStore().updatePaymentInfo(data)
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
    label: 'PayPal',
    value: 'paypal',
    logo: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/paypal-logo.svg',
    active: false,
  },
  {
    label: 'ApplePay',
    value: 'applepay',
    logo: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/apple-pay-logo.svg',
    active: false,
  },
  {
    label: 'GooglePay',
    value: 'googlepay',
    logo: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/google-pay-logo.svg',
    active: false,
  },
]


</script>
