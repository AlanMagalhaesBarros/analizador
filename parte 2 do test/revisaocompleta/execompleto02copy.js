let num = document.getElementById('cont1')
let btn01 = document.getElementById('btn1')
let btn02 = document.getElementById('btn2')
let conteudo01 = document.getElementById("conteudo")
let res01 = document.getElementById('res')
let valores01= []


btn01.addEventListener('click',adcionar)

function IsNumero(n){
  if(Number(n) >=1 && Number(n) <= 100){
    return true

  }else{
    return false
  }
}

function isList(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
}else{
  return false
}
}
function adcionar(){
  if(IsNumero(num.value) && !isList(num.value, valores01)){
    valores01.push(Number(num.value))
    let item =document.createElement('option')
    item.text =`O valor ${num.value}foi adcionado`
    conteudo01.appendChild(item)
    item.value =`conteudo01 ${item}`
    res.innerHTML=''

 }else{
  window.alert(`[ERRO] Valor ivalido ou ja esta cadastrado`)
   }
 
   num.focus()
   num.value =''
}

btn02.addEventListener('click', finalizar)

function finalizar(){
  if(valores01.length == 0){
    window.alert(`[ERRO] Nao Ha dados Para finalizar`)

  }else{
    let tot = valores01.length
    let maior = valores01[0]
    let menor = valores01[0]
    let media = 0 
    let soma  = 0
 

  for ( let pos in valores01){
    soma+= valores01[pos]
   
    if(valores01[pos] > maior){
      maior = valores01[pos]
    }
    if(valores01 [ pos] < menor){
      menor = valores[pos]
    }

       
  }
  media = soma/tot
  res.innerHTML +=`<p>O total de valores adcionados e ${tot}</p>`
  res.innerHTML +=`<p>O maior valore encontrado e ${maior}</p>`
  res.innerHTML +=`<p>O menor valor encontrado e ${menor}</p>`
  res.innerHTML +=`<p> A soma de todos o valores e ${soma}</p>`
  res.innerHTML +=`<p> A media dos valore e ${media}</p>`




}
}
