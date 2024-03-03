<template>
  <SfScrollable
    class="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    buttons-placement="floating"
    drag
  >
    <template #previousButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute !rounded-full z-10 left-4 bg-white hidden md:block"
        :class="{ '!hidden': defaultProps.disabled }"
        variant="secondary"
        size="lg"
        square
      >
        <SfIconChevronLeft />
      </SfButton>
    </template>
    <div
      v-for="item in items"
      :key="item.id"
      class="first:ms-auto last:me-auto border border-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[148px] lg:w-[192px]"
    >
      <div class="relative">
        <SfLink href="#" class="block">
          <img
            :src="item.img ? item.img.src : 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'"
            :alt="item.img ? item.img.alt : 'Category'"
            class="block object-cover h-auto rounded-md aspect-square lg:w-[190px] lg:h-[190px]"
            width="146"
            height="146"
          />
        </SfLink>
        <SfButton
          variant="tertiary"
          size="sm"
          square
          class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <SfIconFavorite size="sm" />
        </SfButton>
      </div>
      <div class="p-2 border-t border-neutral-200 typography-text-sm">
        <SfLink href="#" variant="secondary" class="no-underline">{{ item.name }}</SfLink>
        <span class="block mt-2 font-bold" v-if="item.price">{{ item.price }}</span>
      </div>
    </div>
    <template #nextButton="defaultProps">
      <SfButton
        v-bind="defaultProps"
        class="absolute !rounded-full z-10 right-4 bg-white hidden md:block"
        :class="{ '!hidden': defaultProps.disabled }"
        variant="secondary"
        size="lg"
        square
      >
        <SfIconChevronRight />
      </SfButton>
    </template>
  </SfScrollable>
</template>

<script lang="ts" setup>
import {
  SfLink,
  SfButton,
  SfIconFavorite,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfScrollable,
} from '@storefront-ui/vue';

defineProps({
  items: {
    type: Array<object>,
    default: []
  }
})
</script>
