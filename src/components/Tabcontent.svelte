<script lang="ts">
    import type { SearchResults } from "src/types"
    export let title:string;
    export let content: SearchResults;
    import Table from "./Table.svelte";


</script>

<main>
    <Table title={"JsonLD data"} data={content.jsonFound}></Table>
    
</main>