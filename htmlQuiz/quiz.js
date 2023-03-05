const config = {
  baseUrl: "https://quizapi.io/api/v1/",
  apiKey: "0IvOovvtGqNGpHAvebdLNRkq1oScfvOrMQYsQFlS",
  tags: "Linux",
};

let htmlEasyQuiz = [];
let htmlMediumQuiz = [];
let htmlHardQuiz = [];

let answersArr = [];
let getAnswerArr = [];

const mainContainer = document.getElementById("testDiv");

const HTML_EASY_QUIZ_URL = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=Easy&limit=10&tags=${config.tags}`;
const HTML_MEDIUM_QUIZ_URL = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=Medium&limit=10&tags=${config.tags}`;
const HTML_HARD_QUIZ_URL = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=Hard&limit=10&tags=${config.tags}`;

const getQuestions = async (url, keyword) => {
  return await axios.get(url);
};

const clickMe = (answer) => {
  //console.log(answer);
  getAnswerArr.push(answer);
  return getAnswerArr;
};

const renderQuestion = (question) => {
  const container = document.getElementById("testDiv");
  const title = document.createElement("h1");
  title.textContent = question;
  container.append(title);
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
  htmlEasyQuiz = await getQuestions(HTML_EASY_QUIZ_URL);
  const { data } = htmlEasyQuiz;
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
};

function countScore() {
  console.log(getAnswerArr);
  getAnswerArr = getAnswerArr.filter((e) => e == "true");
  alert("Your score is " + getAnswerArr.length + "!");
}

const easyLevel = () => {
  generateEasyUI();
};
