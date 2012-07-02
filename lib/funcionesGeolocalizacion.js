// JavaScript Document
/* Valida que el navegador soporte la golocalización
 * 20120622 MT
 */
function geolocalizacion_usuario() {
    if (navigator.geolocation) {
        obtenerPosicion();
	} else
        alert('Su navegador no soporta esta caracteristica de Html5');
}
 
 
/* Se hace uso de la API de localizacion de html5 y establece las funciones que procesaran los datos
 * 20120622 MT
 */
function obtenerPosicion() {
    navigator.geolocation.getCurrentPosition(coordenada, manejoErrores, {
        enableHighAccuracy: true
    });
}
 
/* Recibe la coordenada y muestra los datos al usuario
 * 20120622 MT
 */
function coordenada(position) {
    var posdata = '';
    posdata += 'Coordenada: ' + position.coords.latitude + ',' + position.coords.longitude + '.\n';
    posdata += 'Precision: ' + position.coords.altitude + ' mts.\n';
    posdata += 'Altitud: ' + position.coords.accuracy + ' mts sobre el nivel del mar.\n';
    posdata += 'Precision de Altitud: ' + position.coords.altitudeAccuracy + ' mts.\n';
    posdata += 'Grados(N): ' + position.coords.heading + '??.\n';
    posdata += 'Velocidad: ' + position.coords.speed + ' mts/seg.\n';
    posdata += 'Tiempo: ' + position.timestamp + '.\n';
	localStorage.latitud =  position.coords.latitude;
	localStorage.longitud = position.coords.longitude;
	//alert("Coordenadas de Ubicación Actual: "+localStorage.latitud + ", " +localStorage.longitud);
	initialize();
}
 
/* Manejo de errores de la implementacion de la API
 * 20120622 MT
 */
function manejoErrores(err) {
    switch (err.code) {
    case 0:
        //ERROR DESCONOCIDO
        alert(err.code + ' ERROR DESCONOCIDO: ' + err.message);
        break;
    case 1:
        //PERMISO DENEGADO
        alert(err.code + ' PERMISO DENEGADO: ' + err.message);
        break;
    case 2:
        //POSICION NO DISPONIBLE
        alert(err.code + ' POSICION NO DISPONIBLE: ' + err.message);
        break;
    case 3:
        //TIMEOUT
        alert(err.code + ' TIMEOUT: ' + err.message);
        break;
	default:
		alert('Error al intentar obtener las Coordenadas.');
        break;
    }
}

function initialize() {
	var map = new GMap2(document.getElementById("map_canvas"));
	map.addControl(new GSmallMapControl());
	map.addControl(new GMapTypeControl());
	//map.setCenter(new GLatLng(10.496825268326187,-66.87972577794137), 15);  
	map.setCenter(new GLatLng(localStorage.latitud,localStorage.longitud), 15);     
	
	// Se especifican para todos los tipos su tamaño, sombra, etc.
	var baseIcon = new GIcon(G_DEFAULT_ICON);
	baseIcon.shadow = "http://www.google.com/mapfiles/shadow50.png";
	baseIcon.iconSize = new GSize(22, 31);
	baseIcon.shadowSize = new GSize(37, 34);
	baseIcon.iconAnchor = new GPoint(9, 34);
	baseIcon.infoWindowAnchor = new GPoint(9, 3);
	
	// Se crea el marker mostrando en su ventana la informacion del parámetro texto
	function createMarker(point, texto, tipo) {
	  // Se crea el icono, y dependiendo del tipo, se le asigna una imagen
	  var letteredIcon = new GIcon(G_DEFAULT_ICON);
	  if (tipo == 1) {
		  // Kiosco
		  letteredIcon.image = "Geoiconos/shop.ico";
	  } else if (tipo == 2) {
		  // Oficina
		  letteredIcon.image = "Geoiconos/office.ico";
	  }
	
	  // Se establecen las opciones del marker
	  markerOptions = { icon:letteredIcon };
	  var marker = new GMarker(point, markerOptions);
	
	  GEvent.addListener(marker, "click", function() {
		marker.openInfoWindowHtml(texto);
	  });
	  return marker;
	}
	
	// Se agragan en el mapa los markers correspondientes a los puntos almacenados en BD
	$.getJSON("http://nube4u.com/sid_servicios/json/demo_mobile/ObtenerUbicacion.php?jsoncallback=?", function(data) {
		$.each(data, function(i, item) {
	  		var point = new GLatLng(item.latitud, item.longitud);
	  		map.addOverlay(createMarker(point, ("ID: " + item.id), item.tipo));
	  	});
	});
	
}