<script lang="ts">
    import { selectedTab } from '../stores/stores'
    import type { NormalizedKeywordPair } from 'src/types'

    export let keywords: NormalizedKeywordPair[]
</script>

<button
    on:click={() => selectedTab.set(0)}
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
    >CONCLUSION</button
>

{#each keywords as keyword}
    <button
        on:click={() => selectedTab.set(keyword.index + 1)}
        type="button"
        class="text-black bg-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        >{keyword.original.substring(0, 15)}</button
    >
{/each}

<main />
