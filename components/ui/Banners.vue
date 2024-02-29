<template>
  <div class="relative w-full flex flex-col gap-1 overflow-hidden min-h-[55vh]">
    <SfScrollable
      class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] min-h-[55vh]"
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
      'https://http2.mlstatic.com/D_NQ_647409-MLA74796335999_022024-OO.webp',
    title: 'Feel the music',
    label: 'New Wireless Pro',
    ariaLabel:
      'Spatial audio. Adjustable ear cups. On-device controls. All-day battery.',
    role: 'button',
  },
  {
    image:
      'https://http2.mlstatic.com/D_NQ_647409-MLA74796335999_022024-OO.webp',
    title: 'Feel the music',
    label: 'New Wireless mini',
    ariaLabel:
      'Spatial audio. Adjustable ear cups. On-device controls. All-day battery.',
    role: 'button',
  },
]
</script>
