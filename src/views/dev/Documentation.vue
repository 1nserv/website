<script setup lang="ts">
	import Navbar from '@/components/layout/Navbar.vue';
</script>
<template>
	<Navbar />
	<div class="bg-orange-500/15 text-orange-500 text-center px-8 py-4 pt-20 md:px-64">Le site étant en développement, la plupart des liens pointant en dehors de la documentation sont susceptibles de ne pas fonctionner.</div>
	<div id="md" v-html="content" class="p-8 md:px-64"></div>
</template>
<script lang="ts">
	import markdownIt from 'markdown-it';
	import axios from 'axios';
	import { defineComponent } from 'vue';

	export default defineComponent({
		data() {
			return {
				content: '' as string,
			};
		},
		methods: {
			async fetchMarkdown(): Promise<void> {
				const md = markdownIt();
				const pageName = this.$route.params.name as string; // Cast pour s'assurer du type string
				try {
					const response = await axios.get(`/dev/nsa/${pageName}.md`);
					this.content = md.render(response.data);
				} catch (error) {
					console.error('Error fetching the Markdown file:', error);
					this.content = '<p>Error loading content. Please try again later.</p>';
				}
			},
			
			async getTitle(): Promise<void> {
				const h1Element = document.getElementsByTagName('h1')[0];
				if (h1Element) {
					document.title = h1Element.innerText;
				}
			},
		},
		watch: {
			'$route.params.name': 'fetchMarkdown',
		},
		created() {
			this.fetchMarkdown();
			this.getTitle();
		},
	});
</script>