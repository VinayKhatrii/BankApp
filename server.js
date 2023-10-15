const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:4200',    //Angular app's URL
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

require('./backend/main')(app);
app.get('*', async (req, res)=>{
    res.sendFile("./dist/bankapp/index.html")
})
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})