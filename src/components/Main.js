import React, {Component} from 'react'
import About from './About';
import ServicesMain from './ServicesMain';
import Whyus from './Whyus';
import Action from './Action';
import Feature from './Feature';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Team from './Team';
import Client from './Client';
import Faq from './Faq';

import SimpleReactLightbox from "simple-react-lightbox";

class Main extends Component{
    render() {
        return(
            <main id="main">
            <SimpleReactLightbox>
               <About /> 
               <ServicesMain />
               <Whyus />
               <Action />
               <Feature />
               <Portfolio />
               <Testimonials />
               <Team />
               <Client />
               <Faq />
            </SimpleReactLightbox>
            </main>
        );
    }
}

export default Main