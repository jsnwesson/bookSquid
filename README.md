<p align="center">
  <a href="https://github.com/hratx-blue-ocean/Salty-Startup">
    <img src="https://cdn.discordapp.com/attachments/863092007286603847/863498512263413760/Screen_Shot_2021-07-10_at_3.12.17_PM.png" alt="Logo" width="500">
  </a>
  <p align="center">
    At Book Squid, your bookshelf is no longer made of rich mahogany and filled with many leatherbound books -- it's virtual!
  </p>
</p>

# Table of Contents
1. [Overview](#overview)
2. [Usage](#usage)
3. [Installation Instructions](#installation)
4. [Meet the Salty Startup!](#team)
   - [Documents](#documents)
   - [Engineering Journals](#journals)
5. [Technologies](#technology)
6. [Roadmap](#roadmap)
7. [License](#license)

# Overview <a name="overview"></a>
Not only will you be able to look up any book that you have read or are interested in, but you can add those books to your personalized reading lists and share them with the world. You can also write reviews and leave ratings for others to read so that they have a more accurate idea of the book rather than judging a book by its cover. Our front page also shares our users' recommendations and reviews to the books they read, that way readers will always find something to read! 

# Usage <a name="usage"></a>
When the user enters the URL, they'll be brought to Book Squid's main landing page:

<img src="http://g.recordit.co/TPL5Jd1gI3.gif" alt="landing page" width="450">

<!-- <img src="http://g.recordit.co/TPL5Jd1gI3.gif" alt="landing page" width="450"> <img src="http://g.recordit.co/TPL5Jd1gI3.gif" alt="landing page" width="0">
-->

From the main landing page, the user is able to either begin immediately searching for books, click on a book that's being featured, or sign in and access their profile. Let's see what the profile will look like!

<img src="http://g.recordit.co/rvFGxdtVlp.gif" alt="profile page" width="450">

On each page, there will be a search bar that allows the users to see the results of a book title, author, or keyword:

<img src="http://g.recordit.co/3hF8KezEKI.gif" alt="search results page" width="450">

Lastly, when the user clicks on any book features in the results or under a reading list, they'll see the details and reviews of that book:

<img src="http://g.recordit.co/M7WHtlHQGa.gif" alt="book page" width="450">

# Installation <a name="installation"></a>
1. Clone repo down and open two terminals.
One terminal for the '**/bookclub-frontend**' directory and one terminal for '**/bookclub-backend**' directory.

2. In both terminals run `npm install`

3. Create `.gitignore` file (if not already created) in **/bookclub-backend** and paste the following:
```
/node_modules
/config.js
/serviceAccount.json
```
4. Create `.gitignore file` (if not already created) in **/bookclub-frontend** and paste the following:

```
/node_modules
/.pnp
.pnp.js
/coverage
/build
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

5. Create `config.js` file in '**/bookclub-backend**' and paste the following:
(this is for accessing the mongoDB Atlas cloud database that is already deployed using `mongoose.connect()` already written in '**/bookclub-backend/index/js**')
```
const atlasPassword = '[REDACTED]'
module.exports = atlasPassword;
```
6. [OPTIONAL] If you want to connect to this database in  MongoDB Compass insert this into the connection SRV string input:
(no quotations around this string, just like this... and obviously don't share this string anywhere online or the password)
```
mongodb+srv://[REDACTED]:[REDACTED]@bookclub.mgvz6.mongodb.net/test?authSource=admin&replicaSet=atlas-10200k-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
```
7. create `serviceAccount.json` file in '**/bookclub-backend**' and drag and drop this zip file into it:
(do not save this zip file anywhere online and double check that your serviceAccount.json file is in the `.gitignore file` for '**/bookclub-backend**')

**JSON FOLDER IN DISCORD**

**Do not post this JSON file** from the zip anywhere on the internet or in a file that gets pushed to GitHub

8. After you have this set up you need to have two terminals open 
One terminal for the '**/bookclub-frontend**' directory and one terminal for '**/bookclub-backend**' directory

In the frontend terminal run `$ npm start`

In the backend terminal run `$ npm run dev`

# Meet the Salty Startup! <a name="team"></a>
 - [Hayden Engeling - Program Manager](https://github.com/HaydenEngeling)
 - [Jason Wesson - Program Manager](https://github.com/jsnwesson)

 - [Andrew Chunis - UI Owner](https://github.com/chuniversity)
 - [Alejandro Hernandez - UI Owner](https://github.com/alejleon)

 - [Patrick Sohn - Architect](https://github.com/psohn12)
 - [Jacob Ward - Architect](https://github.com/smilinjake)
 - [Michael Williamson - Architect](https://github.com/mikethegrunt)

## Documents <a name="documents"></a>
- [Trello](https://trello.com/b/UWWa2Ysg/salty-startup)
- [Stakeholder Meeting - First Meeting with Founder/Owner of Book Squid](https://docs.google.com/document/d/1XVfdVLdqtsF1fd_NCHRFCvf3jmnch034Duqoa-Q03HU/edit)

## Engineering Journals <a name="journals"></a>
- [Chunis]()
- [Engeling]()
- [Hernandez]()
- [Sohn]()
- [Ward]()
- [Wesson](https://gist.github.com/jsnwesson/a7fabe9e8f0e665a92be9dc1a7321ba1)
- [Williamson]()

## Technologies <a name="technology"></a>
<table>
  <tr>
    <td>Languages</td>
    <td><img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/></td>
  </tr>
  <tr>
    <td>Frameworks & Libraries</td>
    <td><img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/></td>
  </tr>
  <tr>
    <td>Hosting</td>
    <td><img alt="AWS" src="https://img.shields.io/badge/AWS%20-%23FF9900.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white"/> </td>
  </tr>
  <tr>
    <td>Authentication</td>
    <td><img alt="Firebase" src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"/> </td>
  </tr>
  <tr>
    <td>Databases</td>
    <td><img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> </td>
  </tr>
  <tr>
    <td>Testing</td>
    <td><img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?&style=for-the-badge&logo=jest&logoColor=white"/></td>
  </tr>
</table>

# Roadmap <a name="roadmap"></a>
_What future enhancements are planned? What is the current status of the project? Is it being actively maintained?_

# License <a name="license"></a>
_If open source, state how the project is licensed._
