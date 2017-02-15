

$(document).ready(function() {

	professoresPresencaFalta();
	

	function professoresPresencaFalta(){

		var URL = window.location.href.split('/').reverse()[0].split('.')[0];
		var COLUNA_COM_CHECK_LIST = 8;
		var ID_TABELA_PRINCIPAL = "Grid1ContainerTbl";

		if (URL == "historicocompleto"){
			setTimeout(function(){

				var table = document.getElementById(ID_TABELA_PRINCIPAL);
				var table = $(table);
				table.find('tbody > tr').append('<td><input type="checkbox">  <input type="checkbox">  <input type="checkbox"></td>');
				table.find('tbody > tr').append('<td><a href="#" name="presenca">Presença</a>  |  <a href="#" name="falta">Falta</a></td>');

				$("[name='presenca']").click(function(){
					$(this).parent().parent().find('td').eq(COLUNA_COM_CHECK_LIST).find('input').each(function(){
						$(this).prop( "checked", true );
					});
				});

				$("[name='falta']").click(function(){
					$(this).parent().parent().find('td').eq(COLUNA_COM_CHECK_LIST).find('input').each(function(){
						$(this).prop( "checked", false );
					});
				});


			}, 500);
		}
		
	}
});






