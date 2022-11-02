<script context="module" lang="ts">
    
    import { Tabs, TabItem } from 'flowbite-svelte'
    import Tabcontent from '../components/Tabcontent.svelte'

    const dummyJson = [
        { original: 'macka pes', minimized: 'mackapes', index: 1 },
        { original: 'zdeno jes', minimized: 'zdenojes', index: 2 },
        { original: '19 990', minimized: '19990', index: 3 },
    ]

</script>

<main>
    <Tabs style="pill" defaultClass="m-4 flex " contentClass=" m-4 bg-transparent">

        <TabItem open defaultClass="bg-gray-200" title="CONCLUSION">            
            <h1>
                AHOJ
            </h1>
        </TabItem>


        {#each dummyJson as item}
        <TabItem defaultClass="bg-gray-200" title={item.original}>
            <Tabcontent title={item.original} />
        </TabItem>
        {/each}
        
        <!-- <TabItem>
            <span slot="title">JSON</span>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
            </p>
        </TabItem>        -->
    </Tabs>
</main>
