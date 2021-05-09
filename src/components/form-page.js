import React from 'react';
import {Component} from 'react';
import Navbar2 from './navbar2';
import coffee from '../assets/coffee.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class FormPage extends Component {

    constructor(props){
        super(props);

        this.state={
            name: '',
            email: '',
            phone: '',
            describe: '',
            usernames: [],
            valid: true,
            successful: 0
        }

        this.changeName=this.changeName.bind(this);
        this.changeMail=this.changeMail.bind(this);
        this.changePhone=this.changePhone.bind(this);
        this.changeDescription=this.changeDescription.bind(this);
        this.submit=this.submit.bind(this);

    }

    async componentDidMount(){
        await axios.get('http://localhost:5000/getusers').then((user)=>{
            this.setState({
                usernames: user.data.map((name)=>name.username)
            })
        })
        console.log(this.state.usernames);
    }

    changeName(e){
        this.setState({
            name: e.target.value
        })
    }

    changeMail(e){
        this.setState({
            email: e.target.value
        })
    }

    changePhone(e){
        this.setState({
            phone: e.target.value
        })
    }

    changeDescription(e){
        this.setState({
            describe: e.target.value
        })
    }

    submit(){

        this.setState({
            valid: true,
            successful: 0
        })

        for(var i=0;i<this.state.usernames.length;i++){
            if(this.state.usernames[i]===this.state.name){
                console.log('exists')
                this.setState({
                    valid: false
                })
                break;
            }
        }

        if(this.state.valid===true){

            const user = {
                username: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                description: this.state.describe
            }

            axios.post(`http://localhost:5000/createuser`,user).then(res=>{
                this.setState({
                    successful: 1
                })
            }).catch(err=>{
                this.setState({
                    successful: -1
                })
            });
            
            if(this.state.successful===1){
                window.location='/';
            }            

        }

    }

    render(){
        return (
            <div style={{backgroundColor: `white`, color: `black`, width: `100%`, height: `1400px`}}>
                
                <Navbar2 />

                <div style={{height: `250px`}}></div>

                <div className="title">
                    <ScrollAnimation
                    animateIn='animate__fadeIn'
                    >
                    <div>
                        <span style={{marginTop: `30px`, position: `relative`, top: `10px`}}><img src={coffee} height="110px" ></img></span>
                        <span className="large"> Hey, Hi there!</span>
                    </div>
                    </ScrollAnimation>
                    <br></br>
                    <br></br>
                    <div style={{float: `right`, color: `#454564`, fontSize: `25px`, fontFamily: ``, textAlign: `left`, marginRight: `10%`}}>
                        <div>One little form from you to us,</div>
                        <div>could be one giant leap for mankind!</div>
                        <div>You never know.</div>
                    </div>

                    <div style={{height: `250px`}}></div>

                    <div className="main-form">
                        <div className="name">DETAILS</div>
                        <br></br>
                        <TextField id="filled-basic1" label="Name" variant="filled" onChange={this.changeName} />
                        <br></br>
                        <br></br>
                        {/* <span className="name">EMAIL</span> */}
                        <TextField id="filled-basic2" label="Email" variant="filled" onChange={this.changeMail} />
                        <span style={{width: `20px`}}> &nbsp; </span>
                        {/* <span className="name">EMAIL</span> */}
                        <TextField id="filled-basic2" label="Phone" variant="filled" onChange={this.changePhone} />
                        <br></br>
                        <br></br>
                        {/* <TextField id="filled-basic1" label="Name" variant="filled" onChange={this.changeName} /> */}
                        <TextField id="filled-basic1" label="Describe your project in 4 lines or less" variant="filled" multiline maxRows={4} onChange={this.changeDescription} />

                        <br></br>
                        <br></br>
                                                                
                        <button className="done-button" onClick={this.submit}>
                            I'm done <span style={{fontSize: `48px`, color: `#454545`}}>☞</span>
                        </button>

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="messages">
                            {this.state.valid?(null):(<div style={{color: `tomato`}}>This username is already registered. Please choose a different username</div>)}
                            {this.state.successful===1?(<div style={{color: `#44ce87`}}>Details submitted successfully!</div>):(this.state.successful===0?(null):(<div style={{color: `tomato`}}>Oops! Something went wrong on the server side. Make sure you have filled all the fields or try again later</div>))}                                                    
                        </div>

                    </div> 

                </div>    

                           

            </div>
        );
    }
}

export default FormPage;