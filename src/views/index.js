// demo/src/views/index.js

import { cleanupScrollView, initScrollView } from '../scroll.js';

const BASE_URL = import.meta.env.BASE_URL

export const views = {
	'/': {
		templateId: 'view-home',
		templateUrl: `${BASE_URL}src/views/home.html`,
		onMount: (container) => {
			// Initialize scroll animations when home view is mounted
			initScrollView(container);
		},
		onUnmount: () => {
			// Cleanup scroll animations when navigating away
			cleanupScrollView();
		},
	},
	'/proyect': {

		templateId: 'view-proyect',
		templateUrl: `${BASE_URL}src/views/proyect.html`,
		onMount: (container) => {
			// Initialize scroll animations when view is mounted
			initScrollView(container);
		},
		onUnmount: () => {
			// Cleanup scroll animations when navigating away
			cleanupScrollView();
		},

	},
	404: {
		templateId: 'view-404',
		templateUrl: `${BASE_URL}src/views/404.html`,
		onMount: (container) => {
			// Initialize scroll animations when view is mounted
			initScrollView(container);
		},
		onUnmount: () => {
			// Cleanup scroll animations when navigating away
			cleanupScrollView();
		},

	}
}