const express = require('express');
const cors = require('cors');
const courses = require('./courses.json');


const app = express();
app.use(cors());

const port = 5000;

app.get('/',(req,res)=>{
  res.send('E-school server running')
})

app.get('/courses',(req,res)=>{
  res.send(courses)
})

app.get('/courses/:id',(req,res)=>{
  const id = parseInt(req.params.id);
  const course = courses.find(ph => ph.id === id) || {};
  res.send(course);
})
app.listen(port,()=>{
  console.log(`E-school server running on port :${port}`)
})