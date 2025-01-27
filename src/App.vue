<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import { useRoute } from 'vue-router'

	import Navbar from '@/components/layout/Navbar.vue'
	import Footer from '@/components/layout/Footer.vue'

	document.title = "Nation - Accueil"
</script>

<template>
	<RouterView />
	<Footer />
</template>