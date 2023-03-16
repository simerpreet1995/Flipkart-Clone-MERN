### Flipkart Clone using mern

# First Commit
### Header.jsx
# `Create a folder components, components folder has main file Header.jsx where we have created logo and logo heading i.e Flipkart Explore Plus `
 ### `Header.jsx file we have create appbar here we have imported serachbar and custom button (custom buttom are right side menus) `

 ### `header.jsx file we have given some margin and align custom button towards right side with styled components i.e., CustomButtonWrapper`


 ### Search.jsx
 # In Search.jsx we have creaed input search base with search icon
 ### `when we import search icon it was invisible to make it visible give a color and display flex to its parent components`

 ## `we need to  adjust input field conatainer height so give display flex to SearchIconWrapper styled component`


### CustomButton.jsx
# In this file we have created LoginButton, Become a seller, more and cart


### components --> Home -->Home.jsx
## Home.jsx import into App.js 
## Main file Navabar (naviagtion cards), carousel and product details import here
## `When we import Home.js into App.js it will not shown  reason it is hiden behind header inspect this because Appbar has position fixed by default we need position fixed we can't remove so we import a box and with home and give style i.e margin top `
## `To display page it holds navigation, slider/carousel product details etc. `

### home folder --> Navbar.jsx
## Navbar.jsx
# `To display navigation card we import into Home.jsx we `
## `In NavBar.jsx we loop our products by importing name export {navData} from constants folder and file name data.js and loop here to render all the data`

### src (folder) --> constants (folder) -> data.js
## data.js file contains all the data we need to loop


### component -> home (folder) --> Banner.jsx
## Banner.jsx 
## Bannner.jsx import into Home.jsx
### `react-multi-carousel` download this using npm `npm i react-multi-carousel`
# See the documentation and make slider according to your choice
### We need a padding/ border of gray color surrounding to banner so we go to Home.jsx and rest of the navbar we wrap all the components with <Box> </Box> and with styled component change Box name to <Component> and give padding and background color gray



### now we need to configure backend to show product and its details 
### come out of frontend directory and make a new folder with name server
# `make a file with name index.js make a package.json file with command in terminal npm init` 
## download dependicies like
# `npm i express`
# `npm i nodemon -D`  go to pacakge to json and make a new script "start" : "nodemon index" it will automatically start server on typing comnd `npm start`
# `npm i mongoose`

## to use the latest version of ES6 direct import/export go to package.json and give type="module"

### now we need to set up our database so we go to google and type cloud.mongodb.com and setup our database by providing details

### server --> database (folder) --> db.js
### db.js (our database file) 
# `npm i mongoose` to connect mpongoose with express
# `import mongoose in db.js file`
# `mongoose.connect() this is a function to connect mongodb it takes url and object {useNewUrlParser: true} means parse the url by mongodb`


### Important note --> dont show your username and passoword into your code make a separate file and put there .env file is the solution for that
## `npm i dotenv` 
# import dotenv from 'dotenv' into index.js and initialize there like this  ---> dotenv.config()
# make a file in server folder --> .env


### To add data in database create a file and put data/url/images/description/tagline there
## server (folder) --> default.js

## To add our files/data create a file
## server (folder) --> constants (folder) --> data.js

# import data.js into default.js file and use map funtion to render all the data in default.js but before we need to validate our data

### To validate our data make folder 
# server --> model (folder) --> product-schema.js
# `import Product (model/schema) into default.js file `