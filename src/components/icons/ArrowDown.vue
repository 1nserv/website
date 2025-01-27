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
        <g id="arrow_down">
            <path id="arrow" d="M16 8V24M16 24L10 18M16 24L22 18" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>
</template>