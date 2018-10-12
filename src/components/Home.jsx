import React from 'react';
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
        </Grid>
    )
}

export default Home;