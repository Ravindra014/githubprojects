import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import {NavLink, Route , Switch,Link} from 'react-router-dom';

function ViewCustomerRequests(props) {

    const user = useSelector(state => state.user)
    const [request, setrequest] = useState([]);

    useEffect(() => {
        
        
        axios.post("http://localhost:3000/get-service-requests",{vendor_id:user._id}).then((res)=>{
            // alert(JSON.stringify(res.data));
            alert(res.data.data)
            setrequest(res.data.data);
            
        })
    }, [])

    function doAction(c_email, s_title, status_from, status_to) {
        alert("hi i am in doaction")
        axios.post("http://localhost:3000/update-customer-service-request",
            {   vendor_id:user._id, 
                customer_email:c_email,
                service_title:s_title,
                status_from:status_from,
                status_to:status_to})
                .then((res)=>{
                    alert("hi i am in doaction 2")
             alert(JSON.stringify(res.data));

             axios.post("http://localhost:3000/get-service-requests",{vendor_id:user._id}).then((res)=>{
                // alert(JSON.stringify(res.data));
                setrequest(res.data.data);
                
            })
            
        })
    }

    var requestList = request.map((st)=>{
        return <tr >
              <td>{st.service_title}</td>
              <td>{st.customer_email}</td>
              <td>{st.status}</td>
              <td> <button className="btn btn-primary" onClick= {()=>{doAction(st.customer_email,st.service_title,st.status,"decline")}}>Decline</button></td>
             <td> <button className="btn btn-primary" onClick= {()=>{doAction(st.customer_email,st.service_title,st.status,"accept")}}>Accept </button></td> 
          </tr> 
     })


    return (
         <> 
             
             <h1 class="py-4 ">List of Users</h1>
                    <ol class="breadcrumb mb-4 listofuserhead ">
                        <li class="breadcrumb-item "><Link class="listofusercolor"  to="/Dashboard">Dashboard</Link></li>
                        {/* <li class="breadcrumb-item active listofusercolor1"><a class="listofusercolor1"> (Customer & Vendor)</a></li> */}
                    </ol>
                  
                    <div class="card mb-4">
                       
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Service title</th>
                                            <th>Cutomer Email</th>
                                            <th>Status</th>
                                            <th>Decline</th>
                                            <th>Accept</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Service title</th>
                                            <th>Cutomer Email</th>
                                            <th>Status</th>
                                            <th>Decline</th>
                                            <th>Accept</th>
                                        </tr>
                                    </tfoot>
                                <tbody>
                                   {requestList}
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
         </>
    )
}

export default ViewCustomerRequests
