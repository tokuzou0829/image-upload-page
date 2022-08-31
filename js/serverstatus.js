fetch('https://img.tokuzouserver.net/')
.then(res =>  {
    console.log(res.status);
    serverstatuscode = res.status
        if(serverstatuscode == '200'){
            document.getElementById('statusup').style.display = "";
            document.getElementById('statusdown').style.display = "none";
        }else{
            document.getElementById('statusup').style.display = "none";
            document.getElementById('statusalert').style.display = "";
            document.getElementById('statusdown').style.display = "";
            document.getElementById('form-ckick').disabled = true;
            document.getElementById('statusbox').style.backgroundColor = 'red';
        }
})