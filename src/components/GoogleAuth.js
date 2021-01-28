import React from 'react';
import {signIn, signOut} from '../actions';
import {connect} from 'react-redux';
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
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }
    
    onAuthChange =(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    onSignInClick=() =>{
        this.auth.signIn();
    }

    onSignOutClick=() =>{
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.props.isSignedIn ===null){
            return null
        }else if(this.props.isSignedIn){
            return <Button className="header-btn" onClick={this.onSignOutClick}>Sign Out</Button>
        }else{
            return <Button className="header-btn" onClick={this.onSignInClick}>Sign In</Button>
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

const mapStateToProps = (state) =>{
    return{ isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps,{
    signIn,signOut
})(GoogleAuth);
