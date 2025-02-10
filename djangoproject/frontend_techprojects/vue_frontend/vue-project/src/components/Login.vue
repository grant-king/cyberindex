<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white/50">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-40 w-auto" :src="company_logo_url" alt="Logo" />
        <h2 class="mt-20 text-center text-2xl/9 font-bold tracking-tight text-black">Sign in to your account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm/6 font-medium text-black">Email address</label>
            <div class="mt-2">
              <input v-model="username" autocomplete="email" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6" />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-black">Password</label>
              <div class="text-sm">
                <a :href="reset_url" class="font-semibold text-red-300/80 hover:text-red-300">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input v-model="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6" />
            </div>
          </div>
  
          <div>
            <button type="button" @click="submit_login()" class="flex w-full justify-center rounded-md hover:text-black/80 hover:bg-white/60 bg-white/80 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
          </div>
        </form>
  
        <p class="mt-20 text-center text-sm/6 text-black">
          Not a sponsor? Read our
          {{ ' ' }}
          <RouterLink to="/about"
          class="font-semibold hover:text-black/80 text-black bg-clip-text bg-gradient-to-b from-black/20 via-lime-700/80 to-black/20 rounded-sm">
          about page to learn more
          </RouterLink>
          {{ ' ' }}
          or you can 
          {{ ' ' }}
          <RouterLink to="/register"
          class="font-semibold hover:text-black/80 text-black bg-clip-text bg-gradient-to-b from-black/20 via-lime-700/80 to-black/20 rounded-sm">
          register now with $40 or $200.
          </RouterLink>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const base_url = window.location.origin
  const reset_url = `${base_url}/password_reset/`
  
  const company_logo_url = 'https://myctpmedia.blob.core.windows.net/default/avatars/f8d909803de8b75b0972436093b8e5be67d3c2d3f8a09106674398dd6df98b37.webp'
  
  const username = ref('')
  const password = ref('')
  
  async function submit_login() {
      const data = {
          username: username.value,
          password: password.value
      }
      const response = await fetch(`${base_url}/login/`, {
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
          window.location.href = '/'
      }
      else {
          alert(`Error: ${JSON.stringify(json)}`)
      }
  
  }
  
  </script>