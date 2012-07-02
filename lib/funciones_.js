/* PROYECTO: COR PROCESSU MOBILE */

/* Limpia las variables del localStorage, y redirecciona al Login
 * 20120613 mt
 */
function salir() {
	localStorage.clear();
	window.open("index.html","_self");	
}
	
/* Abre una nueva ventana en la página de SID
 * 20120613 mt
 */
function sid() {
	window.open("http://www.integradores.net");		
}

/* Función que redirecciona al url pasapa por parámetro
 * 20120613 mt
 */
function redireccionar(url) {
	localStorage.regresar = url;
	window.open(url,"_self");
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, siempre que su estatus absoluto sea 'A'
 * 20120613 mt
 */
function cargarTareasAbiertas(){
	var res = '';
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSAbiertas.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b">';
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview">';
					res= item.resp;
				}
			}
			html = html + '<li><a onClick="consultarTarea(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p></p><p> '+item.id+'; '+ item.resp+ '; ' + item.estatus +'</p></li>';	
		});
		html = html + '</ul></p></div></div></div></div>';
		$(html).appendTo("#tareas");
		res='';
		location.href="ConsultaOSAbiertas.html\#consulta_os";
	});	
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, siempre que su estatus absoluto sea 'C'
 * 20120613 mt
 */
function cargarTareasCerradas(){
	usuarioConectado = localStorage.nombre;
	var res = '';
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSCerradas.php?jsoncallback=?", {usuario:usuarioConectado}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b">';
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview">';
					res= item.resp;
				}
			}
			html = html + '<li><a onclick="consultarTarea(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p></p><p> '+item.id+'; '+ item.resp+ '; ' + item.estatus +'</p></li>';	
		});
		html = html + '</ul></p></div></div></div></div>';
		$(html).appendTo("#tareas");
		res='';
		location.href="ConsultaOSCerradas.html\#consulta_os";
	});	
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, cuya fecha límite sea igual a la fecha del sistema
 * 20120613 mt
 */
function cargarTareasHoy(){
	var res = '';
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSHoy.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b">';
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview">';
					res= item.resp;
				}
			}
	html = html + '<li><a onclick="consultarTarea(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p></p><p> '+item.id+'; '+ item.resp+ '; ' + item.estatus +'</p></li>';	
		});
		html = html + '</ul></p></div></div></div></div>';
			$(html).appendTo("#tareas");
		res='';
		location.href="ConsultaOSHoy.html\#consulta_os";
	});	
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, siempre que se encuentren vencidas
 * 20120613 mt 
 */
function cargarTareasVencidas(){
	var res = '';
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSVencidas.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b">';
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview">';
					res= item.resp;
				}
			}
			html = html + '<li><a onclick="consultarTarea(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p></p><p> '+item.id+'; '+ item.resp+ '; ' + item.estatus +'</p></li>';	
		});
		html = html + '</ul></p></div></div></div></div>';
		$(html).appendTo("#tareas");
		res='';
		location.href="ConsultaOSVencidas.html\#consulta_os";
	});	
}	

/* Realiza la validación de los datos del login
 * 20120613 mt 
 */
function login () {
	var usuario = document.getElementById("login").value;
	var psw = document.getElementById("password").value;
		
	// Se validan los datos del usuario
	$.getJSON("http://nube4u.com/sid_servicios/json/validarLogin.php?jsoncallback=?", {usuario:usuario , psw:psw}, function(data){
		var login = data.result;
		if (login == 'OK') {
			localStorage.nombre = usuario;
			location.href="index.html\#menu_principal";
		} else if (login == 'BD') {
			alert("Se produjo un error al conectar con la BD");	
		} else if (login == 'US') {
			alert ("El usuario no se encuentra registrado en la base de datos o se encuentra inactivo.");
		} else if (login == 'NO') {
			alert ("Contraseña inválida.");
		}
				
   	});	
	
}

/* Obtiene la lista de las tareas que puede ver el usuario logueado, a las cuales se les haya registrado un tracking durante el día en curso
 * 20120613 alvaro
 */
