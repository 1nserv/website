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
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13.0233C9.31073 13.2213 8 14.6576 8 16.4V21.6C8 23.4778 9.52223 25 11.4 25H20.6C22.4778 25 24 23.4778 24 21.6V16.4C24 14.6575 22.6893 13.2213 21 13.0233V12C21 9.23858 18.7614 7 16 7C13.2386 7 11 9.23858 11 12V13.0233ZM13 13V12C13 10.3432 14.3432 9 16 9C17.6568 9 19 10.3432 19 12V13H13ZM17 17.75C17 17.1977 16.5523 16.75 16 16.75C15.4477 16.75 15 17.1977 15 17.75V20.25C15 20.8023 15.4477 21.25 16 21.25C16.5523 21.25 17 20.8023 17 20.25V17.75Z" />
    </svg>
</template>