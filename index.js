const readline = require("readline-sync")

const cutOff = [
  {
    "level": 1,
    "reqScore": 0
  },
  {
    "level": 2,
    "reqScore": 6
  }
]

const finaleScore = 15

const quiz = [
  {
    "question": "What’s Pam’s favorite flavor of yogurt?",
    "options": {
      1: "Mixed berry",
      2: "vanilla",
      3: "Mixed fruit",
      4: "strawberry",
    },
    "score": 2,
    "level": 1,
    "answer": 1
  },
  {
    "question": "Who dates Pam’s mother?",
    "options": {
      1: "Kevin",
      2: "Micheal",
      3: "Dwight",
      4: "Stanley",
    },
    "score": 1,
    "level": 1,
    "answer": 2
  },
  {
    "question": "What do Pam and Angela both want to name their babies?",
    "options": {
      1: "Stephen",
      2: "Junior Mike",
      3: "Philip",
      4: "Cece",
    },
    "score": 2,
    "level": 1,
    "answer": 3
  },
  {
    "question": "What is Michael’s real order at Hooters?",
    "options": {
      1: "Chicken breasts",
      2: "Beer Jugs",
      3: "A gourmet hot dog.",
      4: "Noodles",
    },
    "score": 2,
    "level": 1,
    "answer": 3
  },
  {
    "question": "What is Michael’s username for the dating site?",
    "options": {
      1: "Date Mike",
      2: "Little Kid Lover",
      3: "Puppy Lover",
      4: "Animal Lover",
    },
    "score": 2,
    "level": 1,
    "answer": 2
  },
  {
    "question": "What cause does Michael use for the fun run?",
    "options": {
      1: "Capital",
      2: "Rabies",
      3: "AIDS",
      4: "Women welfare",
    },
    "score": 1,
    "level": 1,
    "answer": 2
  },
  {
    "question": "Where does Jim propose to Pam?",
    "options": {
      1: "Restraunt",
      2: "Gas station",
      3: "At the office",
      4: "New York",
    },
    "score": 2,
    "level": 2,
    "answer": 2
  },
  {
    "question": "Where does Jim tell Pam about his feelings?",
    "options": {
      1: "Restraunt",
      2: "Gas station",
      3: "At the office",
      4: "New York",
    },
    "score": 2,
    "level": 2,
    "answer": 3
  },
  {
    "question": "Which of Angela’s cats does Dwight freeze?",
    "options": {
      1: "Philip",
      2: "flinkers",
      3: "John",
      4: "Sprinkles",
    },
    "score": 2,
    "level": 2,
    "answer": 4
  },
  {
    "question": "What do Pam, Oscar, and Toby call their club?",
    "options": {
      1: "The poet Lovers",
      2: "Literature Hunters",
      3: "The Finer Things Club.",
      4: "Literature things Club",
    },
    "score": 2,
    "level": 2,
    "answer": 3
  },
  {
    "question": " Which three co-workers blow off the “fun run” to go out to eat?",
    "options": {
      1: "Oscar, Stanley, and Creed",
      2: "Kevin, Stanley, and Phyllis",
      3: "Phyllis, Kevin, and Oscar",
      4: "Oscar, Ryan, and Creed.",
    },
    "score": 2,
    "level": 2,
    "answer": 1
  }
]

const getCurrentLevelQuestion = (level) => {
  const currentLvlQuiz = []
  quiz.map((e) => {
    if (e.level === level) {
      currentLvlQuiz.push(e)
    }
  })
  return currentLvlQuiz
}

const displayQuestions = (obj, index) => {
  console.log(`\nQ${index + 1}. ${obj.question}`)

  Object.entries(obj.options).map(([key, value]) => {
    console.log(`   ${key}. ${value}`)
  })

  selected = readline.question("give your answer: ")
  while (!(Object.keys(obj.options).includes(`${selected}`))){
    selected = readline.question("wrong input, enter again: ")
  }
  //givenAnswers[questions[key]] = options[key][selected]

  if (selected == obj.answer)
    score = score + obj.score
}

const heading = (index) => {
  console.log(`\n***********************************************************`)
  console.log(`\nStarting Level ${cutOff[index].level}`)
  console.log(`\n***********************************************************\n`)
}

//const myName = "Vamsea"
const participant = readline.question("Please enter your name: ");
console.log(`\n***********************************************************\n`)
console.log(`     Hello ${participant}🥳!

     Welcome to ✌️ THE OFFICE ✌️ Quiz.\n`)
console.log(`***********************************************************`)
let givenAnswers = {}
let selected;
let inc = 1;
let score = 0
for (let i = 0; i < cutOff.length; i++) {
  if (score >= cutOff[i].reqScore) {
    heading(i)
    const currentLvl = getCurrentLevelQuestion(cutOff[i].level)
    currentLvl.map((obj, index) => {
      displayQuestions(obj, index)
    })
  } else if (score < cutOff[i].reqScore) {
    console.log(`\n${participant}, your score is ${score} where cut off is ${cutOff[i].reqScore}, failed to reach next level` + "\nMay be you should rewatch THE OFFICE again😏")
  }
}
if (score >= finaleScore){
  console.log(`\n ${participant}, your total score is ${score}`)
  console.log(`\n ${participant}, you exceeded our expectations`)
console.log(`\n ${participant}, You truly are "THE OFFICE" fan 😉`)
}else{
  console.log(`\n${participant}, your score is ${score} where cut off is ${finaleScore}, failed this level` + "\nMay be you should rewatch THE OFFICE again😏")
  }

