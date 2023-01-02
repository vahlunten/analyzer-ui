<script lang="ts">
    import type { SearchResult } from '@backend/src/types'
    import { Tooltip, Button } from 'flowbite-svelte'

    export let title: string
    export let data: SearchResult[]
    export let debug: boolean
    export let validated:boolean;

    // console.log(data);
</script>

<main class="max-w-full mt-2">
    {#if data.length > 0}
        <div class="bg-gray-50 inline-flex rounded-lg">
            <p
                class="bg-gray-50 text-md px-3 pt-2 pb-1 width-auto font-semibold rounded-lg rounded-b-none"
            >
                {title}
            </p>
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
