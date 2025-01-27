<script setup lang="ts">
    import { RouterLink } from 'vue-router'

    import Navbar from '@/components/layout/Navbar.vue';
</script>
<template>
	<Navbar />
    <section class="p-8 pt-24 space-y-8 md:text-center md:p-16 md:pt-32">
        <img src="@/assets/creation_constitution.png" class="w-full rounded-xl md:h-64 md:w-auto md:mx-auto" alt="Image montrant les goats en train d'écrire l'histoire" />
        <h1 class="text-3xl font-bold">Que sommes-nous ?</h1>
        <p>Juste un serveur chill. Vous avez peut-être vu un serveur où les membres ont le pouvoir, ou alors ce concept vous est familier... Et bien nous avons repris ce concept pour l'améliorer et en faire un mix entre serveur communautaire et RP. Les admins sont très impliqués mais ont un humour tah le 9e degré si il existait.</p>

        <h1 class="text-3xl font-bold">Un petit truc en plus ?</h1>
        <img src="@/assets/score_politiscales.png" class="w-full rounded-xl md:h-32 md:w-auto md:mx-auto" alt="Image explicative du score au test politiscales. -67 = dictature, -12 = insurrection, 4 = passivité, 67 = révolution" />
        <p>Ce qu'on a en plus des autres serveurs, c'est une histoire. On a inconsciemment reconstitué l'histoire de France sans pour autant la copier: la République Nationale (ou Nation pour les intimes) est née de la révolution du 17 juin 2024. Trois grands bords se sont formés sur son échiquier politique, à savoir les <b class="text-blue-950 dark:text-blue-700">Taoxistes</b>, les <b class="text-neutral-500 dark:text-neutral-300">Passifs</b>, et les <b class="text-red-700 dark:text-red-500">Révolutionnaires</b>.</p>
    </section>
</template>