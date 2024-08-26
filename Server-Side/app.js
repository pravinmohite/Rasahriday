var express=require('express');
//const upload = require('express-fileupload');
var mongoose=require('mongoose');
var bodyParser =require('body-parser');
var cors=require('cors');
var path=require('path');

var app=express();

const route=require('./routes/route');
const blogRoute = require('./routes/blogs');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactList');

//on connection
mongoose.connection.on('connected',()=>{
  console.log('connected to database mongodb @27017');
})

//error callback
mongoose.connection.on('error',(err)=>{
  console.log('error during connection to mongodb:',err);
})

const port=3000;

const app_folder = './../Client_EditableQuestionsAnswers/dist/sample-task';

//cors
app.use(cors());

//body-parser
// app.use(bodyparser.json());
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

app.use('/productImages', express.static('productImages'));

//static files
//app.use(express.static(path.join(__dirname,"public")));
app.use(express.static('./../Client_EditableQuestionsAnswers/dist'));
app.use('/api',route);
app.use('/api/blogs', blogRoute);

app.get('*.*', express.static(app_folder, {maxAge: '2y'}));

app.get('*',(req,res) => {
       res.status(200).sendFile('/',{root: app_folder});
});

app.listen(port,()=>{
  console.log('server started at port:'+port);   
})
