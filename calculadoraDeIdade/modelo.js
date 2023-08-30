function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente.')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var fase = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 12){
                //Criança
                //img.setAttribute('src', 'manha.jpg') era apenas para testar imagens no if
                fase = 'criança'
            }
            else if (idade >= 12 && idade < 21){
                //jovem
                fase = 'jovem'
            }
            else if (idade >= 21 && idade < 65 ){
                //adulto
                fase = 'adulto'
            }
            else{
                //idoso
                fase = 'idoso'
            }
        }
        else if (fsex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade < 12){
                //Criança
                fase = 'criança'
            }
            else if (idade >= 12 && idade < 21){
                //jovem
                fase = 'jovem'
            }
            else if (idade >= 21 && idade < 65 ){
                //adulto
                fase = 'adulta'
            }
            else{
                //idoso
                fase = 'idosa'
            }
        }

        res.innerHTML = `Gênero: ${genero}. Idade calculada: ${idade}. Fase: ${fase}`
        res.appendChild(img)
    }
}