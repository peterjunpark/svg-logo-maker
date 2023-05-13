# SVG Logo Maker
[![License](https://img.shields.io/badge/License-MIT%20License-informational)](#License)

## Table of Contents
1. [Description](#Description)
1. [Installation](#Installation)
1. [Usage](#Usage)
1. [Contributing](#Contributing)
1. [Tests](#Tests)
1. [License](#License)

## Description
### What is this?
A command line application that generates simple SVG graphics so you can save time and money when in need of a basic logo.

### What does it do?
The SVG Logo Maker asks a series of prompts and creates a custom 300 x 200 SVG logo based on your responses.

## Installation
### Dependencies
Node.js and npm are required to install this application. This application's functionalities depend on [Inquirer](https://www.npmjs.com/package/inquirer) (npm).

### Steps
1. Clone this repository into your desired location on your local machine.
2. Navigate to your local copy of the README Generator in your command line `cd`.
3. Use `npm install` to install dependencies required to run the application.


## Usage
### Getting Started
1. Navigate to your local copy of the SVG Logo Maker via your command line `cd`.
2. Enter `node index.js` to start the application.
3. Complete the prompts.
   - When inputting colors, **hex codes** (preceded by a `#`) and **named SVG color keywords** can be used interchangeably.
   - Refer to [this w3 doc](https://www.w3.org/TR/SVG11/types.html#ColorKeywords) on accepted color keywords.
5. Your generated *logo.svg* file will be created locally in the **output** folder.

![image](https://github.com/qkr0wns/svg-logo-maker/assets/115042610/8515dd5b-7433-4fc0-b670-b802276a70b0)


[Video walkthrough](https://www.youtube.com/watch?v=td3wjK2Guc8) on using the application.
## Contributing
N/A

## Tests
This project uses [Jest](https://jestjs.io/) for unit tests on classes and utility functions to ensure correct outputs.
After you've entered `npm install` to get dependencies and devDependencies, use `npm run test` to start testing.

## License
This application is covered under the MIT License. See [LICENSE](./LICENSE) in repo.

## Questions
If you have any additional questions, please reach out to me via email at [peterjpark@pm.me](mailto:peterjpark@pm.me).
To see more of my work, check out my GitHub profile: [qkr0wns](https://github.com/qkr0wns).
