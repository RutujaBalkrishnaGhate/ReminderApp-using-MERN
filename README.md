[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/QIcAv7Ya)
<div align="center">

  <h2 align="center">### Reminder App ###</h2>

</div>

To learn and implement Node.js and REST API using the MVC model, the objective is to develop a Reminder list that allows users to create, update, delete, and search reminder list items using MongoDB. The project will involve utilizing Express, a backend web application framework, to build a RESTful API with Node.js.

### Run Locally

To run **Reminder** locally, run this command on your git bash:

Linux and macOS:

```bash
sudo git clone git@github.com:neu-mis-info-6150-spring-2023/assignment-10-RutujaBalkrishnaGhate.git
```

Windows:

```bash
git clone git@github.com:neu-mis-info-6150-spring-2023/assignment-10-RutujaBalkrishnaGhate.git
```

To install  - > npm init <br>
Then run the command for getting  dependencies- > npm install express cors debug mongoose <br>
Open the folder in VScode -> Go to terminal -> run the command (npm run start)

IDE used to create the project is VScode, Mongodb Compass, Postman.

### Details 

Web applications which has the following components;

1) MongoDB – The standard NoSQL database

2) Express.js – The default web applications framework

3) Node.js – Framework used for scalable server-side and networking applications.

### Steps to connect to MONGODB database using NODE.JS

* Import MongoClient
The MongoDB module exports MongoClient, and that’s what we’ll use to connect to a MongoDB database. We can use an instance of MongoClient to connect to a cluster, access the database in that cluster, and close the connection to that cluster.

const {MongoClient} = require('mongodb');

* Create our main function

After that, we have to call the connect method of Mongoose

mongoose.connect("mongodb://localhost:27017/reminderDb);To install  - > npm init <br>
Then run the command for getting  dependencies- > npm install express cors debug mongoose <br>
Open the folder in VScode -> Go to terminal -> run the command (npm run start)

IDE used to create the project is VScode, Mongodb Compass, Postman.

### Details 

Web applications which has the following components;

1) MongoDB – The standard NoSQL database

2) Express.js – The default web applications framework

3) Node.js – Framework used for scalable server-side and networking applications.

### Steps to connect to MONGODB database using NODE.JS

* Import MongoClient
The MongoDB module exports MongoClient, and that’s what we’ll use to connect to a MongoDB database. We can use an instance of MongoClient to connect to a cluster, access the database in that cluster, and close the connection to that cluster.

const {MongoClient} = require('mongodb');

* Create our main function

After that, we have to call the connect method of Mongoose

mongoose.connect("mongodb://localhost:27017/reminderDb);

### Contact

If you want to contact with me you can reach me at ghate.r@northeastern.edu

### License

This project is **free to use** and does not contains any license.

Thanks 

Rutuja Ghate

