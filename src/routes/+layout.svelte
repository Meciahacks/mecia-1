<script>//
// @ts-nocheck

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import '../app.css';	
	import { authStore } from '../auth.js';	
	import Header from './Header.svelte';
	let user,isLoggedIn
	let fireflyList1=Array.from({length: 250}, (_, index) => index + 1);
	
	
	const unsubscribe = authStore.subscribe(value => {
		user = value;
	  });
	  onMount(() => {
		return () => {
		  unsubscribe();
		};
	  });
  </script>
<div class="bg-transparent text-slate-800 p-2 min-h-screen">

  <Header></Header>
  {#each fireflyList1 as _}  
  	<div class="firefly"></div>
  {/each}
	<main class="md:w-11/12 mx-auto min-h-screen p-2">
		{#if !user}
			{#if $page.url.toString().includes('login')}
				<slot />
			{:else}
				<p class="bg-primary text-primary-content p-4 text-xl w-full">Please Login</p>
			{/if}
		{:else}
			<slot/>			
		
			{/if}
	</main>
	<footer>
		<p class="bg-primary text-primary-content w-full p-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sit.</p>
	</footer>
</div>
<style>	
</style>
