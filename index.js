
const express = require("express");

const app = express();

app.use(express.urlencoded({extended:true}))

app.set('view engine' , 'ejs')

let tasks = []

app.get("/" , (req , res)=> {

    res.render('index' , {tasks:tasks})
    console.log(tasks)
})


app.post("/delete" ,async (req , res) => {
    let index = await req.body.index
    console.log(index)
    if(index){
        tasks.splice(index , 1);
    }
    res.redirect("/")
})

app.post("/edit" , async (req , res) => {
    let index = await req.body.index;
    console.log(index)
    let newelement = await req.body.new

    console.log(newelement)

    if(index){
        tasks[index] = newelement;
    }

    res.redirect("/")
})

app.post("/add" , async (req , res) => {

    let task = await req.body.task 

    if(task){
        tasks.push(task);
    }

    res.redirect("/")
})


app.listen(3000)