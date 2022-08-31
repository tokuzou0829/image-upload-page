function previewFile(file) {
  const preview = document.getElementById('preview');
  const reader = new FileReader();
  reader.onload = function (e) {
    const imageUrl = e.target.result;
    document.getElementById('base64url').style.display = "";
    var img = document.getElementById('base64url');
    base64url.setAttribute('src', imageUrl);
    preview.appendChild(img);
  }
  reader.readAsDataURL(file);
}
const fileInput = document.getElementById('img-input');
const handleFileSelect = () => {
  const files = fileInput.files;
  for (let i = 0; i < files.length; i++) {
    previewFile(files[i]);
  }
}
fileInput.addEventListener('change', handleFileSelect);