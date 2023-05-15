const inquirer = require("inquirer");
const fs = require("fs");
const fileName = "./examples/logo.svg";
const setShape = require("./lib/setShape.js");
const colorKeywords = require("./lib/colorKeywords.js");

// Questions
const questions = [
  // SHAPE QUESTIONS - SHAPE
  {
    name: "shape",
    message: "What shape would you like for your logo?",
    type: "list",
    choices: ["Circle", "Square", "Triangle"],
  },

  // SHAPE COLOR
  // user choose color keyword or hexadecimal for shapeColor
  {
    name: "shapeColorChoice",
    message: "Choose a color format for the shape of your logo ",
    type: "list",
    choices: ["color keyword", "hexadecimal"],
  },
  // color keyword (validate with colorKeywords array)
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the colour keyword for your shape",
    when: (answers) => {
      if (answers.shapeColorChoice === "color keyword") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      let answerLowercase = answer.toLowerCase();
      for (var i = 0, len = colorKeywords.length; i < len; ++i) {
        if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
          return true;
        }
      }
      return console.log("\n Please enter a valid color keyword");
    },
  },
  // hexadecimal (validate hexadecimal with RegEx pattern)
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape colour hexadecimal number (#CCCCCC)",
    when: (answers) => {
      if (answers.shapeColorChoice === "hexadecimal") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      const hexRegEx = "^#[A-Fa-f0-9]{6}$";
      if (!answer.match(hexRegEx)) {
        return console.log("\n Please enter a valid hexadecimal");
      }
      return true;
    },
  },

  // TEXT
  // validate user can only submit 3 characters
  {
    name: "text",
    message: "What is the name of your company? (three character maximum)",
    type: "input",
    validate: (answer) => {
      if (answer.length > 3) {
        return console.log(
          "\n Text must be three characters or less! Please try again"
        );
      }
      return true;
    },
  },

  // TEXT COLOR
  // user choose color keyword or hexadecimal for textColor
  {
    name: "textColorChoice",
    message: "Choose a color format for the text on your logo ",
    type: "list",
    choices: ["color keyword", "hexadecimal"],
  },
  // color keyword (validate with colorKeywords array)
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color keyword",
    when: (answers) => {
      if (answers.textColorChoice === "color keyword") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      let answerLowercase = answer.toLowerCase();
      for (var i = 0, len = colorKeywords.length; i < len; ++i) {
        if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
          return true;
        }
      }
      return console.log("\n Please enter a valid color keyword");
    },
  },
  // hexadecimal (validate hexadecimal with RegEx pattern)
  {
    type: "input",
    name: "textColor",
    message: "Enter the text hexadecimal number (#CCCCCC)",
    when: (answers) => {
      if (answers.textColorChoice === "hexadecimal") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      const hexRegEx = "^#[A-Fa-f0-9]{6}$";
      if (!answer.match(hexRegEx)) {
        return console.log("\n Please enter a valid hexadecimal");
      }
      return true;
    },
  },
];

// function to create new svg file using inquirer response and file system
function createLogo(response) {
  const svg = setShape(response);
  fs.writeFile(fileName, svg, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

// initialize, ask questions then createLogo using responses, catch any errors
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      createLogo(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
