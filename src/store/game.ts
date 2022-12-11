import { writable } from 'svelte/store';

export const user = writable(0);

export const runtime = []
// count.subscribe(value => {
// 	console.log(value);
// }); // logs '0'

// count.set(1); // logs '1'

// count.update(n => n + 1); // logs '2'