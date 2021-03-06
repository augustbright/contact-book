import React from 'react';
import Navbar from "./Navbar";
import PhonesList from "./PhonesList";
import Container from "react-bootstrap/Container";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from "./About";

function App() {
    return (
        <BrowserRouter>
            <Container className="App">
                <Navbar/>
                <Switch>
                    <Route exact path='/'>
                        <PhonesList/>
                    </Route>
                    <Route exact path='/about'>
                        <About/>
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;
