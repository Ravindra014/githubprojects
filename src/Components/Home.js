import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                 <div class="slider">
        <div class="owl-carousel ">
            <div class="slider-img">
                <div class="item">
                    <div class="slider-img"><img src="assets/images/slider/slider-1.jpg" alt=""/></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                <div class="slider-captions">
                                    <h1 class="slider-title">Quality home service,on demand</h1>
                                    <p class="slider-text hidden-xs">Experienced, hand picked Professionals to serve you at your doorsteps</p>
                                    <a href="#" class="btn btn-info hidden-xs">View all services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="slider-img"><img src="assets/images/slider/slider-2.jpg" alt=""/></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                            <div class="slider-captions">
                                <h1 class="slider-title">It's time for better help.</h1>
                                <p class="slider-text hidden-xs">We can help you.</p>
                                <a  class="btn btn-info hidden-xs">Book now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="slider-img"> <img src="assets/images/slider/slider-3.jpg" alt=""/></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                            <div class="slider-captions">
                                <h1 class="slider-title">Meet our Professionals</h1>
                                <p class="slider-text hidden-xs">They are highly skilled to meet your unique needs.</p>
                                <a  class="btn btn-info hidden-xs">Meet Them</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page-nav no-margin row">
                   <div class="container">
                       <div class="row">
                           
                           <ul>
                               
                               {/* <li><i class="fas fa-angle-double-right"></i> Our Blog</li> */}
                           </ul>
                       </div>
                   </div>
               </div>
    <section class="why-shoos">
    <div class="container">
        <div class="row">
            <div class="col-md-12 wc-txt">
                <h2 >Why Choose DoorService?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat massa leo, eget vehicula ante mollis eget. Mauris tellus velit, posuere vel lacus a, scelerisque vehicula tortor. Sed sollicitudin non metus nec interdum. Cras convallis erat magna, eu pulvinar justo dignissim ut. Nulla at nulla eu mi maximus finibus. Morbi at ipsum lectus. Pellentesque posuere nisl mauris, sit amet interdum diam tempor nec. Morbi dapibus euismod libero at tincidunt. </p>
                
                <div class="row wc-res">
                    {/* <div class="col-md-4">
                        <div class="wc-cov">
                            <i class="far fa-life-ring"></i> <br/>
                            <b>Safety</b>
                        </div>
                    </div> */}
                    <div class="col-md-4">
                        <div class="wc-cov">
                            <i class="fas fa-thermometer-quarter"></i> <br/>
                            <b>Experts Only</b>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="wc-cov">
                           <i class="far fa-check-square"></i> <br/>
                            <b>Transparent pricing</b>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="wc-cov">
                           <i class="far fa-check-square"></i> <br/>
                            <b>Fully Equipped</b>
                        </div>
                        </div>
                </div>
            </div>
          </div>
    </div>
</section>   
<div class="customer-serv">
    <div class="container">
         
        <div class="row session-title">
            <h2>Happy Customers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec leo lobortis blandit.</p>
        </div>
         
        <div class="row ro-clo">
            <div data-anijs="if: scroll, on: window, do: bounceInLeft animated, before: scrollReveal" class="bghn col-sm-4">
                <div class="shado-2 card-b">
                    <p>We have intentionally decided not to include jQuery-based fallbacks for the transitions.
                    to include jQuery-based</p>
                </div>
                <div class="cust-det row">
                  <div class="col-sm-3 col-3 img-circl">
                      <img alt="" src="assets/images/testimonial/member-01.jpg"/>
                  </div>
                   <div class="col-sm-5 col-5 an-mtc no-padding">
                      <b>Sarath Ali</b>
                      <p>(Sales Agent)</p>
                  </div>
                   <div class="col-sm-4 col-4 star-par">
                      <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                      </ul>
                  </div>
                </div>
            </div>
             <div class="col-sm-4 bghn">
                <div class="shado-2 card-b">
                    <p>We have intentionally decided not to include jQuery-based fallbacks for the transitions.
                    to include jQuery-based</p>
                </div>
                <div class="cust-det row">
                  <div class="col-sm-3 col-3 img-circl">
                      <img alt="" src="assets/images/testimonial/member-02.jpg"/>
                  </div>
                   <div class="col-sm-5 col-5 an-mtc no-padding">
                      <b>Binny Aderson</b>
                      <p>(Sales Agent)</p>
                  </div>
                   <div class="col-sm-4  col-4 star-par">
                      <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                      </ul>
                  </div>
                </div>
            </div>
             <div data-anijs="if: scroll, on: window, do: bounceInRight animated, before: scrollReveal" class="col-sm-4 bghn">
                <div class="shado-2 card-b">
                    <p>We have intentionally decided not to include jQuery-based fallbacks for the transitions.
                    to include jQuery-based</p>
                </div>
                <div class="cust-det row">
                  <div class="col-sm-3 col-3 img-circl">
                      <img alt="" src="assets/images/testimonial/member-03.jpg"/>
                  </div>
                   <div class="col-sm-5 col-5 an-mtc no-padding">
                      <b>Dweail Samluel</b>
                      <p>(Sales Agent)</p>
                  </div>
                   <div class="col-sm-4 col-4 star-par">
                      <ul class="stars">
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                      </ul>
                  </div>
                </div>
            </div>
        </div>

    </div>


</div>
            </div>
        )
    }
}

export default Home
