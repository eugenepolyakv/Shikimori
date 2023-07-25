import React from 'react';
import styles from './ErrorPopUp.module.scss';
function ErrorPopUp({ errorMessage }) {
    return <div className={styles.errorDiv}>{errorMessage}</div>;
}

export default ErrorPopUp;
