let startBox = document.querySelector('.start-box')
let inputCounter = startBox.querySelector('#input-counter');
let startCounter = startBox.querySelector('#start-counter');
let errorElement = document.querySelector('#error-message');
let timerCircle = document.querySelector('.c100');
let timerNum = document.querySelector('.c100 > span');
let loadingMessage = document.querySelector('.message .loading')
let successMessage = document.querySelector('.message .success')
startCounter.addEventListener('click',function(e){
    console.log(e)
    let seconds = parseInt(inputCounter.value)
    // console.log(inputCounter.value)
    // console.log(seconds)
    
    if (isNaN(seconds)){
        errorElement.textContent = "زمان خود را به درستی وارد کنید";
        errorElement.classList.add("active");
        successMessage.style.display = "none"

        return;
    }

    errorElement.classList.remove('active');
    startBox.classList.remove('active');
    timerCircle.style.display = 'Block';
    timerNum.textContent = seconds
    loadingMessage.style.display = "block"
    successMessage.style.display = "none"


    let Firstsec = seconds
    let lastsec = 'p100'
    let timerId = setInterval(()=>{
        if(lastsec)timerCircle.classList.remove(lastsec)

        if (seconds <= 0){
            clearInterval(timerId)
            startBox.classList.add('active')
            timerCircle.style.display = 'none'
            inputCounter.value = ''
            loadingMessage.style.display = "none"
            successMessage.style.display = "block"
            return;
        }

        seconds -= 1;
        darsadSec = 100 - ( Math.floor((( Firstsec - seconds ) / Firstsec ) * 100 ))
        lastsec = `p${darsadSec}`
        console.log(darsadSec)
        timerCircle.classList.add(`p${darsadSec}`)
        timerNum.textContent = seconds
        
    },1000)

})