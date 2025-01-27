<script setup lang="ts">
	import NavbarTransparent from '@/components/layout/NavbarTransparent.vue';
	import ArrowRight from '@/components/icons/ArrowRight.vue'
</script>
<template>
	<NavbarTransparent />
    <section class="bg-[url('/blur.png')] bg-center bg-cover bg-no-repeat text-white"><div class="text-center w-full h-full p-8 pt-32 pb-16 space-y-8 sm:p-16 sm:py-32 md:space-y-16 lg:px-32 dark:bg-black/60">
		<h1 class="text-5xl font-extrabold max-sm:text-3xl">404: Ceci est une impasse démocratique !</h1>
		<p class="font-bold md:w-2/3 md:mx-auto">Cette page n'existe pas.</p>
		<div class="flex text-center w-fit mx-auto space-x-2">
			<RouterLink to="/" class="block"><button class="flex bg-white/15 text-slate-800 font-bold rounded-full shadow-lg px-5 py-3 mx-auto space-x-1 duration-300 hover:shadow-xl"><span class="block text-white translate-y-[0px]">Accueil</span></button></RouterLink>
			<a href="https://dsc.gg/nationserver" class="block"><button class="flex bg-white text-slate-800 font-bold rounded-full shadow-lg pl-5 pr-4 py-3 mx-auto space-x-1 duration-300 hover:shadow-xl"><span class="block translate-y-[0px]">Rejoindre</span> <ArrowRight className="w-6 h-6 stroke-slate-800 stroke-[3px]" /></button></a>
		</div>
	</div></section>
</template>