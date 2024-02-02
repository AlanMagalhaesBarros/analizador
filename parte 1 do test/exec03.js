let num = document.getElementById('cont1')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let conteudo = document.getElementById('conteudo')
let res = document.getElementById('res')
let valores = []

btn1.addEventListener('click',adicionar)

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function inLista(n, l){
  if(l.indexOf(Number(n)) != -1 ){
    return true
  }else{
    return false
  }
}


function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
      alert('ok')
  }else{
    window.alert('ERRO valor invalido ou ja adicionado em lista')
  }

}