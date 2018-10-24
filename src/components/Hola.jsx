import React from 'react';

class HolaMundo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }

        this.setCount = this.setCount.bind(this);
    }

    setCount() {
        let val = this.state.contador;
        val++

        this.setState({
            contador: val
        }, () => {
            // Callback
        })
    }
    
    render() {
        let { quien, mensaje } = this.props;
        let { contador } = this.state;

        return ( 
            <div>
                <p>Hola {quien || 'Fallback'}!</p>

                {typeof mensaje !== 'undefined' &&
                    <div>{mensaje}</div>
                }
                <input type="button" onClick={this.setCount} value="Click acá"/>
                
                {contador > 0 &&
                    <div>Clickearon {contador} veces!</div>
                }
            </div>
        )
    }
}

export default HolaMundo;