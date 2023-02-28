<script lang="ts">
    import { runsList  } from "../stores/stores";
    import * as cheerio from 'cheerio';
    let cheerioObject:cheerio.CheerioAPI;
 const fetchImage = (async () => {


        const initialResponse = await fetch(
            // in the Apify platform, files are saved without file extension
            'http://127.0.0.1:8080/',

            // import.meta.env.PROD ? './OUTPUT' : './OUTPUT.json',
        )
        $runsList = await initialResponse.text();
        cheerioObject = cheerio.load($runsList, null, true);
        console.log($runsList);
        cheerioObject("a").each((index, element) => {
            // http://127.0.0.1:8080/runs/2023-02-23_14-09-14/DASHBOARD.html
            const newHref =  "http://127.0.0.1:8080/" + cheerioObject(element).text() + "DASHBOARD.html";
            cheerioObject(element).attr("href", newHref);
            console.log("New href: " + newHref);
        });
        $runsList = cheerioObject.html();
    })()
</script>

<main class="m-4">
    {@html $runsList}
    pes
</main>