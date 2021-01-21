console.log('Hej, Welcome to the CrickZ, a quiz app to check your cricketing knowledge !');
console.log();
const readLineSync = require('readline-sync');
const name = readLineSync.question('To start with the quiz, please enter your name : ');
console.log();
console.log(`Welcome ${name.toUpperCase()}`);
console.log();
console.log("You will be given 5 questions, you need to select correct answer from (1/2/3/4) options.");
console.log("For each right answer you will get 2 points.");
console.log();
console.log(`Let's begin !`);

let totalScore = 0;
const questions = [
  {
    question : 'Q1. Against which country did India score their highest total at the World Cup?',
    options : ['1. Bermuda', '2. Kenya', '3. Sri Lanka', '4. Namibia'],
    correctAnswer : 4,
    getCorrectAnswer() {
      return `${this.options[this.correctAnswer-1]}`;
    }
  },
  {
    question : 'Q2. Which cricketer has made the highest individual score at the World Cup ?',
    options : ['1. Rahul Dravid', '2. Saurav Ganguly', '3. Sachin Tendulkar', '4. Kapil Dev'],
    correctAnswer : 2,
    getCorrectAnswer() {
      return `${this.options[this.correctAnswer-1]}`;
    }
  },
  {
    question : 'Q3.  Who was the captain of the Indian cricket team in the ICC World Cup 1983 ?',
    options : ['1. Sunil Gavaskar', '2. Saurav Ganguly', '3. Kapil Dev', '4. None of these'],
    correctAnswer : 3,
    getCorrectAnswer() {
      return `${this.options[this.correctAnswer-1]}`;
    }
  },
  {
    question : 'Q4. What does LBW stand for ?',
    options : ['1. Long Ball Wide', '2. Leg Beyond Width', '3. Leg Before Wicket', '4. Leg Ball Wicket'],
    correctAnswer : 3,
    getCorrectAnswer() {
      return `${this.options[this.correctAnswer-1]}`;
    }
  },
   {
    question : 'Q5. Who did England beat in the final of the 2019 Cricket World Cup?',
    options : ['1. New Zealand', '2. Australia', '3. India', '4. Sri Lanka'],
    correctAnswer : 1,
    getCorrectAnswer() {
      return `${this.options[this.correctAnswer-1]}`;
    }
  }
]

function validateOption(num) {
  if(num == 1 || num == 2 || num == 3 || num == 4){
    return true;
  }
}

for(let i = 0; i < questions.length; i++) {
  console.log();
  console.log(`${questions[i].question}`);
  for(const num of questions[i].options) {
    console.log(`${num}`);
  }
  console.log();
  const ans = readLineSync.question('Enter Your answer : ');
  if(validateOption(ans)) {
  if(ans == questions[i].correctAnswer) {
      console.log("Correct Answer");
      totalScore += 2;
  } else {
    console.log("Wrong Answer");
    console.log(`Correct answer is ${questions[i].getCorrectAnswer()}`);
  } 
  } else {
    console.log("Please select valid options (1/2/3/4) from next time.");
  }
  console.log();
}

console.log("That's all for now.");
console.log();
if(totalScore > 0) {
console.log(`Welldone, Your Score is ${totalScore}`);
} else {
  console.log(`Your Score is ${totalScore}`);
}