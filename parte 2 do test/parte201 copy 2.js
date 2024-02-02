let num = document.getElementById('cont1')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let conteudo = document.getElementById('conteudo')
let res= document.getElementById('res')
let valores = []

btn1.addEventListener('click',adicionar)

function isNumero(n){
  if(Number(n)>= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function inListas(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}



function adicionar(){
  if(isNumero(num.value) && !inListas(num.value, valores)){
   valores.push(Number(num.value) )
   let item = document.createElement('option')
   item.text = `O valor ${num.value} foi adcionado`
   conteudo.appendChild(item)
   item.value = `conteudo ${item}`
   res.innerHTML = ''
  }else{
    alert('[ERRO]Valor invalido ou ja adcionado')
  }
  num.value = ''
  num.focus()
}

btn2.addEventListener('click',final)

function final(){  /*revisao parte 2   26-07-2023 */
  if(valores.length == 0){
    window.alert( '[ERRO] Nao a Dados')
  }else{
    let tot = valores.length

     let maior = valores[0]
     let menor = valores[0]
     let soma = 0
     let media = 0

     for(let pos in valores){
       soma += valores[pos]
       if(valores[pos] > maior){
        maior = valores[pos]
       }
       if(valores[pos] < menor){
        menor = valores[pos]
      }
     }
     media = soma / tot
     res.innerHTML =''
   res.innerHTML += ` <p> Ao todo sao ${tot} elemntos adcionados </p>`
   res.innerHTML += ` <p> O menor valor Encontrado e ${menor} </p>`
   res.innerHTML += ` <p> O maior valor Encontrado e ${maior} </p>`
   res.innerHTML += ` <p> A soma de todos Valores e ${soma} </p>`
   res.innerHTML += ` A Media dos valores e ${media} </p>`
  }
}

