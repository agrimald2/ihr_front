<template>
  <div class="relative w-full flex flex-col gap-1 overflow-hidden min-h-[30vh]">
    <SfScrollable
      class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] min-h-[30vh]"
      buttons-placement="none"
      drag
    >
      <div
        v-for="(banner, index) in banners"
        :key="index"
        class="relative flex justify-center basis-full snap-center snap-always shrink-0 grow"
        :style="{
          backgroundImage: 'url(' + banner.image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      ></div>
    </SfScrollable>
    <div
      class="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-gray-700 to-transparent"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { SfButton, SfScrollable } from '@storefront-ui/vue'
const banners = [
  {
    image:
      '/images/banner.jpg',
    title: 'Feel the music',
    label: 'New Wireless Pro',
    ariaLabel:
      'Spatial audio. Adjustable ear cups. On-device controls. All-day battery.',
    role: 'button',
  },
  {
    image:
      '/images/banner2.jpg',
    title: 'Feel the music',
    label: 'New Wireless mini',
    ariaLabel:
      'Spatial audio. Adjustable ear cups. On-device controls. All-day battery.',
    role: 'button',
  },
]
</script>
