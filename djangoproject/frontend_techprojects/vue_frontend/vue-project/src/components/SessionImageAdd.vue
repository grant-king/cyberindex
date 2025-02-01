<template>
    <div class="bg-white/50 p-8">

        <div class="mt-8">
            Want to connect this session to other sessions?
            submit a session image
            <div class="my-4">
                <input :v-model="image_name" type="file" accept="image/png" @change="handle_file_change" />
            </div>
            <div v-if="image_name">
                <div class="max-w-64">
                    <div class="">
                        <div class="flex justify-center">
                            <img class="aspect-square object-cover border-white border-2 border-dotted rounded-md" :src="image_preview" />
                        </div>
                    </div>
                </div>
                <div class="my-4">
                    <div class="">
                        <button class="border-dotted border-4 rounded-md bg-clip-border text-black font-bold px-3 py-2"
                        @click="avatarcreate.createAvatar">
                        Submit {{ image_name }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div>
        It will be hashed, converted to webp, then uploaded along with the hash for the origninal image
        You must submit the original PNG image in order to associate this session with other sessions that
        also submitted the original image
    </div>
    <div>
        The hash is used to link sessions for aggregated stats and to provide a greater level of persistence
        for users who don't wan tto lose platform progress.
        The converted image is used to build our community session quilt, check it out below.
    </div>
    
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useAvatarCreateStore } from '@/stores/avatarcreate'

const avatarcreate = useAvatarCreateStore()

const temp_img = 'https://via.placeholder.com/150'
const image_name = ref(null)
const image_preview = ref(null)

async function handle_file_change(event) {
    const file = event.target.files[0]
    image_name.value = file.name
    //await avatarcreate.convertImageToWebP()
    const reader = new FileReader()
    reader.onload = (e) => {
        console.log(e.target.result)
        image_preview.value = e.target.result
    }
    reader.readAsDataURL(file)
    avatarcreate.original_image_file = file
}


</script>