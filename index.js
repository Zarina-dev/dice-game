function reset(){
/*random for first image*/
var randomNumber1=Math.floor(Math.random()*6+1);
var ranImgSourse1="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",ranImgSourse1);

/*random for second image*/

var randomNumber2=Math.floor(Math.random()*6+1);
var ranImgSourse2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",ranImgSourse2);


/*name change*/
firstPerson=firstPlayer+ " is Winner💦";
secondPerson="💨 "+secondPlayer+" is winner";
var ifSt=randomNumber1>randomNumber2?firstPerson:secondPerson;
if (randomNumber1==randomNumber2) {
  ifSt="same, no winner no loser hahah";
}
document.querySelector('h1').innerHTML=ifSt;
}
