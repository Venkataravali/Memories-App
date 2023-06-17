##  Packages 
body-parser-enable us to send post request
cors- enable us cross origin request 
express-as framework to create routing for application 
mongoose - To create modals for our post 
nodemon - automatically restart whenever any changes made 

import them all :for importing in latest manner need to use type:'module' in package.json
bodyParser integration 
"type":"module"

## folder structure 
routes,controller ,model 
in controllers we can create handlers for routes if we have many routes in that case it's usefull
in model we need to create schema 
in mongoDB we create documents which have type string some have boolean 
mongoose library will provide uniformity to our documents so that we can specify post has what type 
for example
const postSchema = mongoose.Schema({
    title:String,
    creator: String,
    message:String,
    tags:[String],
    selectedFile: String,
    likedCount:{
        type: Number,
        default:0
    },
    createAt:{
        type:Date,
        default: new Date()
    }
}) 
const postMessage = mongoose.model('',schema)
export default postMessage 
from model we can implement create,read update and delete operations 
