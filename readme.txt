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

install mongodb on digital ocean:-

https://wiki.crowncloud.net/How_To_Install_Duf_On_Ubuntu_22_04?How_to_Install_Latest_MongoDB_on_Ubuntu_22_04

to restart nginx
->go to /etc/nginx/sites-available
>run following command
sudo service nginx restart

https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04



*------------To take mongodb backup------------*

For all mongodb databases:-

go to folder where you want to take the backup
 
 -> mongodump

To add specific DB(questionAnswers) in new folder i.e frontendinterviewquestion_dump

-> mongodump -d questionAnswers --out frontendinterviewquestion_dump

*------------To restore mongodb backup------------*

For all mongodb databases:-

go to folder where you want to take the backup
 
 -> mongorestore

To add specific DB(questionAnswers) in new folder i.e frontendinterviewquestion_dump

-> mongorestore questionAnswers

Restore database in digitalocean:-

 To restore database questionAnswers with name questionAnswers in digitalocean, use below command

-> mongorestore -d questionAnswers questionAnswers


Important mongodb queries:-
 
 1. To check all databases
  
  ->show dbs

 2. To go inside any database (databasename can be contactList etc)

 -> use databasename

  1. To check all tables inside database

    -> show collections

  2. To check data inside data inside tables

    -> db.contactList.find() //where contactList is table name

    or 

    -> db.questiontype.find() // where questiontype is table name
    
    
 ------To fix mongodb issue once space is full------------------


 ->   Set appropriate permissions on the file:

        /tmp/mongodb-27017.sock

        -> sudo chown `whoami` /tmp/mongodb-27017.sock

        or

        -> sudo chown root /tmp/mongodb-27017.sock
       
        OR

  ->   Run

        sudo service mongod start && mongod



To fix mondod.service error(unit mongod service not found) ,check below link:-

https://medium.com/@Sensational_i/failed-to-start-mongod-service-unit-mongod-service-not-found-f0479b637fc0


Mongod  on unbuntu:-

root@ecommerce-webapp:~/Rasahriday# mongo
MongoDB shell version v5.0.15
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb

> show dbs
admin        0.000GB
config       0.000GB
contactList  0.000GB
local        0.000GB

> use contactList
switched to db contactList
> db
contactList

->to get all data of carts table

db.carts.find()

To check size of folder:-

root@ecommerce-webapp:~# du -sh Rasahriday/
665M    Rasahriday/

to find disk space used by folders:-

du -hx --max-depth=1 /