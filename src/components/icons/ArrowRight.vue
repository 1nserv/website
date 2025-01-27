<script setup>
    defineProps({
        className: {
            type: String,
            required: true
        }
    })
</script>
<template>
    <svg width="32" height="32" viewBox="0 0 32 32" :class="className" xmlns="http://www.w3.org/2000/svg">
        <g id="arrow_right">
            <path id="arrow" d="M18 10L24 16M24 16L18 22M24 16H8" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>
</template>