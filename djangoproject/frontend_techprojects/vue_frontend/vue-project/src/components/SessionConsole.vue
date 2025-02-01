<template>
    <div class="bg-white/50">
        <div class="min-h-32 border-black border-dashed border-y-8">
            <div class="mx-auto max-w-7xl p-8">
                <div class="text-2xl">
                    SESSION CONSOLE
                </div>
                <div>
                    <SessionImageQuilt />
                </div>
                <div>
                    <SessionImageAdd />
                </div>
                <div>
                    <SessionStats stgrp_idx="0" title="Session Stats" />
                </div>
                
                <div>
                    <SessionStats stgrp_idx="0" title="Linked Session Stats" />
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import SessionStats from './SessionStats.vue'
import SessionImageQuilt from './SessionImageQuilt.vue';
import SessionImageAdd from './SessionImageAdd.vue';

</script>