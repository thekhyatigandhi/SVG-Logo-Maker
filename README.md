# SVG-Logo-Maker

## Description

This app is used to generate an SVG logo with a shape of your choice (circle, square, or triangle), shape color, text (limit of 3 characters), and text color. Shape and text colors can be chosen using color keywords or hexadecimal numbers. The logo will be generated ans saved as a .svg file

- [Application](#Application)
- [Technologies Used](#TechnologiesUsed)
- [Installation](#Installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Application

The following video shows the application's appearance and functionality:

![portfolio demo](./main/Assets/WalkthroughVideo.gif)

## Technologies Used

Javascript </br>
NODE JS </br>

## Installation

Check if you have NODE.js installed by typing "node -v" in your command line. </br>
If not, install Node.js by visiting the Node.js website. </br>
Next, clone this project repository to your computer. </br>
In the command line, use "npm install" to install dependecies. </br>
Use the command "npm install --save-dev jest" to install Jest as a devDependency. </br>

## Usage

Open your terminal and navigate to the project folder by using the cd command. For example, if your project folder is named "SVG-LOGO-MAKER", you can type: cd SVG-LOGO-MAKER </br>
In the terminal, type "npm install" and "npm install --save-dev jest" to install dependencies to install Jest as a devDependency respectively. </br>
In the terminal, type "npm start" </br>
After invoking the application, you will be prompted with a series of questions. These questions will ask you to choose the shape, shape color, text (up to 3 characters), and text color for your logo. </br>
Make sure to enter valid color keywords or hexadecimal numbers when prompted for shape and text colors. If an invalid input is provided, you will be prompted to try again.</br>
Similarly, if your text contains more than 3 characters, you will be prompted to try again and enter a valid text. </br>
Once you have successfully answered all the prompts with accepted values, your new logo will be generated. The generated logo file will be named 'logo.svg' and will be saved in the 'examples' folder within your project directory. </br>

For the tests:</br>
In the command line type "

## Credits

https://nodejs.org/en </br>
https://www.w3schools.com </br>

## License

MIT License.
For more information on the license, please refer to the LICENSE file in the repo
