var bar = document.getElementById("mobile");
var navbar = document.getElementById("navbar");
var close = document.getElementById("close");
var bigImg = document.getElementById('MainImg');
var smImg = document.getElementsByClassName('smImg');
if(bar){
    bar.addEventListener('click', () =>{
        navbar.classList.add('active')
    })
}
if(close){
    close.addEventListener('click', () =>{
        navbar.classList.remove('active')
    })
}
smImg[0].onclick = function(){
    bigImg.src = smImg[0].src;
}
smImg[1].onclick = function(){
    bigImg.src = smImg[1].src;
}
smImg[2].onclick = function(){
    bigImg.src = smImg[2].src;
}
smImg[3].onclick = function(){
    bigImg.src = smImg[3].src;
}