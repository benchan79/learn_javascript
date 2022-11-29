// console.log('hi');

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error, please type: rock, paper or scissors.');
    }
  };
  
  // console.log(getUserChoice('paper'));
  // console.log(getUserChoice('potato'));
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0: 
        return'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This game is a tie!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Sorry, computer won!';
      } else {
        return 'Congratulations, you won!';
      }
    } 
    
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Sorry, computer won!';
      } else {
        return 'Congratulations, you won!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Sorry, computer won!';
      } else {
        return 'Congratulations, you won!';
      }
    }
    // secret cheat code that lets user win no matter what
    if (userChoice === 'bomb') {
      return 'Congratulations, you won!';
    }
  };
  
  // console.log(determineWinner('rock', 'scissors'));
  // console.log(determineWinner('paper', 'scissors'));
  // console.log(determineWinner('rock', 'rock'));
  
  const playGame = userInput => {
    const userChoice = getUserChoice(userInput);
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`Computer threw: ${computerChoice}`);
    // console.log('You threw: ' + userChoice);
    // console.log('Computer threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));  
  }
  
  userInput = 'bomb';

  playGame(userInput);
  