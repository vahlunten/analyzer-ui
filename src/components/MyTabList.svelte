<script lang="ts">
    import { selectedTab } from '../stores/stores'
    import type { NormalizedKeywordPair } from '@backend/types'

    export let keywords: NormalizedKeywordPair[]
    export let actorSuccess:boolean;
</script>

<main>
    <button
        on:click={() => selectedTab.set(-1)}
        type="button"
        class="{$selectedTab == -1
            ? 'bg-blue-400'
            : 'bg-white'} text-black hover:bg-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >CONCLUSION</button
    >

    {#if actorSuccess}
        {#each keywords as keyword}
            <button
                on:click={() => selectedTab.set(keyword.index)}
                type="button"
                class=" {$selectedTab == keyword.index
                    ? 'bg-blue-400'
                    : ' bg-white'} text-black hover:bg-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >{keyword.original.length > 12
                    ? keyword.original.substring(0, 12) + '...'
                    : keyword.original}</button
            >
        {/each}
        <button
            on:click={() => selectedTab.set(keywords.length)}
            type="button"
            class="{$selectedTab == keywords.length
                ? 'bg-blue-400'
                : 'bg-white'} text-black hover:bg-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >XHR</button
        >

        <button
            on:click={() => selectedTab.set(keywords.length + 1)}
            type="button"
            class="{$selectedTab == keywords.length + 1
                ? 'bg-blue-400'
                : 'bg-white'} text-black hover:bg-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >Initial diff</button
        >
    {/if}
</main>
