<script lang="ts">
    import type { KeywordConclusion } from '@backend/src/types'

    export let title: string
    export let keywordConclusions: KeywordConclusion[]
</script>

<main class="max-w-full mt-2">
    <div class="bg-gray-50 inline-flex rounded-lg">
        <p
            class="bg-gray-50 text-md px-3 pt-2 pb-1 width-auto font-semibold rounded-lg rounded-b-none"
        >
            {title}
        </p>
    </div>

    <div class="overflow-x-auto relative shadow-md rounded-tl-none rounded-lg">
        <table
            class="break-word w-full text-sm text-left text-gray-700 dark:text-gray-400"
        >
            <thead class="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="py-3 px-6"> Keyword </th>
                    <th scope="col" class="py-3 px-6">
                        Possible ways to scrape the keyword
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each keywordConclusions as kwconclusion}
                    <tr class="border-b bg-white">
                        <td class="py-4 px-6">
                            {kwconclusion.Keyword.original}
                        </td>
                        <td class="py-4 px-6">
                           {#if kwconclusion.SearchResults.canBeScrapedWith.length > 0}
                           {#each  kwconclusion.SearchResults.canBeScrapedWith as source}
                           <div class="rounded-lg p-2 m-1 bg-green-200 inline">{source}</div>
                           {/each}
                           {:else}
                           <div class="rounded-lg p-2 m-1 bg-red-200 inline">Not found</div>

                           {/if}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</main>
