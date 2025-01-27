<script setup lang="ts">
	import NavbarTransparent from './NavbarTransparent.vue';
	import ArrowRight from '../icons/ArrowRight.vue'
</script>
<template>
	<NavbarTransparent />
    <header id="header" class="bg-[url('/blur.png')] bg-center bg-cover bg-no-repeat text-white"><div class="text-center w-full h-full p-8 pt-32 pb-16 space-y-8 sm:p-16 sm:py-32 md:space-y-16 lg:px-32 dark:bg-black/60">
		<img src="/text.png" class="h-16 mx-auto sm:h-24" />
		<p class="text-4xl font-bold md:w-2/3 md:mx-auto">Sûrement l'un des <u>premiers</u> serveurs <u>démocratiques</u>.</p>
		<a href="https://dsc.gg/nationserver" class="block"><button class="flex bg-white text-slate-800 font-bold rounded-full shadow-lg pl-5 pr-4 py-3 mx-auto space-x-1 duration-300 hover:shadow-xl"><span class="block translate-y-[0px]">Rejoindre</span> <ArrowRight className="w-6 h-6 stroke-slate-800 stroke-[3px]" /></button></a>
	</div></header>
</template>