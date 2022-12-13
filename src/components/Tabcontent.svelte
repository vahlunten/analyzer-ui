<script lang="ts">
    import type { SearchResults } from '@backend/types'
    import { selectedTab } from "../stores/stores";

    export const content: SearchResults = null;
    export let tabIndex: number;



</script>

<main >

    <div style="display: {$selectedTab == tabIndex ? "block" : "none"}">
        <slot>

        </slot>
    </div>
    
</main>