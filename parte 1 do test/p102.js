let num = document.getElementById('cont1')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let conteudo = document.getElementById('conteudo')
let res = document.getElementById('res')
let valores = []

btn1.addEventListener('click',adede)
 
function isNume(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function inListra(n, l){
 if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
    }

}


function adede(){
  if(isNume(num.value) && !inListra(num.value, valores)){
    alert('ok')
  }else{
    alert('invalide')
  }
}