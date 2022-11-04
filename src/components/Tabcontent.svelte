<script lang="ts">
    import type { SearchResults } from "src/types"
    import { selectedTab } from "../stores/stores";

    export let title:string;
    export let content: SearchResults;
    export let tabIndex: number;
    import Table from "./Table.svelte";



</script>

<main >
    <div style="display: {tabIndex + 1 == $selectedTab? "block" : "none"}">
        <Table title={"JsonLD data"} data={content.jsonFound}></Table>
    </div>
    
</main>