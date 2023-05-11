<script lang="ts">
    import { path, prefs } from 'svelte-pathfinder'
    import routes from './routes'
    // import '../app.css'
    // import 'flowbite/dist/flowbite.css'

    // Disable side effects to only keep history in browser memory.
    prefs.sideEffect = false

    // @ts-expect-error 2538
    $: page = routes[$path] || routes['/']

    // if (window.location.href.indexOf("apify") != -1) {
    //     console.log("displaying runs");
    //     page = routes['/runs']
    // } else {
    //     page = routes['/']
    // }
</script>

<svelte:component this={page} />
