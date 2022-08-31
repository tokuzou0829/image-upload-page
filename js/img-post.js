function butotnClick(){
    if(document.getElementById('form-selector')){
        id = document.getElementById('form-selector').value;
        if(id == 'select1'){
            const file_url = document.getElementById("url-input").value;
            let headersList = {
                "Content-Type": "application/json"
               }
            const url_json = ('{"url":"')+ file_url + ('"}')     
               fetch("https://img.tokuzouserver.net", { 
                 method: "POST",
                 body: url_json,
                 headers: headersList
               }).then(function(response) {
                 return response.json();
               }).then(function(data) {
                 console.log(data);
                 document.getElementById("output-url").value = (data["url"]);
               })
        }else if(id == 'select2'){
            var src = base64url.getAttribute('src');
            let headersList = {
                "Content-Type": "application/json"
               }
            const url_json = ('{"url":"')+ src + ('"}')
               
               fetch("https://img.tokuzouserver.net", { 
                 method: "POST",
                 body: url_json,
                 headers: headersList
               }).then(function(response) {
                 return response.json();
               }).then(function(data) {
                 console.log(data);
                 document.getElementById("output-url").value = (data["url"]);
               })
         }
    }
}
let button = document.getElementById('form-ckick');
button.onclick = butotnClick;