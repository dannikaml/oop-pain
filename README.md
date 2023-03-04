# Team Profile Generator

## Description
***
Using a command-line application to generate/create an index.html file that will catalog Employee info by utilizing Inquirer 8.2.4 by Node.js and can be tested by utilizing Jest. 
 

## Usage
***
By utilizing Node.js we can create a command-line application that dynamically generates an HTML file from a user's input using the Inquirer package.

To install inquirer, please use:

```
npm i inquirer@8.2.4
```

The application will be invoked by using the following command:
```
node index.js
```
To run tests use the following command:
```
npm test
```


### User Story
 ```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
### Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
***
## Link to walk-through video



![screenshot]()

***


### Sources

stackoverflow: 
- https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
- https://stackoverflow.com/questions/49854811/class-extends-value-object-is-not-a-constructor-or-null
- https://stackoverflow.com/questions/59723177/uncaught-typeerror-class-extends-value-object-is-not-a-constructor-or-null

Youtube:
- https://www.youtube.com/watch?v=IMJFw1ZY-L4
- https://www.youtube.com/watch?v=bhHa6AL4aBo
- https://www.youtube.com/watch?v=KqQoiFBp36A
- https://www.youtube.com/watch?v=31LhQkLcZvE&t=6s

w3schools:
- https://www.w3schools.com/css/css_icons.asp
- https://www.w3schools.com/css/tryit.asp?filename=trycss_icons_google
- https://www.w3schools.com/jsref/jsref_tostring_string.asp#:~:text=The%20toString()%20method%20is,it%20in%20your%20own%20code.

bootstrap:
- https://getbootstrap.com/docs/5.3/getting-started/introduction/

github:
- https://github.com/nicolewallace09/team-profile-generator

mdn:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_constructor
- https://developer.mozilla.org/en-US/docs/Glossary/Constructor
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class

jest:
- https://jestjs.io/docs/getting-started

sources/references:
- Instructor: Bassie; TA - Ethan; Tutor - Ashlae