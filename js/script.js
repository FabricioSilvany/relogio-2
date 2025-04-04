//dom
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const mensagem = document.querySelector('#mensagem')
const corpo = document.querySelector('body')

//eventos
setInterval(relogio,1000)

//funções
function relogio(){
    const agora = new Date()
    
    hr = agora.getHours()
    min = agora.getMinutes()
    seg = agora.getSeconds()
    d = agora.getDate()
    m = agora.getMonth()+1
    a = agora.getFullYear()


    if(hr<10){
        hr = '0' + hr;
    }
    
    if(min<10){
        min = '0' + min;
    }
    
    if(seg<10){
        seg = '0' + seg;
    }
    
    if(d<10){
        d = '0' + d;
    }
    
    if(m<10){
        m  = '0' + m;
    }

    if(hr>=5 && hr<12){
        mensagem.textContent = 'Bom dia'
        corpo.className = 'dia'
    }else if(hr>=12 && hr<18){
        mensagem.textContent = 'Boa tarde'
        corpo.className = 'dia'
    }else{
        mensagem.textContent = 'Boa noite'
        corpo.className = 'noite'
    }

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
    dia.textContent = d
    mes.textContent = m
    ano.textContent = a
    
}