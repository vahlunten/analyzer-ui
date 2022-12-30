<script lang="ts">
    import type { Output } from '@backend/src/types'

    export let out: Output
</script>

<main class="mt-2 max-w-fit">
    {#if out == null}
        Failed validation?
    {:else}
        <div
            class="flex align-center overflow-x-auto relative shadow-md rounded-lg bg-white"
        >
          
            <table
                class="mx-6 float-left bg-white max-w-full text-sm text-left text-gray-700"
            >
              
                <tbody>
                    <tr class=" border-b">
                        <td class=" py-4  font-semibold"> Url </td>
                        <td class=" py-4  p-2">
                            <a class="underline" href={out.url}>{out.url}</a>
                        </td>
                    </tr>
                    <tr class=" border-b">
                        <td class=" py-4 font-semibold"> Start </td>
                        <td class=" py-4 p-2"> {out.analysisStarted} </td>
                    </tr>
                    <tr class=" border-b">
                        <td class=" py-4 font-semibold"> End </td>
                        <td class=" py-4 p-2"> {out.analysisEnded} </td>
                    </tr>
                    <tr class=" border-b">
                        <td class=" py-4  pr-12 font-semibold">
                            Analysis success
                        </td>
                        <td class=" py-4 p-2  "> Yes </td>
                    </tr>
                    <tr>
                        <td class=" py-4  font-semibold"> Cheeriocrawler </td>
                        <td class=" my-2 ">
                            <div class="rounded-lg p-2 bg-green-200">Success</div>
                        </td>
                    </tr>
                    <tr>
                        <td class=" py-4  font-semibold"> Result </td>
                        <td class=" my-2 ">
                            <div class="rounded-lg p-2 bg-green-200">Can be scraped with HTTP client</div>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
            <img
                class="max-w-xl p-2 m-2 float-right"
                src={import.meta.env.PROD? './screenshot': "./screenshot.jpeg"}
                alt="screenshot from playwright"
            />
        </div>
    {/if}
</main>
