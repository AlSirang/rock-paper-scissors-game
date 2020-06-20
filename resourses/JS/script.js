
let userScore = 0;
let compScore = 0;

// get user choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput==='rock' || userInput==='paper' ||userInput==='scissors' || userInput==='bomb'){
    return userInput;
  }else{
    return 0;
  }
};

//get computer Choice
const getComputerChoice =()=>{
  //computer choice
  let compChoice = Math.floor(Math.random()*3);

  if(compChoice ===0){
    return 'rock';
  }
  else if (compChoice === 1){
    return 'paper';
  }
  else{
    return 'scissors';
  }
};

// determine the winner between user and computer
const determineWinner = (userChoice, computerChoice)=>{
  //cheat code bomb, by typing it  user will always win
  if(userChoice==='bomb')
  {
    return 'You won';
  }
  // check if game is tie
  if(userChoice === computerChoice){
    return 'tie';
  }

  // checking for Winner
  //first possible outcome
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won';
    }else{
      return 'You won';
    }
  }// possible outcome 
  else if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer won';
    }else{
      return 'You won';
    }
  }//third possible outcome 
  else if(userChoice === 'scissors'){
     if(computerChoice === 'rock'){
      return 'Computer won';
    }else{
      return 'You won';
    }
  }
};

//update score
const updateScore =winner=>{
  if(winner==='You won'){
    userScore +=1;
  }else if(winner==='Computer won'){
    compScore +=1;
  }
};

// read user choice from  HTML input Element
const getRawInput=()=>document.getElementById('userInput').value;

// display winner to HTML
const displayWinnerAndAnswers= (winner, userChoice, computerChoice) =>{
  let id;
  if(winner==='tie'){
    id='tie';
  }
  else if(winner==='Computer won'){
    id='compWon';
  }
  else{
    id='user';
  }
  document.getElementById('score-board').innerHTML=`Computer Score ${compScore} : ${userScore} User Score `;

  document.getElementById("answer").innerHTML = `<h2 id='${id}'>Game Results: ${winner}</h2>
                                                  <h3>Your Choice: ${userChoice}</h3> 
                                                  <h3>Computer's Choice: ${computerChoice}</h3>`;
};


// main play function
const playGame=()=>{

  let userChoice = getRawInput();
  userChoice = getUserChoice(userChoice);

  // if user choice other than rock/paper/secissors
  if(!userChoice){
    document.getElementById("answer").innerHTML = `<h2 id='error'>Error! Invalid choice.</h2>`;
  }
  else{
    let computerChoice = getComputerChoice();
    let winner =determineWinner(userChoice, computerChoice);
    updateScore(winner);
    //display final resutls
    displayWinnerAndAnswers(winner, userChoice, computerChoice);
  } 
};


