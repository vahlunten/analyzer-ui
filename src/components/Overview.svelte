<script lang="ts">
    import type { Output } from '@backend/src/types'

    export let out: Output
</script>

<main class="mt-2 max-w-fit">
    {#if out == null}
        Failed validation?
    {:else}
        <!-- <div class="bg-gray-50 rounded-lg">
            <p
                class="bg-gray-50 text-md p-6 py-3 font-semibold  rounded-lg rounded-b-none"
            >
                Analysis results:
            </p>
        </div> -->

        <!-- <p
            class="max-w-fit bg-gray-50 text-md p-6 py-3 font-semibold  rounded-lg rounded-b-none"
        >
            Analysis results:
        </p> -->

        <div
            class="flex align-center overflow-x-auto relative shadow-md rounded-lg bg-white"
        >
            <!-- <img
               
                class="max-w-xl py-2 float-left"
                src="./screenshot"
                alt="screenshot from playwright"
            /> -->
            <table
                class="mx-6 float-left bg-white max-w-full text-sm text-left text-gray-700"
            >
                <!-- <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-right">
                    <tr>
                        <th scope="col" class="py-3 px-6"> Website URL </th>
                        <th scope="col" class="py-3 px-6"> Keywords </th>
                        <th scope="col" class="py-3 px-6"> Analysis started </th>
                        <th scope="col" class="py-3 px-6"> Error </th>
                        <th scope="col" class="py-3 px-6"> Analyisis result </th>
                    </tr>
                </thead> -->
                <tbody>
                    <tr class=" border-b">
                        <td class=" py-4  font-semibold"> Url </td>
                        <td class=" py-4  ">
                            <a class="underline" href={out.url}>{out.url}</a>
                        </td>
                    </tr>
                    <!-- <tr class=" border-b">
                        <td class=" py-4 px-6 font-semibold"> Keywords: </td>
                        <td class=" py-4 px-6 "> {out.keywords.map((keyword) => keyword.original)} </td>
                    </tr> -->
                    <tr class=" border-b">
                        <td class=" py-4 font-semibold"> Start </td>
                        <td class=" py-4 "> {out.analysisStarted} </td>
                    </tr>
                    <tr class=" border-b">
                        <td class=" py-4 font-semibold"> End </td>
                        <td class=" py-4 "> {out.analysisEnded} </td>
                    </tr>
                    <tr class=" border-b">
                        <td class=" py-4  pr-12 font-semibold">
                            Analysis success
                        </td>
                        <td class=" py-4  "> Yes </td>
                    </tr>
                    <tr>
                        <td class=" py-4  font-semibold"> Result </td>
                        <td class=" py-4 ">
                            Can be scraped with HTTP client
                        </td>
                    </tr>
                    <!-- <tr class=" border-b">
                        <td class=" py-4  font-semibold">
                            Analysed ended:
                        </td>
                        <td class=" py-4  "> {out.analysisEnded} </td>
                    </tr> -->
                </tbody>
            </table>
            <img
                class="max-w-xl p-2 m-2 float-right"
                src="./screenshot"
                alt="screenshot from playwright"
            />
        </div>
    {/if}
</main>
