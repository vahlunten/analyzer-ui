<script lang="ts">
    import { selectedTab } from '../stores/stores'
    import type { NormalizedKeywordPair } from '@backend/types'

    export let keywords: NormalizedKeywordPair[]
</script>

<main>
    <button
        on:click={() => selectedTab.set(0)}
        type="button"
        class="{$selectedTab == 0 ? "bg-blue-400" : "bg-white"} text-black hover:bg-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >CONCLUSION</button
    >

    {#each keywords as keyword}
        <button
            on:click={() => selectedTab.set(keyword.index + 1)}
            type="button"
            class=" {$selectedTab == keyword.index + 1 ? "bg-blue-400" : " bg-white"} text-black hover:bg-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >{keyword.original.substring(0, 15)}</button
        >
    {/each}
</main>
