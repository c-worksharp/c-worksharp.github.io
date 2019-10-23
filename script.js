'use strict';

const createQuestion = () => {
  document.querySelector('.lines').style.display = 'block';

  let line = document.querySelector('.lines').cloneNode(true);

  const mainLines = document.getElementById('mainLines');

  mainLines.appendChild(line);

  document.querySelector('.lines').style.display = 'none';
};

const createAnswer = line => {
  const answers = line.querySelector('.answers');

  document.querySelector('.answer').style.display = 'block';
  let answer = document.querySelector('.answer').cloneNode(true);

  answers.appendChild(answer);
  document.querySelector('.answer').style.display = 'none';
  // console.log(answers);
};

const getAnswersOfLine = line => {
  const answers = line.querySelectorAll('.answers .answer');
  const arr = [];
  let i = 0;
  for (const answer of answers) {
    let textAnswer = answer.querySelector('input[type="text"').value;
    let checkboxAnswer = answer.querySelector('input[type="checkbox"]').checked;
    let comment = answer.querySelector('textarea').value
    arr[i] = [checkboxAnswer, textAnswer, comment];
    i++;
  }
  // console.log(arr);
  return arr;
};

const getValues = () => {

  document.querySelector('.lines').remove();

  const lines = document.querySelectorAll('.lines');

  const getQuestion = line => line.querySelector('.questions textarea').value;

  const objects = {};
  let i = 0;
  for (const line of lines) {
    let obj = {
      question: getQuestion(line),
      answer: getAnswersOfLine(line),
    }
    objects['question' + i] = obj;
    i++;
  }

  console.log(objects);

  // location.reload();
};

createQuestion();
