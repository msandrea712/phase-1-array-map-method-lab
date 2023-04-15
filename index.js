const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorials = tutorials.map((str) => {
    let modifiedStr = str.split("");
    for (let i = 0; i < modifiedStr.length; i++) {
      if (i === 0) {
        modifiedStr[i] = modifiedStr[i].toUpperCase();
      }
      if (modifiedStr[i - 1] === " ") {
        modifiedStr[i] = modifiedStr[i].toUpperCase();
      }
    }
    modifiedStr = modifiedStr.join("");
    return modifiedStr;
  });

  return newTutorials;
};
