import React from 'react';
// import { useState } from 'react';
import styles from '../AnimePage.module.css';
const AnimeImage = ({ image, setZoomed, isZoomed }) => {
    // const [isZoomed1, setZoomed1] = useState(false);
    // console.log(isZoomed1);
    console.log('RERENDER IMAGE');
    return (
        // <div onClick={() => setZoomed(true)}>
        //     <div>
        //         <img
        //             style={{
        //                 borderRadius: '5px',
        //                 height: '425px',
        //                 width: '280px',
        //                 WebkitBoxShadow: '0 0 5px #000',
        //                 cursor: 'zoom-in',
        //             }}
        //             src={image}
        //         />
        //     </div>
        // </div>

        <div onClick={isZoomed ? null : () => setZoomed(true)}>
            <div>
                <img
                    style={{
                        borderRadius: '5px',
                        height: '425px',
                        width: '280px',
                        WebkitBoxShadow: '0 0 5px #000',
                        cursor: 'zoom-in',
                    }}
                    src={image}
                />
            </div>
            {isZoomed ? (
                <div
                    onClick={() => setZoomed(false)}
                    // onClick={() => console.log('smth')}
                    className={styles.overlay}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={styles.modalContainer}
                    >
                        <div
                            className={styles.videoCross}
                            onClick={() => setZoomed(false)}
                        >
                            ×
                        </div>
                        <img
                            style={{ height: '600px', width: '420px' }}
                            src={image}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default AnimeImage;
