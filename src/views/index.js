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
	'/scroll': {
		templateId: 'view-scroll',
		templateUrl: `${BASE_URL}src/views/scroll.html`,
		onMount: (container) => {
			// Initialize scroll animations when view is mounted
			initScrollView(container);
		},
		onUnmount: () => {
			// Cleanup scroll animations when navigating away
			cleanupScrollView();
		},
	},
	'/about': { templateId: 'view-about', templateUrl: `${BASE_URL}src/views/about.html` },
	'/projects': { templateId: 'view-projects', templateUrl: `${BASE_URL}src/views/projects.html` },
	'/contact': { templateId: 'view-contact', templateUrl: `${BASE_URL}src/views/contact.html` },
	'/component': { templateId: 'view-component', templateUrl: `${BASE_URL}src/views/component.html` },
	'/tipografy': { templateId: 'view-tipografy', templateUrl: `${BASE_URL}src/views/tipografy.html` },
	'/buttons': { templateId: 'view-buttons', templateUrl: `${BASE_URL}src/views/buttons.html` },
	404: { templateId: 'view-404', templateUrl: `${BASE_URL}src/views/404.html` },
}