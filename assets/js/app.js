/**
  DEFINE GLOBAL VARIABLES 
**/
let userScore= 0;
let compScore= 0;

/**
  CONSTANTS
**/
const result__msj    = document.querySelector('.result__msj');
const user_score     = document.querySelector('#user__score');
const comp_score     = document.querySelector('#comp__score');
const comp_img       = document.querySelector('#comp__img');
const versus         = document.querySelector('#versus'); 
const rockBtn        = document.querySelector('.rockBtn');
const paperBtn       = document.querySelector('.paperBtn'); 
const scissorsBtn    = document.querySelector('.scissorsBtn');
const playAgain      = document.querySelector('.btnPlayAgain');
const rocksvg        = document.querySelector('#rockSvg');
const stringUser     = "(USER)".fontsize(2);
const stringComp     = "(COMPUTER)".fontsize(2);
const author         = document.querySelector('#author');


/** 
    FUNCTION THAT CALCULATE THE MACHINE OPTION RANDOM 
**/
function computerOption() 
{
   
  const options    = ['r','p','t'];
  const random     = Math.floor(Math.random() * 3);
  const cpOption   = options[random];
  return (cpOption);

}


function opLetter(option)
{
  
  let opL=""; 
  switch (option) 
  {
     case "r": 
        opL='rockSvg';
        break;
     case "p":
       opL='paperSvg';
       break;
     case "t":
       opL='scissorsSvg';
       break;      
  }
  return opL;
}


/** 
    HELPER FUNCTION TO WRITE A MESSAGE 
**/
function changeToWord(option)
{

    if (option == 'r'){
      return "Stone <i class='far fa-hand-rock'></i>";
    }else if (option == 'p') {
      return "Paper <i class='far fa-hand-paper'></i>";
    }else {
      return "Scissors <i class='far fa-hand-scissors'></i>";
    }

}

/** 
    LOCKS PAPER, SCISSORS AND ROCK BUTTONS  
**/

function lock_buttons()
{

  document.getElementById('rockBtn').disabled="true";
  document.getElementById('paperBtn').disabled="true";
  document.getElementById('scissorsBtn').disabled="true";

}

/** 
    UNLOCKS PAPER, SCISSORS AND ROCK BUTTONS  
**/

function unlock_buttons()
{

    document.getElementById('rockBtn').disabled=false;
    document.getElementById('paperBtn').disabled=false;
    document.getElementById('scissorsBtn').disabled=false;

}

/** 
    RESET THE GAME  
**/
function resetGame()
{

  alert('The game is restarted');
  unlock_buttons();
  userScore = 0;
  compScore=0;
  user_score.innerHTML= userScore;
  comp_score.innerHTML= compScore;
  versus.innerHTML='Versus';
  playAgain.disabled=true;
  playAgain.classList.remove('playAgain');
  result__msj.classList.add('hidden');

}

/** 
    IN CASE THAT USER WIN  
**/
function userWin(opUser, opComp)
{

    userScore++;
    user_score.innerHTML= userScore;
    result__msj.classList.remove('hidden');
    result__msj.innerHTML= changeToWord(opUser) + stringUser+" Win to " + 
                              changeToWord(opComp)+stringComp;
    const op_user = opLetter(opUser);                              
    const userChoice_div= document.getElementById(op_user);
    const userIcon_div= document.querySelector('.user-icon');
    const op_comp = opLetter(opComp);
    const pcChoice_div = document.getElementById(op_comp);
    const compIcon_div = document.querySelector('.comp-icon');
    userChoice_div.classList.add('green');
    versus.innerHTML='You win';
    userIcon_div.classList.add('play_win');
    compIcon_div.classList.add('play_lost');
    pcChoice_div.classList.add('red');
    
    
    if ((userScore == 5) || (userScore > 5)) 
    {
        userChoice_div.classList.remove("green");
        userIcon_div.classList.remove('play_win');
        pcChoice_div.classList.remove("red");
        compIcon_div.classList.remove('play_lost');
        result__msj.innerHTML= "You won the Game! Congratulations!.<br>"+
                             "<font class='resetGame'>If you want to play more, press the button!</font> ";
        playAgain.disabled=false;
        playAgain.classList.add('playAgain');
        playAgain.addEventListener('click', () => resetGame());                     
    }else{

        setTimeout(function(){
        unlock_buttons();
        userChoice_div.classList.remove("green");
        userIcon_div.classList.remove('play_win');
        pcChoice_div.classList.remove("red");
        compIcon_div.classList.remove('play_lost');
        result__msj.classList.add('hidden');
        rockBtn.disabled = false;
        versus.innerHTML='Versus';
        
      }, 4000);
    }

}
  

