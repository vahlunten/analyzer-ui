<script lang="ts">
    import type { SearchResults } from '@backend/types'
    import { selectedTab } from "../stores/stores";
    import { fade } from 'svelte/transition';

    export const title:string = "pes";
    export const content: SearchResults = null;
    export let tabIndex: number;
    import Table from "./Table.svelte";



</script>

<main >
    <!-- <div class="transition-opacity duration-100 ease-out {$selectedTab == tabIndex ? "visible" : "invisible"}"> -->

    <div style="display: {$selectedTab == tabIndex ? "block" : "none"}">
        <slot>

        </slot>
    </div>
    
</main>