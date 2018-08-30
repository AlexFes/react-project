import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../_actions/actions';

import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';

import Main from '../Main/Main';
import Contacts from '../Contacts/Contacts';
import Account from '../Account/Account';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />

                    <Route exact path='/' component={Main}/>

                    <Route path='/home' component={Main}/>

                    <Route path='/contacts' component={Contacts}/>

                    <Route path='/signup' component={Signup}/>

                    <Route path='/account' component={Account}/>

                    <Route path='/login' component={Login}/>

                    <Route exact path='/' component={Footer}/>
                    <Route path='/home' component={Footer}/>
                    <Route path='/contacts' component={Footer}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);
