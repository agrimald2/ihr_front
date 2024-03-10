<template>
  <div class="w-full h-full">
    <header
      ref="menuRef"
      class="flex flex-wrap md:flex-nowrap w-full py-2 md:py-5 border-6 border- border-neutral-200 md:relative md:h-20 md:z-10"
    >
      <div
        class="flex items-center justify-start h-full max-w-auto w-full px-4 md:px-10"
      >
        <a
          href="/"
          aria-label="SF Homepage"
          class="flex shrink-0 ml-4 md:ml-0 text-white mr-auto md:mr-10 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
        >
          <picture>
            <source
              srcset="/images/find_logo.png"
            />
            <img
              alt="Sf Logo"
              class="w-8 h-8 lg:w-[8rem] lg:h-[5rem]"
            />
          </picture>
        </a>
        <nav>
          <ul>
            <li role="none">
              <transition
                enter-active-class="transform transition duration-500 ease-in-out"
                leave-active-class="transform transition duration-500 ease-in-out"
                enter-from-class="-translate-x-full md:translate-x-0 md:opacity-0"
                enter-to-class="translate-x-0 md:translate-x-0 md:opacity-100"
                leave-from-class="translate-x-0 md:opacity-100"
                leave-to-class="-translate-x-full md:translate-x-0 md:opacity-0"
              >
                <SfDrawer
                  ref="drawerRef"
                  v-model="isCategoryDropDownOpen"
                  disable-click-away
                  placement="top"
                  class="grid grid-cols-1 md:gap-x-6 md:grid-cols-4 bg-white shadow-lg p-0 max-h-screen overflow-y-auto md:!absolute md:!top-[5rem] max-w-[376px] md:max-w-full md:p-6 mr-[50px] md:mr-0"
                >
                  <div
                    class="sticky top-0 flex items-center justify-between py-2 px-4 bg-primary-700 md:hidden w-full max-w-[376px]"
                  >
                    <div
                      class="flex items-center typography-text-lg font-medium text-white"
                    >
                      Browse products
                    </div>
                    <SfButton
                      square
                      variant="tertiary"
                      aria-label="Close navigation menu"
                      class="text-white ml-2"
                      @click="categoriesModalClose"
                      @keydown.enter.space="categoriesModalClose"
                    >
                      <SfIconClose />
                    </SfButton>
                  </div>
                  <div
                    v-for="{ heading, items } in categoriesContent"
                    :key="heading"
                    class="[&:nth-child(2)]:pt-0 pt-6 md:pt-0"
                  >
                    <h2
                      role="presentation"
                      class="typography-text-base font-medium text-neutral-900 whitespace-nowrap p-4 md:py-1.5"
                    >
                      {{ heading }}
                    </h2>
                    <hr class="mb-3.5" />
                    <ul>
                      <li v-for="item in items" :key="item.title">
                        <SfListItem
                          tag="a"
                          :href="item.link"
                          size="sm"
                          role="none"
                          class="typography-text-base md:typography-text-sm py-4 md:py-1.5"
                        >
                          {{ item.title }}
                        </SfListItem>
                      </li>
                    </ul>
                  </div>
                  <div
                    class="flex flex-col items-center justify-center bg-neutral-100 md:rounded-md border-neutral-300 overflow-hidden grow"
                  >
                    <img
                      :src="bannerDetails.image"
                      :alt="bannerDetails.title"
                      class="object-contain"
                    />
                    <p
                      class="mb-4 mt-4 px-4 text-center typography-text-base font-medium"
                    >
                      {{ bannerDetails.title }}
                    </p>
                  </div>
                  <SfButton
                    square
                    size="sm"
                    variant="tertiary"
                    aria-label="Close navigation menu"
                    class="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                    @click="categoriesModalClose"
                  >
                    <SfIconClose class="text-neutral-500" />
                  </SfButton>
                </SfDrawer>
              </transition>
            </li>
          </ul>
        </nav>
        <div class="flex flex-row w-full">
          <div class="left-40">
            <SfButton
              class="hidden md:flex bg-primary-500 font-body bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
              :aria-haspopup="true"
              :aria-expanded="isOpen"
              variant="tertiary"
              square
              @click="categoryDropDownToggle"
            >
              <template #suffix>
                <SfIconExpandMore class="hidden md:inline-flex" />
              </template>
              <span class="hidden md:inline-flex whitespace-nowrap px-2"
                >Categories</span
              >
            </SfButton>
          </div>
          <div class="w-full ml-80 mr-10 max-w-[600px]">
            <form
              v-if="!isMobile"
              role="search"
              class="hidden md:flex flex-[100%] mt-2 md:mt-0 md:ml-10 pb-2 md:pb-0"
              @submit.prevent="search"
            >
              <SfInput
                v-if="!isMobile"
                v-model="inputValue"
                type="search"
                class="[&::-webkit-search-cancel-button]:appearance-none max-w-[520px]"
                placeholder="Search"
                wrapper-class="flex-1 h-10 pr-0"
                size="base"
              >
                <template #suffix>
                  <span class="flex items-center">
                    <SfButton
                      variant="tertiary"
                      square
                      aria-label="search"
                      type="submit"
                      class="rounded-l-none hover:bg-transparent active:bg-transparent"
                    >
                      <SfIconSearch />
                    </SfButton>
                  </span>
                </template>
              </SfInput>
            </form>
          </div>
        </div>
        <SfButton class="absolute right-6 ml-10" square @click="navigateTo('/cart')">
          <SfIconShoppingCart />
          <SfBadge :content="cartBadge" />
        </SfButton>
      </div>
    </header>
  </div>
