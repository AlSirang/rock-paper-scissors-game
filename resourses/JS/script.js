// get user choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput==='rock' || userInput==='paper' ||userInput==='scissors'){
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

// read user choice from  HTML input Element
const getRawInput=()=>document.getElementById('userInput').value;

// display winner to HTML
const displayWinnerAndAnswers= (winner, userChoice, computerChoice) =>{
  document.getElementById("answer").innerHTML = `<hr>
                                                 <h2 id='winner'>Game Results: ${winner}</h2>
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
    //display final resutls
    displayWinnerAndAnswers(winner, userChoice, computerChoice);
  } 
};


