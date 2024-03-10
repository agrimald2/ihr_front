<template>
  <div class="mt-4">
    <div class="flex justify-center space-x-2">
      <div
        v-for="filter in filters"
        :key="filter.id"
        class="rounded-md border-2 px-3 py-1 text-sm font-semibold text-gray-700"
        @click="console.log(`${filter.name}`)"
      >
        {{ filter.name }}
      </div>
    </div>
  </div>

  <!-- <div class="hidden md:block flex-col mt-4 w-96">
    <FiltersColor />
    <FiltersSize />
    <FiltersCategory/>
  </div> -->
</template>
<script lang="ts" setup>
const filters = [
  {
    id: 1,
    name: 'color'
  },
  {
    id: 2,
    name: 'size',
  },
  {
    id: 3,
    name: 'category',
  }
]
</script>
