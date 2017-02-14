# SIGA-FATEC
Plugin para o SIGA do Centro Paula Souza


Para começar a debugar sua extensão, você precisa carregá-la no navegador (tipo se estivesse instalando):

Vá na página de gerenciamento de extensões (chrome://extensions).
Agora ative a opção Modo do desenvolvedor marcando o checkbox.
Agora você pode clicar em Carregar extensão expandida…
Pronto! Navegue até a pasta onde está seu manifesto e clique em OK.
Sua extensão deve aparecer no painel como se você tivesse instalado ela nesse momento.



Vou ter que fazer isso toda vez que modificar algo?
Pois é… eu disse que era a parte chata.

Mas há algumas dicas que posso passar para vocês, mas são observações totalmente empíricas, ou seja, não achei nada que falasse disso, exceto minha própria experiência.
    Caso notem algo diferente ou queiram acrescentar algo, deixem nos comentários! :D

Você precisa excluir e carregar a extensão novamente se:

Você modificar o manifest.json.
Você alterar algum evento que ocorra durante a instalação/atualização da extensão, por exemplo, o que código que escrevemos no nosso background.js.
Você precisa desativar e ativar a extensão se:

Modificar algum ícone
Alterar algum arquivo do Content Script (JS e CSS injetáveis).
Nota: para ativar/desativar a extensão, basta marcar/desmarcar o checkbox que fica à direita dela.
