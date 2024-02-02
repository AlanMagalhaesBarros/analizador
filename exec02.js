let num = document.getElementById('cont1')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let conteudo= document.getElementById('conteudo')
let res = document.getElementById('res')
let valores = []

btn1.addEventListener('click',comprar)

function isNumero(n){
  if(Number(n) >= 1 && Number(n)<= 100){
  return true
  }else {
    return false
  }
}
function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else {
    return false
  }
}


function comprar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `O valor ${num.value} Adicionado`
    conteudo.appendChild(item)
    item.value = `conteudo ${num.value}`
    num.value=''
    num.focus()
    res.innerHTML= ''


  }else{
    window.alert('[ERRO] Numero invalido Ou ja se encontra na lista')
  }
}