function cargarTareasTS(){
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	var res = '';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSTimeSheet.php?jsoncallback=?", function(count) {	
			if (count.cant == 0) {	
				location.href="ConsultaTimesheet.html\#timeSheet";
			} else {
				$.getJSON("http://nube4u.com/sid_servicios/json/listaOSTimeSheet.php?jsoncallback=?", function(data) {	
					$.each(data, function(i, item) {
						if (res != item.trk_login_mod) {
							if(res == ''){
								html+= '<h3>'+ item.trk_login_mod +'</h3><p><ul data-role="listview">';
								res= item.trk_login_mod;
							} else{
								html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b">';
								html+= '<h3>'+ item.trk_login_mod +'</h3><ul data-role="listview">';
								res= item.trk_login_mod;
							}
						}
						html = html + '<li><a onclick="consultarTareaTS(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p></p><p> '+item.id+'; '+ item.resp+ '</p><p>'+ item.trk_obs+';'+ item.trk_login_mod + '; ' + item.estatus +'</p></li>';	
					});
					html = html + '</ul></p></div></div></div></div>';
					$(html).appendTo("#timesheet");
					res='';
					location.href="ConsultaTimesheet.html\#timeSheet";
				});
			}
		});
}

/* Guarda en el localstorage de html5 el unicode de la tarea a consultar, y redirecciona a la página DetalleTareaTS.php
 * 20120613 alvaro
 */
function consultarTareaTS(tarea) {
	localStorage.tarea = tarea;
	var htmlh = '<h1>Detalle Tarea # '+ tarea + '</h1>';
	$(htmlh).appendTo("#headertarea1");
	location.href="DetalleTareaTS.html";
}

/* Guarda en el localstorage de html5 el unicode de la tarea a consultar, y redirecciona a la página DetalleTarea.php
 * 20120614 mt
 */
function consultarTarea(tarea) {
	localStorage.tarea = tarea;
	var htmlh = '<h1>Detalle Tarea # '+ tarea + '</h1>';
	$(htmlh).appendTo("#headertarea1");
	location.href="DetalleTarea.html";
}

/* Obtiene los datos de la tarea a consultar, y sus Trackings
 * 20120614 mt
 */
function cargarDetallesTarea () {
	var tarea = localStorage.tarea;
	var htmlh = '<h1>Detalle Tarea # '+ tarea + '</h1>';
	$(htmlh).appendTo("#headertarea2");
	var html = '<div data-role="content"><div data-role="controlgroup" data-type="horizontal" align="center"><a onclick="cargarTrkTarea(' + tarea + ')" data-role="button" data-theme="b">Ver Tracking</a><a onclick="ingresarTrk(' + tarea + ')" data-role="button" data-theme="b">Ingresar Tracking</a></div>';
	$.getJSON("http://nube4u.com/sid_servicios/json/OSDetalle.php?jsoncallback=?", {tarea:tarea}, function(data) {
		$.each(data, function(i, item) {
			html = html + '<label for="empinst">Empinst: </label><input type="text" name="empinst" id="empinst" value="'+item.empinst+'" readonly/>';
			html = html + '<label for="contacto">Contacto: </label><input type="text" name="contacto" id="contacto" value="'+item.contacto+'" readonly/>';
			html = html + '<label for="resp">Responsable: </label><input type="text" name="resp" id="resp" value="'+item.resp+'" readonly/>';
			html = html + '<label for="id">Tarea: </label><input type="text" name="id" id="id" value="'+item.id+'" readonly/>';
			html = html + '<label for="desc">Tarea Detalle:</label><textarea cols="40" rows="8" name="desc" id="desc" readonly>'+item.desc+'</textarea>';
			html = html + '<label for="tipo">Tarea Tipo: </label><input type="text" name="tipo" id="tipo" value="'+item.tipo+'" readonly/>';
			html = html + '<label for="subtipo">Tarea Sub Tipo: </label><input type="text" name="subtipo" id="subtipo" value="'+item.subtipo+'" readonly/>';
			html = html + '<label for="prioridad">Prioridad: </label><input type="text" name="prioridad" id="prioridad" value="'+item.prioridad+'" readonly/>';
			html = html + '<label for="estatus">Estatus de Avance: </label><input type="text" name="estatus" id="estatus" value="'+item.estatus+'" readonly/>';
			html = html + '<label for="hp">Horas Planificadas: </label><input type="text" name="hp" id="hp" value="'+item.hp+'" readonly/>';
			html = html + '<label for="fec_lim">Fecha Límite: </label><input type="text" name="fec_lim" id="fec_lim" value="'+item.fec_lim+'" readonly/>';
			html = html + '<label for="fp">Factor de Ponderación (%): </label><input type="text" name="fp" id="fp" value="'+item.fp+'" readonly/>';
			html = html + '<label for="emp">Empresa: </label><input type="text" name="emp" id="emp" value="'+item.emp+'" readonly/>';
			html = html + '<label for="proy">Proyecto: </label><input type="text" name="proy" id="proy" value="'+item.proy+'" readonly/>';
			html = html + '<label for="fase">Fase: </label><input type="text" name="fase" id="fase" value="'+item.fase+'" readonly/>';
			html = html + '<label for="prod">Producto: </label><input type="text" name="prod" id="prod" value="'+item.prod+'" readonly/>';
			html = html + '</div>';
		});
		$(html).appendTo("#detalleTarea");
		location.href="DetalleTarea.html\#detalle_tarea";
	});
}

