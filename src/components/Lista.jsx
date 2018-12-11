import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

export default class Lista extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usuario: JSON.parse(localStorage.getItem('usuario')),
            archivos: []
        }
    }

    componentWillMount() {
        let { usuario } = this.state;

        fetch(`http://54.215.223.178:8080/api/resources/${usuario._id}`)
        .then(res =>  res.json())
        .then(data => {
            if (typeof data !== 'undefined') {
                this.setState({ archivos: data.data })
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        let { archivos } = this.state;

        return (
            <Grid>
                <Row>
                    <Col>
                    <ul>
                        { archivos.map((elem, k) => <li key={k}>{elem.name}</li>) }
                    </ul>
                    </Col>
                </Row>
            </Grid>
        )
    }
}