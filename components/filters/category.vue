<template>
  <SfAccordionItem v-model="open" class="w-full md:max-w-[376px]">
    <template #summary>
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Category</p>
        <SfIconChevronLeft :class="open ? 'rotate-90' : '-rotate-90'" />
      </div>
    </template>
    <ul class="mt-2 mb-6">
      <!-- <li>
        <SfListItem size="sm" tag="button" type="button">
          <div class="flex items-center">
            <SfIconArrowBack size="sm" class="text-neutral-500 mr-3" />Back to {{ categories[0].label }}
          </div>
        </SfListItem>
      </li> -->
      <li v-for="(category, index) in categories" :key="category.key">
        <SfListItem
          size="sm"
          tag="a"
          :href="category.link"
          :class="[
            'first-of-type:mt-2 rounded-md active:bg-primary-100',
            { 'bg-primary-100 hover:bg-primary-100 active:bg-primary-100 font-medium': isSelectedCategory(category) },
          ]"
        @click="handleOnclick(category)">
          <template #suffix>
            <SfIconCheck v-if="isSelectedCategory(category)" size="sm" class="text-primary-700" />
          </template>
          <span class="flex items-center">
            {{ category.label }}
            <SfCounter class="ml-2 typography-text-sm font-normal">{{ category.counter }}</SfCounter>
          </span>
        </SfListItem>
      </li>
    </ul>
  </SfAccordionItem>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  SfAccordionItem,
  SfCounter,
  SfIconArrowBack,
  SfIconCheck,
  SfIconChevronLeft,
  SfListItem,
} from '@storefront-ui/vue';
const selectedCategory = ref<Category | null>(null);
const isSelectedCategory = (category: Category) => {
  // Check if the category is the currently selected category
  return selectedCategory.value === category;
};
const categories = ref<Array<Category>>([
  {
    key: 'CLOTHING',
    label: 'Clothing',
    counter: 30,
    link: '#',
  },
  {
    key: 'SHOES',
    label: 'Shoes',
    counter: 28,
    link: '#',
  },
  {
    key: 'ACCESSORIES',
    label: 'Accessories',
    counter: 56,
    link: '#',
  },
  {
    key: 'WEARABLES',
    label: 'Wearables',
    counter: 12,
    link: '#',
  },
  {
    key: 'FOOD_DRINKS',
    label: 'Food & Drinks',
    counter: 52,
    link: '#',
  },
]);
const handleOnclick = (category:Category) => {
  const emitter = useEmitter()
  const { sharedMap, convertMapToObject, addFieldToMap } = useSharedMap();
  addFieldToMap(sharedMap, 'category',  category.label);
  if (category.label) {
    emitter.emit('search-products',convertMapToObject(sharedMap))
  }
  console.log('Valor seleccionado:',category.label)
};

interface Category {
  key: string;
  label: string;
  link: string;
  counter: number;
  // Add more properties as needed
}
const open = ref(true);
</script>