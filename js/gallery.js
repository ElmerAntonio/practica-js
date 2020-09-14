/*Name this external file gallery.js*/
function upDate(previewPic) {
  var cam = document.getElementById('image');
  cam.innerHTML = previewPic.alt;
  cam.style.backgroundImage = "url('"+previewPic.src+"')";
}

function unDo() {
  var nev = document.getElementById('image');
  nev.innerHTML = 'Hover over an image below to display here.';
  nev.style.background = '#8e68ff';
}
