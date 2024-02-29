<template>
  <header class="bg-slate-900 shadow-lg shadow-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 text-white" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <div class="relative">
          <button type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100"
            aria-expanded="false">
            Product
            <svg class="h-5 w-5 flex-none text-gray-100" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-100">Features</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-100">Marketplace</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-100">Company</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-100">Log in <span
            aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup>
import {
  SfButton,
  SfDrawer,
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconClose,
  SfIconExpandMore,
  SfListItem,
  useDisclosure,
  useTrapFocus,
  SfIconMenu,
  SfInput,
  SfIconSearch,
} from '@storefront-ui/vue'
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const { isOpen, toggle, close } = useDisclosure()
const menuRef = ref()
const drawerRef = ref()
const router = useRouter()

useTrapFocus(drawerRef, {
  activeState: isOpen,
  arrowKeysUpDown: true,
  initialFocus: 'container',
})
onClickOutside(menuRef, () => {
  close()
})

const inputValue = ref('')

const search = () => {
  router.push({
    path: '/search',
    query: {
      name: inputValue.value
    }
  })
}

const actionItems = [
  {
    icon: SfIconShoppingCart,
    label: '',
    ariaLabel: 'Cart',
    role: 'button',
  },
  {
    icon: SfIconPerson,
    label: 'Log in',
    ariaLabel: 'Log in',
    role: 'login',
  },
]
const bannerDetails = {
  image: 'https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/watch.png',
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
