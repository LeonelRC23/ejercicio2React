import React from 'react';

const Titulo = (props) => {
    return (
        <div className='mt-5'>
            <h1 className='d-flex justify-content-center'>Hello {props.agregado}!</h1>
        </div>
    );
};

export default Titulo;