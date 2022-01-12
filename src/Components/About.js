import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div>
                  <div class="page-nav no-margin row">
                   <div class="container">
                       <div class="row">
                           <h2>About DoorService</h2>
                           <ul>
                               <li> <a><i class="fas fa-home"></i> Home</a></li>
                               <li><i class="fas fa-angle-double-right"></i> About Us</li>
                           </ul>
                       </div>
                   </div>
               </div>
               <section class="with-medical">
        <div class="container">
            <div class="row">
               <div class="col-lg-6 col-md-12">
                    <img src="assets/images/server.png" alt=""/>
                </div>
                <div class="col-lg-6 col-md-12 txtr">
                    <h4>Why choose our <br/>
                     <span>services</span>   
                    </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.</p>
                    <p>Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat vel augue eget, iaculis tristique dui. </p>
                </div>
                
            </div>
        </div>
    </section>
    <section class="custom-msg">
        <div class="container">
           <div class=" cust-msg">
                <h2>Login for a Custom Solution</h2>
                <p>Our technicians can provide you with the best custom made solutions <br/> on the market, no matter whether you're a small business or large enterprise.</p>
                <div class="btn btn-warning">Get in Touch</div>
           </div>
           
        </div>
    </section>
    <section class="our-team">
        <div class="container">
            <div class="inner-title row">
                <h2>Our Team</h2>
                <p>Take a look at our Team</p>
            </div>
            <div class="row team-row">
                <div class="col-md-3 col-sm-6">
                    <div class="single-usr">
                        <img src="assets/images/team/team-memb1.jpg" alt=""/>
                        <div class="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-usr">
                        <img src="assets/images/team/team-memb2.jpg" alt=""/>
                        <div class="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-usr">
                        <img src="assets/images/team/team-memb3.jpg" alt=""/>
                        <div class="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="single-usr">
                        <img src="assets/images/team/team-memb4.jpg" alt=""/>
                        <div class="det-o">
                            <h4>David Kanuel</h4>
                            <i>Facial Surgan</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
            </div>
        )
    }
}

export default About
