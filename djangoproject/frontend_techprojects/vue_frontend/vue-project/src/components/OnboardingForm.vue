<template>
    <div class="relative isolate bg-white/50 px-6 py-24 sm:py-32 lg:px-8">
        <svg class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true">
            <defs>
                <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-64"
                    patternUnits="userSpaceOnUse">
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
            </defs>
            <svg x="50%" y="-64" class="overflow-visible fill-gray-50">
                <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                    stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
        <div class="mx-auto max-w-xl lg:max-w-4xl">
            <h2 class="text-pretty text-4xl font-semibold tracking-tight text-black sm:text-5xl">{{ title_1 }}</h2>
            <p class="mt-2 text-lg/8 text-black">{{ subtitle_1 }}</p>
            <div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                <form action="#" method="POST" class="lg:flex-auto">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label for="first-name" class="block text-sm/6 font-semibold text-black">First name</label>
                            <div class="mt-2.5">
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                            </div>
                        </div>
                        <div>
                            <label for="last-name" class="block text-sm/6 font-semibold text-black">Last name</label>
                            <div class="mt-2.5">
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                            </div>
                        </div>
                        <div>
                            <label for="org_name" class="block text-sm/6 font-semibold text-black">Organization
                                Name</label>
                            <div class="mt-2.5">
                                <input id="org_name" name="org_name" type="text"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                            </div>
                        </div>
                        <div>
                            <label for="org_role" class="block text-sm/6 font-semibold text-black">Your role</label>
                            <div class="mt-2.5">
                                <input type="url" name="org_role" id="org_role"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="website" class="block text-sm/6 font-semibold text-black">Website</label>
                            <div class="mt-2.5">
                                <input type="url" name="website" id="website"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="logo_url" class="block text-sm/6 font-semibold text-black">Organization logo URL</label>
                            <div class="mt-2.5">
                                <input type="url" name="logo_url" id="logo_url"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm/6 font-semibold text-black">Public Message</label>
                            <div class="mt-2.5">
                                <textarea id="message" name="message" rows="4"
                                    class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-black/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-lime-600" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-10">
                        <button type="button"
                            class="block w-full rounded-md bg-lime-200 px-3.5 py-2.5 text-center text-sm font-bold text-white/20 bg-clip-text border-4 border-dotted border-black shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">Create
                            Sponsorship Profile</button>
                    </div>
                    <p class="mt-4 text-sm/6 text-black">By submitting this form, I agree to the <a href="#"
                            class="font-semibold hover:text-lime-950">privacy&nbsp;policy</a>.</p>
                </form>
                <!-- Sponsorship Example -->
                <div class="lg:mt-6 lg:w-80 lg:flex-none">
                    <SponsorWidget1 :message="testimonial" :author="testimonial_author" 
                        :sponsor_role="testimonial_author_title" :org_name="testimonial_author_org"
                        :sponsor_avatar="testimonial_author_image" :logo_source="logo_source" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SponsorWidget1 from './SponsorWidget1.vue';

const title_1 = 'Let’s get your sponsorship details in order.'
const subtitle_1 = 'This information will be used to create your sponsorship profile.'

//sponsorship example data
const logo_source = 'https://unrolla.blob.core.windows.net/unrolla/images/IT20_pumpkin_logo_D9SHwmg.webp'
const testimonial = 'As someone who is averse to traditional marketing methods and muddy monetization models, I find quiet, transparent support of aligned projects to be the most rewarding.'
const testimonial_author = 'Grant King'
const testimonial_author_image = 'https://unrolla.blob.core.windows.net/unrolla/images/PXL_20231023_004949758_4679usk.webp'
const testimonial_author_title = 'Product Manager'
const testimonial_author_org = 'IT20'

</script>