let num = document.getElementById('cont1')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let conteudo = document.getElementById('conteudo')
let res = document.getElementById('res')
let valores = []

btn1.addEventListener('click',addciona)
 
function  isNumerico(n){
  if(Number(n)>= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function inListagem(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true 

  }else{
    return false
  }
}


function addciona(){
  if(isNumerico(num.value) && !inListagem(num.value, valores)){
    alert('ok')
  }else{
    alert('Erro valor invalido e ou ja adicionado em lista')
  }
}