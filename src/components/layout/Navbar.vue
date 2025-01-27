<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="fixed z-50 flex bg-primary backdrop-blur-xl w-screen h-16 overflow-hidden dark:bg-zinc-800/50">
        <RouterLink to="/" class="px-6 place-content-center">
            <img src="/text.png" class="h-6" />
        </RouterLink>
        <RouterLink to="/about" class="hidden text-white font-semibold h-full px-6 place-content-center sm:block">
            Infos
        </RouterLink>
        <RouterLink to="/institutions" class="hidden text-white font-semibold h-full px-6 place-content-center sm:block">
            Institutions
        </RouterLink>
        <div class="grow"></div>
        <a href="https://dsc.gg/nationserver" class="h-full px-4 place-content-center">
            <img src="@/assets/social/discord-logo.png" class="w-6" />
        </a>
        <a href="https://github.com/1nserv" class="hidden h-full px-4 place-content-center sm:block">
            <img src="@/assets/social/github-logo.png" class="w-6" />
        </a>
    </nav>
</template>