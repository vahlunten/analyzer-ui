import type { Output } from 'src/types';
import { writable } from 'svelte/store';

export const output = writable<Output>();

// export const outputStore = {
//     subscribe: output.subscribe,
//     set:  (out:Output) => {
//         return output.set(out);
//     }

// }

export const selectedTab = writable<number>(2);
