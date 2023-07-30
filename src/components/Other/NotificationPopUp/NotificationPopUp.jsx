import React, { useEffect, useState } from 'react';
import styles from './NotificationPopUp.module.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
function NotificationPopUp() {
    const data = useSelector((state) => state.notificationSlice.notifications);
    // const isThereAData = Boolean(data.length);
    // useEffect(() => {}, [data]);
    // let notifications = (
    //     <div className={isThereAData ? styles.container : null}>
    //         {isThereAData
    //             ? data
    //                   .map((el) => (
    //                       <div className={styles.errorDiv}>{el.message}</div>
    //                   ))
    //                   .reverse()
    //             : null}
    //     </div>
    // );
    const notifications = [];
    for (let index in data) {
        notifications.push(data[index]);
    }
    console.log(notifications);
    let dissapearDivEncountered = false;
    return (
        // <div className={styles.container}>
        //     <div className={`${styles.errorDiv} ${styles.slideIn}`}>dwad</div>
        //     {/* <div className={`${styles.errorDiv}`}>WEQ</div> */}
        // </div>
        <div className={notifications.length ? styles.container : null}>
            {notifications.length
                ? notifications.map((el) => {
                      if (el.status != 'DISSAPEARS') {
                          let customStyles =
                              el.status == 'APPEARS'
                                  ? `${styles.errorDiv} ${styles.slideIn}`
                                  : `${styles.errorDiv} ${styles.slideOut}`;
                          return (
                              <div
                                  className={
                                      dissapearDivEncountered
                                          ? `${customStyles} ${styles.transformDivToDissapear}`
                                          : customStyles
                                  }
                              >
                                  {el.message}
                              </div>
                          );
                      } else {
                          dissapearDivEncountered = true;
                          return (
                              <div
                                  className={styles.transformDivToDissapear}
                              ></div>
                          );
                      }
                  })
                : null}
        </div>
    );

    // return <div className={styles.errorDiv}>{errorMessage}</div>;
}

export default NotificationPopUp;
