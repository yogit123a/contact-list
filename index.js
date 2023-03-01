const express= require('express')
const port=8000
const app= express()
let ejs=require('ejs')
const path = require('path')
app.use(express.urlencoded())
const db=require('./configue/mongoose')
const Contact = require('./models/contact')

var contactList = [
    {
        name: "Rio",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Richard",
        phone: "12131321321"
    }
]


app.set('view engine','ejs')
app.set('views','views')


    app.get('/project',(req,res)=>{
        res.render('index',{
            title:"project",
            list:contactList,
            user:{
                name:"yogit",
                course:"full stack"
             }
        })
})

app.get('/',(req,res)=>{
Contact.find({})
.then((result)=>{
    return res.render('project',{
        title:"good",
        list:result
    })

})
    })

    app.get('/delete/:id',(req,res)=>{
       // console.log(req.params.id);
       let id =req.params.id
       Contact.findByIdAndRemove(id)
        .catch(err => alert(err))
    return  res.redirect('back');
    
})

    





app.post('/create',(req,res)=>{
  //  console.log(req.body);
    //contactList.push(req.body);
   //return res.redirect("httpm")
   
   Contact.create({
    name:req.body.name,
    phone:req.body.phone

   }), function(err,result){
    if(err){
        return console.log(err);
    }
    console.log(result);
    return res.redirect("back")
    }
   })




app.listen(port)

  

