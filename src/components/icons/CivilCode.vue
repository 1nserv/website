<script setup>
    defineProps({
        className: {
            type: String,
            required: true
        }
    })
</script>
<template>
    <svg :class="className" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.75 6H26M6 8.5H26M6 11H21M9.75 13.5H26M6 18.5H24.75M6 16H26M9.75 21H26M6 23.5H26M6 26H13.5" stroke-linecap="round" />
    </svg>
</template>