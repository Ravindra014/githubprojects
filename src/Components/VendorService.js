import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

export default function VendorService() {
    const [service_title, setservice_title] = useState("");
    const [service_cost, setservice_cost] = useState("");
    const [service_description, setservice_description] = useState("");
    const user = useSelector(state => state.user)
    const Id=user.id;

    function setValue(e) {
        e.target.name == "service_title" && setservice_title(e.target.value);
        e.target.name == "service_cost" && setservice_cost(e.target.value);
        e.target.name == "service_description" && setservice_description(e.target.value);
          
      }
      function sendDetails(){
        var s = {
            service_details: { service_title, service_cost, service_description },
            _id: user._id,
          };
      
          alert(JSON.stringify(s));
          axios
          .post("http://localhost:3000/add-services", s)
          .then((res) => {
            console.log(res.data);
            alert(res.data);
          });
      }
    return (
        <div>
            <div class="form-floating mb-3">
                              <label for="inputService"> Service Category</label>
                              <select class="form-control" id="inputService" name="service_title" value={service_title} onChange={(e)=>{setValue(e)}}  >
                                  <option value="NONE" >select Role</option>
                                  <option value="Car Service" >Car Service</option>
                                  <option value="Bike Service" >Bike Service</option>
                                  <option value="Plumber" >Plumber</option>
                                  <option value="Electrician" >Electrician</option>
                                  <option value="Laundary" >Laundary</option>
                                  <option value="Saloon" >Saloon</option>
                                </select>
                                  
                              </div>
                              
                              <div class="form-floating mb-3">
                              <label for="inputCost">Service Cost</label>
                                  <input  class="form-control" type="number" id="inputCost"   placeholder="enter service cost" name="service_cost" value={service_cost} onChange={(e)=>{setValue(e)}}/>
                                  
                              </div>
                              <div class="form-floating mb-3">
                              <label for="inputDescription">Service Description</label>
                                  <textarea class="form-control" type="text" id="inputDescription"   placeholder="enter description" name="service_description" value={service_description} onChange={(e)=>{setValue(e)}}/>
                                  
                              </div>

                              
                
                <button type="button" class="btn btn-primary" onClick={sendDetails}>Submit</button>
                
        </div>
    )
}
