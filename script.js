const turnOn = document.querySelector('#turnOn');
const turnOff = document.querySelector('#turnOff');
const lamp = document.querySelector('#lamp');

function lampOn () {
    lamp.src = './images/light.png';
} 


function lampOff () {
    lamp.src = './images/offlight.png'
}

function lampBroken () {
    lamp.src = './images/quebrada.png'
}

turnOn.addEventListener ('click', lampOn)
turnOff.addEventListener ('click' , lampOff)
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dbclick', lampBroken)