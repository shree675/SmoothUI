import {Component} from 'react';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import icon from '../assets/icon.png';
import car from '../assets/car.png';
import phone from '../assets/phone.png';
import hl from '../assets/hl.png';
import zy from '../assets/zy.png';
import Navbar from './navbar';
import {Link} from 'react-router-dom';

class HomePage extends Component {

    constructor(props){
        super(props);

        this.state = {
            clicked: false,
        }

        this.setClick=this.setClick.bind(this);
        
    }

    setClick(){
        this.setState({
            clicked: !this.state.clicked
        })
        if(this.state.clicked===true){
            document.getElementById("spimg").style.opacity="1";
        }
        else{
            document.getElementById("spimg").style.opacity="0.7";
        }
    }

    render(){
        console.log('hello');
        return (
            <div style={{width: `100%`}}>

                <Navbar />

                <div style={{height: `280px`}}></div>

                <div style={{marginLeft: `250px`, padding: `0px`}}>
                    
                    <div className="jumbotron1">
                    <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOut='animate__fadeOut'
                    >
                    Great Ideas
                    </ScrollAnimation>
                    </div>                   
                    <div className="jumbotron2">
                    <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOut='animate__fadeOut'
                    >
                    Deserve Great
                    </ScrollAnimation>
                    </div>
                    <div className="jumbotron2">
                    <ScrollAnimation
                    animateIn='animate__fadeInUp'
                    animateOut='animate__fadeOut'
                    >
                    Products
                    </ScrollAnimation>
                    </div>
                    
                </div>

                <div style={{position: `relative`, height: `150px`, width: `100%`}}></div>

                <div className="slider">
                    
                    <div style={{backgroundColor: `white`, float: `right`, paddingRight: `15%`, margin: `0px`, position: `relative`}}>
                        <ScrollAnimation
                        animateIn='animate__zoomIn'
                        animateOut='animate__fadeOut'
                        duration='1'
                        >
                        <div>
                        <div className="jumbotron3">Strategic UX</div>
                        <div className="jumbotron3">Design &amp; Brand</div>
                        <div className="jumbotron3">Studio.</div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation
                        animateIn='animate__fadeIn'
                        animateOut='animate__fadeOut'
                        duration='1'
                        >
                        <div>
                        <div className="jumbotron4">We help entrepreneurs and businesses</div>
                        <div className="jumbotron4">achieve ambitious dreams by building</div>
                        <div className="jumbotron4">design centric products and brands.</div>
                        </div>
                        </ScrollAnimation>
                    </div>

                    <div style={{position: `relative`, marginTop: `-200px`}}>
                        <img style={{position: `relative`, overflow: `hidden`}} src={icon} className="image" height="590px"></img>
                    </div>

                    <div className="featured-work">
                    
                        <div className="text">Featured Work.
                        <div style={{float: `right`, width: `70%`}}><hr style={{width: `80%`, fontSize: `0px`, height: `0px`, backgroundColor: `#acacac`, marginTop: `22px`}}></hr></div>
                        </div>

                        <br></br>
                        <br></br>

                        <ScrollAnimation
                        animateIn='animate__zoomIn'
                        animateOnce={true}
                        duration='1'
                        >
                        <Link to='/car' style={{textDecoration: `none`}}>
                        <div style={{height: `80px`, width: `440px`}}>
                            <div className="card1">                                                        
                                <img className="im" src={car}></img>                                                        
                            </div>
                            <div className="z">
                                <img src={zy} height="80px"></img>
                                <div style={{color: `gray`, fontSize: `16px`}}>Building India's first ever rental car marketplace</div>
                            </div>
                        </div>
                        </Link>
                        </ScrollAnimation>

                        <ScrollAnimation
                        animateIn='animate__zoomIn'
                        animateOnce={true}
                        duration='1'
                        >
                        <div style={{marginLeft: `600px`, position: `relative`}}>
                            <button onClick={this.setClick} style={{border: `none`, backgroundColor: `white`, padding: `0px`}}>
                            <div className="card2">
                                {this.state.clicked?(<div className="alt">Coming soon</div>):(null)}        
                                <img id="spimg" className="im1" src={phone}></img>                                                                                                     
                            </div>
                            <div className="h">
                                <img src={hl} height="80px"></img>
                                <div style={{color: `gray`, fontSize: `16px`}}>A decade old news channel's makeover</div>
                            </div>
                            </button>
                        </div>
                        </ScrollAnimation>

                    </div>

                </div>

            </div>
        );
    }

}

export default HomePage;