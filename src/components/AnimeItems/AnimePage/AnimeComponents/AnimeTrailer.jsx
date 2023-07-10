import React, { useState } from 'react';
import styles from '../AnimePage.module.css';
// import closingCross from '../../../../assets/closingCross.svg';
import smallPlayButton from '../../../../assets/smallPlayButton2.png';
import playButton from '../../../../assets/playButton.png';
const AnimeTrailer = ({ trailer, isPhotoZoomed }) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <div style={{ display: 'inline-block', marginTop: '30px' }}>
                <div className={styles.title}>TRAILER</div>
                <div
                    onClick={isPhotoZoomed ? null : () => setOpenModal(true)}
                    className={
                        isPhotoZoomed
                            ? styles.smallVideoContainerWithPhotoZoomed
                            : styles.smallVideoContainer
                    }
                    style={{
                        // backgroundImage: `url(https://img.youtube.com/vi/bJVyIXeUznY/sddefault.jpg)`,
                        backgroundImage: `url(${trailer.images.maximum_image_url})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {isPhotoZoomed ? null : (
                        <div className={styles.overlay1}>
                            <img src={playButton} />
                        </div>
                    )}

                    {isPhotoZoomed ? null : (
                        <div className={styles.smallPlayButton}>
                            <img
                                // style={{ verticalAlign: 'middle' }}
                                style={{
                                    verticalAlign: 'middle',
                                    height: '15px',
                                }}
                                src={smallPlayButton}
                            />{' '}
                            Watch trailer
                        </div>
                    )}
                </div>
                {openModal ? (
                    <div
                        onClick={() => setOpenModal(false)}
                        className={styles.overlay}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className={styles.modalContainer}
                        >
                            <div
                                className={styles.videoCross}
                                onClick={() => setOpenModal(false)}
                            >
                                {/* <img
                                className={styles.videoCross}
                                src={closingCross}
                            /> */}
                                ×
                            </div>
                            <iframe
                                className={styles.video}
                                width="80%"
                                height="600px"
                                // src="https://www.youtube.com/embed/bJVyIXeUznY?enablejsapi=1&wmode=opaque&autoplay=1"
                                src={trailer.embed_url}
                            ></iframe>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default AnimeTrailer;
