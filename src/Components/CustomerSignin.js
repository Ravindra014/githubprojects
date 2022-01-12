
import React, { Component } from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

function Customersignin() {
const [name, setName] = useState("")
const [role, setRole] = useState("")
const [city, setCity] = useState("")
const [contactno, setContact] = useState("")
const [email, setEmail] = useState("")
const [password,setPassword]=useState("")
 function setValue(e){
     e.target.name==="Name" && setName(e.target.value);
     e.target.name==="Role" && setRole(e.target.value);
     e.target.name==="City" &&  setCity(e.target.value);
     e.target.name==="Contactno" && setContact(e.target.value);
     e.target.name==="Email" && setEmail(e.target.value);
     e.target.name==="Password" && setPassword(e.target.value)
 }
function sendDetails(){
// alert(name)
// alert(role);
// alert(city);
// alert(contactno);
// alert(email);
// alert(password);
    var s={
name, role, city, contactno, email, password
    }
    // console.log(s);
    axios.post('http://localhost:3000/create-users', s).then((res)=>{
        alert("you have successfully signup ..pls login")
        console.log(res.data);
        
        
    })

}


    return (
        <div>
             <div>
                    <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-5">
                  <div class="card shadow-lg border-0 rounded-lg mt-5">
                      <div class="card-header"><h3 class="text-center font-weight-light my-4">Sign Up </h3></div>
                      <div class="card-body">
                          <form>
                          <div class="form-floating mb-3">
                              <label for="inputName">Name</label>
                                  <input class="form-control" id="inputName"  placeholder="enter your name" name="Name" value={name} onChange={(e)=>{setValue(e)}}/>
                                  
                              </div>
                              <div class="form-floating mb-3">
                              <label for="enterRole">Role</label>
                              <select class="form-control" id="enterRole" name="Role" value={role} onChange={(e)=>{setValue(e)}}  >
                                  <option value="NONE" >select Role</option>
                                  <option value="customer">customer</option>
                                  <option value="vendor" >vendor</option>
                                </select>  
                              
                              </div>
                              <div class="form-floating mb-3">
                              <label for="inputNo">Contact no</label>
                                  <input class="form-control" id="inputNo" type="number" placeholder="enter your contact no"  value={contactno} name="Contactno" onChange={(e)=>{setValue(e)}}/>
                                  
                              </div>
                              <div class="form-floating mb-3">
                              <label for="city">City</label>
                                  <input class="form-control" id="city" type="text" placeholder="enter your city"  name ="City" value={city} onChange={(e)=>{setValue(e)}}/>
                                  
                              </div>
                              

                              <div class="form-floating mb-3">
                              <label for="inputEmail">Email</label>
                                  <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" name="Email" value={email} onChange={(e)=>{setValue(e)}}/>
                                  
                              </div>
                              <div class="form-floating mb-3">
                              <label for="inputPassword">Password</label>
                                  <input class="form-control" id="inputPassword" type="password" placeholder="Password" name="Password" value={password} onChange={(e)=>{setValue(e)}}/>
                                 
                              </div>
                              
                              <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                  
                                  <a className=" btn btn-primary" onClick={sendDetails}>Sign in</a>
                              </div>
                          </form>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>  
                </div>
           
        </div>
    )
    }
  
export default Customersignin

