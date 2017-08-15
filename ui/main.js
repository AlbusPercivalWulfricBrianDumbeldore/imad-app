console.log('Loaded!');

//Change the text of main-text div
var element = document.getElementById('main-text');

element.innerHTML='new value';

// Move the Image
var img= document.getElementById('pic');
img.onclick = function(){
    img.style.marginLeft="150px";
};