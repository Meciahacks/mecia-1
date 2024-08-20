<script>
	import '../app.css';
	
	// import { authStore, pb } from '../auth.js';
	// 
	import { goto } from '$app/navigation';
	let fireflyList1=Array.from({length: 250}, (_, index) => index + 1);
	// authStore.subscribe((store) => {
    // let user = store.user;
	// 	if (!store.isLoggedIn) {
	// 	goto('/login');
	// 	}
	// });

  	function logout() {
	//   pb.authStore.clear();
	//   goto('/login');
	}
  </script>


<div class="bg-transparent text-white p-2 min-h-screen">
	<header>	
	  <nav>
		  <a href="/">Home</a>
		  <!-- {#if $authStore.isLoggedIn}
			  <a href="/">Dashboard</a>
			  <a href="/logout" on:click={logout}>Logout</a>
		  {:else}
			  <a href="/login">Login</a>
			  <a href="/signup">Signup</a>
		  {/if} -->







		</nav>
  </header>
  {#each fireflyList1 as _}  
  	<div class="firefly"></div>
  {/each}
	<main class="md:w-11/12 mx-auto min-h-screen p-2">
		<slot />
	</main>
	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
<style>	
</style>




