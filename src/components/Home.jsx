import React, { Component } from 'react';
import HolaMundo  from './Hola.jsx'

import { Grid, Row, Col } from 'react-bootstrap';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let holaProps = {
            quien: "Chicos",
            mensaje: "todo bien?"
        }
    
        return (
            <Grid>
                <Row>
                    <Col xs={6}>
                        Column
                    </Col>
                    <Col xs={6}>
                        <input type="button" onClick={this.props.logout} value="Logout"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <HolaMundo {...holaProps}></HolaMundo>
                    </Col>
                </Row>
            </Grid>
        )
    }
}