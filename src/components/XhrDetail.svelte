<script lang="ts">
    import type { Output, XhrValidation } from '@backend/src/types'
    import JSONTree from 'svelte-json-tree'

    export let validatedXhr: XhrValidation
    // url
    // original response status
    // method
    // payload
    // validation result

    // call with minimal headers
    // response status
    // validation success
    // call with original headers without cookie
    // call with full headers
    // keywords found
</script>

<main class="mt-2 max-w-fit">
    {#if validatedXhr == null}
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
                        <td class=" py-4  "
                            >{validatedXhr.originalRequestResponse.request
                                .url}</td
                        >
                    </tr>
                    <!-- <tr class=" border-b">
        <td class=" py-4 px-6 font-semibold"> Keywords: </td>
        <td class=" py-4 px-6 "> {out.keywords.map((keyword) => keyword.original)} </td>
    </tr> -->
                    <tr class=" border-b">
                        <td class=" py-4 font-semibold"> Method </td>
                        <td class=" py-4 ">
                            {validatedXhr.originalRequestResponse.request
                                .method}
                        </td>
                    </tr>
                    <tr class=" border-b">
                        <td class=" py-4 font-semibold"> Response status </td>
                        <td class=" py-4 ">
                            {validatedXhr.originalRequestResponse.response
                                .status}
                        </td>
                    </tr>
                    <tr class=" border-b">
                        <td class=" py-4  pr-12 font-semibold">
                            Keywords found
                        </td>
                        <td class=" py-4  "> Keyword1, Keyword2 </td>
                    </tr>
                    <tr class=" border-b">
                        <td class=" py-4  pr-12 font-semibold">
                            Validation result
                        </td>
                        <td class=" py-4  "> Success </td>
                    </tr>
                    <tr class=" border-b">
                        <td class=" py-4  pr-12 font-semibold">
                            Original request headers
                        </td>
                        <td class=" py-4  "> 
                        
                            <JSONTree value={validatedXhr.originalRequestResponse.request.headers}>

                            </JSONTree>
                        </td>
                    </tr>
                    <tr class=" border-b">
                        <td class=" py-4  pr-12 font-semibold">
                            Original response headers
                        </td>
                        <td class=" py-4  "> 
                        
                            <JSONTree value={validatedXhr.originalRequestResponse.response.headers} >

                            </JSONTree>
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
        </div>
    {/if}
</main>
