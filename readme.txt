npm install	
I:\Passion_for_coding\Angular_Projects\EditableQuestionsAnswers:- nodemon (port 3000)
I:\Passion_for_coding\Angular_Projects\EditableQuestionsAnswers\Client_EditableQuestionsAnswers:-ng serve (port 4200)	
mongodb:-"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath I:\Passion_for_coding\data\db

latest mongodb:-

mongodb:-"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath D:\DB\data\db

->to run queries got to mongodb application 
show dbs
use contactList 
db.getCollectionNames().map( (name) => ({[name]: db[name].find().toArray().length}) ) 

to run dist folder locally:-

I:\Passion_for_coding\Node_Projects\AmazingJavascript\Client_EditableQuestionsAnswers>angular-http-server --path I:\Passion_for_coding\Node_Projects\AmazingJavascript\Client_EditableQuestionsAnswers\dist\sample-task

debug angular code in chrome->run with development configuration

"development": { // this is new!
    "buildOptimizer": false,
    "optimization": false,
    "vendorChunk": true,
    "extractLicenses": false,
    "sourceMap": true,
    "namedChunks": true
  }
  
  ng build --configuration development


  
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3B4FE6ACC0B21F32

mongodb on ubuntu 22


const app_folder = './Client_EditableQuestionsAnswers\dist\sample-task';

//cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

app.use('/productImages', express.static('productImages'));

//static files
//app.use(express.static(path.join(__dirname,"public")));
app.use(express.static('./Client_EditableQuestionsAnswers/dist'));
app.use('/api',route);

app.get('*.*', express.static(app_folder, {maxAge: '2y'}));

app.get('*',(req,res) => {
       res.status(200).sendFile('/',{root: app_folder});
});

app.listen(port,()=>{
  console.log('server started at port:'+port);   
})

to restart nginx
->go to /etc/nginx/sites-available
>run following command
sudo service nginx restart