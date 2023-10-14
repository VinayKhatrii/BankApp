const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userExist = require("./api/userExist");
const saveDetails = require("./api/saveDetails")
const admin = require("./api/admin.js");
const transaction = require("./api/transaction");

const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:4200',    //Angular app's URL
};

app.use(bodyParser.json());
app.use(cors(corsOptions));


app.get("/", (req, res) => {
    res.send("International Bank Server");
});


app.post("/api/isLoggedIn", async (req, res)=>{
    try{
        const data=req.body;
        const isLoggedIn = await userExist.isLoggedIn(data);
        res.send(isLoggedIn);
    }catch(err){
        console.error("Error in api: /api/isLoggedIn:  ", err);
        res.status(500).send("Internal server error")
    }
    
});
app.post("/api/changeLogIn", async (req, res)=>{
    try{
        const data= req.body;
        await userExist.changeIsLoggedIn(data); 
        res.send(true);
    }catch{
        console.error("Error in api: /api/changeLogIn", err);
        res.status(500).send("Internal Server Error");
    }
});
app.post("/api/userexist", async (req, res) => {
    try{
        const data = req.body;
        const found = await userExist.userExist(data);
        res.send(found);
    }catch(err){
        console.error("Error in api: /api/userexist", err);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/api/validate", async(req, res)=>{
    try{
        const data = req.body;
        const found = await userExist.checkValidity(data);
        res.send(found);
    }catch(error){
        console.error("Error in api: /api/validate", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/api/getUserData", async (req, res)=>{
    try{
        const data = req.body;
        const isLoggedIn = await userExist.isLoggedIn(data);
        if(!isLoggedIn){
            res.send({isLoggedIn:false});
        }else{
            const allData  = await userExist.getAlldata(data);
            if(!allData){
                res.send({isLoggedIn:false});
            }else{
                res.send(allData)
            } 
        }
    }catch(error){
        console.error("Error in api: /api/getUserData", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/api/contactform", async (req, res) => {
    try{
        const details = req.body;
        await saveDetails.saveContactDetails(details);
        res.send({status_code:200, success:true});
    }catch(err){
        console.error("Error in api:/api/contactform "+err);
        res.status(500).send("Internal server error!");
    }
});

app.post("/api/contactDetails", async (req, res) => {
    try{
      const details = await saveDetails.getContactFormDetails();
      res.send({ success: true , details: details});
    }catch (err){
        console.error("Error in api: /api/contactDetails" + err)
        res.status(500).send("Internal server error!");
    }
})

app.post("/api/loan%apply", async (req, res)=>{
    try{
        const formDetails = req.body;
        await saveDetails.saveLoanApplicationDetails(formDetails);
        res.status(200).send({success:true});
    }catch(err){
        console.error("Error in api /api/loan%apply " + err);
        res.status(500).send("Internal server error.")
    }
});

app.post("/api/loanApplications/", async (req, res) => {
    try{
        const details = await saveDetails.getLoanApplications();
        res.send({ success: true , details: details});
    }catch(err){
        console.error("Error in api: /api/loanApplications/" + err)
        res.status(500).send("Internal server error!");       
    }
})

app.post("/api/admin/", async (req, res)=>{
    try{
        const details = req.body;
        const isVerified = await admin.verifyAdmin(details);
        res.status(200).send({isVerified: isVerified, username: details.username})
    }catch(err){
        console.error("Error in: /api/admin/ " + err);
        res.status(500).send("Internal server error.")
    }
});
app.post("/api/admin/addUser/", async ( req, res)=>{
    try{
        const details  = req.body;
       
        const response =  await admin.addCustomerToBank(details);
        if(!response){
            res.status(400).send({error: "Already there is Account!", success:false})
        }else{
            res.status(200).send({success:true})
        }
    }catch(err){
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
})

app.post("/api/admin/changeDetails/", async (req, res)=>{
    try{
        const details = req.body;
        const response = await admin.changeUserDetails(details);
        if (response){
            res.status(200).send({success:true});
        }else{
            res.status(200).send({success:false})
        }
    }catch(err){
        console.error("Error in api/api/admin/changeDetails/ "+err);
        res.status(500).send({success:false})
    }
});

app.post("/api/user/transfer/", async (req, res)=>{
    try{
        const details = req.body;
        const transactionResponse = await transaction.makeTransaction(details);
        res.send(transactionResponse);
    }catch(err){
        console.error("Error in api: api/admin/transfer " + err)
        res.status(500).send({success:false})
    }
})

app.post("/api/user/passbookDetails/", async (req, res)=>{
    try{
        const details = req.body;
        const passbook_details = await transaction.passbookDetails(details.accountnumber)
        if(passbook_details == null){
            res.send({message: "Invalid Details"});
        }else{

            res.send(passbook_details);
        }
    }catch(err){
        console.error("Error in api: /api/user/passbookDetails/" + err)
        res.status(500).send("Internal server error!");
    }
})

app.post("/api/admin/add/", async (req, res) =>{
    try{
        const details = req.body;
        const isUpdated = await admin.addAdmin(details);
        if (isUpdated){
            res.send({success:true});
        }else{
            res.send({success:false});
        }
    }catch (err){
        console.error("Error in api: /api/admin/add/" + err)
        res.status(500).send("Internal server error!");
    }
})

app.post("/api/user/addTransaction", async (req, res) => {
    try{
        const details = req.body;
        const isDone = await admin.addTransactionAdmin(details);
        res.send({ success: isDone });        
    }catch(err){
        console.error("Error in Api: /api/user/addTransaction " + err)
    }
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})