const config = {
  baseUrl: "https://quizapi.io/api/v1/",
  apiKey: "0IvOovvtGqNGpHAvebdLNRkq1oScfvOrMQYsQFlS",
  tags: "HTML",
};

let htmlEasyQuiz = [];
let htmlMediumQuiz = [];
let htmlHardQuiz = [];

let answersArr = [];

//let globalArr = [];

const HTML_EASY_QUIZ_URL = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=Easy&limit=10&tags=${config.tags}`;
const HTML_MEDIUM_QUIZ_URL = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=Medium&limit=10&tags=${config.tags}`;
const HTML_HARD_QUIZ_URL = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=Hard&limit=10&tags=${config.tags}`;

window.addEventListener("load", async () => {
  try {
    //htmlEasyQuiz = await getQuestions(HTML_EASY_QUIZ_URL);
    htmlMediumQuiz = await getQuestions(HTML_MEDIUM_QUIZ_URL);
    htmlHardQuiz = await getQuestions(HTML_HARD_QUIZ_URL);

    generateBannerUI();
  } catch (err) {
    console.log(err);
  }
});

const getQuestions = async (url, keyword) => {
  return await axios.get(url);
};

const generateBannerUI = async () => {
  const testDiv = document.getElementById("testDiv");
  htmlEasyQuiz = await getQuestions(HTML_EASY_QUIZ_URL);
  console.log(htmlEasyQuiz);
  const { data } = htmlEasyQuiz;
  console.log(data);
  //   htmlEasyQuiz = data;
  //   console.log(data);

  //console.log(data[9].answers);
  for (x = 0; x < data.length; x++) {
    // console.log(data[x].answers);
    answersArr = data[x].answers;
    console.log(answersArr);
  }

  const mainContainer = document.getElementById("testDiv");
  mainContainer.innerHTML = "";
  data.forEach(({ question, answers }) => {
    // console.log(answersArr);

    mainContainer.innerHTML += `
                <section class="questionAll">
                    <h1>${question}</h1>
                    <div></div>
                    </section>`;
  });
};
