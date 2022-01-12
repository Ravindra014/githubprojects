
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

function BusinessDetails(props) {
    const [name,setbusiness_name] = useState("");
    const [phone,setbusiness_phone] = useState("");
    const [address,setbusiness_address] = useState("");
    var logoFile;
    
    const user = useSelector(state => state.user)
    const Id=user._id;
     
    
    

    const [uploadPercentage, setuploadPercentage] = useState("")
   
    
    
    function setValue(e) {
        e.target.name == "Business_Name" && setbusiness_name(e.target.value);
        e.target.name == "Business_Phone" && setbusiness_phone(e.target.value);
        e.target.name == "Business_Address" && setbusiness_address(e.target.value);
      }
    function setLogo(e)
    {
        logoFile= e.target.files[0];
        console.log(logoFile);
    }
    function sendDetails(){

        var formData = new FormData();
        formData.append("_id", Id );
        formData.append("business_name", name)
        formData.append("address",address)
        formData.append("phone",phone)
        formData.append("logo", logoFile);



        // var s={service}
        // s._id=Id;




        axios.post('http://localhost:3000/update-user',formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function( progressEvent ) {
                console.log("file Uploading Progresss.......");
                console.log(progressEvent);
              setuploadPercentage( parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 )));
            //   setfileInProgress(progressEvent.fileName)
            }
          }).then((res)=>{
              alert(res);
          }).catch(res=>{
            alert("sorry you are not authorised to do this action");
        });

       
    }

   


    return (
        <div>
            
                <div class="form-floating mb-3">
                              <label for="inputName">Business Name</label>
                                  <input class="form-control"type="text" id="inputName"  placeholder="enter your name" name="Business_Name" value={name} onChange={(e)=>{setValue(e)}}/>
                                  
                              </div>
                              <div class="form-floating mb-3">
                              <label for="inputaddress">Business Address</label>
                                  <input  class="form-control" type="text" id="inputaddress"  placeholder="enter your address" name="Business_Address" value={address} onChange={(e)=>{setValue(e)}}/>
                                  
                              </div>
                              <div class="form-floating mb-3">
                              <label for="inputPhone">Phone</label>
                                  <input  class="form-control" type="number" id="inputPhone"   placeholder="enter your contact no" name="Business_Phone" value={phone} onChange={(e)=>{setValue(e)}}/>
                                  
                              </div>
                <div class="form-floating mb-3">
                    <label htmlFor="Logo">Upload  Business Logo</label>
                    <input type="file" onChange={(e)=>{setLogo(e)}} class="form-control" id="Logo"   />                    
                </div>

                
                
                <button type="button" class="btn btn-primary" onClick={sendDetails}>Submit</button>
                
                {uploadPercentage} %uploaded
                
                {/* </form> */}
        </div>
    )
}

export default BusinessDetails