</template>
<script lang="ts" setup>
import {
  SfButton,
  SfDrawer,
  SfIconShoppingCart,
  SfIconPerson,
  SfIconClose,
  SfIconExpandMore,
  SfListItem,
  useDisclosure,
  useTrapFocus,
  SfIconMenu,
  SfInput,
  SfIconSearch,
  SfBadge
} from '@storefront-ui/vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useEmitter } from '~~/composables/useEmitter'
import { useCartStore } from '~/store/cart'
import { useSharedMap } from '~/composables/filter';

const {
  isOpen: isCategoryDropDownOpen,
  toggle: categoryDropDownToggle,
  close: categoriesModalClose,
  isOpen: isCartDrownOpen,
} = useDisclosure()

const menuRef = ref()
const drawerRef = ref()
const cartRef = ref()
const route = useRoute()

useTrapFocus(cartRef, {
  activeState: isCartDrownOpen,
  arrowKeysUpDown: true,
})

useTrapFocus(drawerRef, {
  activeState: isCategoryDropDownOpen,
  arrowKeysUpDown: true,
  initialFocus: 'container',
})
onClickOutside(menuRef, () => {
  close()
})

const isMobile = computed(() => {
  return window.innerWidth <= 768
})

const inputValue = ref('')

const search = () => {
  const { sharedMap, convertMapToObject, addFieldToMap } = useSharedMap();
  addFieldToMap(sharedMap, 'name',  inputValue.value);
  const emitter = useEmitter()
  emitter.emit('search-products', convertMapToObject(sharedMap))

  if (route.path !== 'search') {
    navigateTo({
      path: '/search',
      query: {
        name: inputValue.value,
      },
    })
  } else {
    navigateTo({
      query: {
        name: inputValue.value
      }
    })
  }
}

const cartBadge = computed(() => useCartStore().productCount)

const actionItems = [
  {
    icon: SfIconShoppingCart,
    label: '',
    ariaLabel: 'Cart',
    role: 'cart',
  },
  {
    icon: SfIconPerson,
    label: 'Log in',
    ariaLabel: 'Log in',
    role: 'login',
  },
]
const bannerDetails = {
  image:
    'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/watch.png',
  title: 'New in designer watches',
}

const categoriesContent = [
  {
    heading: 'Women',
    items: [
      {
        title: "All Women's",
        link: '#',
      },
      {
        title: 'Clothing',
        link: '#',
      },
      {
        title: 'Shoes',
        link: '#',
      },
      {
        title: 'Accessories',
        link: '#',
      },
      {
        title: 'Wearables',
        link: '#',
      },
      {
        title: 'Food & Drinks',
        link: '#',
      },
    ],
  },
  {
    heading: 'Men',
    items: [
      {
        title: 'All Men’s',
        link: '#',
      },
      {
        title: 'Clothing',
        link: '#',
      },
      {
        title: 'Shoes',
        link: '#',
      },
      {
        title: 'Accessories',
        link: '#',
      },
      {
        title: 'Wearables',
        link: '#',
      },
      {
        title: 'Food & Drinks',
        link: '#',
      },
    ],
  },
  {
    heading: 'Kids',
    items: [
      {
        title: 'All Kids',
        link: '#',
      },
      {
        title: 'Clothing',
        link: '#',
      },
      {
        title: 'Shoes',
        link: '#',
      },
      {
        title: 'Accessories',
        link: '#',
      },
      {
        title: 'Wearables',
        link: '#',
      },
      {
        title: 'Food & Drinks',
        link: '#',
      },
    ],
  },
]
</script>
<style scoped>
.cart {
  padding: 0px !important;
}
</style>
