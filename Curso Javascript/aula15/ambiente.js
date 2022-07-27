let num = [5, 8, 2, 9, 3]

console.log(`O primeiro valor é: ${num[0]}`)

num[5] = 21

num.push(15)

num.length //mostra o comprimento do vetor
console.log(`O vetor tem ${num.length} posições`)

num.sort //ordena o vetor em ordem crescente

console.log(`Os valores são: ${num}`)

let pos = num.indexOf(8)
console.log(`O valor 4 está na posição ${pos}`)

if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor está na posição ${pos}`)
}