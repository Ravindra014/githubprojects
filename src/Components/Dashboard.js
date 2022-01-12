import React, {useEffect} from 'react'
import BusinessDetails from './BusinessDetails'
import CustomerOrders from './CustomerOrders'
import {BrowserRouter as Router,Link,Switch,Route,NavLink} from 'react-router-dom'
import './Dashboard.css'
import { useSelector } from 'react-redux'
import VendorService from './VendorService'
import Service from './Service'
import Booknow from './Booknow'
import ViewCustomerRequests from './ViewCustomerRequests'
import YourOrders from './YourOrders'
function Dashboard(props) {
    
    const user = useSelector(state => state.user)
    const role=user.role;
    // alert("10")
    // alert(JSON.stringify(user))
    // alert("12")
    useEffect(() => {
        if(!user)
        {
            props.history.push("/login");
        }
    }, [user]);
    
    return (
        
        <div className="container mt100" >
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group">
                        {/* <li className="list-group-item"><Link to ={"/Dashboard/BusinessDetails"} >Set Business Details</Link></li> */}
                        
                        {user && user.role=="vendor" && <div className="list-group-item">    <NavLink className="nav-link dip subheading1" to="/Dashboard/BusinessDetails">
                                <span className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></span>
                                Business Details
                            </NavLink></div>}
                            {user && user.role=="vendor" && <div className="list-group-item"> <NavLink className="nav-link dip subheading1" to="/Dashboard/VendorService">
                                <div className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></div>
                                Set service Details
                            </NavLink></div>}
                            
                        
                        
                        {user && user.role=="customer" && <div className="list-group-item"> <NavLink className="nav-link dip subheading1" to="/Dashboard/YourOrders">
                                <span className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></span>
                                View your orders
                            </NavLink> </div>}
                            
                            
                            {user && user.role=="vendor" && <div className="list-group-item">  <NavLink className="nav-link dip subheading1" to="/Dashboard/ViewBusineesDetails">
                                <span className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></span>
                                View Business Details
                            </NavLink></div>}
                            
                            {user && user.role=="vendor" && <div className="list-group-item"> <NavLink className="nav-link dip subheading1" to="/Dashboard/ViewCustomerRequests">
                                <span className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></span>
                               View Customer Requests
                            </NavLink></div>}
                            {user && user.role=="customer" && <div className="list-group-item"> <NavLink className="nav-link dip subheading1" to="/Dashboard/RequestService">
                                <span className="sb-nav-link-icon iconspace"><i class="fas fa-table move1"></i></span>
                               Request your service
                            </NavLink></div>}
                            
                    </div>
                </div>
                <div className="col-md-9">
                <Switch>
                 
                    <Route path="/Dashboard/BusinessDetails"  exact component={BusinessDetails}></Route>
                    <Route path="/Dashboard/CustomerOrders" exact component={CustomerOrders}></Route>
                    <Route path="/Dashboard/VendorService" exact component={VendorService}></Route>
                    <Route path="/Dashboard/RequestService"  component={Service}></Route>
                    <Route path="/Dashboard/Booknow/:cat_name"  exact component={Booknow}></Route>
                    <Route path="/Dashboard/ViewCustomerRequests" exact component={ViewCustomerRequests}></Route>
                    <Route path="/Dashboard/YourOrders" exact component={YourOrders}></Route>
                 </Switch>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

