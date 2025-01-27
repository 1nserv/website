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
        <path d="M12.0402 7.9598C14.2271 5.77286 17.7729 5.77286 19.9598 7.9598L24.0402 12.0402C26.2271 14.2271 26.2271 17.7729 24.0402 19.9598L19.9598 24.0402C17.7729 26.2271 14.2271 26.2271 12.0402 24.0402L7.9598 19.9598C5.77286 17.7729 5.77286 14.2271 7.9598 12.0402L12.0402 7.9598Z" />
    </svg>
</template>