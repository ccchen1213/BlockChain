import React, {Component} from 'react';
import ProContent from './ProContent';

import Header from "../../headerfooter/Header";
import Footer from "../../headerfooter/Footer";

class Problem extends Component{
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <ProContent/>
                <Footer/>
            </div>
        )
    }
}

export default Problem;