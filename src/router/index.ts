import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import RepublicView from '@/views/RepublicView.vue';
import NotFound from '@/views/NotFound.vue';

import LegalPage from '@/views/laws/LegalDocument.vue';
import LawsIndexView from '@/views/laws/IndexView.vue';

import TutorialVue from '@/views/howto/TutorialVue.vue';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: HomeView
	},
	{
		path: '/about',
		component: AboutView
	},
	{
		path: '/institutions',
		component: RepublicView
	},
	{
		path: '/lois',
		component: LawsIndexView
	},
	{
		path: '/lois/:name',
		component: LegalPage,
		props: true
	},
	{
		path: '/howto/:name',
		component: TutorialVue,
		props: true
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;