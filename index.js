var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question('hey!! Whats your name? ');
console.log('Welcome ' + userName + ' Do you know Shubham?!');

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer)
  {
    console.log('right')

    score++;
  }else{
    console.log('wrong')
  }
  console.log("current score: ",score);
  console.log("-------------")

}

var questions = [
  {
  question:'where do I live? ',
  answer:'bhopal'

},
  {
  question:'My favourite superhero would be? ',
  answer:'superman'
},
{
    question:'My favourite Indian street food? ',
    answer:'phulki'
  },
  {
    question:'My favourite teacher? ',
    answer:'tanay pratap'
  },
  {
    question:'My favourite programming langauage? ',
    answer:'javascript'
  },

]

for(var i=0; i<questions.length;i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer)

}
console.log('YaY you made it to the end')


console.log('Your final score is: ',score)