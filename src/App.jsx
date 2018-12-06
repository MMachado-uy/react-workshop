import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import HolaMundo  from './components/Hola.jsx';
import Home       from './components/Home.jsx';
import NotFound   from './components/NotFound.jsx';
import Login      from './components/Login.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        
        let usuario = (localStorage.getItem('usuario') != null ? JSON.parse(localStorage.getItem('usuario')) : '')

        this.state = {
            usuario
        }

        this.handleUser = this.handleUser.bind(this);
    }

    handleUser(usuario) {
        this.setState({
            usuario
        }, () => {
            localStorage.setItem('usuario', JSON.stringify(this.state.usuario))
        })
    }
    
    render() {
        let { usuario } = this.state;

        return (
            <Router>
                { usuario != '' ?
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/hola" component={HolaMundo}/>
                        <Route exact path="/404" component={NotFound}/>
                        <Route>
                            <Redirect to="/404"/>
                        </Route>
                    </Switch>
                    :
                    <Login handleUser={this.handleUser}/>
                }
            </Router>
            );
        }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
