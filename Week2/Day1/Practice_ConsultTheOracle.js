var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// function magicBall() {
//     var randomDecimal = Math.random()*20;
//     var arrayNumber = Math.floor(randomDecimal);
//     console.log(lifesAnswers[arrayNumber]);
// }

// magicBall();

function randomResponse (myArr) {
    var arrNum = Math.floor(Math.random() + myArr.length);
    return lifesAnswers[arrNum];
}

randmomResponse(lifesAnswers);