const { MongoClient, ServerApiVersion } = require('mongodb');

const db_user = "vinay";

const db_pass = "vinay7387";

const uri = `mongodb+srv://${db_user}:${db_pass}@bankapp.0hxyyz3.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

(async () => await client.connect())

async function connectDB(){
  try{
    const db = client.db("internationalbank");
    return db;
  }catch(err){
    client.close();
    throw err;
  }
}
module.exports = {
  connectDB,
}
