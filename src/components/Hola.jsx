import React from 'react';

const HolaMundo = (props) => {

    let { quien, mensaje } = props;

    return ( 
        <div>
            <p>Hola {quien || 'Fallback'}!</p>

            {typeof mensaje !== 'undefined' &&
                <div>{mensaje}</div>
            }
        </div>
    )
}

export default HolaMundo;