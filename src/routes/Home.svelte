<script context="module" lang="ts">
    import Base from '../components/Base.svelte'
    import Layout from '../components/Layout.svelte'
    import LinkButton from '../components/LinkButton.svelte'
    import { appName } from '../lib/constants'
    import Tablist from '../components/Tablist.svelte'

    import cart from '../stores/cart.js'
    import Table from '../components/Table.svelte'

    import { Alert, Tabs, TabItem } from 'flowbite-svelte'

    let items = cart

    cart.subscribe((cartItems) => {
        items = cartItems
    })

    function load() {
        cart.set([{ macka: 23 }])
        console.log(cart)
    }

    const dummyJson = [
        { original: 'CONCLUSION', minimized: 'CINCLUSION', index: 0 },
        { original: 'macka pes', minimized: 'mackapes', index: 1 },
        { original: 'zdeno jes', minimized: 'zdenojes', index: 2 },
        { original: '19 990', minimized: '19990', index: 3 },
    ]

    let activeItem = 0

    const tabChanged = (tabIndex) => {
        console.log(tabIndex.detail)
        activeItem = tabIndex.detail
        console.log(activeItem)
    }
</script>

<main>
    <!-- <Tablist activeItem={activeItem} items={dummyJson} on:tabChange={tabChanged}/> -->

    <Tabs style="pill" defaultClass="m-4 flex " contentClass=" m-4 bg-transparent">
        <TabItem open defaultClass="bg-gray-200">
            <!-- <span slot="title">Profile</span>
          <p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>-->
            <!-- <div class="bg-gray-200">
                <Table title={'Mackaaa'} />
            </div> -->
            <Table title={'Mackaaa'} />
        </TabItem>
        <TabItem>
            <span slot="title">Dashboard</span>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
            </p>
        </TabItem>
        <TabItem>
            <span slot="title">Settings</span>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
            </p>
        </TabItem>
        <TabItem>
            <span slot="title">Users</span>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
            </p>
        </TabItem>
        <TabItem>
            <span slot="title" class="justify-end">Users</span>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
            </p>
        </TabItem>
    </Tabs>
</main>
