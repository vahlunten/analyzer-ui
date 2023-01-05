<script lang="ts">
    import type { SearchResults } from '@backend/src/types';
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import VscCheck from "svelte-icons-pack/vsc/VscCheck";
    import VscClose from "svelte-icons-pack/vsc/VscClose";

    export let sources: SearchResults;

    console.log(sources);

    enum DataOrigin {
    // initial response of the chromium browser
    initial = 'initial',
    // render html document
    rendered = 'rendered',
    // initial response from the cheerioCrawler
    cheerio = 'cheerioCrawler',
    // xhr request made by chromium
    xhr = 'xhr',
    // got-scraping request
    got = 'got'
}
</script>

<main class="mt-2 max-w-fit">
    {#if sources == null}
       Failed validation?
    {:else}
        <div class="bg-gray-50 inline-flex rounded-lg">
            <p
                class="bg-gray-50 text-md px-3 pt-2 pb-1 font-semibold  rounded-lg rounded-b-none"
            >
                Analysis results:
            </p>
        </div>

        <div
            class="overflow-x-auto relative shadow-md rounded-tl-none rounded-lg"
        >
            <table
                class="max-w-full text-sm text-center text-gray-700 dark:text-gray-400"
            >
                <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-right">
                    <tr>
                        <!-- <th scope="col" class="py-3 px-6"> HTML </th> -->
                        <th scope="col" class="py-3 px-6"> Browser </th>
                        <th scope="col" class="py-3 px-6"> Json-ld </th>
                        <th scope="col" class="py-3 px-6"> Schema.org </th>
                        <th scope="col" class="py-3 px-6"> Metadata </th>
                        <th scope="col" class="py-3 px-6"> API / XHR </th>
                        <th scope="col" class="py-3 px-6"> Window </th>

                    </tr>
                </thead>
                <tbody class="text-center">

                <tr
                    class=" border-b dark:bg-gray-800 dark:border-gray-700"
                >
                <!-- <td class=" py-4 px-6 {sources.canBeScrapedWith.indexOf() > 0 ? "bg-green-200" : "bg-red-200"}">
                    {#if sources.htmlFound.length > 0 } <Icon src={VscCheck}/> {:else} <Icon src={VscClose}/> {/if}
               </td> -->
               <td class=" py-4 px-6 {sources.htmlFound.length > 0 ? "bg-green-200" : "bg-red-200"}">
                {#if sources.htmlFound.length > 0 } <Icon src={VscCheck}/> {:else} <Icon src={VscClose}/> {/if}
                </td>
                <td class="py-4 px-6 {sources.jsonFound.length > 0 ? "bg-green-200" : "bg-red-200"}">
                    {#if sources.jsonFound.length > 0 } <Icon src={VscCheck}/> {:else} <Icon src={VscClose}/> {/if}
                </td>

                <td class=" py-4 px-6 {sources.schemaFound.length > 0 ? "bg-green-200" : "bg-red-200"}">
                    {#if sources.schemaFound.length > 0 } <Icon src={VscCheck}/> {:else} <Icon src={VscClose}/> {/if}
               </td>
               
               <td class=" py-4 px-6 {sources.metaFound.length > 0 ? "bg-green-200" : "bg-red-200"}">
                {#if sources.metaFound.length > 0 } <Icon src={VscCheck}/> {:else} <Icon src={VscClose}/> {/if}
               </td>
               <td class=" py-4 px-6 {sources.canBeScrapedWith.findIndex(x => {return x === DataOrigin.got || x === DataOrigin.xhr }) !== -1 ? "bg-green-200" : "bg-red-200"}">
                {#if sources.xhrFound.length > 0 } <Icon src={VscCheck}/> {:else} <Icon src={VscClose}/> {/if}
                </td>

                <td class=" py-4 px-6 {sources.windowFound.length > 0 ? "bg-green-200" : "bg-red-200"}">
                    {#if sources.xhrFound.length > 0 } <Icon src={VscCheck}/> {:else} <Icon src={VscClose}/> {/if}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    {/if}
</main>
