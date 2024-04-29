import inquirer from "inquirer";
let score = 0;
let hardScore = 0;
console.log("Welcome to Quick Quiz Game");
console.log("LEVEL 1");
const Q1 = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: "What is the capital of Pakistan?",
        choices: ["Karachi", "Islamabad", "Lahore", "Peshawer"],
    },
]);
const Q2 = await inquirer.prompt([
    {
        name: "question2",
        type: "list",
        message: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Jupiter", "Mars", "Saturn"],
    },
]);
const Q3 = await inquirer.prompt([
    {
        name: "question3",
        type: "list",
        message: "What is the chemical symbol for water?",
        choices: ["Wa", "H2O", "C", "Hy"],
    },
]);
const Q4 = await inquirer.prompt([
    {
        name: "question4",
        type: "list",
        message: "Which is the largest ocean on Earth?",
        choices: ["Pacific", "Indian", "Atlantic", "Arctic"],
    },
]);
const Q5 = await inquirer.prompt([
    {
        name: "question5",
        type: "list",
        message: "What is the longest river in the world?",
        choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    },
]);
const correctAnswers = {
    question1: "Islamabad",
    question2: "Mars",
    question3: "H2O",
    question4: "Pacific",
    question5: "Amazon",
};
if (Q1.question1 === correctAnswers.question1) {
    score++;
}
else {
    score--;
}
if (Q2.question2 === correctAnswers.question2) {
    score++;
}
else {
    score--;
}
if (Q3.question3 === correctAnswers.question3) {
    score++;
}
else {
    score--;
}
if (Q4.question4 === correctAnswers.question4) {
    score++;
}
else {
    score--;
}
if (Q5.question5 === correctAnswers.question5) {
    score++;
}
else {
    score--;
}
console.log(`You scored ${score} out of 5`);
if (score == 5) {
    HardLevel();
}
else {
    console.log("Can't Reach to level 2");
}
async function HardLevel() {
    console.log("FINAL LEVEL");
    const Q1m = await inquirer.prompt([
        {
            name: "question1m",
            type: "list",
            message: "Who wrote the play Hamlet?",
            choices: [
                "William Shakespeare",
                "Arthur Miller",
                " Anton Chekhov",
                "Tennessee Williams",
            ],
        },
    ]);
    const Q2m = await inquirer.prompt([
        {
            name: "question2m",
            type: "list",
            message: "What is the chemical symbol for gold?",
            choices: ["Go", "Au", "Ag", "Br"],
        },
    ]);
    const Q3m = await inquirer.prompt([
        {
            name: "question3m",
            type: "list",
            message: "What is the capital city of Australia?",
            choices: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
        },
    ]);
    const Q4m = await inquirer.prompt([
        {
            name: "question4m",
            type: "list",
            message: "What is the largest mammal in the world?",
            choices: ["African Elephant", "Blue Whale", "Girrafe", "Lion"],
        },
    ]);
    const Q5m = await inquirer.prompt([
        {
            name: "question5m",
            type: "list",
            message: " Which country is known as the Land of the Rising Sun?",
            choices: ["China", "Japan", "South Korea", "America"],
        },
    ]);
    if (Q1m.question1m === "William Shakespeare") {
        hardScore++;
    }
    else {
        hardScore--;
    }
    if (Q2m.question2m === "Au") {
        hardScore++;
    }
    else {
        hardScore--;
    }
    if (Q3m.question3m === "Canberra") {
        hardScore++;
    }
    else {
        hardScore--;
    }
    if (Q4m.question4m === "Blue Whale") {
        hardScore++;
    }
    else {
        hardScore--;
    }
    if (Q5m.question5m === "Japan") {
        hardScore++;
    }
    else {
        hardScore--;
    }
    console.log(`You scored ${hardScore} out of 5 in Final Level `);
}
