export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\__layout-blank.svelte"),
	() => import("..\\..\\src\\routes\\dashboard.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\logging-in@blank.svelte"),
	() => import("..\\..\\src\\routes\\signup.svelte")
];

export const dictionary = {
	"": [[0, 4], [1], 1],
	"dashboard": [[0, 3], [1], 1],
	"logging-in@blank": [[2, 5], [1]],
	"signup": [[0, 6], [1], 1]
};