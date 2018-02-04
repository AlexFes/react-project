import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from '../components/Navbar';
import Main from '../Main/Main';
import Contacts from "../Contacts/Contacts";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' component={Navbar}/>

                    <Route exact path='/' component={Main}/>

                    <Route path='/home' component={Main}/>

                    <Route path='/contacts' component={Contacts}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
