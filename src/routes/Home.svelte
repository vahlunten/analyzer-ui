<script lang="ts">
    import Tabcontent from '../components/Tabcontent.svelte'
    // import JSONTree from 'svelte-json-tree'
    import type { Output } from '@backend/types'
    import { output } from '../stores/stores'
    import Table from '../components/Table.svelte'
    import MyTabList from '../components/MyTabList.svelte'
    import ConclusionTab from '../components/ConclusionTab.svelte'
    import { fade, fly } from 'svelte/transition'

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

    const conclusion = {
        conclusionResult: {},
    }
</script>

<main class="m-4">
    <!-- <div> {JSON.stringify($output)}</div> -->
    {#await fetchImage}
        <p>...waiting</p>
    {:then}
        <MyTabList keywords={$output.keywords} />

        
        <Tabcontent
            tabIndex={0}
            title={'CONCLUSION'}
            content={$output.keywordConclusions[1].SearchResults}
        >
            <img in:fly="{{ y: 200, duration: 2000 }}" out:fade class ="max-w-xl" src="screenshot.jpeg" alt="screenshot from playwright" />


        </Tabcontent>

        {#each $output.keywordConclusions as keyConclusion}
            <Tabcontent
                tabIndex={keyConclusion.Keyword.index + 1}
                title={keyConclusion.Keyword.original}
                content={keyConclusion.SearchResults}
            >
            <Table title={"JsonLD data"} data={keyConclusion.SearchResults.jsonFound}></Table>
            <Table title={"Meta data"} data={keyConclusion.SearchResults.metaFound}></Table>

        </Tabcontent>
        {/each}
    {:catch error}
        <p>An error occurred!</p>
    {/await}
</main>
