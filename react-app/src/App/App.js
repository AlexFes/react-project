import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

import Main from '../Main/Main';
import Contacts from "../Contacts/Contacts";
import Singup from "../Singup/Singup"

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' component={Navbar}/>

                    <Route exact path='/' component={Main}/>

                    <Route path='/home' component={Main}/>

                    <Route path='/contacts' component={Contacts}/>

                    <Route path="/singup" component={Singup}/>

                    {/* Need to fix this */}
                    <Route path='/home' component={Footer}/>
                    <Route path='/contacts' component={Footer}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
