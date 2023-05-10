// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const { circle, square, triangle } = require("./lib/shapes");

// Defines a Svg class that has a constructor with three methods for rendering and setting the text and shape elements in the SVG string.

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

function validateInput(value) {
  if (value != "") {
    return true;
  } else {
    return "Please answer the question to move forward";
  }
}

// TODO: Create an array of questions for user input
const questions = [
  {
    // question for title of the project
    type: "input",
    name: "text",
    message: "Enter up to three characters",
    validate: validateInput,
  },
  {
    // question for the description of the project
    type: "input",
    name: "textColor",
    message: "Enter the color for your text",
    validate: validateInput,
  },
  {
    // question for Installation
    type: "list",
    name: "shape",
    message: "What shape would you like your logo to be?",
    choices: ["Circle", "Triangle", "Square"],
    validate: validateInput,
  },
  {
    // question for the description of the project
    type: "input",
    name: "shapeColor",
    message: "Enter the color for the shape",
    validate: validateInput,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}
// TODO: Create a function to initialize app
// Function to write data to file
function writeToFile(fileName, data) {
  console.log("Writing [" + data + "] to file [" + fileName + "]");
  filesystem.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Congratulations, you have Generated a logo.svg!");
  });
}

async function init() {
  console.log("Starting init");
  var svgString = "";
  var svg_file = "logo.svg";

  // Prompt the user for answers
  const answers = await inquirer.prompt(questions);

  //user text
  var user_text = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    // 1-3 chars, valid entry
    user_text = answers.text;
  } else {
    // 0 or 4+ chars, invalid entry
    console.log(
      "Invalid user text field detected! Please enter 1-3 Characters, no more and no less"
    );
    return;
  }
  console.log("User text: [" + user_text + "]");
  //user font color
  user_font_color = answers["text-color"];
  console.log("User font color: [" + user_font_color + "]");
  //user shape color
  user_shape_color = answers.shape;
  console.log("User shape color: [" + user_shape_color + "]");
  //user shape type
  user_shape_type = answers["pixel-image"];
  console.log("User entered shape = [" + user_shape_type + "]");

  //user shape
  let user_shape;
  if (user_shape_type === "Square" || user_shape_type === "square") {
    user_shape = new Square();
    console.log("User selected Square shape");
  } else if (user_shape_type === "Circle" || user_shape_type === "circle") {
    user_shape = new Circle();
    console.log("User selected Circle shape");
  } else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
    user_shape = new Triangle();
    console.log("User selected Triangle shape");
  } else {
    console.log("Invalid shape!");
  }
  user_shape.setColor(user_shape_color);

  // Create a new Svg instance and add the shape and text elements to it
  var svg = new Svg();
  svg.setTextElement(user_text, user_font_color);
  svg.setShapeElement(user_shape);
  svgString = svg.render();

  //Print shape to log
  console.log("Displaying shape:\n\n" + svgString);
  //document.getElementById("svg_image").innerHTML = svgString;

  console.log("Shape generation complete!");
  console.log("Writing shape to file...");
  writeToFile(svg_file, svgString);
}
init();
