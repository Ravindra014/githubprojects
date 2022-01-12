import React, { Component } from 'react'
import { Link,Switch,BrowserRouter as Router,Route } from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { useDispatch ,useSelector} from 'react-redux'
import {checkLogin} from '../actions/userAction'




function Login(props) {
    const [users,setUsers] = useState([])
    const [email, setEmail] = useState("")
    const [password,setPassword]=useState("")
     const dispatch = useDispatch()
     const user = useSelector(state => state.user)
    useEffect(()=>{
        if(user)
        {
            props.history.push("/Dashboard");
        }
    },[user])
    
    function setValue(e){
        e.target.name==="Email" && setEmail(e.target.value);
        e.target.name==="Password" && setPassword(e.target.value);
    }

    function Auth() {
        alert("auth");
        alert(email);
        alert(password);
            dispatch(checkLogin({email,password}));
           
    }
    



    // function Auth(){
    //     // var email=document.getElementById('inputEmail').value
    //     // var password=document.getElementById('inputPassword').value
    //     // alert(email);
    //     // alert(password);
    //    
    //     console.log(uid)
    //     var check=users.some((s)=>{
    //         return s.email==email && s.password==password
    //     })
    //     console.log(check);
    //     if(check==true){
    //         alert("you have successfully login")

            
            
    //     }
    //     else{
    //         alert("please check email or password")
    //     }            
    // }

    return (
        <div>
            <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-5">
                  <div class="card shadow-lg border-0 rounded-lg mt-5">
                      <div class="card-header"><h3 class="text-center font-weight-light my-4">Login </h3></div>
                      <div class="card-body">
                          <form>
                              <div class="form-floating mb-3">
                              <label for="inputEmail">Email</label>
                                  <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com"  name="Email"value ={email} onChange={(e)=>{setValue(e)}}/>
                                  
                              </div>
                              <div class="form-floating mb-3">
                              <label for="inputPassword">Password</label>
                                  <input class="form-control" id="inputPassword" type="password" placeholder="Password" name="Password"value={password} onChange={(e)=>{setValue(e)}}/>
                                 
                              </div>
                              <div class="form-check mb-3">
                                  <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                  <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                              </div>
                              <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                  <Link to='/forgot-password' class="btn-btn-primary"  >Forgot Password?</Link>
                                  <Link class="btn btn-primary"  onClick={Auth}>Login</Link>
                              </div>
                          </form>
                      </div>
                      <div class="card-footer text-center py-3">
                          <div class="small"><Link to='/customersignin'>Need an account? Sign up!</Link></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>  
          
        </div>
    )
}

export default Login

