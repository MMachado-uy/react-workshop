import React from 'react';
import HolaMundo  from './Hola.jsx'

import { Grid, Row, Col } from 'react-bootstrap';

const Home = () => {
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
                    <HolaMundo quien="Chicos"></HolaMundo>
                </Col>
            </Row>
        </Grid>
    )
}

export default Home;