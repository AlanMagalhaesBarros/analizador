let num = document.querySelector('input#cont1')
let btn1 = document.querySelector('input#btn1')
let btn2 = document.querySelector('input#btn2')
let conteudo = document.querySelector('select#conteudo')
let valores = []
let res = document.querySelector('div#res')

btn1.addEventListener('click', add)
 
function inNUmero(n){
  if(Number(n) >=1 && Number(n) <=100){
    return true
  }else{
    return false
  }
}
function inlista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function add(){
  if(inNUmero(num.value) && !inlista(num.value, valores)){
    valores.push(Number(num.value))
    window.alert('valor adcionado')
  }else{
    window.alert('[ERRO] Numero invalido ou ja adicionado')
  }
}