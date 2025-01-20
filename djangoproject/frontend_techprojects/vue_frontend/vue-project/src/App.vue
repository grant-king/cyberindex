<template>
  <!--
    This example requires updating your template:
    
    ```
    <html class="h-full bg-white">
      <body class="h-full">
        ```
        -->
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="size-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4 ring-1 ring-white/10">
                <div class="flex h-64 shrink-0 items-center">
                  <img class="h-48 w-auto" src="https://unrolla.blob.core.windows.net/unrolla/images/cti_logo.webp"
                    alt="Your Company" />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <!-- routerlink navigation -->
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in router_navigation" :key="item.name">
                          <RouterLink :to="item.to"
                            :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                            <component :is="item.icon" class="size-6 shrink-0" aria-hidden="true" />
                            {{ item.name }}
                          </RouterLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in link_navigation" :key="item.name">
                          <a :href="item.href"
                            :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                            <component :is="item.icon" class="size-6 shrink-0" aria-hidden="true" />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class="text-xs/6 font-semibold text-gray-400">Featured Sponsors</div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="feat_sponsor in feat_sponsors" :key="feat_sponsor.name">
                          <a :href="feat_sponsor.href"
                            :class="[feat_sponsor.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                            <span
                              class="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">{{
                                feat_sponsor.initial }}</span>
                            <span class="truncate">{{ feat_sponsor.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                      <a href="#"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
                        <Cog6ToothIcon class="size-6 shrink-0" aria-hidden="true" />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4">
        <div class="flex h-64 shrink-0 items-center">
          <img class="h-48 w-auto" src="https://unrolla.blob.core.windows.net/unrolla/images/cti_logo.webp"
            alt="Your Company" />
        </div>
        <nav class="flex flex-1 flex-col">

          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <!-- routerlink navigation -->

            <ul role="list" class="-mx-2 space-y-1">
              <li v-for="item in router_navigation" :key="item.name">
                <RouterLink :to="item.to"
                  :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                  <component :is="item.icon" class="size-6 shrink-0" aria-hidden="true" />
                  {{ item.name }}
                </RouterLink>
              </li>
            </ul>


            <!-- link navigation -->
            <ul role="list" class="-mx-2 space-y-1">
              <li v-for="item in link_navigation" :key="item.name">
                <a :href="item.href"
                  :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                  <component :is="item.icon" class="size-6 shrink-0" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </li>
            </ul>

            <!-- featured sponsors -->
            <li>
              <div class="text-xs/6 font-semibold text-gray-400">Featured Sponsors</div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="feat_sponsor in feat_sponsors" :key="feat_sponsor.name">
                  <a :href="feat_sponsor.href"
                    :class="[feat_sponsor.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                    <span
                      class="flex size-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">{{
                        feat_sponsor.initial }}</span>
                    <span class="truncate">{{ feat_sponsor.name }}</span>
                  </a>
                </li>
              </ul>
            </li>

            <!-- All Sponsors -->
            <li class="mt-auto">
              <a href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
                <UsersIcon class="size-6 shrink-0" aria-hidden="true" />
                Our Sponsors
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-black/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="grid flex-1 grid-cols-1" action="#" method="GET">
            <input type="search" name="search" aria-label="Search"
              class="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-black outline-none placeholder:text-gray-400 sm:text-sm/6"
              placeholder="Search" />
            <MagnifyingGlassIcon class="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
              aria-hidden="true" />
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <RouterLink to="/projectadd">
              <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Add Repository</span>
                <FolderPlusIcon class="size-6" aria-hidden="true" />
              </button>
            </RouterLink>

            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-black/10" aria-hidden="true" />

            <RouterLink to="/">
              <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Home Page</span>
                <HomeIcon class="size-6" aria-hidden="true" />
              </button>
            </RouterLink>

            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-black/10" aria-hidden="true" />

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img class="size-8 rounded-full bg-gray-50"
                  src="https://unrolla.blob.core.windows.net/unrolla/images/PXL_20240421_025657878.webp" alt="" />
                <span class="hidden lg:flex lg:items-center">
                  <ChevronDownIcon class="ml-2 size-5 text-gray-400" aria-hidden="true" />
                </span>
              </MenuButton>
              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <RouterLink :to="item.to"
                    :class="[active ? 'bg-gray-50 outline-none' : '', 'block px-3 py-1 text-sm/6 text-black']">
                    {{ item.name }}
                    </RouterLink>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="">
        <div class="">
          <RouterView />
          <!-- Your content -->
        </div>
      </main>
    </div>
  </div>
  <div class="min-h-32 bg-gradient-to-b from-white/50 via-black to-black"></div>
  <FooterAnimation />
  <PixelDanceRecorder />
  <FooterAnimation />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed, ref } from 'vue'
import FooterAnimation from './components/FooterAnimation.vue'
import PixelDanceRecorder from './components/PixelDanceRecorder.vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  FolderPlusIcon,
  HandThumbUpIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const router_navigation = [
  { name: 'Home', to: '/', icon: HomeIcon, current: false },
  { name: 'Project Registration', icon: FolderPlusIcon, to: '/projectadd', current: false },
  { name: 'About', to: '/about', icon: HandThumbUpIcon, current: false },
]

const link_navigation = [
  { name: 'GitHub', href: 'https://github.com/', icon: GlobeAltIcon, current: false },
]

const feat_sponsors = [
  { id: 2, name: 'Hack for LA', href: 'https://www.hackforla.org/', initial: 'HLA', current: false },
  { id: 1, name: 'Ready Tech Pro', href: 'https://readytechpro.org/', initial: 'RTP', current: false },
  { id: 3, name: 'IT20', href: 'https://2it0.com', initial: 'ITT', current: false },
]

const userNavigation = computed(() => {
  if (window.user_id > 0) {
    return [
      { name: 'Sponsor Setup', to: '/onboarding' },
    ]
  } else {
    return [
      { name: 'Sponsor Login', to: '/login' },
      { name: 'Sponsor Signup', to: '/signup' },
    ]
  }
})	

const sidebarOpen = ref(false)

</script>