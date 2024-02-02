/* Revisado completo 26-07-2023  */
let num = document.getElementById('cont1')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let conteudo = document.getElementById('conteudo')
let res = document.getElementById('res')
let valores = []

 btn1.addEventListener('click', adcionar)

     /* essa funcao esta ligada a funcao pricipal ela e incarregada de fazer o teste se o valor de NUM  se eta entre 1 e 100 caso seja maio a fuçao nao permitira ser adcionado */
   function isNumero(n){  
  if(Number(n) >=1 && Number(n) <=100){
    return true
  }else{
    return false
  }
 }

 /* Essa funçao e responsavel pelaca verificaçao se o valor adcionado estar na lista. caso esteja em lista sera nao sera mais acionado o mesmo 
 na qual esta ligada ao vetor Valores []*/
 function inLista(n, l){
  if(l.indexOf(Number(n)) != -1){ 
    return true
  }else{
    return false
  }
 }

 function adcionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){ /* essa funcao e composta por mais dua funcoes no qual ira execultar teste */
    valores.push(Number(num.value)) /* Essa fucao e resposavel por adcionar  os elementos dentro do vetor Valores.push(Number(num.value) ) */
    let item = document.createElement('option')
    item.text = `O valor ${num.value} foi adcionado`
    conteudo.appendChild(item)
    item.value =`conteudo ${item}`
    res.innerHTML = ''

  }else{
    window.alert('[ERRO] Valor invalido Ou ja cadastrado')
  }
  num.focus()
  num.value = ''

 }

 btn2.addEventListener('click', finalizar)

 function finalizar(){
  if(valores.length == 0){  /* funcao responsavel por verifica se tem algum item dentro do vetor */
    alert('[ERRO] nao ha dados para fializa')

  }else{
    let tot = valores.length
    let maior = valores[0]   /* variaveis para serem feira a funçao de soma e indetificaçao de maior e menor valores valores para depois  ser feita a media entre ele */
    let menor = valores[0]
    let media = 0
    let soma = 0
     
    for(let pos in valores){   /*para cada posicao de dentro de valores  */
      soma += valores[pos] /* feiro para calcula a soma de todos elementos += valores[pos] */
      if(valores[pos] > maior){  
         /* toda vez que o valor na posiçao valores[pos] for > que MAIOR  a variavel MAIOR = recebe valores[pos] comando ultilidado para indentificar maior valor  */
        maior = valores[pos]
      }
      if(valores[pos] < menor){
         /* toda vez que o valor na posiçao valores[pos] for < que Menor  a variavel Menor = recebe valores[pos] comando ultilidado para indentificar menor valor  */
        menor = valores[pos]
      }
    }
     media = soma/tot /* comando usado para calcula a media expl= pega soma de todos os numero   e  divide pela quantidade de elementos adcionados */




    res.innerHTML= ''  /*comando de interpolaçao */
    res.innerHTML +=`<p> O total de valores adcionados e ${tot}</p>`
    res.innerHTML +=`<p>O maior valor encontrado e ${maior}</p>`
    res.innerHTML +=`<p> O menor valor enconytado e ${menor}</p>`
    res.innerHTML +=`<p>A soma de todos os valores e ${soma}</p>`
    res.innerHTML +=`<p>A media dos valores e ${media}</p>`
  }
 }