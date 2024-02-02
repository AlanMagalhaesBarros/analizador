/* Revisado completo 26-07-2023  */
let num = document.getElementById('cont1')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let conteudo = document.getElementById('conteudo')
let res = document.getElementById('res')
let valores = []

 btn1.addEventListener('click', adcionar)

 function Onumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
 }

 function Nlista(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
 }

 function adcionar(){
  if(Onumero(num.value) && !Nlista(num.value, valores)){
   valores.push(Number(num.value))
   let item = document.createElement('option')
   item.text = `O valor ${num.value} Adicionado`
   conteudo. appendChild(item)
   item.value = `conteudo ${item}`
   res.innerHTML= ''

  }else{
    alert('[ERRO] Valor invalido ou ja Adcionar')
  }

  num.focus()
  num.value = ''
 }

 btn2.addEventListener('click', finalizar)

 function finalizar(){
   if(valores.length == 0 ){
    alert('[ERRRO] Nao a dados na tabela' )
   }else{
     let tot = valores.length
     let maior = valores[0]
     let menor = valores[0]
     let soma = 0
     let media = 0

      for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior){
          maior = valores[pos]
        }
        if(valores[pos] < menor){
          menor = valores[pos]
        }
      }
      media = soma/tot 
     res.innerHTML = ''
     res.innerHTML += `<p> O total de itens Adcionados e ${tot} </p>`
     res.innerHTML += `<p> O maior item adcionado e ${maior}</p>`
     res.innerHTML += `<p> O menor item adcionado e ${menor} </p>`
     res.innerHTML += `<p> a soma de todo itens ${soma} </p>`
     res.innerHTML += `<p> a media de todos os itens e ${media} </p>`
   }
 }