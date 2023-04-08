const express = require("express");
const app1 = express();

app1.set("view engine","ejs");
app1.use( express.static( "public" ) );
app1.use(express.static(__dirname + '/public'));

app1.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
}) 

app1.get("/",(req,res)=>{
    res.render("home")
})
app1.get("/SignUp",(req,res)=>{
    res.render("SignUp")
})
app1.get("/Login",(req,res)=>{
    res.render("Login")
})
app1.get("/home",(req,res)=>{
    res.render("Expenses")
})
app1.get("/analytics",(req,res)=>{
    res.render("Analytics")
})
app1.get("/password",(req,res)=>{
    res.render("password")
})

app1.listen(process.env.PORT || 3000, () => {
    console.log('backend running')
})
