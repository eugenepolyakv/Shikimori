import React from 'react';
import CryingCat from '../../assets/CryingCat.svg';
const NoResult = () => {
    return (
        <div
            style={{
                margin: '0 auto',
                width: '300px',
                marginTop: 'auto',
            }}
        >
            <div
                style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: '25px',
                }}
            >
                There's no such result
            </div>
            <img style={{ width: '300px' }} src={CryingCat} />
        </div>
    );
};

export default NoResult;
