import React from 'react';
import HolaMundo  from './Hola.jsx'

import { Grid, Row, Col } from 'react-bootstrap';

const Home = () => {
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
                    Column
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

export default Home;