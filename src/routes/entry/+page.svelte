<script>	
import {Html5Qrcode,Html5QrcodeScanner,Html5QrcodeScanType} from "html5-qrcode"
	import { onMount } from "svelte";

let html5QrcodeScanner
let config = {
        fps: 10,
        qrbox: {width: 100, height: 100},
        rememberLastUsedCamera: true,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
    };


	const onScanSuccess=(decodedText, decodedResult)=>{
            console.log('****',decodedResult.toString(),'****',decodedText)
            // const decryptedText=CryptoJS.AES.decrypt(decodedText,"ihavesecret").toString(CryptoJS.enc.Utf8)
            // text=decryptedText
            html5QrcodeScanner.clear()          
    }
	const onScanFailure=(error)=>{
        console.log('****',error)
    }
	onMount(async()=>{
        html5QrcodeScanner = new Html5QrcodeScanner("reader", config,false);
        html5QrcodeScanner.render(onScanSuccess, onScanFailure);        
})
</script>










<div>
	<h1 class='bg-slate-800 text-white p-2 text-xl uppercase font-bold'>QR Code Scanner</h1>
	<div id="reader" width="800"/>
</div>
