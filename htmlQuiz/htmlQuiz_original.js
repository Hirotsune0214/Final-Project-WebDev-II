const config = {
  baseUrl: "https://quizapi.io/api/v1/",
  apiKey: "0IvOovvtGqNGpHAvebdLNRkq1oScfvOrMQYsQFlS",
  tags: "HTML",
};

let htmlEasyQuiz = [];
let htmlMediumQuiz = [];
let htmlHardQuiz = [];

let answersArr = [];

const HTML_EASY_QUIZ_URL = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=Easy&limit=10&tags=${config.tags}`;
const HTML_MEDIUM_QUIZ_URL = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=Medium&limit=10&tags=${config.tags}`;
const HTML_HARD_QUIZ_URL = `${config.baseUrl}questions?apiKey=${config.apiKey}&difficulty=Hard&limit=10&tags=${config.tags}`;

// window.addEventListener("load", async () => {
//   try {
//     htmlEasyQuiz = await getQuestions(HTML_EASY_QUIZ_URL);
//     htmlMediumQuiz = await getQuestions(HTML_MEDIUM_QUIZ_URL);
//     htmlHardQuiz = await getQuestions(HTML_HARD_QUIZ_URL);

//     //generateBannerUI();
//   } catch (err) {
//     console.log(err);
//   }
// });

const getQuestions = async (url, keyword) => {
  return await axios.get(url);
};

const generateEasyUI = async () => {
  htmlEasyQuiz = await getQuestions(HTML_EASY_QUIZ_URL);
  console.log(htmlEasyQuiz);
  const { data } = htmlEasyQuiz;
  //console.log(data[0].answers);
  //console.log(Object.values(data[0].answers));
  //console.log(data[0].answers);

  //console.log(answersArr);

  const mainContainer = document.getElementById("testDiv");
  mainContainer.innerHTML = "";
  console.log(data);
  data.forEach(({ question, correct_answer, answers }) => {
    // console.log(answersArr);
    let output = showAnswers(answers);
    console.log(output, "output");

    mainContainer.innerHTML += `
                <section class="questionAll">
                    <h1>${question}</h1>
                    <div>
                     ${output}
                    </div>
                </section>`;
  });

  function showAnswers(answers) {
    let div = "<div>";
    for (let answer in answers) {
      console.log(answer, "Value");
      div += `<input type="radio" value=${answer}><label>${answers[answer]}</label>`;
    }
    div += "</div>";
    return div;
  }

  // for (x in data) {
  //   //console.log("aaa", Object.values(data[x].answers));
  //   // .map(function () {
  //   answersArr = Object.values(data[x].answers);
  //   console.log("aaa", answersArr);

  //   for (let i = answersArr.length - 1; i >= 0; i--) {
  //     if (answersArr[i] == null) {
  //       answersArr.pop();
  //     }
  //   }
  //   // });

  //   console.log(answersArr);

  //   for (let i = 0; i < answersArr.length; i++) {
  //     answersDiv.innerHTML += `
  //           <button>${answersArr[i]}</button>
  //           </br>`;
  //   }
};

// answers = Object.keys(answersArr[3]).map(function (_) {
//     return answersArr[3][_];
//   });

// answersDiv.innerHTML += `
//           <div>${answersArr[0]}</div>
//           <div>${answersArr[1]}</div>
//           <div>${answersArr[2]}</div>
//           <div>${answersArr[3]}</div>
//           <div>${answersArr[4]}</div>
//           <div>${answersArr[5]}</div>
//           </br>`;
// };
function easyLevel() {
  console.log("In the easy questions");

  generateEasyUI();
}

function mediumLevel() {
  console.log("In the medium questions");

  generateMediumUI();
}

function hardLevel() {
  console.log("In the hard questions");

  generateHardUI();
}

const generateMediumUI = async () => {
  const testDiv = document.getElementById("testDiv");
  htmlMediumQuiz = await getQuestions(HTML_MEDIUM_QUIZ_URL);

  const { data } = htmlMediumQuiz;

  const mainContainer = document.getElementById("testDiv");
  mainContainer.innerHTML = "";
  data.forEach(({ question, correct_answer }) => {
    mainContainer.innerHTML += `
                <section class="questionAll">
                    <h1>${question}</h1>
                    <div id="answersDiv">${correct_answer}
                    </div>
                    </section>`;
  });

  const answersDiv = document.getElementById("answersDiv");

  for (x in data) {
    answersArr = Object.values(data[x].answers);
    console.log("aaa", answersArr);

    for (let i = answersArr.length - 1; i >= 0; i--) {
      if (answersArr[i] == null) {
        answersArr.pop();
      }
    }

    console.log(answersArr);

    answersDiv.innerHTML += `
            <div>${answersArr[0]}</div>
            <div>${answersArr[1]}</div>
            <div>${answersArr[2]}</div>
            <div>${answersArr[3]}</div>
            <div>${answersArr[4]}</div>
            <div>${answersArr[5]}</div>
            </br>`;
  }
};

const generateHardUI = async () => {
  const testDiv = document.getElementById("testDiv");
  htmlHardQuiz = await getQuestions(HTML_HARD_QUIZ_URL);

  const { data } = htmlHardQuiz;

  const mainContainer = document.getElementById("testDiv");
  mainContainer.innerHTML = "";
  data.forEach(({ question, correct_answer }) => {
    mainContainer.innerHTML += `
                <section class="questionAll">
                    <h1>${question}</h1>
                    <div id="answersDiv">${correct_answer}
                    </div>
                    </section>`;
  });

  const answersDiv = document.getElementById("answersDiv");

  for (x in data) {
    answersArr = Object.values(data[x].answers);
    console.log("aaa", answersArr);

    for (let i = answersArr.length - 1; i >= 0; i--) {
      if (answersArr[i] == null) {
        answersArr.pop();
      }
    }

    console.log(answersArr);

    answersDiv.innerHTML += `
            <div>${answersArr[0]}</div>
            <div>${answersArr[1]}</div>
            <div>${answersArr[2]}</div>
            <div>${answersArr[3]}</div>
            <div>${answersArr[4]}</div>
            <div>${answersArr[5]}</div>
            </br>`;
  }
};
