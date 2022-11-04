<script lang="ts">
    import Tabcontent from '../components/Tabcontent.svelte'
    // import JSONTree from 'svelte-json-tree'
    import type { Output } from '../types'
    import { output } from '../stores/stores'
    import MyTab from '../components/MyTab.svelte'
    import MyTabList from '../components/MyTabList.svelte'
    import ConclusionTab from '../components/ConclusionTab.svelte'

    // let analyzerOutput: Output;
    {
        $output
    }

    const fetchImage = (async () => {
        const response = await fetch('./OUTPUT.json')
        output.set((await response.json()) as Output)
        console.log(output)
        return $output
    })();

    const conclusion = {
        conclusionResult: {}
    }
</script>

<main class="m-4">
    Toggle

    <svg
        class="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        ><path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
        /></svg
    >
    <!-- <div> {JSON.stringify($output)}</div> -->
    {#await fetchImage}
        <p>...waiting</p>
    {:then}
        <MyTabList keywords={$output.keywords} />

        <MyTab>
            <ConclusionTab> 
                <Tabcontent
                    tabIndex={0}
                    title={"CONCLUSION"}
                    content={$output.keywordConclusions[1].SearchResults}
                />
            </ConclusionTab>

        </MyTab>
        {#each $output.keywordConclusions as keyConclusion}
            <MyTab>
                <Tabcontent
                    tabIndex={keyConclusion.Keyword.index}
                    title={keyConclusion.Keyword.original}
                    content={keyConclusion.SearchResults}
                />
            </MyTab>
        {/each}
    {:catch error}
        <p>An error occurred!</p>
    {/await}
</main>
