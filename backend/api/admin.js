const db = require("../database");
const extra = require("../extra")

async function verifyAdmin(details){
    const database = await db.connectDB();
    const collection = database.collection("admin_users");
    const adminDetails = await collection.findOne(details);
    return adminDetails !== null;
}
async function addCustomerToBank(details){
    const database = await db.connectDB();
    const collection = database.collection("bank_user_details");
    const isAlreadyAccount = await collection.findOne({username: details.username});
    if (isAlreadyAccount!=null){
        return false;
    }
    details.password = extra.generatePassword(length = 7),
    await collection.insertOne(details);
    return true;
}
async function changeUserDetails(details){
    const database = await db.connectDB();
    const collection= database.collection("bank_user_details");
    const filter = { username : details.username};
    const toChange = details.toChange;
    const newValue  = details.newValue;
    const update  = {
        $set:{
            [toChange]: newValue,
        }
    }
    const updated = await collection.updateOne(filter, update);
    if (updated.modifiedCount >0){
        return true
    }else{
        return false
    }
    
}

async function addAdmin(details){
    const database = await db.connectDB();
    const collection = database.collection('admin_users');
    const date = new Date();
    const today = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    await collection.insertOne(
        {
            username: details.username,
            password: details.password,
            userCreationDate: today
        }
    )
    return true;
}

async function addTransactionAdmin(details){

    const database = await db.connectDB();
    const passbookCollection = database.collection('all_user_passbooks');
    const userDetailsCollection = database.collection('bank_user_details');

    const date = new Date();

    const fullDate = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    const userDetails = await userDetailsCollection.findOne({ accountnumber : details.accountnumber });
    const balance = userDetails.accbalance;
    if(details.debit){
        details.amount =  -details.amount
    }
    await userDetailsCollection.updateOne(
        { accountnumber : details.accountnumber },
        { 
            $set:{
                accbalance : balance + details.amount 
            }
        }
    )

    await passbookCollection.updateOne(
        { accountnumber : details.accountnumber },
        {
            $push : {
                [`transactions.${fullDate}`]: { 
                    amount: details.amount, 
                    description: details.description, 
                    credit: details.credit, 
                    debit: details.debit, 
                    balance: balance + details.amount
                }
            }
        },
        { upsert: true }
    )
    return true;
}

module.exports = {
    verifyAdmin,
    addCustomerToBank,
    changeUserDetails,
    addAdmin,
    addTransactionAdmin
}
  