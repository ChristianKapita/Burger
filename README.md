# Burger

## Description

This Project consist of note taker  application that allows user to input the names of burger they would like to eat and then devour them!

## Table of Contents
* [Functionality](#Functionality)
* [Installation](#installation)
* [Usage](#usage)
    * [Screenshots](#screenshots)
* [Credits](#credits)
* [License](#license)

## Functionality

Using ORM, this application has 3 basic CRUD functions : 

1. READ all entries from the MySQL database and display them to the DOM using Handlebars.
2. UPDATE a selected burger by clicking "Devour It", which * hits an /api/hamburger/:id route in Express to change its "devoured" status in the MySQL database * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)
3. CREATE a new burger using the "Place Order" form, which * hits a /api/hamburger route in Express to insert a new burger into the MySQL database * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)

## Installation

Steps to install application:
1. Clone repository.
2. In the directory with app.js run npm install
3. in the database folder, use in Mysql the shema.sql to create the database schema, and seeds.sql to populate default data in the table
4.  run node Server.js in your CLI
5. Type http://localhost:8080 in you browser.

This app is live on <a href="https://blooming-cliffs-57891.herokuapp.com/"><img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/></a>

```
git clone git@github.com:ChristianKapita/Burger.git
npm instal
node  Server.js

```

## Usage
### Screenshots


![Working App-Eat da burger](https://user-images.githubusercontent.com/73804862/110275497-24de2d00-7f9f-11eb-93ba-4844e2a93b56.PNG))

## Credits

### Author

- 💼 Christian Kapita
- :octocat: Github: [ChristianKapita](https://github.com/ChristianKapita)


### Technology used

</br>
<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HMTL" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
    <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/-Javascript-yellow?style=for-the-badge" alt="Javascript" /></a>
    <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/-Bootstrap-blueviolet?style=for-the-badge" alt="Bootstrap" /></a>
    <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-Node-orange?style=for-the-badge" alt="Node" /></a>
    <a href="https://www.npmjs.com/package/inquirer"><img src="https://img.shields.io/badge/-Handlebars-blue?style=for-the-badge" alt="Handlebars" /></a>
  <a href="https://www.mysql.com/"><img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white" alt="Mysql" /></a>
</p>

## License

</br>
<p align="center">
    <img align="center" src="https://img.shields.io/github/license/kqarlos/team-profile-generator?style=for-the-badge" alt="MIT license" />
</p>
