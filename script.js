//const h2 = document.createElement('h2');
//h2.textContent = "This content added by JS.";
//document.querySelector('body').appendChild(h2);

const input = document.getElementById('input');
const face = document.getElementById('avatar');

function clickAlarm() {
    alert('I\'m using Javascript now, baby!');
};

input.addEventListener('click', clickAlarm);


face.addEventListener('click', clickAlarm);


