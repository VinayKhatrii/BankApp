const database = require("../database");

async function userExist(data){
    try{
        var found = false;
        const db = await database.connectDB();
        const collection = db.collection("bank_user_details");
        const documents = await collection.find({username : data.username}).toArray();
        if (documents.length>0) found = true;
        
        return found;
    }catch(err){
        console.error(err);
    }
}

async function checkValidity(data){
    try{
        var found = false;  
        const db = await database.connectDB();
        const collection = db.collection("bank_user_details");
        const documents = await collection.find({username:data.username, accountnumber: parseInt(data.accountnumber), password:data.password}).toArray();
        if (documents.length===1) found = true;
        return found;
    }catch(err){
        console.error(err);
    }
   
}

async function getAlldata(data){
    try{
        const db = await database.connectDB();
        const collection = db.collection("bank_user_details");
        const documents = await collection.find({username:data.username, accountnumber: parseInt(data.accountnumber)}).toArray();
        return documents[0];
    }catch(err){
        console.error(err);
    }
   
}
async function changeIsLoggedIn(data) {
    try {
        const db = await database.connectDB();
        const collection = db.collection("bank_user_details");
        const updateField = data.what ? { isLoggedIn: true } : { isLoggedIn: false };
        await collection.updateOne(
            { username: data.username, accountnumber: parseInt(data.accountnumber) },
            { $set: updateField }
        );
    } catch (error) {
        console.error("Error updating isLoggedIn:", error);
    }
}

async function isLoggedIn(data){
    try{
        var found = false;
        const db = await database.connectDB();
        const collection = db.collection("bank_user_details");
        const documents = await collection.find({username:data.username, isLoggedIn:true}).toArray();
        if (documents.length===1) found = true;
        return found;
    }catch(err){
        console.error(err);
    }
}

module.exports = {
    userExist,
    checkValidity,
    getAlldata,
    isLoggedIn,
    changeIsLoggedIn
}