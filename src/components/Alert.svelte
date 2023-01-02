<script lang="ts">
    import Icon from 'svelte-icons-pack/Icon.svelte'
    import FiAlertTriangle from 'svelte-icons-pack/fi/FiAlertTriangle'

    export let text: string
</script>

<main class="px-4 py-2 max-w-fit bg-red-200 rounded-lg inline-flex">
    <Icon size="1.3em" src={FiAlertTriangle} />
    <h2 class="text-sm text-gray-900 px-2">
        {text}
    </h2>
</main>
