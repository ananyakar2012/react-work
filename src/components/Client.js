import React, {Component} from 'react'

import client1 from './img/clients/client-1.png'
import client2 from './img/clients/client-2.png'
import client3 from './img/clients/client-3.png'
import client4 from './img/clients/client-4.png'
import client5 from './img/clients/client-5.png'
import client6 from './img/clients/client-6.png'
import client7 from './img/clients/client-7.png'
import client8 from './img/clients/client-8.png'

import OwlCarousel from 'react-owl-carousel';  

class Client extends Component{
    render() {
        return(
            <section id="clients" class="wow fadeInUp">
                <div class="container">

                    <header class="section-header">
                    <h3>Our Clients</h3>
                    </header>

                    <div class="clients-carousel">
                        <OwlCarousel items={6} margin={8} autoplay ={true} >
                            <img src={client1} alt="" />
                            <img src={client2} alt="" />
                            <img src={client3} alt="" />
                            <img src={client4} alt="" />
                            <img src={client5} alt="" />
                            <img src={client6} alt="" />
                            <img src={client7} alt="" />
                            <img src={client8} alt="" />
                        </OwlCarousel>
                    </div>

                </div>
            </section>
        );
    }
}

export default Client