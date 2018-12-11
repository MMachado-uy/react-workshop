import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        let {
            id,
            value
        } = event.target;

        let newState = {};

        newState[id] = value;

        this.setState(newState, () => {});
    }

    handleSubmit(event) {

        event.preventDefault();

        let {
            username,
            password
        } = this.state;

        let req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };

        fetch('http://54.215.223.178:8080/api/login', req)
        .then(res =>  res.json())
        .then(data => {
            if (typeof data !== 'undefined') {
 console.log("data ", data.data);
                this.props.handleUser(data.data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h3">Login</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <form>
                        <label htmlFor="username">User: </label>
                        <input type="text" id="username" onChange={this.handleChange}/>
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                        <input type="button" value="Log In" onClick={this.handleSubmit}/>
                    </form>
                </Panel.Body>
            </Panel>
        );
    }
};