//AMBIENTES ARRAY =======================================================
var objetivoMasmorra = [ 
    ['Para os habitantes monstruosos da masmorra de atacar o mundo da superfície.'],
    ['Frustrar a trama de um vilão maligno.'],
    ['Destruir uma ameaça mágica dentro de uma masmorra.'],
    ['Adquirir tesouros'],
    ['Encontrar um item em particular para um propósito específico.'],
    ['Recuperar um item roubado escondido em uma masmorra.'],
    ['Encontrar informações necessárias para um propósito especial'],
    ['Resgatar um cativo.'],
    ['Descobrir o destino de um antigo grupo de aventura.'],
    ['Encontrar um PdM que desapareceu na área.'],
    ['Matar um dragão ou algum outro monstro desafiador.'],
    ['Descobrir a natureza e origem de um local ou fenômeno estranho.'],
    ['Perseguir oponentes em fuga se abrigando na masmorra.'],
    ['Escapar do cativeiro na masmorra.'],
    ['Limpar uma ruína para que ela possa ser reconstruída e ocupada'],
    ['Descobrir porque um vilão está interessado na masmorra'],
    ['Vencer uma aposta ou completar um ritual de passagem ao sobreviver na masmorra por um certo tempo.'],
    ['Negociar com um vilão na masmorra.'],
    ['Se esconder de uma ameaça fora da masmorra.']
]

var ambienteSelvagem = [
    ['Localizar uma masmorra ou outro local de interesse (role na tabela Objetivos na Masmorra para descobrir o porquê.)'],
    ['Avaliar o local de um desastre natural ou antinatural.'],
    ['Escoltar um PdM até um destino.'],
    ['Chegar a um destino sem ser visto pelas forças do vilão.'],
    ['Impedir monstros de assaltarem caravanas e fazendas.'],
    ['Estabelecer comércio com uma cidade distante.'],
    ['Proteger uma caravana viajando para uma cidade distante.'],
    ['Mapear um novo território.'],
    ['Encontrar um local para estabelecer uma colônia.'],
    ['Encontrar um recurso natural.'],
    ['Caçar um monstro específico.'],
    ['Voltar para casa de um local distante.'],
    ['Obter informações sobre um eremita recluso'],
    ['Encontrar um objeto que se perdeu na natureza.'],
    ['Descobrir o destino de um grupo de exploração desaparecido.'],
    ['Perseguir inimigos em fuga'],
    ['Avaliar o tamanho de um exército que se aproxima. '],
    ['Escapar do reino de um tirano.'],
    ['Proteger um local selvagem de atacantes.']
]

var outro = [
    ['Tomar o controle de um local fortificado como uma fortaleza, cidade ou navio'],
    ['Defender um local de atacantes'],
    ['Recuperar um objeto de dentro de um local seguro em um assentamento.'],
    ['Recuperar um objeto de uma caravana'],
    ['Resgatar um objeto ou bens de uma embarcação ou caravana perdida.'],
    ['Libertar prisioneiros de uma cadeia ou prisão.'],
    ['Escapar de uma cadeia ou prisão.'],
    ['Viajar com sucesso através de um percurso com obstáculos para ganhar reconhecimento ou recompensa.'],
    ['Infiltrar-se em um local fortificado.'],
    ['Encontrar a fonte de ocorrências estranhas em uma casa assombrada ou outro local'],
    ['Interferir na operação de um negócio.'],
    ['Resgatar um personagem, monstro ou objeto de um desastre natural ou antinatural.']
]
//FIM DE AMBIENTES=================================================

//PDMS ARRAY ==========================================================
var viloes = [
    ['Besta ou monstruosidade sem motivações específicas'],
    ['Aberração propensa a corrupção ou dominação'],
    ['Corruptor propenso a corrupção ou destruição'],
    ['Dragão propenso a dominação ou saque'],
    ['Gigante propenso a saquear'],
    ['Morto-vivo com qualquer motivação'],
    ['Fada com um objetivo misterioso'],
    ['Humanoide cultista'],
    ['Humanoide conquistador'],
    ['Humanoide buscando vingança'],
    ['Humanoide conspirador buscando governar'],
    ['Humanoide mestre do crime'],
    ['Humanoide incursor ou devastador'],
    ['Humanoide sob uma maldição'],
    ['Humanoide fanático desorientado']
]

var aliados = [
    ['Aventureiro hábil'],
    ['Aventureiro inexperiente '],
    ['Camponês entusiasta'],
    ['Soldado'],
    ['Sacerdote'],
    ['Sábio'],
    ['Buscador de vingança'],
    ['Lunático delirante'],
    ['Celestial aliado'],
    ['Fada aliada'],
    ['Monstro disfarçado'],
    ['Vilão se passando por aliado']
]

