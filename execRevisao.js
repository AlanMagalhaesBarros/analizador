
let num = document.getElementById('cont1')
let btn1 = document.getElementById('btn1')
let conteudo = document.getElementById('conteudo')
let btn2 = document.getElementById('btn2')
let res = document.getElementById('res')
let valores = []


       //evento de click
btn1.addEventListener('click',adicionar)

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item =document.createElement('option')
    item.text = `O valor ${num.value} foi Adicionado`
    conteudo.appendChild(item)
    res.innerHTML = ''
   
  }else{
    window.alert('[ERRO] valor invalido ou ja em lista')
  }
 
  num.value= ''
  num.focus()
}

btn2.addEventListener('click',finaliza)

function finaliza(){
  if(valores.length == 0 ){
    alert('[ERRO] Dados nao encontrado')
  }else{
    let tot = valores.length
    let maior = valores[0]
    let menor =valores[0] 
    let soma = 0
    let media = 0


    for (let pos in valores){
      soma += valores[pos]
      
      if(valores[pos] > maior){
        maior = valores[pos]
      }
      if(valores[pos] < menor){
        menor = valores[pos]
      }
      media = soma /   tot
    }


    


    res.innerHTML= ''
    res.innerHTML += `<p>Ao todo temos ${tot} valores registrados </p>`
    res.innerHTML += `<p>O menor valor registrado ${menor} </p>`
    res.innerHTML += `<p> o maior valor registrado e ${maior} </p>`
    res.innerHTML += `<p> A soma de todos o valores e ${soma} </p>`
    res.innerHTML += `<p> A media dos valores e ${media} </p>`
  }


}