/* Redirecciona a la pagina de consulta de traking 
 * 20120615 mt
 */
function cargarTrkTarea(tarea) { 
	location.href="TrkTarea.html";
}

/* Obtiene la lista de Tracking cargados a una tarea (localStorage.tarea 
 * 20120615 maria
 */
function cargarTrk() {
	var tarea = localStorage.tarea;
	var htmlh = '<h1>Tracking Tarea # '+ tarea + '</h1>';
	$(htmlh).appendTo("#headertarea2");
	var html = '<div data-role="content">';
	var html = '<div data-role="content" align="center"><ul data-role="listview"><li data-role="list-divider" role="heading"><h3>Tracking</h3></li>';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaTrkOS.php?jsoncallback=?", {tarea:tarea}, function(data) {
		$.each(data, function(i, item) {
			html = html + '<li><h3>Registrado por: '+item.trk_login_mod+'</h3><p></p><p> '+item.trk_fec_mod+ '</p><p>'+ item.trk_obs+'; ' + item.estatus +'</p></li>';
		});
		html = html + '<li data-role="list-divider" role="heading"></li></ul></div>';
		$(html).appendTo("#TrkTarea");
		location.href="TrkTarea.html\#trk_tarea";
	});
}

/* Funcion que redirecciona al url IngresarTracking.html y almacena en localStorage la tarea pasada por parametro 
 * 20120614 alvaro
 */
function ingresarTrk(tarea){
	localStorage.tarea = tarea;
	location.href="IngresarTracking.html";
}

/* Muestra el formulario para ingresar un nuevo tracking
 * 20120614 alvaro
 */
function ingresarTrack(){
	var tarea = localStorage.tarea;
	var htmlh = '<h1>Ingresar Trackin Tarea # '+ tarea + '</h1>';
	$(htmlh).appendTo("#headertarea2");
	
	var html = '<button onclick="ingresar()" value="Ingresar" name="envia" data-theme="b"></button><br><label for="id">Tarea: </label><input type="text" name="id" id="id" value="'+tarea+'" readonly/>';
	$.getJSON("http://nube4u.com/sid_servicios/json/preIngresoTraking.php?jsoncallback=?", {tarea:localStorage.tarea}, function(data) {
		$.each(data, function(i, item) {
			if(i==0) {
				html += '<label for="id">Tarea: </label><input type="text" name="id" id="id" value="'+item.id+'" readonly/>';
				html += '<label for="Obs">Observación:</label><textarea cols="40" rows="8" name="Obs" id="Obs"> </textarea>';
				html += '<label for="selectEstatus" class="select">Estatus:</label><select name="selectEstatus" id="selectEstatus" data-theme="b">' ;	
			}	
				 html+='<option value="'+item.estatus_sec+'">'+item.estatus+'</option>';	
			});
				
			html += '</select><label for="horas">Tiempo Registrado: </label><input type="number" name="horas" id="horas"/>'
			$(html).appendTo("#images_ingresar");
			location.href="IngresarTracking.html\#ingresar";
		});
			
	} 
	
/* Guarda en la base de datos un tracking con los datos suministrados por la funcion ingresarTrack
 * 20120614 alvaro
 */
function ingresar(){
	var estatus = $('#selectEstatus').val();
	var obs = document.getElementById("Obs").value;
	var horas = document.getElementById("horas").value;
	$.getJSON("http://nube4u.com/sid_servicios/json/IngresoTraking.php?jsoncallback=?", {usuario:localStorage.nombre,tarea:localStorage.tarea,estatus:estatus,obs:obs,horas:horas}, function(data) {
		location.href="DetalleTarea.html";
	});
	location.href="index.html\#menu_principal";
}


/* Carga el formulario para el ingreso de una nueva Tarea
 * 20120615 mt
 */
