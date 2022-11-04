<script lang="ts">
    import Tabcontent from '../components/Tabcontent.svelte'
    // import JSONTree from 'svelte-json-tree'
    import type { Output } from '../types'
    import { output } from '../stores/stores'
    import MyTab from '../components/MyTab.svelte'
    import MyTabList from '../components/MyTabList.svelte'

    // let analyzerOutput: Output;
    {
        $output
    }

    const fetchImage = (async () => {
        const response = await fetch('./OUTPUT.json')
        output.set((await response.json()) as Output)
        console.log(output)
        return $output
    })()
</script>

<main class="m-4">
    <!-- <div> {JSON.stringify($output)}</div> -->
    {#await fetchImage}
        <p>...waiting</p>
    {:then}
       


        <MyTabList keywords={$output.keywords}></MyTabList>
        {#each $output.keywordConclusions as keyConclusion}

        <MyTab>
            <Tabcontent tabIndex={keyConclusion.Keyword.index} title={keyConclusion.Keyword.original} content={keyConclusion.SearchResults}/>
        </MyTab>
        {/each}
    {:catch error}
        <p>An error occurred!</p>
    {/await}
</main>
