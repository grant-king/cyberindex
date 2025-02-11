import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAvatarCreateStore = defineStore('avatarcreate', () => {
  const base_url = window.location.origin
  const endpoint = `${base_url}/apiv1/avatars/`
  const original_image_file = ref(null)
  const original_image_hash = ref(null)
  const image_upload_preview = ref({}) // next avatar object to be created
  const all_images_endpoint = `${endpoint}all_images/`
  const all_images = ref([])

  async function fetchAllImages() {
    const response = await fetch(all_images_endpoint, {
      method: 'GET',
      headers: {
        'X-CSRFToken': window.csrf_token,
      },
    })
    const data = await response.json()
    if (response.ok) {
      console.log('all images', data)
      all_images.value = data.public_images
    } else {
      console.error('failed to fetch all images')
      console.error(response)
    }
  } 

  async function createAvatar() {
    await calculateChecksum()
    await convertImageToWebP()
    const form_data = new FormData()
    form_data.append('original_hash', original_image_hash.value)
    console.log('converted file', image_upload_preview.value)
    form_data.append('public_image', image_upload_preview.value)
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
      all_images.value.unshift(data.public_image)
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
    const file = original_image_file.value;
    if (!file) {
      console.error('No file selected');
      return;
    }
    console.log('Converting image to webp');
  
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = URL.createObjectURL(file);
  
      image.onload = () => {
        // Define maximum allowed dimensions
        const maxWidth = 800;   // change as needed
        const maxHeight = 600;  // change as needed
  
        let width = image.width;
        let height = image.height;
  
        // Calculate scaling factor if the image is too large
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = width * ratio;
          height = height * ratio;
        }
  
        // Create a canvas with the new dimensions
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
  
        const context = canvas.getContext('2d');
        // Draw the image scaled to the new dimensions
        context.drawImage(image, 0, 0, width, height);
  
        // Convert the canvas to a WebP blob
        canvas.toBlob((blob) => {
          if (blob) {
            const newFile = new File([blob], 'image.webp', { type: 'image/webp' });
            image_upload_preview.value = newFile;
            resolve(newFile);
          } else {
            reject('Failed to convert image');
          }
        }, 'image/webp');
      };
  
      image.onerror = (error) => {
        console.error('Failed to load image');
        console.error(error);
        reject(error);
      };
    });
  }
  

  return { createAvatar, convertImageToWebP, fetchAllImages, all_images, original_image_file, image_upload_preview }
})
