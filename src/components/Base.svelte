<script context="module" lang="ts">
    import { path } from 'svelte-pathfinder'
    import { invalid_attribute_name_character } from 'svelte/internal'

    import Link from '../components/Link.svelte'
    import { appName } from '../lib/constants';
    import Table from "./Table.svelte"

    const data = [
        {
            label: "CONCLUSION",
            index: 0,
        },
        {
            label: "MACKA",
            index: 0
        },
        {
            label: "PES",
            index: 0
        },
        {
            label: "RAPOTAMO",
            index: 0
        }
    ] 
</script>

<script lang="ts">

</script>

<svelte:head>
    <!-- <title>{`${title ? title + ' | ' : ''}${appName}`}</title> -->
</svelte:head>

<main class="w-full">
    <div class ="m-4 w-full flex overflow-x-auto">
       

        <button type="button" class="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>

        {#each data as item }
            <!-- <p>{item.name} - <span>${item.price}</span></p> -->
            <button id={item.index.toString()} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{item.label}</button>
        {/each}
    </div>
    <Table title={"HTML search results."}/>
    <Table title={"Different search"}/>
    <Table title={"Mackoch a pesoch"}/>
</main>
