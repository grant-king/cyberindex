import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAvatarCreateStore = defineStore('avatarcreate', () => {
  const base_url = window.location.origin
  const endpoint = `${base_url}/apiv1/avatars/`
  const original_image_file = ref(null)
  const original_image_hash = ref(null)
  const image_upload_preview = ref({}) // next avatar object to be created

  async function createAvatar() {
    await calculateChecksum()
    //await convertImageToWebP()
    const form_data = new FormData()
    form_data.append('original_hash', original_image_hash.value)
    console.log('original_file', original_image_file.value)
    form_data.append('public_image', original_image_file.value)
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
      body: form_data,
    })
    const data = await response.json()
    if (response.ok) {
      console.log('created avatar', data)
    } else {
      console.error('failed to create avatar')
      console.error(response)
    }
  }

  async function calculateChecksum() {
    const file = original_image_file.value
    if (file === null) {
      console.error('no file selected')
      return
    }
    const arrayBuffer = await file.arrayBuffer()
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    original_image_hash.value = hashHex
  }

  async function convertImageToWebP() {
    const file = original_image_file.value
    if (file === null) {
      console.error('no file selected')
      return
    }
    console.log('converting image to webp')
    return new Promise((resolve, reject) => {
      const image = new Image()
      console.log('creting object url')
      image.src = URL.createObjectURL(file)
      console.log('waiting for image to load')
      image.onload = () => {
        console.log('converting image')
        const canvas = document.createElement('canvas')
        canvas.height = 400
        canvas.width = 400 * (image.width / image.height)
        const context = canvas.getContext('2d')
        context.drawImage(image, 0, 0)
        console.log('drawing image')
        canvas.toBlob((blob) => {
          if (blob) {
            const newFile = new File([blob], 'image.webp', { type: 'image/webp' })
            image_upload_preview.value = newFile
            resolve(newFile)
          } else {
            reject('failed to convert image')
          }
        }, 'image/webp')
      }
      image.onerror = (error) => {
        console.error('failed to load image')
        console.error(error)
      }
      image.src = URL.createObjectURL(file)
    }
    )
  }


  return { createAvatar, convertImageToWebP, original_image_file, image_upload_preview }
})