function preingresarTarea(){
	var html = '';
	$.getJSON("http://nube4u.com/sid_servicios/json/preIngresoTarea.php?jsoncallback=?", function(data) {
		$.each(data, function(i, item) {
				
		});
				
		html += '</select>'
		html += '<button onclick="ingresar()" value="Ingresar" name="envia" data-theme="b"></button><br>';
		$(html).appendTo("#ingresar_tarea");
		location.href="IngresarOS.html\#ingresar_t";
	});		
} 

function cargarContactos(){
	localStorage.empinst = $('#selectEmpinst').val();
	location.href="IngresarOSContacto.html";
}

function recargarCboContacto() {
	
	$('#selectEmpinst').val(localStorage.empinst)
	var html = localStorage.empinstSel;
	/*$.getJSON("http://nube4u.com/sid_servicios/json/listaContactoS.php?jsoncallback=?", {empinst:localStorage.empinst}, function(data) {
		$.each(data, function(i, item) {
			if(i==0) {
				html += '<label for="selectContacto" class="select">Contacto:</label><select name="selectContacto" id="selectContacto" data-theme="b">' ;	
			}	
			html+='<option value="'+item.sec+'">'+item.id+'</option>';	
		});
				
		html += '</select>'
		html += '<button onclick="ingresar()" value="Ingresar" name="envia" data-theme="b"></button><br>';
		$(html).appendTo("#ingresar_tarea");
		location.href="IngresarOSContacto.html\#ingresar_t";
	});*/
	$(html).appendTo("#ingresar_tarea");
	$("#selectEmpinst").click(function() {  
        $("#selectEmpinst option[value="+localStorage.empinst+"]").attr("selected",true);  
    });
	location.href="IngresarOSContacto.html\#ingresar_t";
}

/* Funcion que redirecciona al url IngresarTracking.html y almacena en localStorage la tarea pasada por parametro 
 * 20120618 alvaro
 */
function ingresarTrkTS(tarea){
	localStorage.tarea = tarea;
	location.href="IngresarTrackingTS.html";
}

/* Muestra el formulario para ingresar un nuevo tracking
 * 20120618 alvaro
 */
function ingresarTrackTS(){
	var tarea = localStorage.tarea;
	var htmlh = '<h1>Ingresar Trackin Tarea # '+ tarea + '</h1>';
	$(htmlh).appendTo("#headertarea2");
	
	var html = '<button onclick="ingresar()" value="Ingresar" name="envia" data-theme="b"></button><br><label for="id">Tarea: </label><input type="text" name="id" id="id" value="'+tarea+'" readonly/>';
	$.getJSON("http://nube4u.com/sid_servicios/json/preIngresoTraking.php?jsoncallback=?", {tarea:localStorage.tarea}, function(data) {
		$.each(data, function(i, item) {
			if(i==0) {
				html += '<label for="id">Tarea: </label><input type="text" name="id" id="id" value="'+item.id+'" readonly/>';
				html += '<label for="Obs">Observación:</label><textarea cols="40" rows="8" name="Obs" id="Obs"> </textarea>';
				html += '<label for="selectEstatus" class="select">Estatus:</label><select name="selectEstatus" id="selectEstatus" data-theme="b">' ;	
			}	
				 html+='<option value="'+item.estatus_sec+'">'+item.estatus+'</option>';	
			});
				
			html += '</select><label for="horas">Tiempo Registrado: </label><input type="number" name="horas" id="horas"/>'
			$(html).appendTo("#images_ingresar");
			location.href="IngresarTrackingTS.html\#ingresar";
		});
			
	}

/* Obtiene los datos de la tarea a consultar, y sus Trackings
 * 20120619 mt
 */