var patronos = [
    ['Aventureiro aposentado'],
    ['Governante local'],
    ['Oficial militar'],
    ['Oficial de templo'],
    ['Sábio'],
    ['Ancião respeitado'],
    ['Divindade ou celestial'],
    ['Pai ou outro membro da família'],
    ['Antigo professor'],
    ['Velho amigo'],
    ['Fada misteriosa'],
    ['Mercador aguerrido'],
    ['Camponês desesperado'],
    ['Vilão se passando por patrono']
]
// FIM DE PDMS===========================================================

// INTRODUÇÕES ARRAY ======================================================
var introducoes = [
    ['Enquanto estiverem viajando pela natureza, os personagens caem num buraco que se abre sob seus pés, levando-os a um local da aventura.'],
    ['Enquanto estiverem viajando pela natureza, os personagens percebem a entrada de um local da aventura.'],
    ['Enquanto estiverem viajando por uma estrada, os personagens são atacados por monstros que fogem para o local de aventura mais próximo'],
    ['Os aventureiros encontram um mapa em um cadáver. Além do mapa encontrado levar a aventura, o vilão da aventura deseja o mapa'],
    ['Um item mágico misterioso ou um vilão cruel teletransporta os personagens para o local da aventura'],
    ['Um estranho se aproxima dos personagens em uma taverna e os instiga a ir para o local da aventura.'],
    ['Uma cidade ou vila precisa de voluntários para ir ao local da aventura.'],
    ['Um PdM com quem os personagens se importam precisa deles para ir ao local da aventura'],
    ['Um PdM que os personagens devem obedecer ordena-os a ir ao local da aventura.'],
    ['Um PdM que os personagens respeitam pede que eles vão ao local da aventura'],
    ['Uma noite, todos os personagens sonham com a entrada do local da aventura.'],
    ['Um fantasma aparece e aterroriza uma vila. Pesquisas revelam que ele só pode ter o descanso eterno entrando no local da aventura.']
]
// FIM DE INTRODUÇÕES ============================================================================

// CLÍMAX ARRAY ========================================================================
var climax = [
    ['Os aventureiros enfrentam o vilão principal e um grupo delacaios em uma batalha sangrenta para a conclusão.'],
    ['Os aventureiros perseguem o vilão enquanto desviam de obstáculos colocados para impedi-los, levando ao confronto final dentro ou fora do refúgio do vilão.'],
    ['As ações dos aventureiros ou do vilão resultam em um evento cataclísmico o qual os aventureiros devem escapar'],
    ['Os aventureiros correm até o local onde o vilão está concluindo seu plano mestre, chegando exatamente no momento que o plano está prestes a se concluir'],
    ['O vilão e dois ou três tenentes realizam rituais separados em um imenso salão. Os aventureiros devem impedir todos os rituais ao mesmo tempo.'],
    ['Um aliado trai os aventureiros quando eles estão prestes a concluir seu objetivo. (Use esse clímax com cuidado e não abuse dele.)'],
    ['Um portal se abre para outro plano de existência. As criaturas do outro lado saem, forçando os aventureiros a fechar o portal e lidarem com o vilão ao mesmo tempo'],
    ['Armadilhas, perigos ou objetos animados se voltam contra os aventureiros enquanto o vilão principal ataca.'],
    ['A masmorra começa a desmoronar enquanto os aventureiros enfrentam o vilão principal, que tenta escapar em meio ao caos.'],
    ['Uma ameaça mais poderosa que os aventureiros aparece, destrói o vilão principal e então volta suas atenções para os personagens'],
    ['Os aventureiros devem escolher se perseguem o vilão principal em fuga ou salvam um PdM com quem se importam ou um grupo de inocentes'],
    [' Os aventureiros devem descobrir a fraqueza secreta do vilão principal antes de terem esperança de derrota-lo.']
]
// FIM DE CLÍMAX ARRAY =================================================================

function oneRoll(campo, array){
    document.getElementById(campo).innerHTML = array[Math.floor(Math.random() * (array.length - 1))];
}

function limpar(campo){
    empy = []
    document.getElementById(campo).innerHTML = empy
}

function pdf_function(){
    var objetivo = document.getElementById('objetivo').innerHTML;
    var vilao = document.getElementById('viloes').innerHTML;
    var aliado = document.getElementById('aliados').innerHTML;
    var patrono = document.getElementById('patronos').innerHTML;
    var climax = document.getElementById('climax').innerHTML;
    var introducoes = document.getElementById('introducoes').innerHTML;
    

    var janela = window.open('', '', 'width=1000,height=1000');

    janela.document.write('<html><head>');
    janela.document.write('<title>PDF</title></head>');
    janela.document.write('<body>');
    janela.document.write(`<b>${introducoes}</b><br>Lá o gupo deve <b>${objetivo}</b><br>O vilão da camapanha será um(a) <b>${vilao}</b><br>Como aliado o grupo terá um(a) <b>${aliado}</b><br>O patrono da missão será um(a) <b>${patrono}</b><br>E o climax se dará quando <b>${climax}</b>`);
    janela.document.write('</body></html>');
    janela.document.close();
    janela.print()

}


