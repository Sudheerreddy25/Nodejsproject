const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,"public")))
app.get('/',function(req,res){
  res.send('recharge')
})
app.get('/login',function(req,res){
  res.sendFile(path.join(__dirname,'login.html'))
})

app.get('/Home',function(req,res){
  res.sendFile(path.join(__dirname,'OnMobRec.html'))
})

app.get('/About',function(req,res){
  res.sendFile(path.join(__dirname,'About.html'))
})

app.get('/MobileRecharge',function(req,res){
  res.sendFile(path.join(__dirname,'MobileRecharge.html'))
})

app.get('/DthRecharge',function(req,res){
  res.sendFile(path.join(__dirname,'DthRecharge.html'))
})

app.get('/Signup',function(req,res){
  res.sendFile(path.join(__dirname,'Signup.html'))
})

app.get('/Contact',function(req,res){
  res.sendFile(path.join(__dirname,'Contact.html'))
})

app.get('/LogOut',function(req,res){
  res.sendFile(path.join(__dirname,'login.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});