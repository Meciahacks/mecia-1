<script>	
import {Html5Qrcode,Html5QrcodeScanner,Html5QrcodeScanType} from "html5-qrcode"

import { onMount } from "svelte";
import {supabase} from '../../auth'
let html5QrcodeScanner,currentRecord=''
let config = {
        fps: 10,
        qrbox: {width: 250, height: 250},
        rememberLastUsedCamera: true,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA,Html5QrcodeScanType.SCAN_TYPE_FILE]
    };


	const fetchRecord=async(uuid1)=>{
        try {
            let { data: DataTble, error } = await supabase.from('DataTble')
                .select('*').eq('uuid',uuid1)            
            currentRecord=DataTble
                
        } catch (error) {
            console.log('****',error)            
        }
    }
    const onScanSuccess=(decodedText, decodedResult)=>{
            console.log('****',decodedResult.toString(),'****',decodedText)
            // const decryptedText=CryptoJS.AES.decrypt(decodedText,"ihavesecret").toString(CryptoJS.enc.Utf8)
            // text=decryptedText
            fetchRecord(decodedText)
            html5QrcodeScanner.clear()          
            html5QrcodeScanner = new Html5QrcodeScanner("reader", config,false);
            html5QrcodeScanner.render(onScanSuccess, onScanFailure);        
    }
	const onScanFailure=(error)=>{
        console.log('****',error)
        currentRecord=''
    }
	onMount(async()=>{
        html5QrcodeScanner = new Html5QrcodeScanner("reader", config,false);
        html5QrcodeScanner.render(onScanSuccess, onScanFailure);        
})
</script>

<div>
	<h1 class='bg-slate-800 text-white p-2 text-xl uppercase font-bold'>QR Code Scanner</h1>
	<div id="reader" width="800"/>
    {#if currentRecord}
        <div>{JSON.stringify(currentRecord)}</div>
    {/if}
</div>
