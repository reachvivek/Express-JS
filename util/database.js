const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient;

let _db;

const mongoConnect=async(callback)=>{
  let conn=MongoClient.connect('mongodb+srv://admin:gBMsAGQkUXg0cCfp@e-commerce.fglaphh.mongodb.net/?retryWrites=true&w=majority');
  await conn;
  conn.then(response=>{
    console.log(response, "Connected!")
    _db=response.db()
    callback(response)
  }).catch(err=>console.log(err))
}

const getDb=()=>{
  if(_db){
    return _db
  }
  throw 'No Database Found!'
}

exports.mongoConnect=mongoConnect
exports.getDb=getDb