# SVG-Logo-Maker

## Description

This app is used to generate an SVG logo with a shape of your choice (circle, square, or triangle), shape color, text (limit of 3 characters), and text color. Shape and text colors can be chosen using color keywords or hexadecimal numbers. The logo will be generated ans saved as a .svg file

- [Application](#Application)
- [Technologies Used](#TechnologiesUsed)
- [Installation](#Installation)
- [Test](#Test)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)

## Application

The following video shows the application's appearance and functionality:

https://youtu.be/oxeYPknFuIk

## Technologies Used

Javascript
NODE JS

## Installation

Check if you have NODE.js installed by typing "node -v" in your command line.
If not, install Node.js by visiting the Node.js website.
Next, clone this project repository to your computer.
In the command line, use "npm install" to install dependecies.
Use the command "npm install --save-dev jest" to install Jest as a devDependency.

## Test

After installing Jest, Type "npm test" in the command line to run the tests

## Usage

Open your terminal and navigate to the project folder by using the cd command. For example, if your project folder is named "SVG-LOGO-MAKER", you can type: cd SVG-LOGO-MAKER
In the terminal, type "npm install" and "npm install --save-dev jest" to install dependencies to install Jest as a devDependency respectively.
In the terminal, type "npm start"
After invoking the application, you will be prompted with a series of questions. These questions will ask you to choose the shape, shape color, text (up to 3 characters), and text color for your logo. <
Make sure to enter valid color keywords or hexadecimal numbers when prompted for shape and text colors. If an invalid input is provided, you will be prompted to try again.<
Similarly, if your text contains more than 3 characters, you will be prompted to try again and enter a valid text.
Once you have successfully answered all the prompts with accepted values, your new logo will be generated. The generated logo file will be named 'logo.svg' and will be saved in the 'examples' folder within your project directory.

## Credits

https://nodejs.org/en
https://www.w3schools.com

## License

MIT License.
For more information on the license, please refer to the LICENSE file in the repo
