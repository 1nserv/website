<script setup lang="ts">
	import { RouterLink } from 'vue-router'

	import Header from '@/components/layout/Header.vue'
</script>
<template>
	<Header />
	<main id="content" class="p-8 space-y-8 md:p-16">
		<section id="features" class="text-center space-y-6 md:w-3/4 md:mx-auto">
			<h2 class="text-xl font-bold">Que faire ?</h2>
			<div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
				<div class="rounded-3xl">
					Patientager.
				</div>
			</div>
		</section>
	</main>
</template>