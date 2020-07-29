
 let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computeerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
function computerchoice(){
    const choice=['r','p','s'];
    const randomnumber=Math.floor(Math.random()*3);
    return choice[randomnumber];
} 
function converword(letter){
    if(letter==="r")return "Rock";
    if(letter==='p')return "Paper";
    if(letter=='s')return "Scissor";
}
 function win(user ,computer){
  userScore++;
  userScore_span.innerHTML=userScore;
  computeerScore_span.innerHTML=computerScore;
  const smalluserword="user".fontsize(3).sup();
  const smallcompword="comp".fontsize(3).sup();
  result_p.innerHTML=`${converword(user)}${smalluserword}  beats  ${converword(computer)}${smallcompword}, You Win`
  document.getElementById(user).classList.add('green-glow');
  setTimeout(()=> document.getElementById(user).classList.remove('green-glow'), 300)
 }
 function loss(user ,computer){
computerScore++;
userScore_span.innerHTML=userScore;
computeerScore_span.innerHTML=computerScore;
const smalluserword="user".fontsize(3).sup();
const smallcompword="comp".fontsize(3).sup();
result_p.innerHTML=`${converword(user)}${smalluserword}   losses  ${converword(computer)}${smallcompword}, You Win  `
document.getElementById(user).classList.add('red-glow');
setTimeout(()=> document.getElementById(user).classList.remove('red-glow'), 300)
 }
 function draw(user ,computer){ 
    userScore_span.innerHTML=userScore;
    computeerScore_span.innerHTML=computerScore;
    const smalluserword="user".fontsize(3).sup();
    const smallcompword="comp".fontsize(3).sup();
    result_p.innerHTML=`${converword(user)}${smalluserword}  equals  ${converword(computer)}${smallcompword}, it's a draw`
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(()=> document.getElementById(user).classList.remove('gray-glow'), 300)
 }

function game(userchoice){
    const computerchoices=computerchoice();
    switch(userchoice+computerchoices){
        case "rs":
        case "pr":
        case "sp":
       win(userchoice,computerchoices);
        break; 
        case "sr":
        case "rp":
        case "ps":
        loss(userchoice,computerchoices);
        break;
        case "ss":
        case "rr":
        case "pp":     
        draw(userchoice,computerchoices);
        break;
    }
}

game("c");

function main(){
 rock_div.addEventListener('click',  ()=> game("r")
     
 );
 paper_div.addEventListener('click', ()=>
    game("p")
 );
 scissor_div.addEventListener('click', ()=>
    game("s")
 );
}
main();