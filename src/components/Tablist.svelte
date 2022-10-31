<script lang="ts">
    export let items;
    export let activeItem:number = 3;

    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher();

    const activeClasses = "bg-blue-600";
    const inactiveClasses = "bg-blue-200";


</script>

<ul>
    <!-- {#each items as item}
        <li>
            <div>{item.original}</div>
        </li>
    {/each} -->

    <ul
        class="m-4 flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
        <!-- <li class="mr-2">
            <div
                class="inline-block py-3 px-4 text-white bg-blue-600 rounded-lg"
                aria-current="page"
            >
                CONCLUSION
            </div>
        </li> -->

        <!-- class="inline-block py-3 px-4 text-white bg-blue-300 rounded-lg pes" -->
        {#each items as item}
            <li
                class="mr-2"
                on:click={() => dispatch('tabChange', item.index)}
            >
                <div
                    
                class:active={item.index === activeItem}

                    class="inline-block py-3 px-4 text-white rounded-lg pes bg-blue-400 active:bg-blue-600"
                >
                    {item.original}
                </div>
            </li>
        {/each}
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 rounded-t-lg border-b-2" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
                </li>
                <li class="mr-2" role="presentation">
                    <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
                </li>
                <li role="presentation">
                    <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
                </li>
            </ul>
        </div>
        <div id="myTabContent">
            <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
        </div>
    </ul>

    <!-- <li> pes</li> -->
</ul>
