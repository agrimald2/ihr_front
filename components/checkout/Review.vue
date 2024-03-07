<template>
  <div class="px-4 max-w-xl">
    <a class="block max-w-xl p-6 rounded-lg shadow">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Shipping and Payment</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of
        2021 so far, in reverse chronological order.</p>
    </a>
    <div class="mt-4 p-4 rounded-lg shadow-lg bg-blue-100">
      <p class="text-lg font-semibold">Powered by {{ paymentGateway }}...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const paymentGateways = ['MercadoPago', 'Openpay'];
const paymentGateway = ref('');

function selectRandomGateway() {
  const index = Math.floor(Math.random() * paymentGateways.length);
  paymentGateway.value = paymentGateways[index];
}

selectRandomGateway();
</script>
