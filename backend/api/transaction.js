const database = require("../database");

async function updatePassbook(db, details, fundedAccBal, fromAccBal){

    const date = new Date();
    const fullDate = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

    const passbookCollection = db.collection("all_user_passbooks");

    await passbookCollection.updateOne(
        {accountnumber: details.fundedAccount},
        {
            $push: {
                [`transactions.${fullDate}`]: { 
                    amount: details.amount, 
                    description: details.description, 
                    credit:true, 
                    debit: false, 
                    balance: fundedAccBal
                }
            }
        },
        { upsert: true }
    )

    await passbookCollection.updateOne(
        {accountnumber: details.fromAccount},
        {
            $push: {
                [`transactions.${fullDate}`]: { 
                    amount: -details.amount, 
                    description: details.description, 
                    credit:false, 
                    debit: true,  
                    balance: fromAccBal} 
            }
        },
        { upsert: true }
    )
}   

async function makeTransaction(details){

    const amount = details.amount;
    const db = await  database.connectDB();
    const password = details.password;
    const collection =  db.collection("bank_user_details");
    const toAccount = await collection.findOne({accountnumber: parseInt(details.fundedAccount.toString())});
    const fromAccount = await collection.findOne({accountnumber: parseInt(details.fromAccount.toString())});

    if(!toAccount){
        return {success: false, error: "Account number does not exists."};
    }
    if(amount<1){
        return {success: false, error: "Please Check Amount."};
    }
    if(details.fundedAccount == details.fromAccount){
        return {success: false, error: "Both account numbers cannot be same."};
    }
    if (toAccount && fromAccount && password==fromAccount.password){
        const fundedAccBal = parseFloat(toAccount.accbalance) + parseFloat(amount)
        const fromAccBal = parseFloat(fromAccount.accbalance) - parseFloat(amount)
        if(fromAccBal<0){
            return {success: false, error: "Insufficient Balance"};
        }else{
            await collection.updateOne(
                {accountnumber: toAccount.accountnumber}, 
                {$set:{
                    accbalance: fundedAccBal,
    
                }}
            )
            await collection.updateOne(
                {accountnumber: fromAccount.accountnumber}, 
                {$set:{
                    accbalance: fromAccBal
                }}
             )
             await updatePassbook(db, details, fundedAccBal, fromAccBal);
    
             return {success: true};
        }
      
    }else{
        return {success: false, error: "Please Check you password"};
    }
}

async function passbookDetails(accountnumber){
    const db = await database.connectDB();
    const collection = db.collection("all_user_passbooks");
    const detail = await collection.findOne({accountnumber: accountnumber});
    return detail;
}

module.exports = {
    makeTransaction,
    passbookDetails
}