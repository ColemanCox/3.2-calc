var modeEl = document.getElementById('mode');
var valueEl = document.getElementById('value');
var clearEl = document.getElementById('clear');
var numButtons = document.getElementsByClassName('number-button');
var modeButtons = document.getElementsByClassName('modeButtons');
clearEl.onclick = function () {
    valueEl.innerHTML = 0;
};
var numberSubscribe = function () {
   var currentNum = parseInt(this.innerHTML);};
if(modeEl.innerHTML == '+' ){
    tmp = currentNum + parseInt(valueEl.innerHTML);
   } else {
    tmp = currentNum - parseInt(valueEl.innerHTML);
   }
   var modeClick = function ( ){
modeEl.innerHTML = this;
   };

for (var i = numButtons.length -1; i>=0; i--) {
    numButtons[i].onclick = buttonSubscribe;
}
for (var i = modeButtons.length -1; i >= 0; i--) {
    modeButtons[i].onclick = modeClick;
}
