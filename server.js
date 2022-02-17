/* 1. npm install react-router-dom ------you’ll render the login page on any route so that your users can login to the application without being redirected to a new page.
 */

//6. install express. Since the server is not a requirement of the final build, be sure to install as a devDependency.also need to install cors. This library will enable cross origin resource sharing for all routes.


const express = require('express');
const cors = require('cors')//8.import cors, then add it to the application by calling the use method on app
const app = express();//7.Import express, then initialize a new app by calling express() and saving the result to a variable called app:

app.use(cors());//9. add cors to the application by calling the use method on app


//10.listen to a specific route with app.use. The first argument is the path the application will listen to and the second argument is a callback function that will run when the application serves the path. The callback takes a req argument, which contains the request data and a res argument that handles the result.
app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});


//11.run the server on port 8080 using app.listen
//12. if you visit  http://localhost:8080/login and you’ll find your JSON object.
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));