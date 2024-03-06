<template>
  <div class="flex justify-between">
    <div v-for="(step, index) in steps" :key="index">
      <div :class="['step-item', { 'active': currentStep === index + 1, 'complete': index + 1 < currentStep || complete }]">
        <div class="step">{{ index + 1 }}</div>
        <p class="text-gray-500">{{ step }}</p>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
const props = defineProps({
  steps: { type: Array<any>, required: true },
  currentStep: { type: Number, required: true }
})

const stepsNumber = computed(() => props.steps.length)
const complete = ref(false)
</script>

<style scoped>
.step-item {
  @apply relative flex flex-col justify-center items-center w-36;
}
.step-item:not(:first-child):before {
  @apply content-[''] bg-slate-200 absolute w-full h-[3px] right-2/4 top-1/3 -translate-y-2/4;
}
.step {
  @apply w-10 h-10 flex items-center justify-center z-10 relative bg-slate-700 rounded-full font-semibold text-white;
}
.active .step {
  @apply bg-sky-600;
}
.complete .step {
  @apply bg-green-600;
}
.complete:not(:first-child):before,
.active:not(:first-child):before {
  @apply bg-green-600;
}
</style>