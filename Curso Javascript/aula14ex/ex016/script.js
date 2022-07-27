function contar(){
    var init = document.querySelector('input#txtin')
    var fim = document.getElementById('txtfim')
    var pass = document.getElementById('txtpass')
    var res = document.getElementById('res') 

    if(init.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        res.innerHTML = 'Impossível contar'
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(init.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            for(let c = i; c <= f; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    // var res = document.getElementById('res')
    // var num = init.value

    // while(num.value <= fim.value){
    //     res.innerHTML = `${num} `
    //     num += pass.value
    // }
}