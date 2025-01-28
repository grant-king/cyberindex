<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-gray-900">
      <body class="h-full">
      ```
    -->
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white/50">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-40 w-auto" :src="company_logo_url" alt="Logo" />
        <h2 class="mt-20 text-center text-2xl/9 font-bold tracking-tight text-white">Register a new Sponsor account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-white">Email address</label>
            <div class="mt-2">
              <input v-model="email" autocomplete="email" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6" />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-white">New Password</label>
            </div>
            <div class="mt-2">
              <input v-model="password" type="password" autocomplete="new-password" required="" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6" />
            </div>
          </div>
  
          <div>
            <button type="button" @click="create_account()" class="flex w-full justify-center rounded-md hover:text-black/80 hover:bg-white/60 bg-white/40 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Initialize Sponsorship Account</button>
          </div>
        </form>
      </div>
    </div>

</template>

<script setup>
import router from '@/router'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const base_url = window.location.origin

const company_logo_url = 'https://unrolla.blob.core.windows.net/unrolla/images/cti_logo.webp'

async function create_account() {
    const data = {
        email: email.value,
        password: password.value
    }
    const response = await fetch(`${base_url}/register/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': window.csrf_token
        },
        body: JSON.stringify(data)
    })
    const json = await response.json()
    console.log(json)

    if (response.status === 200) {
        //window.location.href = '/'
        router.push({ name: 'onboarding' })
    }
    else {
        if (json.message == "UNIQUE constraint failed: auth_user.username") {
            alert(`There is already an account registered for the email ${email.value}. Please contact support@unrolla.com if you need assistance.`)
        }
        else {
            alert(`Error: ${json.message}`)
        }
    }
}

</script>