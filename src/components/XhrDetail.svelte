<script lang="ts">
    // import {type XhrValidation } from '@backend/types'
    
    import JSONTree from 'svelte-json-tree'
    import pretty from 'pretty'
    // import { type XhrValidation } from '@backend/src/types'
    import type { XhrValidation } from '@backend/src/types'
    import type { GotCallType } from '@backend/src/types'

    // import { GotCallType } from '@backend/src/types'



    export let validatedXhr: XhrValidation
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
                    <td class=" py-4  ">
                        {validatedXhr.callWithCookies.length > 0
                            ? validatedXhr.callWithCookies[
                                  validatedXhr.callWithCookies.length - 1
                              ].searchResults
                                  .map((x) => {
                                      return x.keyword.original
                                  })
                                  .filter(
                                      (value, index, array) =>
                                          array.indexOf(value) === index,
                                  )
                                  .join(', ')
                            : []}</td
                    >
                </tr>
                <tr class=" border-b">
                    <td class=" py-4  pr-12 font-semibold">
                        Validation result
                    </td>
                    <td class=" py-4  ">
                       
                            {#if !validatedXhr.validationSuccess}
                            <div class="rounded-lg p-2 bg-red-200 inline">
                                Failed to validate Request.
                                </div>
                                
                            {:else if validatedXhr.lastCall != null}
                            <div class="rounded-lg p-2 bg-green-200 inline">

                                {#if validatedXhr.lastCall.callType === "minimalHeaders"} Sucessfully validated with minimal headers.{/if}
                                {#if validatedXhr.lastCall.callType === "withouCookieHeaders"} Sucessfully validated with original headers without a cookie.{/if}
                                {#if validatedXhr.lastCall.callType == "originalHeaders"} Sucessfully validated with original headers including a cookie.{/if}
                            </div>
                            {/if}
                        
                    </td>
                </tr>
                <tr class=" border-b">
                    <td class=" py-4  pr-12 font-semibold">
                        Validation request headers
                    </td>
                    <td class=" py-4  ">
                        <JSONTree
                            value={validatedXhr.callWithCookies[
                                validatedXhr.callWithCookies.length - 1
                            ].parsedRequestResponse.request.headers}
                        />
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
                            <div
                                class="max-h-96 overflow-x-clip overflow-y-scroll"
                            >
                                <pre>
                                    <code>
                                            {pretty(
                                            validatedXhr.originalRequestResponse
                                                .response.body,
                                            { ocd: true },
                                        )}
    
                                    </code>
                                </pre>
                            </div>
                        {/if}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</main>
