import React from 'react';

const HolaMundo = (props) => {

    let { quien } = props;

    return ( 
        <div>
            <p>Hola {quien || 'Fallback'}!</p>
        </div>
    )
}

export default HolaMundo;