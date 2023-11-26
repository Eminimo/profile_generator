const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

const askQuestion = (question, key) => {
  rl.question(question, (answer) => {
    answers[key] = answer;
    askNextQuestion();
  });
};

const questions = [
  "What's your name? Nicknames are also acceptable :)\n",
  "What's an activity you like doing?\n",
  "What do you listen to while doing that?\n",
  "Which meal is your favourite (eg: dinner, brunch, etc.)\n",
  "What's your favourite thing to eat for that meal?\n",
  "Which sport is your absolute favourite?\n",
  "What is your superpower? In a few words, tell us what you are amazing at!\n"
];

let currentQuestion = 0;

const askNextQuestion = () => {
  if (currentQuestion < questions.length) {
    askQuestion(questions[currentQuestion], currentQuestion);
    currentQuestion++;
  } else {
    displayProfile();
    rl.close();
  }
};

const displayProfile = () => {
  console.log('\nProfile Generated:');
  console.log(`Name: ${answers[0]}`);
  console.log(`Activity: ${answers[1]}`);
  console.log(`Listening to: ${answers[2]}`);
  console.log(`Favourite Meal: ${answers[3]}`);
  console.log(`Favourite Food: ${answers[4]}`);
  console.log(`Favourite Sport: ${answers[5]}`);
  console.log(`Superpower: ${answers[6]}`);
};

askNextQuestion();

