import {React } from 'react';
import {useState} from 'react';
import axios from 'axios';

function Forgot() {
    const [em,setEm] = useState("")
    function setValue(e){
        
        e.target.name==="Email" && setEm(e.target.value);
        
    }
    function Sendpassword(){
        alert(em)  
       var  s={
            em
        } 
        axios.post('http://localhost:3000/user-by-email',s).then((res)=>{
            console.log(res.data.data)
           alert("completed") 
    })
    }
    return (
        <div>
                          <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-5">
                  <div class="card shadow-lg border-0 rounded-lg mt-5">
                      <div class="card-header"><h3 class="text-center font-weight-light my-4">Forgot Password?</h3></div>
                      <div class="card-body">
                          <form>
                              <div class="form-floating mb-3">
                              <label for="inputEmail">Email</label>
                                  <input class="form-control" id="inputEmail" type="email" name="Email" placeholder="name@example.com" value={em} onChange={(e)=>{setValue(e)}}/>
                                  
                              </div>
                             <button type="button" className=" btn-primary" onClick={Sendpassword}>Send Password</button>
                             
                            
                          </form>
                      </div>
                     
                  </div>
              </div>
          </div>
      </div>  
          
        </div>  
        
    )
}

export default Forgot
