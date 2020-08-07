import React, {Component} from 'react'

import testimonial1 from './img/testimonial-1.jpg'
import testimonial2 from './img/testimonial-2.jpg'
import testimonial3 from './img/testimonial-3.jpg'
import testimonial4 from './img/testimonial-4.jpg'
import OwlCarousel from 'react-owl-carousel';  

class Testimonials extends Component{
    render() {
        return(
            <section id="testimonials">
                <div class="container">

                    <header class="section-header">
                    <h3>Testimonials</h3>
                    </header>

                    <div class="row justify-content-center">
                    <div class="col-lg-8">
                         
                        <div class="testimonials-carousel wow fadeInUp">
                            <OwlCarousel items={1} margin={8} autoplay ={true} >
                                <div class="testimonial-item">
                                    <img src={testimonial1} class="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <p>
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    </p>
                                </div>
                        
                                <div class="testimonial-item">
                                    <img src={testimonial2} class="testimonial-img" alt="" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                    <p>
                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                    </p>
                                </div>
                        
                                <div class="testimonial-item">
                                    <img src={testimonial3} class="testimonial-img" alt="" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                    <p>
                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                    </p>
                                </div>
                        
                                <div class="testimonial-item">
                                    <img src={testimonial4} class="testimonial-img" alt="" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                    <p>
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                    </p>
                                </div>
                            </OwlCarousel>
                        </div>
                        

                    </div>
                    </div>


                </div>
            </section>
        );
    }
}

export default Testimonials