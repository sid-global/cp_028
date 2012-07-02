/* PROYECTO: COR PROCESSU MOBILE */

/* Limpia las variables del localStorage, y redirecciona al Login
 * 20120613 MT
 */
function salir() {
	localStorage.clear();
	window.open("index.html","_self");	
}
	
/* Abre una nueva ventana en la página de SID
 * 20120613 MT
 */
function sid() {
	window.open("http://www.integradores.net");		
}

/* Función que redirecciona al url pasapa por parámetro
 * 20120613 MT
 */
function redireccionar(url) {
	localStorage.regresar = url;
	window.open(url,"_self");
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, siempre que su estatus absoluto sea 'A'
 * 20120613 MT
 */
function cargarTareasAbiertas(){
	var res = '';
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSAbiertas.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b">';
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
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
 * 20120613 MT
 */
function cargarTareasCerradas(){
	usuarioConectado = localStorage.nombre;
	var res = '';
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSCerradas.php?jsoncallback=?", {usuario:usuarioConectado}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b">';
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
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
 * 20120613 MT
 */
function cargarTareasHoy(){
	var res = '';
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSHoy.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b">';
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
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
 * 20120613 MT 
 */
function cargarTareasVencidas(){
	var res = '';
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSVencidas.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b">';
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
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
 * 20120613 MT 
 */
function login () {
	var usuario = document.getElementById("login").value;
	var psw = document.getElementById("password").value;
		
	// Se validan los datos del usuario
	$.getJSON("http://nube4u.com/sid_servicios/json/validarLogin.php?jsoncallback=?", {usuario:usuario , psw:psw}, function(data){
		var login = data.result;
		if (login == 'OK') {
			localStorage.nombre = usuario;
			localStorage.Inempinst = ""; //20120619 alvaro
			localStorage.Intipo = "";  //20120619 alvaro
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
								html+= '<h3>'+ item.trk_login_mod +'</h3><p><ul data-role="listview" data-inset="true">';
								res= item.trk_login_mod;
							} else{
								html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b">';
								html+= '<h3>'+ item.trk_login_mod +'</h3><ul data-role="listview" data-inset="true">';
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
 * 20120614 MT
 */
function consultarTarea(tarea) {
	localStorage.tarea = tarea;
	var htmlh = '<h1>Detalle Tarea # '+ tarea + '</h1>';
	$(htmlh).appendTo("#headertarea1");
	location.href="DetalleTarea.html";
}

/* Obtiene los datos de la tarea a consultar, y sus Trackings
 * 20120614 MT
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
 * 20120615 MT
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
	var html = '<div data-role="content" align="center"><ul data-role="listview" data-inset="true"><li data-role="list-divider" role="heading"><h3>Tracking</h3></li>';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaTrkOS.php?jsoncallback=?", {tarea:tarea}, function(data) {
		$.each(data, function(i, item) {
			html = html + '<li><h3>Registrado por:'+item.trk_login_mod+'</h3><p></p><p>'+ item.trk_obs+'</p><p> '+item.trk_fec_mod+'; '+ item.estatus+ '</p></li>';
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
	
	var html = '<label for="id">Tarea: </label><input type="text" name="id" id="id" value="'+tarea+'" readonly/>';
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
			html += '<button onclick="ingresar()" value="Ingresar" name="envia" data-theme="b"></button><br>';
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
 * 20120615 MT
 */
function preingresarTarea(){
	limpiarStorage();
	var hoy = new Date;
	var html = '<label for="selectEmpinst" class="select">Empinst:</label><select name="selectEmpinst" id="selectEmpinst" data-theme="b" onChange="almacenarEmpInst(this);">';
	html += '<option value="0">Seleccione</option>';
	$.getJSON("http://nube4u.com/sid_servicios/json/preIngresoTarea.php?jsoncallback=?",{empinst:localStorage.Inempinst,tipo:localStorage.Intipo}, function(data) {
		$.each(data, function(i, item) {
			if(i == 0){
				for (var ii in item.EMPINST){ 
					if(ii=="evalScript"){break;}
					html+='<option value="'+item.EMPINST[ii].sec+'">'+item.EMPINST[ii].id+'</option>';	
				}	
			} else if(i == 1){
				html += '</select><br><label for="selectContacto" class="select">Contacto:</label><select name="selectContacto" id="selectContacto" data-theme="b" onChange="almacenarContacto(this);">';
				html += '<option value="0">Seleccione</option>';
				for (var ii in item.CONTACTO){ 
				    if(ii=="evalScript"){break;}
					html+='<option value="'+item.CONTACTO[ii].sec+'">'+item.CONTACTO[ii].id+'</option>';
				}
			}else if(i == 3){
				html += '</select><br><label for="tarea_id">Tarea ID:</label><input type="text" name="tarea_id" id="tarea_id" onChange="almacenarTarea();"/><br><label for="tarea_detalle">Tarea Detalle:</label><textarea cols="40" rows="8" name="tarea_detalle" id="tarea_detalle" onChange="almacenarTareaDetalle();"></textarea><br><label for="selectTipo" class="select">Tipo:</label><select name="selectTipo" id="selectTipo" data-theme="b" onChange="almacenarTipo(this);">';
				html += '<option value="0">Seleccione</option>';
				for (var ii in item.TIPO){ 
				    if(ii=="evalScript"){break;}
					html+='<option value="'+item.TIPO[ii].sec+'">'+item.TIPO[ii].id+'</option>';
				}
			}else if(i == 4){
				html += '</select><br><label for="selectsubTipo" class="select">SubTipo:</label><select name="selectsubTipo" id="selectsubTipo" data-theme="b" onChange="almacenarSubtipo(this);">';
				html += '<option value="0">Seleccione</option>';
				for (var ii in item.SUBTIPO){ 
					if(ii=="evalScript"){break;}
					html+='<option value="'+item.SUBTIPO[ii].sec+'">'+item.SUBTIPO[ii].id+'</option>';
				}
			}else if(i == 2){
				html += '</select><br><label for="selectResp" class="select">Responsable:</label><select name="selectResp" id="selectResp" data-theme="b" onChange="almacenarResp(this);">';
				html += '<option value="0">Seleccione</option>';
				for (var ii in item.RESP){ 
					if(ii=="evalScript"){break;}
					html+='<option value="'+item.RESP[ii].sec+'">'+item.RESP[ii].id+'</option>';
				}
			}else if(i == 5){
				html += '</select><br><label for="selectPRIORI" class="select">Prioridad:</label><select name="selectPRIORI" id="selectPRIORI" data-theme="b" onChange="almacenarPrioridad(this);">';
				html += '<option value="0">Seleccione</option>';
				for (var ii in item.PRIORI){ 
				    if(ii=="evalScript"){break;}
					html+='<option value="'+item.PRIORI[ii].sec+'">'+item.PRIORI[ii].id+'</option>';
				}
			 }			
		});
				
		html += '</select>'
		html += '<label for="hp">Horas Planificadas:</label><input type="number" name="hp" id="hp" onChange="almacenarHP();"/><label for="fec_limite">Fecha Límite:</label><input type="datetime" name="fec_limite" id="fec_limite" value="'+String(hoy.getDate()+"/"+(hoy.getMonth()+1)+"/"+hoy.getFullYear())+'" onChange="almacenarFecLimite();"/>';
		html += '<button onclick="ingresarTarea()" value="Ingresar" name="envia" data-theme="b"></button><br>';
		$(html).appendTo("#ingresar_tarea");
		localStorage.feclimite = String(hoy.getDate()+"/"+(hoy.getMonth()+1)+"/"+hoy.getFullYear());
		location.href="IngresarOS.html\#ingresar_t";
	});		
} 

function preingresarTarea1(){
	
	var html = '<label for="selectEmpinst" class="select">Empinst:</label><select name="selectEmpinst" id="selectEmpinst" data-theme="b" onChange="almacenarEmpInst(this);">';
	html += '<option value="0">Seleccione</option>';
	$.getJSON("http://nube4u.com/sid_servicios/json/preIngresoTarea.php?jsoncallback=?",{empinst:localStorage.empist,tipo:localStorage.tipo}, function(data) {
		$.each(data, function(i, item) {
			if(i == 0){		
				for (var ii in item.EMPINST){ 
					if(ii=="evalScript"){break;}
					html+='<option value="'+item.EMPINST[ii].sec+'">'+item.EMPINST[ii].id+'</option>';	
				}
			} else if(i == 1){
				html += '</select><br><label for="selectContacto" class="select">Contacto:</label><select name="selectContacto" id="selectContacto" data-theme="b" onChange="almacenarContacto(this);">';
				html += '<option value="0">Seleccione</option>';
				for (var ii in item.CONTACTO){ 
				    if(ii=="evalScript"){break;}
					html+='<option value="'+item.CONTACTO[ii].sec+'">'+item.CONTACTO[ii].id+'</option>';
				}
			}else if(i == 3){
				html += '</select><br><label for="tarea_id">Tarea ID:</label><input type="text" name="tarea_id" id="tarea_id" value="'+localStorage.tareaid+'" onChange="almacenarTarea();"/><br><label for="tarea_detalle">Tarea Detalle:</label><textarea cols="40" rows="8" name="tarea_detalle" id="tarea_detalle" onChange="almacenarTareaDetalle();">'+localStorage.tareadetalle+'</textarea><br><label for="selectTipo" class="select">Tipo:</label><select name="selectTipo" id="selectTipo" data-theme="b" onChange="almacenarTipo(this);">';
				html += '<option value="0">Seleccione</option>';
				for (var ii in item.TIPO){ 
				    if(ii=="evalScript"){break;}
					html+='<option value="'+item.TIPO[ii].sec+'">'+item.TIPO[ii].id+'</option>';
				}
			}else if(i == 4){
				html += '</select><br><label for="selectsubTipo" class="select">SubTipo:</label><select name="selectsubTipo" id="selectsubTipo" data-theme="b" onChange="almacenarSubtipo(this);">';
				html += '<option value="0">Seleccione</option>';
				for (var ii in item.SUBTIPO){ 
					if(ii=="evalScript"){break;}
					html+='<option value="'+item.SUBTIPO[ii].sec+'">'+item.SUBTIPO[ii].id+'</option>';
				}
			}else if(i == 2){
				html += '</select><br><label for="selectResp" class="select">Responsable:</label><select name="selectResp" id="selectResp" data-theme="b" onChange="almacenarResp(this);">';
				html += '<option value="0">Seleccione</option>';
				for (var ii in item.RESP){ 
					if(ii=="evalScript"){break;}
					html+='<option value="'+item.RESP[ii].sec+'">'+item.RESP[ii].id+'</option>';
				}
			}else if(i == 5){
				html += '</select><br><label for="selectPRIORI" class="select">Prioridad:</label><select name="selectPRIORI" id="selectPRIORI" data-theme="b" onChange="almacenarPrioridad(this);">';
				html += '<option value="0">Seleccione</option>';
				for (var ii in item.PRIORI){ 
				    if(ii=="evalScript"){break;}
					html+='<option value="'+item.PRIORI[ii].sec+'">'+item.PRIORI[ii].id+'</option>';
				}
			 }	
		});
				
		html += '</select>'
		html += '<label for="hp">Horas Planificadas:</label><input type="number" name="hp" id="hp" value="'+localStorage.hp+'" onChange="almacenarHP();"/><label for="fec_limite">Fecha Límite:</label><input type="datetime" name="fec_limite" id="fec_limite" value="'+localStorage.feclimite+'" onChange="almacenarFecLimite();"/>';
		html += '<button onclick="ingresarTarea()" value="Ingresar" name="envia" data-theme="b"></button><br>';
		$(html).appendTo("#ingresar_tarea1");
		if (localStorage.empinst != 0) {document.getElementById('selectEmpinst').value = localStorage.empist;}
		if (localStorage.contacto != 0) {document.getElementById('selectContacto').value = localStorage.contacto;}
		if (localStorage.tipo != 0) {document.getElementById('selectTipo').value = localStorage.tipo;}
		if (localStorage.subtipo != 0) {document.getElementById('selectsubTipo').value = localStorage.subtipo;}
		if (localStorage.responsable != 0) {document.getElementById('selectResp').value = localStorage.responsable;}
		if (localStorage.prioridad != 0) {document.getElementById('selectPRIORI').value = localStorage.prioridad;}
		
		location.href="IngresarOS1.html\#ingresar_t";
	});		
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
	
	var html = '<label for="id">Tarea: </label><input type="text" name="id" id="id" value="'+tarea+'" readonly/>';
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
			html += '<button onclick="ingresar()" value="Ingresar" name="envia" data-theme="b"></button><br>';
			$(html).appendTo("#images_ingresar");
			location.href="IngresarTrackingTS.html\#ingresar";
		});
			
	}

/* Obtiene los datos de la tarea a consultar, y sus Trackings
 * 20120619 MT
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
 * 20120619 MT
 */
function cargarTrkTareaTS(tarea) { 
	location.href="TrkTareaTS.html";
}


/* Obtiene la lista de Tracking cargados a una tarea (localStorage.tarea 
 * 20120619 MT
 */
function cargarTrkTS() {
	var tarea = localStorage.tarea;
	var htmlh = '<h1>Tracking Tarea # '+ tarea + '</h1>';
	$(htmlh).appendTo("#headertarea2");
	var html = '<div data-role="content">';
	var html = '<div data-role="content" align="center"><ul data-role="listview" data-inset="true"><li data-role="list-divider" role="heading"><h3>Tracking</h3></li>';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaTrkOS.php?jsoncallback=?", {tarea:tarea}, function(data) {
		$.each(data, function(i, item) {
			html = html + '<li><h3>Registrado por:'+item.trk_login_mod+'</h3><p></p><p>'+ item.trk_obs+'</p><p> '+item.trk_fec_mod+'; '+ item.estatus+ '</p></li>';
		});
		html = html + '<li data-role="list-divider" role="heading"></li></ul></div>';
		$(html).appendTo("#TrkTarea");
		location.href="TrkTareaTS.html\#trk_tarea";
	});
}

/* Almacena en el localStorage empresa de la tarea
 * 20120621 MT
 */
function almacenarEmpInst(empinst) {
	localStorage.empist = empinst.options[empinst.selectedIndex].value;
	location.href="IngresarOS1.html";
}

/* Almacena en el localStorage el contacto de la tarea
 * 20120621 MT
 */
function almacenarContacto(contacto) {
	localStorage.contacto = contacto.options[contacto.selectedIndex].value;
}

/* Almacena en el localStorage el tipo de la tarea
 * 20120621 MT
 */
function almacenarTipo(tipo) {
	localStorage.tipo = tipo.options[tipo.selectedIndex].value;
	location.href="IngresarOS1.html";
}

/* Almacena en el localStorage el subtipo de la tarea
 * 20120621 MT
 */
function almacenarSubtipo(subtipo) {
	localStorage.subtipo = subtipo.options[subtipo.selectedIndex].value;
}

/* Almacena en el localStorage el responsable de la tarea
 * 20120621 MT
 */
function almacenarResp(responsable) {
	localStorage.responsable = responsable.options[responsable.selectedIndex].value;
}

/* Almacena en el localStorage la prioridad de la tarea
 * 20120621 MT
 */
function almacenarPrioridad(prioridad) {
	localStorage.prioridad = prioridad.options[prioridad.selectedIndex].value;
}

/* Almacena en el localStorage el id de la tarea
 * 20120621 MT
 */
function almacenarTarea() {
	localStorage.tareaid = document.getElementById("tarea_id").value;
}

/* Almacena en el localStorage la descripcion de la tarea
 * 20120621 MT
 */
function almacenarTareaDetalle() {
	localStorage.tareadetalle = document.getElementById("tarea_detalle").value;
}

/* lmacena en el localStorage las horas planificadas para la tarea
 * 20120621 MT
 */
function almacenarHP() {
	localStorage.hp = document.getElementById("hp").value;
}

/* Almacena en el localStorage la fecha limite de la tarea
 * 20120621 MT
 */
function almacenarFecLimite() {
	localStorage.feclimite = document.getElementById("fec_limite").value;
}

/* Limpia las variables utilizadas en el ingreso de tarea
 * 20120621 MT
 */
function limpiarStorage() {
	localStorage.empist = '';
	localStorage.contacto = '';
	localStorage.tipo = '';
	localStorage.subtipo = '';
	localStorage.responsable = '';
	localStorage.prioridad = '';
	localStorage.tareaid = '';
	localStorage.tareadetalle = '';
	localStorage.hp = '';
	localStorage.feclimite = '';
}

/* Guarda en la base de datos los datos de la nueva tarea
 * 20120621 MT
 */
function ingresarTarea(){
	$.getJSON("http://nube4u.com/sid_servicios/json/IngresoTarea.php?jsoncallback=?", {usuario:localStorage.nombre, empinst:localStorage.empist,contacto:localStorage.contacto,tipo:localStorage.tipo,subtipo:localStorage.subtipo,resp:localStorage.responsable,prioridad:localStorage.prioridad,tareaid:localStorage.tareaid,tareadetalle:localStorage.tareadetalle,hp:localStorage.hp,feclimite:localStorage.feclimite}, function(data) {
		if (data.result == "OK") {
			location.href="IngresarOS.html\#ingresar_t";
			limpiarStorage();
		}
	});
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, siempre que su estatus absoluto sea 'A' ordenadas segun su prioridad
 * 20120621 MT
 */
function cargarTareasAbiertasP(){
	var res = '';
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSAbiertasP.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true" >';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b" data-inset="true">';
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
					res= item.resp;
				}
			}
			html = html + '<li><a onClick="consultarTarea(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p></p><p> '+item.id+'; '+ item.resp+ '; ' + item.estatus +'</p></li>';	
		});
		html = html + '</ul></p></div></div></div></div>';
		$(html).appendTo("#tareas");
		res='';
		location.href="ConsultaOSAbiertasP.html\#consulta_osp";
	});	
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, siempre que su estatus absoluto sea 'C' ordenadas segun su prioridad
 * 20120622 MT
 */
function cargarTareasCerradasP(){
	var res = '';
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSCerradasP.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b">';
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
					res= item.resp;
				}
			}
			html = html + '<li><a onClick="consultarTarea(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p></p><p> '+item.id+'; '+ item.resp+ '; ' + item.estatus +'</p></li>';	
		});
		html = html + '</ul></p></div></div></div></div>';
		$(html).appendTo("#tareas");
		res='';
		location.href="ConsultaOSCerradasP.html\#consulta_osp";
	});	
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, siempre que se encuentren vencidas, ordenadas segun su prioridad
 * 20120622 MT 
 */
