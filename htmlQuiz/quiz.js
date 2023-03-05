const config = {
  baseUrl: "https://quizapi.io/api/v1/",
  apiKey: "0IvOovvtGqNGpHAvebdLNRkq1oScfvOrMQYsQFlS",
  questionsAmount: "10",
  tags: "Linux",
};

let easyQuiz = [];
let mediumQuiz = [];
let hardQuiz = [];

let answersArr = [];
let getAnswerArr = [];

const mainContainer = document.getElementById("testDiv");

const EASY_QUIZ_URL = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=Easy&limit=${config.questionsAmount}&tags=${config.tags}`;
const MEDIUM_QUIZ_URL = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=Medium&limit=${config.questionsAmount}&tags=${config.tags}`;
const HARD_QUIZ_URL = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=Hard&limit=${config.questionsAmount}&tags=${config.tags}`;

const getQuestions = async (url) => {
  return await axios.get(url);
};

const clickMe = (answer) => {
  //console.log(answer);
  getAnswerArr.push(answer);
  return getAnswerArr;
};

const renderQuestion = (question) => {
  //const container = document.getElementById("testDiv");
  const title = document.createElement("h1");
  title.textContent = question;
  mainContainer.append(title);
};

const renderAnswers = (answers, question, correct_answers) => {
  for (let key in answers) {
    const correctKey = key + "_correct";

    if (answers[key]) {
      const input = document.createElement("input");
      const label = document.createElement("label");
      const br = document.createElement("br");
      input.id = answers[key];
      input.type = "radio";
      input.value = answers[key];
      input.name = question;
      input.addEventListener("click", () => {
        clickMe(correct_answers[correctKey]);
      });
      label.textContent = answers[key];
      mainContainer.append(input, label, br);
    }
  }
};

const generateEasyUI = async () => {
  easyQuiz = await getQuestions(EASY_QUIZ_URL);
  const { data } = easyQuiz;

  mainContainer.innerHTML = "";

  data.forEach(({ question, answers, correct_answers }) => {
    renderQuestion(question);
    renderAnswers(answers, question, correct_answers);
  });
  const countScoreButton = document.createElement("button");
  countScoreButton.id = "countScoreButton";
  countScoreButton.type = "button";
  countScoreButton.textContent = "Done";
  countScoreButton.onclick = countScore;
  testDiv.append(countScoreButton);

  getAnswerArr = [];
};

const generateMediumUI = async () => {
  mediumQuiz = await getQuestions(MEDIUM_QUIZ_URL);
  const { data } = mediumQuiz;

  mainContainer.innerHTML = "";

  data.forEach(({ question, answers, correct_answers }) => {
    renderQuestion(question);
    renderAnswers(answers, question, correct_answers);
  });
  const countScoreButton = document.createElement("button");
  countScoreButton.id = "countScoreButton";
  countScoreButton.type = "button";
  countScoreButton.textContent = "Done";
  countScoreButton.onclick = countScore;
  testDiv.append(countScoreButton);

  getAnswerArr = [];
};

const generateHardUI = async () => {
  hardQuiz = await getQuestions(HARD_QUIZ_URL);
  const { data } = hardQuiz;

  mainContainer.innerHTML = "";

  data.forEach(({ question, answers, correct_answers }) => {
    renderQuestion(question);
    renderAnswers(answers, question, correct_answers);
  });
  const countScoreButton = document.createElement("button");
  countScoreButton.id = "countScoreButton";
  countScoreButton.type = "button";
  countScoreButton.textContent = "Done";
  countScoreButton.onclick = countScore;
  testDiv.append(countScoreButton);

  getAnswerArr = [];
};

//let x = false;
function countScore() {
  console.log(getAnswerArr);
  getAnswerArr = getAnswerArr.filter((e) => e == "true");
  alert("Your score is " + getAnswerArr.length + "!");

  // if ((x = false)) {
  //   getAnswerArr = [];
  //   x = true;
  // }
  console.log(getAnswerArr);

  doReload();
}

function doReload() {
  window.location.reload();
}

const easyLevel = () => {
  generateEasyUI();
};

const mediumLevel = () => {
  generateMediumUI();
};

const hardLevel = () => {
  generateHardUI();
};
