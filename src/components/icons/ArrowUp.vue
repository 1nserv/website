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
        <g id="arrow_up">
            <path id="arrow" d="M16 24V8M16 8L10 14M16 8L22 14" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>
</template>