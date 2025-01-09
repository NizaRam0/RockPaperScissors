let choice="";
let comccho="";
let humanS=0;
let aiS=0;
const scoreH=document.getElementById("scoreH");
const scoreA=document.getElementById("scoreA");
const cho=document.getElementById("choiceA");
const Fres=document.getElementById("res");
let imgresult=document.getElementById("imgresult");



scoreH.innerHTML=humanS;
scoreA.innerHTML=aiS;






function rock(){
    const choice="rock";
    const num=  Math.floor(Math.random() * 3)+1;

    if(num==1){
        comccho="rock";
    }
    else if(num==2){
        comccho="paper";
    }
    else {
        comccho="scissors";
    }



    if(choice=="rock"&&comccho=="paper" ){
aiS++;
cho.innerHTML="📃";
scoreA.innerHTML=aiS;
        Fres.style.display="block"
Fres.innerHTML="Not so good!";
        const numgif=  Math.floor(Math.random() * 3)+1;
        if(numgif==1){
            imgresult.src="media/Ai1.gif";
        }
        else if(numgif==2){
            imgresult.src="media/Ai2.gif";        }
        else {
            imgresult.src="media/Ai3.gif";        }

        checkWinner();

    }

    else if(choice=="rock"&&comccho=="scissors" ){
        humanS++;
        cho.innerHTML="✂️";
        scoreH.innerHTML=humanS;
        Fres.style.display="block"
        Fres.innerHTML="Good one!";

        const numgif=  Math.floor(Math.random() * 3)+1;
        if(numgif==1){
            imgresult.src="media/hum1.gif";
        }
        else if(numgif==2){
            imgresult.src="media/hum2.gif";        }
        else {
            imgresult.src="media/hum3.gif";        }

        checkWinner();

    }
   else {
    cho.innerHTML="🪨";
    Fres.style.display="block"
    Fres.innerHTML="TIE!";
        imgresult.src="";
}


}

function Scissors(){
    const choice="scissors";
    const num=  Math.floor(Math.random() * 3)+1;

    if(num==1){
        comccho="rock";
    }
    else if(num==2){
        comccho="paper";
    }
    else {
        comccho="scissors";
    }
    if(choice=="scissors"&&comccho=="rock" ){
        aiS++;
        cho.innerHTML="🪨";

        scoreA.innerHTML=aiS;
        Fres.style.display="block"
        Fres.innerHTML="Not so good!";

        const numgif=  Math.floor(Math.random() * 3)+1;
        if(numgif==1){
            imgresult.src="media/Ai1.gif";
        }
        else if(numgif==2){
            imgresult.src="media/Ai2.gif";        }
        else {
            imgresult.src="media/Ai3.gif";        }

        checkWinner();

    }
    else if(choice==="scissors"&&comccho==="paper" ){
        humanS++;
        cho.innerHTML="📃";
        scoreH.innerHTML=humanS;
        Fres.style.display="block"
        Fres.innerHTML="Good one!";

        const numgif=  Math.floor(Math.random() * 3)+1;
        if(numgif==1){
            imgresult.src="media/hum1.gif";
        }
        else if(numgif==2){
            imgresult.src="media/hum2.gif";        }
        else {
            imgresult.src="media/hum3.gif";        }

        checkWinner();

    }
    else{
        cho.innerHTML="✂️";
        Fres.style.display="block"
        Fres.innerHTML="TIE!";
        imgresult.src="";
    }
}



function paper(){
    const choice="paper";
    const num=  Math.floor(Math.random() * 3)+1;

    if(num==1){
        comccho="rock";
    }
    else if(num==2){
        comccho="paper";
    }
    else {
        comccho="scissors";
    }
    if(choice=="paper"&&comccho=="scissors" ){
        aiS++;
        cho.innerHTML="✂️";
        scoreA.innerHTML=aiS;
        Fres.style.display="block"
        Fres.innerHTML="Not so good!";
        const numgif=  Math.floor(Math.random() * 3)+1;
        if(numgif==1){
            imgresult.src="media/Ai1.gif";
        }
        else if(numgif==2){
            imgresult.src="media/Ai2.gif";        }
        else {
            imgresult.src="media/Ai3.gif";        }

        checkWinner();
    }
    else if(choice=="paper"&&comccho=="rock" ){
    humanS++;
    cho.innerHTML="🪨";
    scoreH.innerHTML=humanS;
    Fres.style.display="block"
    Fres.innerHTML="Good one!";

    const numgif=  Math.floor(Math.random() * 3)+1;
    if(numgif==1){
        imgresult.src="media/hum1.gif";
    }
    else if(numgif==2){
        imgresult.src="media/hum2.gif";        }
    else {
        imgresult.src="media/hum3.gif";        }

    checkWinner();

}
    else{
        cho.innerHTML="📃";
        Fres.style.display="block"
        Fres.innerHTML="TIE!";
        imgresult.src="";
    }
}





function checkWinner() {
    if (aiS == 5 || humanS == 5) {
        if (humanS == 5) {
            Fres.innerHTML = "Human WINNN!"
            imgresult.src = "media/giphy-w.GIF";
            disable();
        } else if(aiS == 5) {
            Fres.innerHTML = "GAME OVERRR! AI WINSS!"
            imgresult.src = "media/giphy-L.GIF";
            disable();
        }


    }

}
function disable(){
    document.getElementById("Rock").disabled = true;
    document.getElementById("Scissors").disabled = true;
    document.getElementById("paper").disabled = true;
}




