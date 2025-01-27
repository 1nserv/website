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
        <g id="arrow_left">
            <path id="arrow" d="M14 10L8 16M8 16L14 22M8 16H24" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>
</template>