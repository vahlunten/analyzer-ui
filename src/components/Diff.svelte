<script lang="ts">
    export let diff2html: string
</script>

<link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css"
/>

<style>
</style>
<main>
    <div id="myDiffElement">
        {@html diff2html}
    </div>
</main>

