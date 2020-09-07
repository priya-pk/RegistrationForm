const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const api = require('./routes/api');

app.use(cors({ origin: "http://localhost:4200"}));
app.use(bodyParser.json());
app.use('/api',api);
app.get('/',(req,res)=>{
    res.send('Hello');
})

app.listen(3000,()=>{
  console.log('server running on localhost: 3000')
})