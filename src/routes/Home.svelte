<script lang="ts">
    import Tabcontent from '../components/Tabcontent.svelte'
    import { output } from '../stores/stores'
    import Table from '../components/Table.svelte'
    import Navbar from '../components/MyTabList.svelte'
    import KeywordConclusionTable from '../components/KeywordConclusionTable.svelte'
    import SelectorTable from '../components/SelectorTable.svelte'
    import ResultsTable from '../components/ResultsTable.svelte'

    import Overview from '../components/Overview.svelte'
    import XhrDetail from '../components/XhrDetail.svelte'
    import Spinner from '../components/Spinner.svelte'
    import VscRefresh from 'svelte-icons-pack/vsc/VscRefresh'
    import Icon from 'svelte-icons-pack/Icon.svelte'
    import Alert from '../components/Alert.svelte'

    import type { Output } from '@backend/types'

    // make $output store reactive
    {
        $output
    }

    // fetch OUTPUT.json from the key-value storage
    const fetchImage = (async () => {
        const response = await fetch(
            // in the Apify platform, files are saved without file extension
            import.meta.env.PROD ? './OUTPUT' : './OUTPUT.json',
        )
        output.set((await response.json()) as Output)
        // console.log(output);
    })()
    const debugMode = false
    const validationSuccess = true
</script>

<svelte:head>
    <link rel="icon" type="image/png" href={'../../public/favicon-32x32.png'} />
</svelte:head>

<main class="m-4">
    {#await fetchImage}
        <Spinner />
    {:then}
        <!-- Tab button for CONCLUSION, each keyword and XHR validation tab -->
        <Navbar
            actorSuccess={$output.actorSuccess}
            keywords={$output.keywords}
        />
        <!-- CONCLUSION tab content-->
        <Tabcontent tabIndex={-1}>
            <!-- TODO: write cheeriocrawler status to OUTPUT.json -->
            {#if $output.actorSuccess && !$output.cheerioCrawlerSuccess}
                <Alert
                    text={'Cheeriocrawler failed to load the initial response, data displayed is not validated!'}
                />
            {/if}
            <Overview
                cheerioCrawlerSuccess={$output.cheerioCrawlerSuccess}
                errorMessage={$output.errorMessage}
                actorSuccess={$output.actorSuccess}
                out={$output}
            />
            <ResultsTable
                title={'Analysis results'}
                keywordConclusions={$output.keywordConclusions}
               />

        </Tabcontent>

        <!-- If the actor execution finished sucessfully display the data. -->
        {#if $output.actorSuccess}
            <!-- Content of a tab for each keyword -->
            {#each $output.keywordConclusions as keyConclusion}
                <Tabcontent
                    tabIndex={keyConclusion.Keyword.index}
                    content={keyConclusion.SearchResults}
                >
                    <h2 class="text-md font-semibold text-gray-900 px-2">
                        Original keyword: {keyConclusion.Keyword.original}
                    </h2>
                    <KeywordConclusionTable
                        sources={keyConclusion.SearchResults}
                    />
                    <Table
                        validated={validationSuccess}
                        debug={debugMode}
                        title={'HTML data'}
                        data={keyConclusion.SearchResults.htmlFound}
                    />
                    <Table
                        validated={validationSuccess}
                        debug={debugMode}
                        title={'JsonLD data'}
                        data={keyConclusion.SearchResults.jsonFound}
                    />
                    <Table
                        validated={validationSuccess}
                        debug={debugMode}
                        title={'Meta data'}
                        data={keyConclusion.SearchResults.metaFound}
                    />
                    <Table
                        validated={validationSuccess}
                        debug={debugMode}
                        title={'Schema.org data'}
                        data={keyConclusion.SearchResults.schemaFound}
                    />
                    <!-- Window properties are never validated -->
                    <Table
                        validated={false}
                        debug={debugMode}
                        title={'Window properties'}
                        data={keyConclusion.SearchResults.windowFound}
                    />
                </Tabcontent>
            {/each}
            <!-- Xhr validation tab -->
            <Tabcontent tabIndex={$output.keywordConclusions.length}>
                {#if $output.xhrValidated.length == 0}
                    <h2 class="text-md font-semibold text-gray-900 px-2">
                        No XHR requests containg input keywords were found.
                    </h2>
                {:else}
                    {#each $output.xhrValidated as xhr}
                        <XhrDetail validatedXhr={xhr} />
                    {/each}
                {/if}
            </Tabcontent>
        {/if}
    {:catch error}
        <p>An error has occured while loading the analysis output.</p>
    {/await}
</main>
