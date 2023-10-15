const { MongoClient, ServerApiVersion } = require('mongodb');

const db_user = "username";
password";

const uri = `uri`;

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
