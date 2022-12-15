<script lang="ts">
    import type { SearchResults } from '@backend/src/types'
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import VscCheck from "svelte-icons-pack/vsc/VscCheck";
    import VscClose from "svelte-icons-pack/vsc/VscClose";
    import { each } from 'svelte/internal'

    export let sources: SearchResults;

    console.log(sources);
</script>

<main class="mt-2 max-w-fit">
    {#if sources == null}
       Failed validation?
    {:else}
        <!-- <div class="bg-gray-50 rounded-lg">
            <p
                class="bg-gray-50 text-md p-6 py-3 font-semibold  rounded-lg rounded-b-none"
            >
                Analysis results:
            </p>
        </div> -->
        
        <p
                class="max-w-fit bg-gray-50 text-md p-6 py-3 font-semibold  rounded-lg rounded-b-none"
            >
                Analysis results:
            </p>

        <div
            class="overflow-x-auto relative shadow-md rounded-tl-none rounded-lg"
        >
            <table
                class="max-w-full text-sm text-center text-gray-700 dark:text-gray-400"
            >
                <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-right">
                    <tr>
                        <th scope="col" class="py-3 px-6"> Keyword </th>
                        <th scope="col" class="py-3 px-6"> HTML </th>
                        <th scope="col" class="py-3 px-6"> Browser </th>
                        <th scope="col" class="py-3 px-6"> Json-ld </th>
                        <th scope="col" class="py-3 px-6"> Schema.org </th>
                        <th scope="col" class="py-3 px-6"> Metadata </th>
                        <th scope="col" class="py-3 px-6"> API / XHR </th>
                    </tr>
                </thead>
                <tbody>

                <tr
                    class=" border-b dark:bg-gray-800 dark:border-gray-700"
                >            


                </tr>
                </tbody>
            </table>
        </div>

    {/if}
</main>
