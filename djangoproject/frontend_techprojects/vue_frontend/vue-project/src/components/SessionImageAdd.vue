<template>
    <div class="">
        <div class="">
            <div class="my-8">
                <div class="">
                    connect this session to other sessions...
                </div>
                <div class="text-4xl">
                    submit a session image
                </div>
                <div>
                    <button
                        class="border-dotted text-xs border-b-2 border-r-4 rounded-sm bg-clip-border text-black font-bold px-3 py-2"
                        @click="show_about = !show_about">
                        About Session Image
                    </button>
                </div>
            </div>
            <div class="my-4">
                <input :v-model="image_name" type="file" accept="image/png" @change="handle_file_change" />
            </div>
            <div v-if="image_name">
                <div class="max-w-64">
                    <div class="">
                        <div class="flex justify-center">
                            <img class="aspect-square object-cover border-white border-2 border-dotted rounded-md"
                                :src="image_preview" />
                        </div>
                    </div>
                </div>
                <div class="my-4">
                    <div class="">
                        <button class="border-dotted border-4 rounded-md bg-clip-border text-black font-bold px-3 py-2"
                            @click="submit_image">
                            Submit {{ image_name }}
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <div v-show="show_about" class="my-8">
            <div>
                Submitting an original image allows you to securely track your progress across sessions.
            </div>
            <div>
                Think of this like login credentials, except you only have to resubmit them when your session expires.
            </div>
            <div>
                If you want the same data on different devices, all you have to do is submit the same image on each device to link the sessions.
            </div>
            <div>
                The data in the orignal image will be hashed, then converted to webp. The hash and the converted image
                will be stored in our database. The original image is not stored in our database.
            </div>
            <div>
                You must submit the original PNG image in order to associate this session with other sessions that
                also submitted the original image. 
            </div>
            <div>
                The hash is used to link sessions for aggregated stats and to provide a greater level of persistence
                for users who don't want to lose platform progress.
            </div>
            <div>
                The converted image will be used in things like our community session quilt, check it out above!
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAvatarCreateStore } from '@/stores/avatarcreate'

const avatarcreate = useAvatarCreateStore()
const show_about = ref(false)

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

async function submit_image() {
    avatarcreate.createAvatar()
    alert('Image submitted. Check out the quilt above!')
    image_name.value = null
    image_preview.value = null
}

</script>