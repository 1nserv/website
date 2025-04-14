<script setup lang="ts">
    // import Globe from '@/components/icons/Globe.vue'
    import Navbar from '@/components/layout/Navbar.vue';

    document.title = "Nation - Institutions"
</script>
<template>
	<Navbar />
    <section class="pt-16 space-y-8">
        <span class="block bg-orange-500/15 text-orange-500 text-center py-3">Ce mandat est provisoire. Sa période d'effet s'étend du 1er septembre 2024 jusqu'à l'ouverture officielle du serveur.</span>
    </section>
    <section class="text-center p-8 space-y-8">
        <h1 class="text-primary text-2xl uppercase font-bold">Conseil d'Administration</h1>
        <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/kheops.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold">Kheops</h2>
                    <span class="text-zinc-500 text-sm">Fondateur</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/happex.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold">happoutre</h2>
                    <span class="text-zinc-500 text-sm">Fondateur</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/bird.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold">Bird</h2>
                    <span class="text-zinc-500 text-sm">Administrateur</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/akel.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold">Akel</h2>
                    <span class="text-zinc-500 text-sm">Administrateur</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/alexis.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold">Alexis</h2>
                    <span class="text-zinc-500/50 text-sm">Ex-administrateur</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/taox7.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold">Taox7</h2>
                    <span class="text-zinc-500/50 text-sm">Ex-administrateur</span>
                </div>
            </div>
        </div>
    </section>
    <section class="text-center p-8 space-y-8">
        <h1 class="text-primary text-2xl uppercase font-bold">Gouvernement provisoire</h1>
        <i>Les responsabilités gouvernementales sont temporairement confiées au Conseil d'Administration.</i>
    </section>
    <section class="text-center p-8 space-y-8">
        <h1 class="text-primary text-2xl uppercase font-bold">Tribunal</h1>
        <i>Les responsabilités du Tribunal sont temporairement confiées au Conseil d'Administration.</i>
    </section>
    <section class="text-center p-8 space-y-8">
        <h1 class="text-primary text-2xl uppercase font-bold">Assemblée Nationale</h1>
        <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/bird.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold">Bird</h2>
                    <span class="text-zinc-500 text-sm">Parti Birdiste (66.6%)</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/gov/happex.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold">happoutre</h2>
                    <span class="text-zinc-500 text-sm">Parti Birdiste (66.6%)</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="https://cdn.discordapp.com/avatars/320599097927139330/a7731856b09e01abb83728f1a5f5a2cb.png?size=512" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold">Kepa</h2>
                    <span class="text-zinc-500 text-sm">Parti Birdiste (66.6%)</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="https://cdn.discordapp.com/avatars/883392883963592705/308f33e7c4c3a99a5dbcc612d3194a14.png?size=512" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold">Larry</h2>
                    <span class="text-zinc-500 text-sm">Parti Birdiste (66.6%)</span>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="https://cdn.discordapp.com/avatars/1141795370834333827/a8fc3c850838be806ab2a6ea5707fedc.png?size=512" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold">Teïa</h2>
                    <span class="text-zinc-500 text-sm">Parti Communiste (16.5%)</span>
                </div>
            </div>
        </div>
    </section>
    <section class="text-center p-8 space-y-8">
        <h1 class="text-primary text-2xl uppercase font-bold">Équipe robotisée</h1>
        <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/bots/serveur.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold"><a href="https://github.com/1nserv/serveur.bot">Serveur</a></h2>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/bots/economie.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold"><a href="https://github.com/1nserv/economy.bot">Économie</a></h2>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/bots/moderation.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold"><a href="https://github.com/1nserv/moderation.bot">Modération</a></h2>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/bots/hdv.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold"><a href="https://github.com/1nserv/hdv.bot">Hôtel de ville</a></h2>
                </div>
            </div>
            <div class="p-6 space-y-6">
                <div class="space-y-4">
                    <img src="@/assets/bots/communaute.png" class="rounded-full w-32 mx-auto"/>
                    <h2 class="text-lg font-semibold"><a href="https://github.com/1nserv/people.bot">Communauté</a></h2>
                </div>
            </div>
        </div>
    </section>
</template>