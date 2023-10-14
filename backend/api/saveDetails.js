const database = require("../database");

async function saveContactDetails(details){
    const db = await database.connectDB();
    const collection = db.collection("bank_contact_form_details");
    await collection.insertOne(details);
}

async function saveLoanApplicationDetails(details){
    const db = await database.connectDB();
    const collection = db.collection("loan_application_details");
    collection.insertOne(details);
}

async function getContactFormDetails(){
    const db = await database.connectDB();
    const collection = db.collection("bank_contact_form_details");
    return await collection.find().toArray();
}

async function getLoanApplications(){
    const db = await database.connectDB();
    const collection = db.collection("loan_application_details");
    return await collection.find().toArray();
}
module.exports = {
    saveContactDetails,
    saveLoanApplicationDetails,
    getContactFormDetails,
    getLoanApplications
    
}