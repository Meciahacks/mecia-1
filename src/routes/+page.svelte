<script>
	import '../lib/images/inputtext.css'

	import { onMount } from "svelte";
	// @ts-ignore
	let selectedOption=''
	const shuffleText=(label)=>{
	if(!label)
			return
	let itration=0,originalText=label.innerText
	const charList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const shuffleText1=(/** @type {HTMLElement | null} */ label)=>{
		let shuffledText = '';
		for (let i = 0; i < originalText.length; i++) {
			if (i < itration) {
		
				shuffledText += originalText[i];
			} else {

				shuffledText += charList.charAt(Math.floor(Math.random() * charList.length));
			}
		}
		if(!label)
			return
		label.innerText = shuffledText;
		itration += 1 / 4;
		if (itration <= originalText.length) {
			requestAnimationFrame(()=>shuffleText1(label));
		} else {
			itration = 0;
		}
	}
	shuffleText1(label)
}
// @ts-ignore
function onInputFocus( ev ) {
	ev.target.parentNode.classList.add('input--filled');
}
// @ts-ignore
function onInputBlur( ev ) {
	if( ev.target.value.trim() === '' ) {
		ev.target.parentNode.classList.remove('input--filled')
	}
}
const initField=()=>{
	document.querySelectorAll( 'input.input__field' ).forEach( function( inputEl ) {
		// @ts-ignore
		if( inputEl.value.trim() !== '' ) {						
			// @ts-ignore
			inputEl.parentNode.classList.add('input--filled');
		}
		inputEl.addEventListener( 'focus', onInputFocus );
		inputEl.addEventListener( 'blur', onInputBlur );
	} );
	document.querySelectorAll( 'select.input__field' ).forEach( function( inputEl ) {
		// @ts-ignore
		if( inputEl.value.trim() !== '' ) {						
			// @ts-ignore
			inputEl.parentNode.classList.add('input--filled');
		}
		inputEl.addEventListener( 'focus', onInputFocus );
		inputEl.addEventListener( 'blur', onInputBlur );
	} );
}
onMount(()=>{
	shuffleText(document.getElementById('text'))
	initField()
})				
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<section class="container">	
	<h2 id='text' class="font-bold uppercase justify-center flex text-xl md:text-4xl">MECIA2.0 Registration</h2>
	
	<div class="mx-auto w-10/12">		
		<span class="input1 input--kuro">
			<input class="input__field input__field--kuro" type="text" id="teamname" />
			<label class="input__label input__label--kuro" for="teamname">
				<span class="input__label-content input__label-content--kuro uppercase font-bold">team name</span>
			</label>
		</span>


		<span class="input1 input--kuro">
			<input class="input__field input__field--kuro" type="text" id="prob" />
			<label class="input__label input__label--kuro" for="prob">
				<span class="input__label-content input__label-content--kuro uppercase font-bold">Problem Defination</span>
			</label>
		</span>
		<span class="input1 input--kuro">
			<select class="input__field input__field--kuro"  id="approch">
				<option value="" disabled selected></option>
				<option value="test1">HARDWARE</option>
				<option value="test2">SOFTWARE</option>
			</select>
			<label class="input__label input__label--kuro" for="approch">
				<span class="input__label-content input__label-content--kuro uppercase font-bold">select approch</span>
			</label>
		</span>
		<span class="input1 input--kuro">
			<select class="input__field input__field--kuro"  id="domain">
				<option value="" disabled selected></option>
				<option value="test1">HARDWARE</option>
				<option value="test2">SOFTWARE</option>
			</select>
			<label class="input__label input__label--kuro" for="domain">
				<span class="input__label-content input__label-content--kuro uppercase font-bold">select domain</span>
			</label>
		</span>


	</div>
</section>









<style>
</style>


