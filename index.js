require("dotenv").config();

const express= require("express");
const mongoStore= require("connect-mongo")
const path = require("path");
const ejs= require("ejs");
const expressSession = require("express-session");
const mongoose= require("mongoose");
const auth = require("./middlewares/auth");
const redirectIfAuth = require("./middlewares/redirectIfAuth")
const loggedInMiddleware = require("./middlewares/loggedIn");
const checkUserType = require("./middlewares/checkUserType");
const g2Details= require("./models/g2Details");
const homeController= require("./controllers/homeController");
const gController= require("./controllers/getG_Details");
const g2Controller= require("./controllers/getG2_Details");
const loginController= require("./controllers/login");
const getloginController= require("./controllers/getLogin");
const signupController= require("./controllers/postNewUser");
const getSignupController= require("./controllers/getSignUp");
const postG2Controller= require("./controllers/postG2_Details");
const postGController= require("./controllers/postG_Details");
const getAppointmentController= require("./controllers/get_Appointment");
const postAppointmentController= require("./controllers/post_appointment");



const app= new express();
global.loggedIn = null;

app.use(expressSession({secret: "kaur21", 
resave: false,
 saveUninitialized: true ,
  store: mongoStore.create({mongoUrl:process.env.MONGO_URL})}
 ));
app.use("*", loggedInMiddleware)
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(
  process.env.MONGO_URL,
    {useNewUrlParser:true}
  );

  

app.get("/",getloginController);

app.get("/dashboard",homeController);

app.get("/g",gController);

app.get("/g2",g2Controller);

app.get("/signup", redirectIfAuth, getSignupController);

app.get("/login", redirectIfAuth, getloginController);

app.get("/appointments", getAppointmentController);


app.post("/g2/post",postG2Controller);

app.post("/g/post",postGController);

app.post("/users/signup", redirectIfAuth, signupController);

app.post("/users/login", redirectIfAuth, loginController);

app.post("/post/appointment",postAppointmentController);

app.listen(4000,()=>{
    console.log("listen 4000");
});