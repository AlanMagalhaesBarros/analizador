let num = document.getElementById('cont1')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let conteudo = document.getElementById('conteudo')
let res = document.getElementById('res')
let valores = []

btn1.addEventListener('click',adciona)

function isFor(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false

  }
}

function inDocumnt(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}
 


 function adciona(){
    if(isFor(num.value) && !inDocumnt(num.value, valores)){
      alert('massa')
    }else{
      alert('paia')
    }
 }