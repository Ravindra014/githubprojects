var express=require('express')
var cors=require('cors')
var bodyParser=require('body-parser')
var MongoClient=require('mongodb').MongoClient
var ObjectId=require('mongodb').ObjectId
var upload = require('./multerConfig');
var app=express();
var nodemailer = require('nodemailer');
const e = require('express')
app.use(cors());
var Client=new MongoClient(' mongodb+srv://doorservice:doorservice@cluster0.kx8vb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});
var connection;
Client.connect((err,db)=>{
    
    if(!err){
        connection=db;
        console.log("database is connected")
    }
    else
    {
        console.log("database could not connected")
    }
})


app.post('/user-by-email',bodyParser.json(),(req,res)=>{
    console.log("email check");
    console.log(req.body.em)
    var VendorCollection=connection.db('doorservice').collection('user');
    console.log("var email check three"+ req.body.em)
    VendorCollection.find({email:(req.body.em)}).toArray((err,result)=>{
        console.log("updated student two")
        if(!err && result.length>0){
            console.log(result);
            res.send({status:"ok" ,data:result})
            console.log("email is match")
        var n=result.map((e)=>{return e.name})
        var i=result.map ((e)=>{return e.password})
            sendMail("doorservice283@gmail.com", "ydcsugpnosqdlppe", req.body.em, "Welcome to Doorservice", ` your doorservice account  password is  `+i ) 
                
            

        }
        else{
            res.send({status:"failed",data:err})
        }
    })
})


app.post('/login-users',bodyParser.json(),(req,res)=>{
    var VendorCollection=connection.db('doorservice').collection('user');
    VendorCollection.find({email:req.body.email , password:req.body.password}).toArray((err,result)=>{
        if(!err && result.length>0){
            res.send({status:"ok" ,data:result})
            
        }
        else{
            
            res.send({status:"failed",data:err})
        }
    })
    })
app.post('/create-users',bodyParser.json(),(req,res)=>{
    
    var VendorCollection=connection.db('doorservice').collection('user');
    VendorCollection.insert(req.body,(err,result)=>{
        if(!err){
            res.send({status:"ok" ,result:"user data is inserted"})
        }
        else{
            res.send({status:"failed",data:err})
        }
    })
})

app.get('/user-by-id',(req,res)=>{

    var VendorCollection=connection.db('doorservice').collection('user');
    VendorCollection.find({_id:ObjectId(req.query._id)}).toArray((err,docs)=>{
        if(!err){
            res.send({status:"ok" ,data:docs})
        }
        else{
            
            res.send({status:"failed",data:"data is not found"})
        }
    })
    })
    app.post('/list-user-by-category', bodyParser.json(),(req,res)=>{
        var studentCollection =connection.db('doorservice').collection('user');
        studentCollection.find().toArray((err,docs)=>{
            if(!err)
            {
                var allServices = [];
                
                docs.forEach((u)=>{
                  u.vendor_services &&  u.vendor_services.forEach((sr)=>{
                        allServices.push({...sr,vendor_id:u._id } );
                    })
                });
                console.log("---------153-------------")
                console.log(allServices);
                console.log("checking for "+req.body.category );
                var catServices = allServices.filter(srvs=>{
                    return srvs.service_title==req.body.category;
                })
    
                var service
                console.log("---------157-------------")
                console.log(catServices);
                res.send({status:"ok", data:catServices});
            }
            else{
                res.send({status:"failed", data:err});
            }
        })
    })
    
    app.post('/customer-service-request', bodyParser.json(),(req,res)=>{
        var studentCollection =connection.db('doorservice').collection('user');     
        console.log("------176--------")
        console.log(req.body)
    console.log("111")
        //    req send to createstudent  
               studentCollection.update({_id:ObjectId(req.body.vendor_id)},{$push:{customer_requests:req.body.customer_request}},(err,result)=>{
                   console.log("222")
                if(!err)
                {
                    
                    console.log("updated");
                    console.log("333")
                res.send({status:"ok",data:"Service request sent succesfully"});
                }
                else{
                    console.log(err);
                res.send({status:"failed",data:err});
                }
                })
    })
    app.post('/get-service-requests', bodyParser.json(),(req,res)=>{
        var studentCollection =connection.db('doorservice').collection('user');
        console.log("000")
        studentCollection.find({_id:ObjectId(req.body.vendor_id)}).toArray((err,docs)=>{
            if(!err && docs.length>0)
            
            {               console.log(docs)
                console.log("111")
                           res.send({status:"ok", data:docs[0].customer_requests});
            }
            else{
                res.send({status:"failed", data:err});
            }
        })
    })
    app.post('/update-customer-service-request', bodyParser.json(),(req,res)=>{
        var studentCollection =connection.db('doorservice').collection('user');     
        console.log("in update customer service request")
        console.log(req.body)
    
        //    req send to createstudent  
                studentCollection.updateMany({_id:ObjectId(req.body.vendor_id)},
                                         {$set:{"customer_requests.$[crequests].status":req.body.status_to}},
                                        
                                         {
                                            arrayFilters: [{
                                                "crequests.customer_email":req.body.customer_email,
                                                "crequests.service_title":req.body.service_title,
                                                "crequests.status":req.body.status_from,
                                             }]
                                          },
                                        
                                         
                                         (err,result)=>{
                                                            if(!err)
                                                            {
                                                                console.log("updated");
                                                            res.send({status:"ok",data:"Service request sent succesfully"});
                                                            }
                                                            else{
                                                                console.log(err);
                                                            res.send({status:"failed",data:err});
                                                            }
                                    })
    });
    app.post('/your-orders', bodyParser.json(),(req,res)=>{
        var studentCollection =connection.db('doorservice').collection('user');
        studentCollection.find({role:"vendor"}).toArray((err,docs)=>{
            if(!err && docs.length>0)
            {
    
    
                    console.log("vendors")
                    console.log(docs)
                        var customer_requests = [];
                         docs.forEach((v)=>{
                             if(v.customer_requests){
                            v.customer_requests.forEach((cr)=>{
                                if(cr.customer_id==req.body.customer_id)
                                {
                                    customer_requests.push({...cr,vendor_name:v.name,vendor_phone:v.Business_contactno
                                        ,vendor_email:v.email});
                                }
                            })
                        
                             }
                        }) 
    
                        console.log("---line 239");
                        console.log(customer_requests);
    
    
                           res.send({status:"ok", data:customer_requests});
            }
            else{
                res.send({status:"failed", data:err});
            }
        })
    })
   
    app.post ('/add-services', bodyParser.json(),(req,res)=>{
        var studentCollection =connection.db('doorservice').collection('user');     
        
                studentCollection.update({_id:ObjectId(req.body._id)},{$push:{vendor_services:req.body.service_details}},(err,result)=>{
                if(!err)
                {
                res.send({status:"ok",data:"Service  Details added succesfully"});
                }
                else{
                res.send({status:"failed",data:err});
                }
                })
    });

app.post('/update-user', (req,res)=>{
    
    console.log("103--------------");
    upload(req,res,(err)=>{
        if (err) {
            console.log("Error Occured during upload ");
            console.log(err);
            res.send({status:"failed", data:err});
        }
        else{
            console.log("111---------------")
            var studentCollection = connection.db('doorservice').collection('user');
            console.log("files",req.files);
            console.log("line 47");
            console.log(req.body);
            // var stdocs = {
            //     profile:req.files.profile[0].filename,
            //     resume:req.files.resume[0].filename,
            //     certificates:req.files.certificates.map(c=>c.filename)
            // }

            studentCollection.update({_id:ObjectId(req.body._id)},{$set:{logo:req.files.logo[0].filename, business_name:req.body.business_name,Business_Address:req.body.address,Business_contactno:req.body.phone }},(err,result)=>{
                if(!err)
                {

                    res.send({status:"success", data:"business details updated sucessfully"});
                }
                else{
                    res.send({status:"failed", data:err});

                }
            })
        }
    });
})
function sendMail(from, appPassword, to, subject,  htmlmsg)
{
    let transporter=nodemailer.createTransport(
        {
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:
            {
             //  user:"weforwomen01@gmail.com",
             //  pass:""
             user:from,
              pass:appPassword
              
    
            }
        }
      );
    let mailOptions=
    {
       from:from ,
       to:to,
       subject:subject,
       html:htmlmsg
    };
    transporter.sendMail(mailOptions ,function(error,info)
    {
      if(error)
      {
        console.log(error);
      }
      else
      {
        console.log('Email sent:'+info.response);
      }
    });
}





app.listen(3000,()=>{
    console.log("server is started on port 3000")
})

