$(document).ready(function(){
	
	$('.item .delete').click(function(){
		
		var elem = $(this).closest('.item');
		
		$.confirm({
			'title'		: 'Orden de Tareas',
			'message'	: 'Ordenar las Tareas por:',
			'buttons'	: {
				'Prioridad'	: {
					'class'	: 'blue',
					'action': function(){
						
					}
				},
				'Fecha de Ingreso'	: {
					'class'	: 'gray',
					'action': function(){}
				}
			}
		});
		
	});
	
});