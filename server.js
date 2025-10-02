//1.dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");



require("dotenv").config();




//import routes
const indexRoutes = require("./routes/indexRoutes");

//2.Instantiations
const app = express();
const port = 3000;

//3.configurations
//settingup mongodb connections
mongoose.connect(process.env.MONGODB_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

  // setting view engine to pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
//4.Middleware
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended: true })); // helps to pass data from forms
app.use(express.static("public"));




//5.Routes
//using imported routes
app.use("/",indexRoutes);





//non existent route handler
app.use((req, res) => {
  res.status(404).send("Oops! Route not found.");
});
//6.Bootstrapping Server
//this should always be the last line in this file.
app.listen(port, () => console.log(`listening on port ${port}`));