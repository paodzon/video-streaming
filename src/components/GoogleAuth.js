import React from 'react'
import { Button } from 'reactstrap';

class GoogleAuth extends React.Component {

    state ={isSignedIn:null};

    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId:'368384012904-hieuvdec6kk7vmq36n4m5the79utjoj5.apps.googleusercontent.com',
                scope: 'email'
            }).then(() =>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }
    
    onAuthChange =()=>{
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }

    onSignIn=() =>{
        this.auth.signIn();
    }

    onSignOut=() =>{
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.state.isSignedIn ===null){
            return null
        }else if(this.state.isSignedIn){
            return <Button onClick={this.onSignOut}>Sign Out</Button>
        }else{
            return <Button onClick={this.onSignIn}>Sign In</Button>
        }
    }

    render(){
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }

}

export default GoogleAuth
