<script lang="ts">
    import Tabcontent from '../components/Tabcontent.svelte'
    import type { Output } from '@backend/types'
    import { output } from '../stores/stores'
    import Table from '../components/Table.svelte'
    import Navbar from '../components/MyTabList.svelte'
    import KeywordConclusionTable from '../components/KeywordConclusionTable.svelte'
    import SelectorTable from '../components/SelectorTable.svelte'
    import Overview from '../components/Overview.svelte'
    import XhrDetail from '../components/XhrDetail.svelte'
    import Spinner from '../components/Spinner.svelte'
    {
        $output
    }
    const fetchImage = (async () => {
        const response = await fetch('./OUTPUT')
        output.set((await response.json()) as Output)
        console.log(output)
        return $output
    })();

</script>

<main class="m-4">
    {#await fetchImage}
      <Spinner/>
    {:then}
        <Navbar keywords={$output.keywords} />
        <!-- CONCLUSION tab -->
        <Tabcontent tabIndex={-1}>
            <Overview out={$output} />
            <SelectorTable
                title={'HTML data'}
                data={$output.keywordConclusions[0].SearchResults.htmlFound}
            />
        </Tabcontent>
        <!-- Keywords tabs -->
        {#each $output.keywordConclusions as keyConclusion}
            <Tabcontent
                tabIndex={keyConclusion.Keyword.index}
                content={keyConclusion.SearchResults}
            >
                <h2 class="text-md font-semibold text-gray-900 px-2">
                    Original keyword: {keyConclusion.Keyword.original}
                </h2>
                <KeywordConclusionTable sources={keyConclusion.SearchResults} />
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
        <!-- Xhr tab -->
        <Tabcontent tabIndex={$output.keywordConclusions.length}>
            {#each $output.xhrValidated as xhr}
                <XhrDetail validatedXhr={xhr} />
            {/each}
        </Tabcontent>
    {:catch error}
        <p>An error has okurek!</p>
    {/await}

    <!-- <h2>Size</h2> -->

    <!-- <label>
	<input type=radio bind:group={scoops} name="scoops" value={1}>
	One scoop
</label>

<label>
	<input type=radio bind:group={scoops} name="scoops" value={2}>
	Two scoops
</label>

<label>
	<input type=radio bind:group={scoops} name="scoops" value={3}>
	Three scoops
</label>

<h2>Flavours</h2>

{#each menu as flavour}
	<label>
		<input type=checkbox bind:group={flavours} name="flavours" value={flavour}>
		{flavour}
	</label>
{/each}

{#if flavours.length === 0}
	<p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
	<p>Can't order more flavours than scoops!</p>
{:else}
	<p>
		You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
		of {join(flavours)}
	</p>
{/if} -->
</main>
