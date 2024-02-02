let num = document.querySelector('input#cont1')
let btn1 = document.querySelector('input#btn1')
let btn2 =document.querySelector('input#btn2')
let conteudo = document.getElementById('conteudo')
let res = document.querySelector('div#res')
let valores = []

btn1.addEventListener('click', adcionar)

function onumero(n){
  if(Number(n) >=1 && Number(n)<= 100){
    return true
  }else{
    return false
  }
}

function lista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function adcionar(){
  if(onumero(num.value) && !lista(num.value, valores)){
    valores.push(Number(num.value)) 
   window.alert('Valor adcionado')
  }else{
    window.alert('ERRO numero ivalido ou ja adicionado')
  }
}
