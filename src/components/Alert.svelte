<script lang="ts">
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import VscError from "svelte-icons-pack/vsc/VscError";

    export let text:string;
    export let error:boolean;
</script>

<main class="px-4 py-2 max-w-fit bg-white rounded-lg inline-flex">
    {#if error}
        <Icon size=1.3em src={VscError}/>
    {/if}
    <h2 class="text-sm text-gray-900 px-2">
        {text}
    </h2>
</main>
