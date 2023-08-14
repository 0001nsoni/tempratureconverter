let celciousInput=document.querySelector('#celcious>input')
let fareniheitInput=document.querySelector('#fareniheit>input')
let kelvinInput=document.querySelector('#kelvin>input')

let btn=document.querySelector('.button button')



function roundNumber(number) {
    return Math.round(number*100)/100
    
}
celciousInput.addEventListener('input',function(){
    let cTemp=parseFloat(celciousInput.value)
    let fTemp=(cTemp*(9/5))+32
    let kTemp=cTemp+273.15

    fareniheitInput.value=roundNumber(fTemp)
    kelvinInput.value=roundNumber(kTemp)

})
fareniheitInput.addEventListener('input',function(){
    let fTemp=parseFloat(fareniheitInput.value)
    let cTemp=(fTemp-32)*(5/9)
    let kTemp=(fTemp-32)*(5/9)+273.15

    celciousInput.value=roundNumber(cTemp)
    kelvinInput.value=roundNumber(kTemp)

})
kelvinInput.addEventListener('input',function(){
    let kTemp=parseFloat(kelvinInput.value)
    let fTemp=((kTemp-273.15)*(9/5))+32
    let cTemp=kTemp-273.15

    fareniheitInput.value=roundNumber(fTemp)
    celciousInput.value=roundNumber(cTemp)

})
btn.addEventListener('click',()=>{
    celciousInput.value=""
    fareniheitInput.value=""
    kelvinInput.value=""
})
