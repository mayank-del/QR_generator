var Qrcode=require('qrcode');

Qrcode.toDataURL('I ama Mike',{type:'terminal'},function(err,url){
    if(err){
        console.log(err)
    }
    console.log(url)
})