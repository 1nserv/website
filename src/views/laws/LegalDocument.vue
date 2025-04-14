<script setup lang="ts">
	import Navbar from '@/components/layout/Navbar.vue';
</script>
<template>
	<Navbar />
	<div id="md" v-html="content" class="p-8 md:px-64"></div>
</template>
<script lang="ts">
	import MarkdownIt from 'markdown-it';
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
				const md = new MarkdownIt(); // Instanciation correcte
				const pageName = this.$route.params.name as string; // Cast de `pageName` en `string`
				try {
					const response = await axios.get(`/legal/${pageName}.md`);
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