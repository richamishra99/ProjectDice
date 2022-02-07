
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "Dicee Challenge - Starting Files/images.png/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "Dicee Challenge - Starting Files/images.png/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage1);

if(randomDiceImage > randomDiceImage1){
    document.querySelector("h1").innerHTML="Player 1 Won!!";
}else if(randomDiceImage1>randomDiceImage){
    document.querySelector("h1").innerHTML="Player 2 Won!!";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}