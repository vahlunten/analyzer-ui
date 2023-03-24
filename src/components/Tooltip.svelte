<script lang="ts">
    import Icon from 'svelte-icons-pack/Icon.svelte'
    import FiInfo from 'svelte-icons-pack/fi/FiInfo'
    import { tooltip } from '@svelte-plugins/tooltips'

    export let text: string
</script>

<main>
    <div class="text-black">

    </div>
    <u use:tooltip={{ content: text, position: 'right', autoPosition: true,  style: { backgroundColor: 'white',color: "#000000"}, maxWidth: 400}}>
        <Icon size="1.1em" src={FiInfo} />
    </u>
</main>
