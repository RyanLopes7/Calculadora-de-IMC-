const botao = document.querySelector('.botao')


botao.addEventListener('click',CalcularoImc)


function CalcularoImc(){

let Nome= document.querySelector('.Nome').value

let Altura=document.querySelector('.Altura').value

let Peso= document.querySelector('.Peso').value

const resultado = document.querySelector('.resultado')
 
let mensagem = ''

if(Nome != ''&& Altura != ''&& Peso != ''){

 
    Altura = parseFloat(Altura)
    Peso = parseFloat(Peso)

    
const imc= Peso/(Altura*Altura)


if (imc<18.5){
 mensagem = 'Você está abaixo do Peso '
}else if(imc<=24.9){
mensagem = 'Você está no Peso Ideal (Parabéns)'
}else if(imc<=29.9){
   mensagem = 'Você está Levemente acima do peso' 
}else if(imc<=34.9){
mensagem = 'Você está com Obesidade Grau I '
}else if(imc<=39.9){
    mensagem = 'Você está com Obesidade grau II (Severa)'
}else{
    mensagem= 'Você está com Obesidade grau III(Mórbida)'
}




resultado.innerHTML=`${Nome}, o seu IMC é ${imc.toFixed(1)} <br>${mensagem}`

}else{
    resultado.innerHTML='Por favor preencha todos os campos'
}
}
