<script context="module" lang="ts">
    import Base from '../components/Base.svelte'
import Layout from '../components/Layout.svelte'
    import LinkButton from '../components/LinkButton.svelte'
    import { appName } from '../lib/constants'

    import cart from '../stores/cart.js'
  
    let items = cart;
  
    cart.subscribe(cartItems => {
      items = cartItems
    });

    function load() {
        cart.set([{ macka: 23}]);
        console.log(cart);
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
<Base>

</Base>


