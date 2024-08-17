<script>
	import '../app.css';
	
	import { authStore, pb } from '../auth.js';
	import { goto } from '$app/navigation';
  
	authStore.subscribe((store) => {
    let user = store.user;
		if (!store.isLoggedIn) {
		goto('/login');
		}
	});

  	function logout() {
	  pb.authStore.clear();
	  goto('/login');
	}
  </script>


<div class="app">
	<header>	
	  <nav>
		  <a href="/">Home</a>
		  {#if $authStore.isLoggedIn}
			  <a href="/">Dashboard</a>
			  <a href="/logout" on:click={logout}>Logout</a>
		  {:else}
			  <a href="/login">Login</a>
			  <a href="/signup">Signup</a>
		  {/if}
		</nav>
  </header>





  <main>
		<slot />
	</main>
	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
<style>	
</style>




