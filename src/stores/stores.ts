import type { Output, CrawlerConfig } from '@backend/types';
import { writable } from 'svelte/store';

export const output = writable<Output>();
export const initialResponseStore = writable<string>();
export const diffString = writable<string>();
export const runsList = writable<any>();
export const selectedSelectors = writable<CrawlerConfig>();


// export const outputStore = {
//     subscribe: output.subscribe,
//     set:  (out:Output) => {
//         return output.set(out);
//     }

// }

export const selectedTab = writable<number>(-1);

