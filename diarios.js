const noti = ['<iframe src="https://www.abc.com.py/deportes/futbol/cuando-bajaron-dos-grandes-en-simultaneo-1746822.html" height="500px" width="500px"></iframe>', '<iframe src="https://www.versus.com.py/versus/2020/05/26/a-una-decada-del-fin-de-una-sequia-que-duro-26-anos-en-guarani/" height="500px" width="500px"></iframe>', ' <iframe src="https://www.ultimahora.com/" height="500px" width="500px"></iframe>']; //crea la lista de pags web
acc = document.getElementById("acc"); //para acceder al p del html
var i = 0; // variable para el contador (posiciones de la lista) los botones
function listo() { 
  acc.innerHTML = noti[0]; // la funcion que carga la lista automaticamente al cargar la pag
}
function sig() {
  i++; 
  if (i == noti.length) {
    acc.innerHTML=noti[0]; //si la lista esta en el final le hace volver
    i=0;
  }
  acc.innerHTML = noti[i];
}
function ant() {
  if (i == 0) {
    acc.innerHTML=noti[(noti.length)-1];
    i=noti.length-1; //lo mismo que sig pero al reves y no hace i-- siempre por que al cargar la pag no queremos que ya pase
    console.log(i);
  }
 else{  
  i--;
  acc.innerHTML = noti[i];}
}