import Home from '../views/Home.svelte';
import Register from '../views/Register.svelte';
import Login from '../views/Login.svelte';


const routes = {
  '/': Home,
  '/home': Home,
  '/register': Register,
  '/Login': Login
  // '/about/*': About,
  // '/detail/:type/:id': Detail,
}

export default routes;