function cargarDetallesTareaTS() {
	var tarea = localStorage.tarea;
	var htmlh = '<h1>Detalle Tarea # '+ tarea + '</h1>';
	$(htmlh).appendTo("#headertarea2");
	var html = '<div data-role="content"><div data-role="controlgroup" data-type="horizontal" align="center"><a onclick="cargarTrkTareaTS(' + tarea + ')" data-role="button" data-theme="b">Ver Tracking</a><a onclick="ingresarTrkTS(' + tarea + ')" data-role="button" data-theme="b">Ingresar Tracking</a></div>';
	$.getJSON("http://nube4u.com/sid_servicios/json/OSDetalle.php?jsoncallback=?", {tarea:tarea}, function(data) {
		$.each(data, function(i, item) {
			html = html + '<label for="empinst">Empinst: </label><input type="text" name="empinst" id="empinst" value="'+item.empinst+'" readonly/>';
			html = html + '<label for="contacto">Contacto: </label><input type="text" name="contacto" id="contacto" value="'+item.contacto+'" readonly/>';
			html = html + '<label for="resp">Responsable: </label><input type="text" name="resp" id="resp" value="'+item.resp+'" readonly/>';
			html = html + '<label for="id">Tarea: </label><input type="text" name="id" id="id" value="'+item.id+'" readonly/>';
			html = html + '<label for="desc">Tarea Detalle:</label><textarea cols="40" rows="8" name="desc" id="desc" readonly>'+item.desc+'</textarea>';
			html = html + '<label for="tipo">Tarea Tipo: </label><input type="text" name="tipo" id="tipo" value="'+item.tipo+'" readonly/>';
			html = html + '<label for="subtipo">Tarea Sub Tipo: </label><input type="text" name="subtipo" id="subtipo" value="'+item.subtipo+'" readonly/>';
			html = html + '<label for="prioridad">Prioridad: </label><input type="text" name="prioridad" id="prioridad" value="'+item.prioridad+'" readonly/>';
			html = html + '<label for="estatus">Estatus de Avance: </label><input type="text" name="estatus" id="estatus" value="'+item.estatus+'" readonly/>';
			html = html + '<label for="hp">Horas Planificadas: </label><input type="text" name="hp" id="hp" value="'+item.hp+'" readonly/>';
			html = html + '<label for="fec_lim">Fecha Límite: </label><input type="text" name="fec_lim" id="fec_lim" value="'+item.fec_lim+'" readonly/>';
			html = html + '<label for="fp">Factor de Ponderación (%): </label><input type="text" name="fp" id="fp" value="'+item.fp+'" readonly/>';
			html = html + '<label for="emp">Empresa: </label><input type="text" name="emp" id="emp" value="'+item.emp+'" readonly/>';
			html = html + '<label for="proy">Proyecto: </label><input type="text" name="proy" id="proy" value="'+item.proy+'" readonly/>';
			html = html + '<label for="fase">Fase: </label><input type="text" name="fase" id="fase" value="'+item.fase+'" readonly/>';
			html = html + '<label for="prod">Producto: </label><input type="text" name="prod" id="prod" value="'+item.prod+'" readonly/>';
			html = html + '</div>';
		});
		$(html).appendTo("#detalleTarea");
		location.href="DetalleTareaTS.html\#detalle_tarea";
	});
}

/* Redirecciona a la pagina de consulta de traking 
 * 20120619 mt
 */
function cargarTrkTareaTS(tarea) { 
	location.href="TrkTareaTS.html";
}


/* Obtiene la lista de Tracking cargados a una tarea (localStorage.tarea 
 * 20120619 maria
 */
function cargarTrkTS() {
	var tarea = localStorage.tarea;
	var htmlh = '<h1>Tracking Tarea # '+ tarea + '</h1>';
	$(htmlh).appendTo("#headertarea2");
	var html = '<div data-role="content">';
	var html = '<div data-role="content" align="center"><ul data-role="listview"><li data-role="list-divider" role="heading"><h3>Tracking</h3></li>';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaTrkOS.php?jsoncallback=?", {tarea:tarea}, function(data) {
		$.each(data, function(i, item) {
			html = html + '<li><h3>Registrado por: '+item.trk_login_mod+'</h3><p></p><p> '+item.trk_fec_mod+ '</p><p>'+ item.trk_obs+'; ' + item.estatus +'</p></li>';
		});
		html = html + '<li data-role="list-divider" role="heading"></li></ul></div>';
		$(html).appendTo("#TrkTarea");
		location.href="TrkTareaTS.html\#trk_tarea";
	});
}


/* Llama la pantalla emergente para seleccionar el tipo de ordenamiento de las Tareas 
 * 20120619 maria
 */
function AbrirCentrado(btn,Url,NombreVentana,width,height,extras,scrollbars) {
	var largo = width;
	var altura = height;
	var adicionales= extras;
	localStorage.btn = btn;
	var top = (screen.height-altura)/2;
	var izquierda = (screen.width-largo)/2; nuevaVentana=window.open(''+ Url + '',''+ NombreVentana + '','width=' + largo + ',height=' + altura + ',top=' + top + ',left=' + izquierda + ',features=' + adicionales + '' + ',scrollbars=1');
nuevaVentana.focus();
}

function ordenarPorPrioridad() {
	if (localStorage.btn == 'H') {
		window.close();
		alert("sigo");
		redireccionar('ConsultaOSHoy.html');
	}
}