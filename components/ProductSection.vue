<template>
  <section
    class="w-full flex flex-wrap justify-center max-w-full gap-5 md:gap-8 mt-5 mb-5"
  >
    <div v-for="item in items" :key="item.id" @click="goToProduct(item.id)">
      <SharedCard :item="item"/>
    </div>
  </section>
</template>
<script lang="ts" setup>

defineProps({
  items: {
    type: Array<object>,
    default: []
  }
})

const goToProduct = function (id: string) {
  navigateTo(`/products/${id}`)
  console.log('event sent')
}
</script>

