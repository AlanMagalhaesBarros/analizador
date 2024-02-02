let num = document.querySelector('input#cont1')
let btn = document.getElementById('btn1')
let btn1 = document.getElementById('btn2')
let conteudo = document.getElementById('conteudo')
let res = document.querySelector('div#res')
let valores = []

btn.addEventListener('click', adcionar)

function isNumero(n){
  if(Number(n) >=1 && Number(n)<=100){
    return true
  }else {
    return false
  }
}

function naLista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function adcionar(){
  if(isNumero(num.value) && !naLista(num.value, valores)){
    valores.push(Number(num.value))
    window.alert('valor adcionado')
  }else{
    window.alert('[ERRO] Valor INvalido ou ja esta em lista')
  }


}