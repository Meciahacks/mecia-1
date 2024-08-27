<script>
  import { onMount } from 'svelte';

  let name = '';
  let addr='',city=''
  let contact = '';
  let aadhar = '';
  let photo = null;
    let photoURL = '';
  let theme=localStorage.getItem('theme') || 'light';;
 const themeList = ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter', 'dim', 'nord', 'sunset'];
   
 
   $: {
	if(theme){
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}}

  function validateAadhar(aadhar) {
	const regex = /^[2-9]{1}[0-9]{11}$/;
	return regex.test(aadhar);
  }
  function handlePhotoUpload(event) {
	photo = event.target.files[0];
  	photoURL = URL.createObjectURL(photo);
  }
function capturePhoto() {
	const video = document.querySelector('video');
	const canvas = document.createElement('canvas');
	canvas.width = video.videoWidth;
	canvas.height = video.videoHeight;
	canvas.getContext('2d').drawImage(video, 0, 0);
	canvas.toBlob((blob) => {
	  photo = blob;
	  photoURL = URL.createObjectURL(photo);
	});
  }
  onMount(() => {
	theme = localStorage.getItem('theme') || 'light';
	const video = document.querySelector('video');
	navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
	  video.srcObject = stream;
	});





	
  });
</script>
<svelte:head>
	<title>Registration</title>
	<meta name="description" content="Registration" />
</svelte:head>

<div class="container mx-auto p-4" data-theme={theme}>
	<div class="container mx-auto p-4">
		<h1 class="text-2xl font-bold mb-4">Select Theme</h1>
		<select bind:value={theme} class="select select-bordered w-full">
			{#each themeList as themeOption}
			<option value={themeOption}>{themeOption}</option>
			{/each}
		</select>
	</div>
  	<h1 class="text-2xl font-bold mb-4">User Information Form</h1>
	 <form>
		<div class="mb-4">
		  <label class="block ml-2 font-medium mb-2">Name</label>
		  <input type="text" bind:value={name} class="input input-bordered w-full" required />
		</div>
		<div class="mb-4">
		  <label class="block ml-2 font-medium mb-2">Contact</label>
		  <input type="contact" bind:value={contact} class="input input-bordered w-full" required />
		</div>
		<div class="mb-4">
		  <label class="block ml-2 font-medium mb-2">Aadhaar Number</label>
		  <input type="text" bind:value={aadhar} class="input input-bordered w-full" required pattern="^[2-9]{1}[0-9]{11}$" />
		  {#if !validateAadhar(aadhar)}
			<p class="text-red-500 ml-2">Invalid Aadhaar number</p>
		  {/if}
		</div>
		<div class="mb-4">

			<label class="block ml-2 font-medium mb-2">Address</label>
			<textarea bind:value={addr} class="textarea textarea-bordered w-full" required></textarea>
		</div>
		<div class="mb-4">
			<label class="block ml-2 font-medium mb-2">City/Village</label>
		  	<input type="text" bind:value={city} class="input input-bordered w-full" required />
		</div>
		<div class={`mb-4 grid ${photoURL?'grid-cols-1 md:grid-cols-2':''}`}>			
			<div>
		  <label class="block ml-2 font-medium mb-2">Photo</label>
		  <input type="file" accept="image/*" on:change={handlePhotoUpload} class="file-input file-input-bordered w-full md:w-1/2" />
		  <video autoplay class="mt-2 w-full md:w-1/2"></video>
		  <button type="button" on:click={capturePhoto} class="btn btn-primary mt-2 md:w-1/2 w-full">Capture Photo</button>
		</div>
		<div>	
			{#if photoURL}
				<div class="mt-4">
				  <h2 class="text-xl font-bold mb-2">Uploaded/Captured Photo</h2>
				  <img src={photoURL} alt="Uploaded/Captured Photo" class="rounded-lg shadow-lg md:w-1/2 w-full" />
				</div>
			  {/if}
			</div>
		</div>
		<div class="flex justify-end border border-primary shadow p-2">
		<button type="submit" class="btn btn-primary w-full md:w-48 p-1">Submit</button></div>
	  </form>
</div>