/*autocompletado de los campos de factura*/
function billingFunction() {
  if (document.getElementById('same').checked){
    var nam = document.getElementById('shippingName');
    var zip = document.getElementById('shippingZip');

    document.getElementById('billingName').value = nam.value;
    document.getElementById('billingZip').value = zip.value;

  }
  else{
    document.getElementById('billingName').value = '';
    document.getElementById('billingZip').value = '';
  }
}
/* Verificacion de los campos y retorno en falso para utilizar el boton*/
function check(){
  var namee = document.getElementById('shippingName');
  var zipe = document.getElementById('shippingZip');
  var name2 = document.getElementById('billingName');
  var zip2 = document.getElementById('billingZip');

  if(namee.value == undefined){
      if(zipe.value == undefined){
        if(name2.value == undefined){
          if(zip2.value == undefined){
            return false;
          }
        }
      }
    }
}
