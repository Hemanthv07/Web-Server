const path = require('path')
const express = require('express')
const { title } = require('process')


// console.log(__dirname)
// // console.log(__filename)
// console.log(path.join(__dirname,'../public'))



const app = express()
const publicDirectoryPath=path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('/index',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Hemanth'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Hemanth'
    })

})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'This is some helpful text.'
    })
})


app.get('',(req,res)=>{
    res.send('Hello express!')
})

app.get('/help',(req,res)=>{
    res.send([{
        name:'Andrew'
    },{
        name:'sarah'
    }])
})

// app.get('/about',(req,res)=>{
//     res.send('<h1>About<h1>')
// })

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'It is snowing',
        location:'Philadelphia'
    })
})


app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})

//Goal: Setup two new routes

//1. Setup an about route and render a page title
//2. Setup a weather route and render a page title
//3. Test your work by visiting both in the browser



//Goal: Create two more HTML files

//1.create a html pages for about with "About" title
//2.create a html pages gor help with "Help" title
//3.remove the old route handlers for both
//4.visit both in the browser to test the work

//Goal: Create a template for help pages

//1.setup a help template to render a help message to the screen
//2.setup the help route and render the template with an example message
//3.visit the route in the browser and see your help message print