<template>
  <form class="p-4 flex max-w-xl gap-4 flex-wrap text-neutral-900">
    <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
      <span class="typography-text-sm font-medium">First Name</span>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="firstName"
        type="text"
        placeholder="First Name"
        v-model="firstName"
      >
    </label>
    <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Last Name</span>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="lastName"
        type="text"
        placeholder="Last Name"
        v-model="lastName"
      >
    </label>
    <label class="w-full flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Phone</span>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phone"
        type="text"
        placeholder="Phone"
        v-model="phone"
      >
    </label>
    <label class="w-full flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Country</span>
      <select
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="country"
        placeholder="-- Select --"
        v-model="country"
      >
        <option v-for="countryName in countries" :key="countryName">{{ countryName }}</option>
      </select>
    </label>
    <div class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
      <label>
        <span class="typography-text-sm font-medium">Street</span>
        <input
          name="street"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Street Address"
          v-model="street"
        />
      </label>
      <div class="flex flex-colr mt-0.5">
        <small class="typography-hint-xs text-neutral-500">Street address or P.O. Box</small>
      </div>
    </div>
    <label class="w-full flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">City</span>
      <input
        name="city"
        v-model="city"
        placeholder="City"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </label>
    <label class="w-full flex flex-col gap-0.5 md:w-[120px]">
      <span class="typography-text-sm font-medium">ZIP Code</span>
      <input
        name="zipCode"
        placeholder="eg. 12345"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="zipCode"
      />
    </label>

    <label class="w-full flex items-center gap-2">
      <input name="useAsShippingAddress" v-model="isBillingSameShipping" type="checkbox"/>
      Use as shipping address
    </label>
  </form>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useCheckoutStore } from '~/store/checkout'
import { countryOptions } from '~/utils/countries'

const countries = countryOptions.map((e) => e.value)
const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const street = ref('')
const country = ref('')
const city = ref('')
const isBillingSameShipping = ref(false)
const zipCode = ref('')

const billingReactive = [
  firstName,
  lastName,
  phone,
  street,
  city,
  country,
  zipCode
]

const billindKeys = [
  'first_name',
  'last_name',
  'phone',
  'street',
  'city',
  'country',
  'zip_code'
]

watch(billingReactive, (value: any) => {
  const billingInfo = {}
  value.forEach((element: any, index: number) => {
    
    billingInfo[billindKeys[index]] = element
  })
  useCheckoutStore().updateShippingInfo(billingInfo)
})
</script>
