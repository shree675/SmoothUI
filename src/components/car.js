import React from 'react';
import {Component} from 'react';
import Navbar2 from './navbar2';
import poster from '../assets/poster1.png';

class Zyppys extends Component {
    render(){
        return (
            <div style={{backgroundColor: `#fafafa`, textAlign: `center`, color: 'black', height: `1100px`}}>
                
                <Navbar2 />
                <div style={{height: `220px`}}></div>
                <div className="title-sec">A new way to</div>
                <div className="title-sec">rent cars</div>

                <br></br>
                <br></br>

                <div>
                    <img src={poster} width="80%"></img>
                </div>

            </div>
        );
    }
}

export default Zyppys;