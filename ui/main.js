console.log('Loaded!');

//Change the text of main-text div
var element = document.getElementById('main-text');

element.innerHTML='new value';

//Change the text of main-text div
var element = document.getElementById('main-text');

element.innerHTML='new value';

// Move the Image
var img= document.getElementById('pic');
var leftMargin=0;
function moveRight(){
    leftMargin=leftMargin+10;
    img.style.leftMargin=leftMargin+ "px";
}
img.onclick= function(){
    var interval=setInterval(moveRight, 100);
};
   