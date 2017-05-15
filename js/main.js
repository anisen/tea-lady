function mostrarData(){
	var nombre= document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
	var direccion=document.getElementById("direccion").value;
	var telefono=document.getElementById("telefono").value;
    var email=document.getElementById("mail").value;
    var section=document.getElementsByClassName("elige").value;
    var caja=document.getElementById("cajita").value;
    var contener=document.getElementById("contenedor");

    contener.innerHTML='<h1>Datos Usuario</h1>'+'<h3>Nombre:</h3>'+nombre+" "+apellido+'<h3>Direccion:</h3>'+direccion+'<h3>Telefono:</h3>'+telefono+'<h3>Email:</h3>'+email+'<h3>Tu Pack seleccionado:</h3>'+section+'<h3>Has elegido:</h3>'+caja;
}