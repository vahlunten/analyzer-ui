<script lang="ts">
    import type { SearchResults } from '@backend/types'
    import { selectedTab } from "../stores/stores";
    import { fade } from 'svelte/transition';

    export let title:string = "pes";
    export let content: SearchResults;
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