/** 
    IN CASE THAT MACHINE WIN  
**/
function computerWin(opUser, opComp)
{
    compScore++;
    comp_score.innerHTML= compScore;
    result__msj.classList.remove('hidden');
    result__msj.innerHTML= changeToWord(opComp)+stringComp+" win to "
                          + changeToWord(opUser)+stringUser;
    const op_user = opLetter(opUser);
    const userChoice_div= document.getElementById(op_user);
    const userIcon_div= document.querySelector('.user-icon');
    const op_comp = opLetter(opComp);
    const pcChoice_div= document.getElementById(op_comp);
    const compIcon_div = document.querySelector('.comp-icon');
    versus.innerHTML='You lost';
    userChoice_div.classList.add('red');
    userIcon_div.classList.add('play_lost');
    pcChoice_div.classList.add('green');
    compIcon_div.classList.add('play_win');
    
    if ((compScore == 5) || (compScore > 5)) 
    {
        userChoice_div.classList.remove("red");
        userIcon_div.classList.remove('play_lost');
        pcChoice_div.classList.remove("green");
        compIcon_div.classList.remove('play_win');
        result__msj.innerHTML= "You lost the Game! Play again!<br>"+
                             "<font class='resetGame'>If you want to play more, press the button!</font> ";
        playAgain.disabled=false;
        playAgain.classList.add('playAgain');
        playAgain.addEventListener('click', () => resetGame());                     
    }else{
    
      setTimeout(function(){
        unlock_buttons();
        userChoice_div.classList.remove("red");
        userIcon_div.classList.remove('play_lost');
        pcChoice_div.classList.remove("green");
        compIcon_div.classList.remove('play_win');
        result__msj.classList.add('hidden');
        versus.innerHTML='Versus';
        
      }, 4000);

    } 

  }
  
/** 
    IN CASE THAT IS A TIE  
**/
function isTie(opUser)
{
    result__msj.classList.remove('hidden');
    result__msj.innerHTML= "Both chose " + changeToWord(opUser);
    const op_user = opLetter(opUser);
    const userIcon_div= document.querySelector('.user-icon');
    const option_div= document.getElementById(op_user);
    const compIcon_div = document.querySelector('.comp-icon');
    versus.innerHTML='Tied';
    option_div.classList.add('black');
    userIcon_div.classList.add('play_tie');
    compIcon_div.classList.add('play_tie');
    
    setTimeout(function(){
      unlock_buttons();
      option_div.classList.remove("black");
      userIcon_div.classList.remove('play_tie');
      compIcon_div.classList.remove('play_tie');
      result__msj.classList.add('hidden');
      versus.innerHTML='Versus';
      
    }, 4000);

}
  

function game(option){
  const optionPc= computerOption();
  const optionUser= option;
  switch (optionUser+optionPc) {
    case 'rt':
    case 'pr':
    case 'tp':
      userWin(optionUser, optionPc);
    break;
    case 'rp':
    case 'pt':
    case 'tr':
      computerWin(optionUser, optionPc);
    break;
    case 'rr':
    case 'pp':
    case 'tt':
      isTie(optionUser);
    break;
  }
  lock_buttons();
}

author.addEventListener('click',(e)=>{
    e.preventDefault();
})


function main(){
  rockBtn.addEventListener('click', () => game("r"));
  paperBtn.addEventListener('click', () => game("p"));
  scissorsBtn.addEventListener('click', () => game("t"));
}
main();
