<script context="module" lang="ts">
    import Base from '../components/Base.svelte';
    import Layout from '../components/Layout.svelte';
    import LinkButton from '../components/LinkButton.svelte';
    import { appName } from '../lib/constants';
    import Tablist from '../components/Tablist.svelte';

    import cart from '../stores/cart.js'
    import Table from "../components/Table.svelte";

    import { Alert, Tabs, TabItem } from "flowbite-svelte";

    let items = cart

    cart.subscribe((cartItems) => {
        items = cartItems
    })

    function load() {
        cart.set([{ macka: 23 }])
        console.log(cart)
    }

    const dummyJson = 
       [
            { original: "CONCLUSION", minimized: "CINCLUSION", index: 0 },
            { original: 'macka pes', minimized: 'mackapes', index: 1 },
            { original: 'zdeno jes', minimized: 'zdenojes', index: 2 },
            { original: '19 990', minimized: '19990', index: 3 },
        ];
    

    let activeItem = 0;

    const tabChanged = (tabIndex) => {
        console.log(tabIndex.detail);
        activeItem = tabIndex.detail;
        console.log(activeItem);
    }
</script>

<!-- <Layout>
    <div class="flex flex-col items-center justify-center flex-1 text-center">
        <p class="text-xl font-thin uppercase">Welcome to</p>
        <h1
            class="text-green-500 text-5xl sm:text-6xl font-normal normal-case mt-1 mb-32"
        >
            {appName}
        </h1>

        <LinkButton href="/questions">Let's start!</LinkButton>
        <button on:click={load}>Click me!</button>
        {#each $cart as item (item.id)}
            <p>{item.name} - <span>${item.price}</span></p>
        {/each}
    </div>
<Base>sss
    </Base>
</Layout> -->
<!-- <Base /> -->

<main>
    <!-- <Tablist activeItem={activeItem} items={dummyJson} on:tabChange={tabChanged}/> -->

    <Tabs style="pill" defaultClass="m-4 flex">
        <TabItem open>
          <span slot="title">Profile</span>
          <p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Table title={"Macka"}></Table>
        </TabItem>
        <TabItem>
          <span slot="title">Dashboard</span>
          <p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </TabItem>
        <TabItem>
          <span slot="title">Settings</span>
          <p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </TabItem>
        <TabItem>
          <span slot="title">Users</span>
          <p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </TabItem>
      </Tabs>
    <!-- <Base/> -->

<!-- 
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
    </div>-->
</main>


  

<!-- /* height: 52px;
width: 28px;
content: "";
background: rgb(249 250 251 / var(--tw-bg-opacity));
margin-left: 0px;
border-bottom-left-radius: 0.5rem;
position: absolute;
right: -28px;
top: 0px;
box-shadow: 0 0.5rem 0 0 rgb(249 250 251 / var(--tw-bg-opacity));
background: transparent; */ -->