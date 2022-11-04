<script context="module" lang="ts">
    import { Tabs, TabItem } from 'flowbite-svelte'
    import Tabcontent from '../components/Tabcontent.svelte'
    // import JSONTree from 'svelte-json-tree'
    import type { Output } from '../types'

    let analyzerOutput: Output
    const fetchImage = (async () => {
        const response = await fetch('./OUTPUT.json')
        analyzerOutput = (await response.json()) as Output
        console.log(analyzerOutput);
        return analyzerOutput;
    })()
    const valuee = {
        array: [1, 2, 3],
        bool: true,
        object: {
            foo: 'bar',
        },
        nested: [
            {
                a: [1, '2', null, undefined],
            },
        ],
    }
</script>

<main>
    {#await fetchImage}
        <p>...waiting</p>
    {:then data}
        <!-- <JSONTree value={data} /> -->
        <Tabs
        style="pill"
        defaultClass="m-4 flex "
        contentClass=" m-4 bg-transparent"
    >
       
        <!-- Conclusion tab -->
        <TabItem open defaultClass="bg-gray-200" title="CONCLUSION">
            <h1>AHOJ</h1>
        </TabItem>
        <!-- Keyword tabs -->
        {#each analyzerOutput.keywordConclusions as keyConclusion}
            <TabItem defaultClass="bg-gray-200" title={keyConclusion.Keyword.original.substring(0, 15)}>
                <Tabcontent  title={keyConclusion.Keyword.original} content={keyConclusion.SearchResults}/>
                pes
            </TabItem>
        {/each}
    </Tabs>
    {:catch error}
        <p>An error occurred!</p>
    {/await}

</main>
