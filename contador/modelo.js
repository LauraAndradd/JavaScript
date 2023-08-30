function contar() {
    var res = document.querySelector('div#resultado');
    var inicio = parseFloat(document.getElementById('inicio').value);
    var fim = parseFloat(document.getElementById('fim').value);
    var passo = parseFloat(document.getElementById('passo').value);
    var resultadoString = '';
    var emoji = '\uD83D\uDC49'; 
    var bandeira = '\uD83C\uDFC1';


    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo < 0 || fim < inicio) {
        window.alert('Você precisa preencher todos os campos corretamente para o sistema fazer o cálculo.');
    } else {
        if (passo == 0) {
            window.alert('Passo inválido. Considerando PASSO = 1');
            passo = 1;
        }

        for (var i = inicio; i <= fim; i += passo) {
            if (i == fim) {
                resultadoString += i + bandeira; 
            } else {
                resultadoString += i + emoji; 
            }
            //resultadoString += i + emoji;
        }
        res.innerHTML = resultadoString;
    }
}
