

$(document).ready(function() {
	// alert('Bem-vindo Professor! Essa extensão foi criada pelo Gabriel Cantarin para tentar ajudar no seu dia a dia :)');

	
	
	setTimeout(function(){

		var table = document.getElementById("Grid1ContainerTbl");
		var table = $(table);
		console.log(table.find('tbody > tr').append('<td><input type="checkbox">  <input type="checkbox">  <input type="checkbox"></td>'));
		console.log(table.find('tbody > tr').append('<td><a href="#" name="presenca">Presença</a>  |  <a href="#" name="falta">Falta</a></td>'));

		$("[name='presenca']").click(function(){
			// console.log($(this).parent().parent().find('td'));
			// console.log($(this).parent().parent().find('td').eq(7));
			// console.log($(this).parent().parent().find('td').eq(7).find('input'));
			$(this).parent().parent().find('td').eq(7).find('input').each(function(){
				$(this).prop( "checked", true );
			});
		});

		$("[name='falta']").click(function(){
			// console.log($(this).parent().parent().find('td'));
			// console.log($(this).parent().parent().find('td').eq(7));
			// console.log($(this).parent().parent().find('td').eq(7).find('input'));
			$(this).parent().parent().find('td').eq(7).find('input').each(function(){
				$(this).prop( "checked", false );
			});
		});


	}, 500);

	
	
	
});