function cargarTareasVencidasP(){
	var res = '';
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSVencidasP.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b" data-inset="true">';
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview">';
					res= item.resp;
				}
			}
			html = html + '<li><a onClick="consultarTarea(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p></p><p> '+item.id+'; '+ item.resp+ '; ' + item.estatus +'</p></li>';	
		});
		html = html + '</ul></p></div></div></div></div>';
		$(html).appendTo("#tareas");
		res='';
		location.href="ConsultaOSVencidasP.html\#consulta_osp";
	});	
}

/* Obtiene la lista de las Tareas que puede visualizar el usuario logueado, cuya fecha límite sea igual a la fecha del sistema, ordenadas segun su prioridad
 * 20120622 MT
 */
function cargarTareasHoyP(){
	var res = '';
	var html = '<div data-role="content" align="center"><div data-role="content" align="center"><div data-role="collapsible-set"><div data-role="collapsible" data-collapsed="true" data-theme="b">';
	$.getJSON("http://nube4u.com/sid_servicios/json/listaOSHoyP.php?jsoncallback=?", {usuario:localStorage.nombre}, function(data) {	
		$.each(data, function(i, item) {
			if (res != item.resp) {
				if(res == ''){
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
					res= item.resp;
				} else{
					html+= '</ul></p></div><div data-role="collapsible" data-collapsed="true" data-theme="b">';
					html+= '<h3>'+ item.resp +' ('+item.cant+') </h3><p><ul data-role="listview" data-inset="true">';
					res= item.resp;
				}
			}
			html = html + '<li><a onClick="consultarTarea(' + item.sec + ')" id="' + item.sec + '"> TAREA #'+item.sec+'</a><p></p><p> '+item.id+'; '+ item.resp+ '; ' + item.estatus +'</p></li>';	
		});
		html = html + '</ul></p></div></div></div></div>';
		$(html).appendTo("#tareas");
		res='';
		location.href="ConsultaOSHoyP.html\#consulta_osp";
	});	
}


