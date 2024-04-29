const express = require('express')
const path = require('path')
// const hbs = require('hbs')
const app = express();
const PORT = process.env.PORT || 4000;


const staticpath = path.join(__dirname,"../public")
// const template_path = path.join(__dirname,"../src/templates/views")
// const partials_path = path.join(__dirname,"../src/templates/partials")
// app.set("view engine", "hbs")
// app.set('views',template_path)
// hbs.registerPartials(partials_path)


app.use(express.static(staticpath))

//routing
app.get("/",(req,res)=>{
    res.send("index")
    // res.send("index")
})
app.get("/about",(req,res)=>{
    // res.render ("about")
    res.send("about")
})
app.get("/weather",(req,res)=>{
    // res.render("weather")
    res.send("weather")
})

app.get("*",(req,res)=>{
    res.send("404error")
    // res.render("error")
})

app.listen(PORT,()=>{
    console.log("listining")
})