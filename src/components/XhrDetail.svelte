<script lang="ts">
    import type { XhrValidation } from '@backend/*'
    import JSONTree from 'svelte-json-tree'

    export let validatedXhr: XhrValidation;
</script>

<main class="mt-2 max-w-full">
    <div
        class="flex align-center overflow-x-auto relative shadow-md rounded-lg bg-white"
    >
        <table
            class="mx-6 float-left bg-white full text-sm text-left text-gray-700"
        >
            <tbody>
                <tr class=" border-b">
                    <td class=" py-4  font-semibold"> Url </td>
                    <td class=" py-4  "
                        >{validatedXhr.originalRequestResponse.request.url}</td
                    >
                </tr>
                <tr class=" border-b">
                    <td class=" py-4 font-semibold"> Method </td>
                    <td class=" py-4 ">
                        {validatedXhr.originalRequestResponse.request.method}
                    </td>
                </tr>
                <tr class=" border-b">
                    <td class=" py-4 font-semibold"> Response status </td>
                    <td class=" py-4 ">
                        {validatedXhr.originalRequestResponse.response.status}
                    </td>
                </tr>
                <tr class=" border-b">
                    <td class=" py-4  pr-12 font-semibold"> Keywords found </td>
                    <td class=" py-4  "> {validatedXhr.callWithCookies.length > 0 ? validatedXhr.callWithCookies[validatedXhr.callWithCookies.length - 1].searchResults.map(x =>  { return x.keyword.original}).join(', ') : []}</td>
                </tr>
                <tr class=" border-b">
                    <td class=" py-4  pr-12 font-semibold">
                        Validation result
                    </td>
                    <td class=" py-4  ">
                        {validatedXhr.validationSuccess}
                    </td>
                </tr>
                <tr class=" border-b">
                    <td class=" py-4  pr-12 font-semibold">
                        Original request headers
                    </td>
                    <td class=" py-4  ">
                        <JSONTree
                            value={validatedXhr.originalRequestResponse.request
                                .headers}
                        />
                    </td>
                </tr>
                <tr class=" border-b">
                    <td class=" py-4  pr-12 font-semibold">
                        Original response headers
                    </td>
                    <td class=" py-4  ">
                        <JSONTree
                            value={validatedXhr.originalRequestResponse.response
                                .headers}
                        />
                    </td>
                </tr>

                <tr class=" border-b">
                    <td class=" py-4  pr-12 font-semibold"> Request body: </td>

                    <td class=" py-4  ">
                        <JSONTree
                            value={JSON.stringify(
                                validatedXhr.originalRequestResponse.request
                                    .body,
                                null,
                                3,
                            )}
                        />
                    </td>
                </tr>

                <tr class=" border-b">
                    <td class=" py-4  pr-12 font-semibold"> Response body: </td>
                    <td class="py-4  ">
                        {#if validatedXhr.originalRequestResponse.response.headers['content-type'].indexOf('json') != -1}
                            <JSONTree
                                defaultExpandedLevel={1}
                                value={JSON.parse(
                                    validatedXhr.originalRequestResponse
                                        .response.body,
                                )}
                            />
                        {:else if validatedXhr.originalRequestResponse.response.headers['content-type'].indexOf('html') != -1}
                        {validatedXhr.originalRequestResponse.response.body}
                        {/if}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</main>
