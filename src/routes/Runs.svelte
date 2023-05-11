<script lang="ts">
    import RunDetail from '../components/RunDetail.svelte'
    import Spinner from '../components/Spinner.svelte'
    import { runsList } from '../stores/stores'
    import { goto, path } from 'svelte-pathfinder'
    // import * as cheerio from 'cheerio'
    // let cheerioObject: cheerio.CheerioAPIee

    console.log(window.location.href)
    console.log('Path: ' + $path)
    if (window.location.href.indexOf('DASHBOARD') != -1) {
        goto('/detail')
    }
    let running = false
    const run = async (data: any) => {
        running = true
        const response = await fetch('http://localhost:3000/run', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        console.log(response)
        running = false
    }
    const fetchImage = (async () => {
        const initialResponse = await fetch(
            // in the Apify platform, files are saved without file extension
            'http://localhost:3000/runs',
            // {mode:"cors"}
            // import.meta.env.PROD ? './OUTPUT.json' : './OUTPUT.json',
        )
        $runsList = await initialResponse.json()
        // cheerioObject = cheerio.load($runsList, null, true)
        // console.log($runsList)
        // cheerioObject('a').each((index, element) => {
        //     // http://127.0.0.1:8080/runs/2023-02-23_14-09-14/DASHBOARD.html
        //     const newHref = 'http://localhost:3000/'
        //     cheerioObject(element).attr('href', newHref)
        //     console.log('New href: ' + newHref)
        // })
        // $runsList = cheerioObject.html()
    })()
</script>

<main class="m-4">
    <!-- <div class="mb-6">
        <label
            for="large-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Large input</label
        >
        <input
            type="text"
            id="large-input"
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
        />

        {#if !running}
            <button
                type="submit"
                class="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                on:click={() => run({})}>Submit</button
            >
        {:else}
            <button
                type="submit"
                class="my-2 text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                on:click={() => {}}>Running</button
            >
        {/if}
    </div> -->

    <!-- {@html $runsList}
    {#await fetchImage}
        <Spinner />
    {:then}
        {#each $runsList.runs as run}
            <div>
                <a href={'http://localhost:3000/' + run}> {run}</a>
                <RunDetail
                    out={{ started: 'asd', success: true, url: "www.url.com" }}
                />
            </div>
        {/each}
    {:catch error}
        <p>An error has occured while loading the list of runs.</p>
    {/await} -->
</main>
