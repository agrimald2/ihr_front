<template>
  <div class="relative max-h-[600px] flex flex-col w-full aspect-[4/3] gap-1">
    <picture>
      <source
        srcset="
          https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg.png
        "
        media="(min-width: 768px)"
      />
      <img
        src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg-mobile.png"
        class="absolute w-full h-full z-[-1] md:object-cover"
        alt="hero"
      />
    </picture>
    <SfScrollable class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" buttonsPlacement="none"  drag>
      <div
        v-for="(banner, index) in banners"
        :key="index"
        class="relative flex justify-center basis-full snap-center snap-always shrink-0 grow"
      >
        <div
          class="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden"
        >
          <img
            :src="banner.image"
            alt="Headphones"
            class="h-full object-cover object-left"
          />
        </div>
        <div
          class="p-4 md:p-10 md:max-w-[768px] md:flex md:flex-col md:justify-center md:items-start md:basis-2/4"
        >
          <p
            class="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase"
          >
            {{ banner.title }}
          </p>
          <h1
            class="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4"
          >
            {{ banner.label }}
          </h1>
          <p class="typography-text-base md:typography-text-lg">
            {{ banner.lang }}
          </p>
        </div>
      </div>
    </SfScrollable>
  </div>
</template>

<script lang="ts" setup>
import { SfButton,SfScrollable } from "@storefront-ui/vue";
const banners = [
  {
    image:
      "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-headphones.png",
    title: "Feel the music",
    label: "New Wireless Pro",
    ariaLabel:
      "Spatial audio. Adjustable ear cups. On-device controls. All-day battery.",
    role: "button",
  },
  {
    image:
      "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-headphones.png",
    title: "Feel the music",
    label: "New Wireless mini",
    ariaLabel:
      "Spatial audio. Adjustable ear cups. On-device controls. All-day battery.",
    role: "button",
  },
];
</script>
