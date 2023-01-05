<script lang="ts">
    import type { Output } from '@backend/src/types'

    export let out: Output
    export let actorSuccess: boolean
    export let cheerioCrawlerSuccess: boolean
    export let errorMessage: string
</script>

<main class="mt-2 max-w-fit">
    <div
        class="flex align-center overflow-x-auto relative shadow-md rounded-lg bg-white"
    >
        <table
            class="mx-6 float-left bg-white max-w-full text-sm text-left text-gray-700"
        >
            <tbody>
                <!-- URL -->
                <tr class=" border-b">
                    <td class=" py-4  font-semibold"> Url </td>
                    <td class=" py-4  p-2">
                        <a
                            class="underline"
                            rel="noreferrer"
                            target="_blank"
                            href={out.url}>{out.url}</a
                        >
                    </td>
                </tr>
                <!-- analysis started -->
                <tr class=" border-b">
                    <td class=" py-4 font-semibold"> Start </td>
                    <td class=" py-4 p-2"> {out.analysisStarted} </td>
                </tr>
                <!-- analysis ended -->
                <tr class=" border-b">
                    <td class=" py-4 font-semibold"> End </td>
                    <td class=" py-4 p-2"> {out.analysisEnded} </td>
                </tr>
                <!-- Actor status-->
                <tr class=" border-b">
                    <td class=" py-4  font-semibold pr-12">
                        Analysis status
                    </td>
                    <td class=" py-4">
                        {#if actorSuccess}
                            <div class="rounded-lg p-2 bg-green-200 inline">
                                Analysis finished sucessfully
                            </div>
                        {:else}
                            <div class="rounded-lg p-2 bg-red-200 inline">
                                Analysis failed
                            </div>
                        {/if}
                    </td>
                </tr>

                {#if actorSuccess}
                    <tr class=" border-b">
                        <td class=" py-4  font-semibold"> Cheeriocrawler </td>
                        <td class=" py-4 ">
                            {#if cheerioCrawlerSuccess}
                                <div class="rounded-lg p-2 bg-green-200 inline">
                                    Cheerio crawler successfuly loaded the
                                    initial response.
                                </div>
                            {:else}
                                <div class="rounded-lg p-2 bg-red-200 inline">
                                    Cheerio crawler failed to load the initial
                                    response.
                                </div>
                            {/if}
                        </td>
                    </tr>
                {:else}
                    <tr class=" border-b">
                        <td class=" py-4  font-semibold"> Error </td>
                        <td class=" my-2 ">
                            <div class="rounded-lg my-2 p-2 bg-red-200">
                                {errorMessage}
                            </div>
                        </td>
                    </tr>
                {/if}
            </tbody>
        </table>
        {#if actorSuccess}
            <img
                class="max-w-xl p-2 m-2 float-right"
                src={import.meta.env.PROD
                    ? './screenshot'
                    : './screenshot.jpeg'}
                alt="screenshot from playwright"
            />
        {/if}
    </div>
</main>
