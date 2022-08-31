function viewChange(){
    if(document.getElementById('form-selector')){
        id = document.getElementById('form-selector').value;
        if(id == 'select1'){
            document.getElementById('img-url').style.display = "";
            document.getElementById('img-file').style.display = "none";
        }else if(id == 'select2'){
            document.getElementById('img-url').style.display = "none";
            document.getElementById('img-file').style.display = "";
        }
    }
window.onload = viewChange;
}