<script lang="ts">
    import Tabcontent from '../components/Tabcontent.svelte'
    // import JSONTree from 'svelte-json-tree'
    import type { Output } from '@backend/types'
    import { output } from '../stores/stores'
    import Table from '../components/Table.svelte'
    import MyTabList from '../components/MyTabList.svelte'
    import { fade, fly } from 'svelte/transition'

    // let analyzerOutput: Output;
    {
        $output
    }
    const fetchImage = (async () => {
        const response = await fetch(
            'OUTPUT.json',
        )
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
    <div class = "flex flex-col justify-center items-center fixed right-1/2 top-1/2">
        <div role="status">
            <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            
        </div>
        <span class="text-gray-900 font-medium">Loading...</span>
    </div>
    {:then}
        <MyTabList keywords={$output.keywords} />

        <Tabcontent tabIndex={-1} title={'CONCLUSION'}>
            <h2 class="text-lg font-semibold text-gray-900">
                Analysed url: <u
                    ><a target="_blank" rel="noreferrer" href={$output.url}>{$output.url}</a></u
                >
            </h2>
            <h2 class="text-lg font-semibold text-gray-900">
                Keywords: 
                    {$output.keywords.map((keyword) => keyword.original)}
                >
            </h2>
            <img
                in:fade={{ duration: 2000 }}
                out:fade
                class="max-w-xl py-2"
                src="screenshot.jpeg"
                alt="screenshot from playwright"
            />
        </Tabcontent>

        {#each $output.keywordConclusions as keyConclusion}
            <Tabcontent
                tabIndex={keyConclusion.Keyword.index}
                title={keyConclusion.Keyword.original}
                content={keyConclusion.SearchResults}
            >
                <Table
                    title={'HTML data'}
                    data={keyConclusion.SearchResults.htmlFound}
                />
                <Table
                    title={'JsonLD data'}
                    data={keyConclusion.SearchResults.jsonFound}
                />
                <Table
                    title={'Meta data'}
                    data={keyConclusion.SearchResults.metaFound}
                />
                <Table
                    title={'Schema.org data'}
                    data={keyConclusion.SearchResults.schemaFound}
                />
            </Tabcontent>
        {/each}
    {:catch error}
        <p>An error occurred!</p>
    {/await}
</main>
