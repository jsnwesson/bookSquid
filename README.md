# Welcome to Book Squid!

# Overview
_A brief description outlining the project_

# Description
_A more detailed outline of the project. What does it do? Is there a high level list of features? Consider adding pictures or animates of the features and functionality in this section._

# Table of Contents
_You can link to the different sections below_

# Usage
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

# Roadmap
_What future enhancements are planned? What is the current status of the project? Is it being actively maintained?_

# License
_If open source, state how the project is licensed._

# Meet the Salty Startup!
 - [Hayden Engeling - Program Manager](https://github.com/HaydenEngeling)
 - [Jason Wesson - Program Manager](https://github.com/jsnwesson)

 - [Andrew Chunis - UI Owner](https://github.com/chuniversity)
 - [Alejandro Hernandez - UI Owner](https://github.com/alejleon)

 - [Patrick Sohn - Architect](https://github.com/psohn12)
 - [Jacob Ward - Architect](https://github.com/smilinjake)
 - [Michael Williamson - Architect](https://github.com/mikethegrunt)

# Documents
[Trello](https://trello.com/b/UWWa2Ysg/salty-startup)
[Stakeholder Meeting - First Meeting with Founder/Owner of Book Squid](https://docs.google.com/document/d/1XVfdVLdqtsF1fd_NCHRFCvf3jmnch034Duqoa-Q03HU/edit)

# Engineering Journals
- [Chunis]()
- [Engeling]()
- [Hernandez]()
- [Sohn]()
- [Ward]()
- [Wesson](https://gist.github.com/jsnwesson/a7fabe9e8f0e665a92be9dc1a7321ba1)
- [Williamson]()


# Installation
1. Clone repo down and open two terminals.
One terminal for the '**/bookclub-frontend**' directory and one terminal for '**/bookclub-backend**' directory.

2. In both terminals run `npm install`

3. Create `.gitignore` file (if not already created) in '**/bookclub-backend**' and paste the following:
```
/node_modules
/config.js
/serviceAccount.json
```
4. Create .gitignore file (if not already created) in '**/bookclub-frontend**' and paste the following:
```
/node_modules
/.pnp.pnp.js
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

