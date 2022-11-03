<script context="module" lang="ts">
    import { Tabs, TabItem } from 'flowbite-svelte'
    import Tabcontent from '../components/Tabcontent.svelte'
    import JSONTree from 'svelte-json-tree'
    import { dataset_dev } from 'svelte/internal'

    const dummyJson = [
        { original: 'macka pes', minimized: 'mackapes', index: 1 },
        { original: 'zdeno jes', minimized: 'zdenojes', index: 2 },
        { original: '19 990', minimized: '19990', index: 3 },
    ]

    // const fetchOutput = (async ():Promise<string> => {
    //     // const url:URL = new URL('http://' + './OUTPUT.json');
    //     const response = await fetch('https://opentdb.com/api.php?amount=1&category=18');
    //     const bodyString =  "{pes: 'macka'}";
    //     return JSON.parse(bodyString);
    // })();

    const fetchImage = (async () => {
        const response = await fetch('./OUTPUT.json')
        const responseContent =  await response.json()
        console.log(responseContent);
        return responseContent;
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
        <JSONTree value={data}/>
    {:catch error}
        <p>An error occurred!</p>
    {/await}
    <!-- {#await fetchOutput}
        <p>...waiting</p>
    {:then data}
    <pre>{data}</pre>
    {:catch error}
        <p>An error occurred!</p>
    {/await} -->

    <Tabs
        style="pill"
        defaultClass="m-4 flex "
        contentClass=" m-4 bg-transparent"
    >
        <TabItem open defaultClass="bg-gray-200" title="CONCLUSION">
            <h1>AHOJ</h1>
        </TabItem>

        {#each dummyJson as item}
            <TabItem defaultClass="bg-gray-200" title={item.original}>
                <Tabcontent title={item.original} />
            </TabItem>
        {/each}
    </Tabs>
</main>
