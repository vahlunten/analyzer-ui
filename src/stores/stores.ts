import type { Output } from '@backend/types';
import { writable } from 'svelte/store';

export const output = writable<Output>();
export const initialResponseStore = writable<string>();
export const diffString = writable<string>();
export const runsList = writable<string>();

// export const outputStore = {
//     subscribe: output.subscribe,
//     set:  (out:Output) => {
//         return output.set(out);
//     }

// }

export const selectedTab = writable<number>(-1);
