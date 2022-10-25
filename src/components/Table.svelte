<script type="module" lang="ts">
    export let title: string

    import JSONTree from 'svelte-json-tree'
    // your json data to view
    const value = {
        array: [1, 2, 3],
        bool: true,
        object: {
            foo: 'bar',
        },
        nested: [
            {
                a: [1, '2', null, undefined],
            },
        ],
    }
</script>

<main class="max-w-full m-4 ">
    <div class="bg-gray-50 inline-flex rounded-lg">
        <p
            class="bg-gray-50 text-md p-6 py-3 width-auto text-xl font-semibold  rounded-lg rounded-b-none dark:text-white"
        >
            {title}
        </p>
    </div>

    <!-- <p class="bg-gray-50 text-md p-6 width-auto text-xl font-semibold dark:text-white">{title}</p> -->
    <div class="overflow-x-auto relative shadow-md rounded-tl-none rounded-lg">
        <table
            class="w-full text-sm text-left text-gray-700 dark:text-gray-400"
        >
            <thead class="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="py-3 px-6"> Path </th>
                    <th scope="col" class="py-3 px-6"> Text found </th>
                    <th scope="col" class="py-3 px-6"> Text expected </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    <td class="py-4 px-6"> Sliver </td>
                    <td class="py-4 px-6"> Laptop </td>
                    <td class="py-4 px-6"> $2999 </td>
                </tr>
                <tr
                    class="m-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    <td class="py-4 px-8" colspan="4">
                        Laptop
                        <div style="--json-tree-font-size: 14px;">
                            <JSONTree {value} />
                        </div>

                        mack
                    </td>
                </tr>
                <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    <td class="py-4 px-6"> Sliver </td>
                    <td class="py-4 px-6"> Laptop </td>
                    <td class="py-4 px-6"> $2999 </td>
                </tr>
                <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                    <td class="py-4 px-6"> Sliver </td>
                    <td class="py-4 px-6"> Laptop </td>
                    <td class="py-4 px-6"> $2999 </td>
                </tr>
            </tbody>
        </table>
    </div>
</main>
