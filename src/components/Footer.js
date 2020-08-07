import React, {Component} from 'react'
import Footertop from './Footertop';
import Copyright from './Copyright';

class Footer extends Component{
    render() {
        return(
            <footer id="footer" class="section-bg">
                <Footertop />
                <Copyright />
            </footer>
        );
    }
}

export default Footer