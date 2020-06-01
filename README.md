The code contains two folders, the frontend folder deals with the UI and the apis are present in backend folder.

# STACK:
Frontend: Reactjs,
Backend: Express Js and 
Database: MongoDB

# FrontEnd

+ Frontend is a react app. It contains a single compoent which contains the code logic. 
+ The component state  contains 20 points (in state variable points) at the beginning and as the game progress, it will add or subtract 1 from the given points.
if the this.state.points equals 20 that means the user won the game else if the this.state.poitns equals 10 then that means the user lost the game. 
+ To fetch the names from the backend, I used Axios calls. This call happens in the createQuestion() function in the component.
+ Reset and End game button are handled by separate functions handleReset() and handleEnd().


# Backend

+ Backend is a expressjs app. It contains a single user router and single controller.

# GenderAPI
+ I used GenderApi to know the gender of the given firstName. The Api key is present in the config file.
+ To make use of this, i have included my own API key generated from the GenderApi_key site. if you have any other GenderApi_key you can use that. To change that, go the the config.js file in the root directory.

# Models:
+ Models has a file user.js which has the schema for the user table. User table is a single column table(firstName).
+ All the name for fed into the database using a script present in the backend folder called script.js.
To make use of the script file, go into the config file and change the script.

# Routes:
+ This app contains a single route user api. That api endpoint is a get api and calls the user.controllers.js controller

# Controller:
+ The user.controllers.js controller fetch data from the database and if the current record doesn't contain the gender it makes a api call and by using the GenderAPi method.

# utils.js:
+ This file contains a utility function to get gender of the given name using GenderAPI node client.



# How to run the code:
+ To run the frontend, go to the frontend folder and run the following command,
        cd frontend/  (from the root directory)
        npm install
        npm start

+ To run the backend, follow below steps,
        cd frontend/  (from the root directory)
        npm install 
        npm start 


# Challenge:
- Avoiding unnecessary api calls
    This is achieved by saving the gender when we make the  api call to GenderApi for the first time.
