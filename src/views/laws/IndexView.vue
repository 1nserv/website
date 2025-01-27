<script setup lang="ts">
    import { RouterLink } from 'vue-router';

    import Navbar from '@/components/layout/Navbar.vue';

    import Constitution from '@/components/icons/Constitution.vue';
    import CivilCode from '@/components/icons/CivilCode.vue';
    import PenalCode from '@/components/icons/PenalCode.vue';
    import Taxes from '@/components/icons/Taxes.vue';
    import Security from '@/components/icons/Security.vue';
</script>
<template>
    <Navbar />
    <section class="p-8 pt-16 space-y-4 md:p-16 md:space-y-8 md:pt-32">
        <h1 class="text-3xl text-center font-bold">Textes de loi</h1>
        <nav class="space-y-4 md:space-y-8">
            <h2 class="text-xl font-bold">Constitution et vie politique</h2>
            <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                <a href="/legal/constitution.pdf" class="block bg-primary/20 text-center border-2 border-primary rounded-3xl p-8 space-y-4 md:space-y-8">
                    <Constitution className="fill-primary w-16 h-16 mx-auto" />
                    <span class="text-primary text-lg font-medium">Constitution</span>
                </a>
                <RouterLink to="/lois/partis" class="block bg-primary/20 text-center border-2 border-primary rounded-3xl p-8 space-y-4 md:space-y-8">
                    <Constitution className="fill-primary w-16 h-16 mx-auto" />
                    <span class="text-primary text-lg font-medium">Règles des Partis</span>
                </RouterLink>
                <RouterLink to="/lois/roles" class="block bg-primary/20 text-center border-2 border-primary rounded-3xl p-8 space-y-4 md:space-y-8">
                    <Constitution className="fill-primary w-16 h-16 mx-auto" />
                    <span class="text-primary text-lg font-medium">Description des Rôles</span>
                </RouterLink>
            </ul>

            <h2 class="text-xl font-bold">Vivre ensemble</h2>
            <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                <RouterLink to="/lois/code_civil" class="block bg-secondary/20 text-center border-2 border-secondary rounded-3xl p-8 space-y-4 md:space-y-8">
                    <CivilCode className="stroke-secondary stroke-[1.2px] w-16 h-16 mx-auto" />
                    <span class="text-secondary text-lg font-medium">Code Civil</span>
                </RouterLink>
                <RouterLink to="/lois/code_penal" class="block bg-secondary/20 text-center border-2 border-secondary rounded-3xl p-8 space-y-4 md:space-y-8">
                    <PenalCode className="fill-secondary stroke-secondary stroke-[1.8px] w-16 h-16 mx-auto" />
                    <span class="text-secondary text-lg font-medium">Code Pénal</span>
                </RouterLink>
                <RouterLink to="/lois/bots" class="block bg-secondary/20 text-center border-2 border-secondary rounded-3xl p-8 space-y-4 md:space-y-8">
                    <PenalCode className="fill-secondary stroke-secondary stroke-[1.8px] w-16 h-16 mx-auto" />
                    <span class="text-secondary text-lg font-medium">Encadrement des Bots</span>
                </RouterLink>
            </ul>

            <h2 class="text-xl font-bold">Économie</h2>
            <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                <RouterLink to="/lois/ventes" class="block bg-tertiary/20 text-center border-2 border-tertiary rounded-3xl p-8 space-y-4 md:space-y-8">
                    <Constitution className="fill-tertiary w-16 h-16 mx-auto" />
                    <span class="text-tertiary text-lg font-medium">Code des Ventes</span>
                </RouterLink>
                <RouterLink to="/lois/impots" class="block bg-tertiary/20 text-center border-2 border-tertiary rounded-3xl p-8 space-y-4 md:space-y-8">
                    <Taxes className="fill-tertiary w-16 h-16 mx-auto" />
                    <span class="text-tertiary text-lg font-medium">Impôts et Taxes</span>
                </RouterLink>
            </ul>
        </nav>
    </section>
</template>