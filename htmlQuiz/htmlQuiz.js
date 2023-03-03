const config = {
  baseUrl: "https://quizapi.io/api/v1/",
  apiKey: "0IvOovvtGqNGpHAvebdLNRkq1oScfvOrMQYsQFlS",
  tags: "HTML",
  questionNumber: "20",
};

const generateQuestionUI = (question, answers) => {
  const answersHTML = answers
    .map((answer) => `<button>${answer}</button>`)
    .join("");
  return `
    <section class="questionAll">
      <h1>${question}</h1>
      <div class="answersDiv">${answersHTML}</div>
    </section>
  `;
};

const getQuestions = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const generateQuizUI = async (difficulty) => {
  const quizUrl = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=${difficulty}&limit=${config.questionNumber}&tags=${config.tags}`;
  const quizData = await getQuestions(quizUrl);
  console.log(quizUrl);

  const questionsHTML = quizData
    .map((questionData) => {
      const { question, answers } = questionData;
      const answersArray = Object.values(answers).filter(Boolean);
      return generateQuestionUI(question, answersArray);
    })
    .join("");

  const mainContainer = document.getElementById("testDiv");
  mainContainer.innerHTML = questionsHTML;
};

const easyLevel = () => generateQuizUI("Easy");
const mediumLevel = () => generateQuizUI("Medium");
const hardLevel = () => generateQuizUI("Hard");

function showTagsOnBrowser() {}
