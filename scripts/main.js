// Cach
let question = document.querySelector("#question"),
  answersArea = document.querySelector("#answersArea"),
  start = document.querySelector("#start");

//   To Appear The Questions And Answers
function questionAndAnswers(theQuestion, ...answers) {
  // Set The Question
  question.innerHTML = theQuestion;
  //   Delete All Thing In The Answer Area To Add New Answers
  answersArea.innerHTML = "";
  //   Set The Answers
  for (let i = 0; i < answers.length; i++) {
    let ansDiv = document.createElement("div"),
      ans = document.createTextNode(answers[i]);

    //   To Cach The Answer By This Dataset
    ansDiv.dataset.answer = "true";
    // Set The width For Answers
    ansDiv.style.width = `calc(100% / ${answers.length} - 20px)`;

    // Add The Answer To The Body
    ansDiv.appendChild(ans);
    answersArea.appendChild(ansDiv);
  }
}

function finish(massage) {
  // Add The Finish Massage
  question.innerHTML = massage;
  //   To Delete All Answers And Add The Restart Button
  answersArea.innerHTML =
    '<button onclick="window.location.reload()">Restart</button>';
}
// Start
start.addEventListener("click", () => {
  // Remove The Start Button
  start.remove();
  //   Add Firstr Question
  questionAndAnswers(
    "How Old Are You?",
    "10",
    "20",
    "Yunger Than 10",
    "Larger Than 20"
  );
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.answer) {
    //   The Selected Answer Will Cach Here
    let selectedAnswer = e.target.innerHTML;

    // Answers Effect
    if (selectedAnswer == 10)
      questionAndAnswers(
        "Do You Like The Programming?",
        "Yes, I Like The Programming",
        "No, I Don't Like The Programming"
      );
    else if (selectedAnswer == 20)
      questionAndAnswers(
        "What's Your Academic Qualification?",
        "Computer Science",
        "Software Engineering",
        "I'm Learning By Myself"
      );
    else if (selectedAnswer === "Yunger Than 10")
      finish("You aren't Qualified Because You're Still Yung");
    else if (selectedAnswer === "Larger Than 20")
      questionAndAnswers(
        "Did You Finish Your University Studies?",
        "Yes, I Finished My University Studies",
        "No, I Didn'd Finish My University Studies"
      );
    else if (selectedAnswer === "Yes, I Like The Programming")
      questionAndAnswers(
        "Do You Like The Front-End Or Back-End Or Both?",
        "Front-End",
        "Back-End",
        "Both",
        "Nothing Of Them"
      );
    else if (selectedAnswer === "No, I Don't Like The Programming")
      finish("You Are Not Qualified Because You Don't Like The Programming");
    else if (
      selectedAnswer === "Computer Science" ||
      selectedAnswer === "Software Engineering" ||
      selectedAnswer === "I'm Learning By Myself"
    )
      questionAndAnswers(
        "Did You Learn All Skills You Need On It ?",
        "Yes, I Learned All Skills",
        "No, I Didn't Learn All Skills"
      );
    else if (
      selectedAnswer === "Front-End" ||
      selectedAnswer === "Back-End" ||
      selectedAnswer === "Both"
    )
      questionAndAnswers(
        "Did You Learn All Skills You Need On It ?",
        "Yes, I Learned All Skills",
        "No, I Didn't Learn All Skills"
      );
    else if (selectedAnswer === "Nothing Of Them")
      finish(
        "You Are Not Qualified Because You Don't Like The Front-End And Back-End"
      );
    else if (selectedAnswer === "Yes, I Finished My University Studies")
      questionAndAnswers(
        "What Was Your Academic Qualification?",
        "Computer Science",
        "Software Engineering",
        "I'm Learning By Myself"
      );
    else if (selectedAnswer === "No, I Didn'd Finish My University Studies")
      finish(
        "You Are Not Qualified Because You Didn't Complate Your University Studies"
      );
    else if (selectedAnswer === "Yes, I Learned All Skills")
      finish("Great, We Will Call You Late");
    else if (selectedAnswer === "No, I Didn't Learn All Skills")
      finish("Ok, You Most To Learn All Thing About Front-End Or Back-End");
  }
});
