
const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('./routes'));



app.listen(3000,()=>{
  console.log('online')
})