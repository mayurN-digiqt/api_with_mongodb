const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
const Blog = require('./models/blog'); 
const { render } = require('ejs');
const blogRoutes = require('./routes/blogroutes')
// Express App
const app = express();

// For ObjectId is not Valid
// mongoose.Types.ObjectId.isValid("Your id Here..")
// Connect to Mongodb 
const dbURL = 'mongodb+srv://Mayur:Mayur123@curious-techno.ixju3aa.mongodb.net/Curious-Techno?retryWrites=true&w=majority';
mongoose.connect(dbURL)
//  {useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
    app.listen(8080)
    console.log("Connected to DB")
}).catch((err)=>{
    console.log(err)
})


// register View Engine
app.set('view engine','ejs')

// middleware  & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended : true})) 
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.redirect('/blogs')
}) 

app.get('/about',(req,res)=>{
    res.render('about',{title : 'About'})
})
// Blog Routes
app.use('/blogs',blogRoutes)

// 404 Page
app.use((req,res)=>{
    res.status(404).render('404',{title : '404 Page Not-Found'})
})


// mongoose and mongo sandbox routes
// app.get('/add-blog', (req,res)=>{
//     const blog = new Blog({
//         title:'new blog 2',
//         snippet:"about my new blog",
//         body:"more about my new blog"
//     });
//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })

// app.get('/all-blog', (req,res) => {
//     Blog.find()
//     .then((result)=>{
//         res.send(result)
//     .catch((err)=>{
//         console.log(err)
//     })
//     })
// })

// app.get('/single-blog',(req,res)=>{
//     Blog.findById('632155e52bed5b3819be9125')
//     .then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })