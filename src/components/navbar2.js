import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

class Navbar extends Component {

    constructor(props){
        super(props);

        this.state={
            scrolled: true,
            y: 100,
            color: 'white',
        }
    }

    componentDidMount(){
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled>=50){
               this.setState({
                   scrolled: false
               })
            }
            else{
                this.setState({
                    scrolled: true
                })
            }
        })
    }

    render(){
        return (
            <div style={{position: `fixed`, width: `100%`, zIndex: `2`, backgroundColor: `white`, paddingBottom: `15px`}}>

                    <div className={this.state.scrolled?"navbar-init2":"navbar2"}>
                        <div>
                            <Link to='/'>
                                <div style={{float: `left`, margin: `0px`, padding: `0px`}}>
                                    <span style={{marginTop: `30px`, position: `relative`, top: `7px`}}><img src={logo} height="30px"></img></span>&nbsp;
                                    <span className="clearcut" style={{color: `black`}}>clearcut</span>
                                </div>
                            </Link>
                        </div>
                        <div className="right">
                        <Link to='/form' style={{textDecoration: `none`, color: `black`}}>  
                            <div className="button">                  
                                <div>Say Hello</div>                                
                            </div>
                            </Link>
                        </div>
                    </div>

            </div>
        );
    }
}
 
export default Navbar;