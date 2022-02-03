function contar() {
    var inic = document.getElementById('inic')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')

    if (inic.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inic.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}