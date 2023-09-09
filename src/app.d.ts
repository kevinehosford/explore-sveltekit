// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			code?: number;
		}
		interface Locals {
			user?: any;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
