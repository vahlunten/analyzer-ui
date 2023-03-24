<script lang="ts">
    import type { SearchResult } from '@backend/src/types'
    import { selectedSelectors } from '../stores/stores'

    // import Tooltip from './Tooltip.svelte'
    // import  ToolTip  from "./Tooltip.svelte";
    import Tooltip from '../components/Tooltip.svelte'

    import { tooltip } from '@svelte-plugins/tooltips'
    import Icon from 'svelte-icons-pack/Icon.svelte'
    import FiInfo from 'svelte-icons-pack/fi/FiInfo'

    export let title: string
    export let data: SearchResult[]
    export let debug: boolean
    export let validated: boolean
    let selection: string[] = []

    // console.log(data);

    const addToArray = (sr: SearchResult) => {
        $selectedSelectors.keywordSelectors[
            sr.keyword.index
        ].selectors.htmlFound.push(sr)
    }
</script>

<main class="max-w-full mt-2">
    {#if data.length > 0}
        <div
            class="bg-gray-50 inline-flex rounded-lg rounded-b-none px-3 pt-2 pb-1"
        >
            <span class="text-md font-semibold">
                {title}
            </span>

            <div class=" mx-2 my-1">
                <!-- <Tooltip content="Hello world!">
                <Icon size="1.3em" src={FiInfo} />
               </Tooltip> -->

                <Tooltip
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis enim et imperdiet sollicitudin. Morbi viverra dui in elit laoreet, quis lacinia tellus sagittis. Aenean purus orci, auctor ac faucibus in, pellentesque non enim. Nam vel ullamcorper nibh. Pellentesque ut sem et nisi venenatis pretium. Sed in lectus erat. Proin porttitor sit amet lacus a faucibus. Nulla consequat dignissim maximus. Suspendisse viverra magna eget metus malesuada, in pulvinar augue gravida. Maecenas lacus erat, condimentum et mollis eget, lacinia id diam. Morbi auctor nibh et nisi tristique pellentesque. Phasellus euismod malesuada arcu, vitae porta eros tincidunt id. "
                />
            </div>
        </div>

        <div
            class="overflow-x-auto relative shadow-md rounded-tl-none rounded-lg"
        >
            <table
                class="break-word w-full text-sm text-left text-gray-700 dark:text-gray-400"
            >
                <thead class="text-sm text-gray-700 uppercase bg-gray-50">
                    <tr>
                        {#if debug}
                            <!-- <th scope="col" class="py-3 px-6">
                                Use in crawler
                            </th> -->
                            <th scope="col" class="py-3 px-6"> Long Path </th>
                        {/if}
                        <th scope="col" class="py-3 px-6"> Path </th>
                        <th scope="col" class="py-3 px-6">
                            Text found during analysis
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Text found validation</th
                        >
                        {#if debug}
                            <th scope="col" class="py-3 px-6">
                                Text found validation short</th
                            >
                        {/if}
                        <th scope="col" class="py-3 px-6"> Source </th>
                        {#if debug}
                            <th scope="col" class="py-3 px-6"> Score </th>
                        {/if}
                    </tr>
                </thead>
                <tbody>
                    {#each data as dataUnit}
                        <tr
                            class="{dataUnit.textFound ==
                            dataUnit.textFoundValidation
                                ? 'bg-green-200'
                                : 'bg-red-200'} border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            {#if debug}
                                <!-- <td class="py-4 px-6">
                                    <input
                                        type="checkbox"
                                        bind:group={selection}
                                        value={dataUnit.path}
                                        on:click={() => addToArray(dataUnit)}
                                    />
                                </td> -->
                                <td class="py-4 px-6"> {dataUnit.path} </td>
                            {/if}
                            <td class="py-4 px-6"> {dataUnit.pathShort} </td>
                            <td class="py-4 px-6"> {dataUnit.textFound} </td>
                            {#if debug}
                                <td class="py-4 px-6">
                                    {dataUnit.textFoundValidation}
                                </td>
                            {/if}
                            <td class="py-4 px-6">
                                {dataUnit.textFoundValidationShort}
                            </td>

                            <td class="py-4 px-6  w-auto">
                                {dataUnit.source}
                            </td>
                            {#if debug}
                                <td class="py-4 px-6  w-auto">
                                    {dataUnit.score}
                                </td>
                            {/if}
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}
</main>
