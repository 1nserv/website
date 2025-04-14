<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>
<template>
    <footer class="grid bg-primary text-white bottom-0 p-8 gap-8 w-full sm:grid-cols-3 md:px-32 lg:px-64 xl:grid-cols-4 dark:bg-zinc-900">
        <div class="flex flex-col">
            <RouterLink to="/about" class="mb-4"><h3 class="text-lg font-semibold">À propos de Nation</h3></RouterLink>
            <a href="https://www.wattpad.com/1467327518" target="_blank">Histoire</a>
            <RouterLink to="/institutions">Institutions</RouterLink>
            <RouterLink to="/dev">Espace dev</RouterLink>
        </div>
        <div class="flex flex-col">
            <RouterLink to="/lois" class="mb-4"><h3 class="text-lg font-semibold">Textes de loi</h3></RouterLink>
            <a href="/legal/constitution.pdf">Constitution (PDF)</a>
            <a href="/legal/taxation.pdf">Impôts et Taxes (PDF)</a>
            <RouterLink to="/lois/privacy">Confidentialité</RouterLink>
            <RouterLink to="/lois/code_civil">Code civil</RouterLink>
            <RouterLink to="/lois/code_penal">Code pénal</RouterLink>
        </div>
    </footer>
</template>