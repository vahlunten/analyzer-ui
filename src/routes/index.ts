
import Home from './Home.svelte';
import Runs from './Runs.svelte';
import Test from './test.svelte';

const routes = {
    '/': Home,
    // TODO: add route for browsing recent search results? 
    '/test': Test,
    '/runs': Runs
    
}

export default routes
