function gerar(){
    let resultado = document.getElementById('resultado')
    let numero = parseInt(document.getElementById('numero').value)

    if (isNaN(numero)) {
        window.alert('Por favor, digite um número.')
    } 
    else {
        resultado.innerHTML = ''
        for (var i = 0; i <= 10; i ++) {
            let option = document.createElement('option')
            let res = i * numero
            option.text = `${numero} x ${i} = ${res}`
            option.value = `option${i}`
            resultado.appendChild(option)
        }
    }
}
