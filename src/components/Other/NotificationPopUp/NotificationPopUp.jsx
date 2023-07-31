import React, { useEffect, useState } from 'react';
import styles from './NotificationPopUp.module.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import cross from '../../../assets/cross.svg';
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
        notifications.push({ index, ...data[index] });
    }
    console.log(notifications);
    return (
        // <div className={styles.container}>
        //     <div className={`${styles.errorDiv}`}>
        //         some text
        //         <img className={styles.cross} src={cross} />
        //     </div>
        //     {/* <div className={`${styles.errorDiv}`}>WEQ</div> */}
        // </div>
        <div className={notifications.length ? styles.container : null}>
            {notifications.length
                ? notifications.map((el) => {
                      if (el.status != 'DISSAPEARS') {
                          let customStyles = styles.errorDiv;
                          switch (el.status) {
                              case 'APPEARS':
                                  console.log('APPEARS');
                                  customStyles += ` ${styles.slideIn}`;
                                  break;
                              case 'SHOWN':
                                  console.log('SHOWN');
                                  customStyles += ` ${styles.slideOut}`;
                                  break;
                              case 'REMOVED':
                                  console.log('REMOVED');
                                  customStyles += ` ${styles.removed}`;
                                  break;
                          }
                          return (
                              <div key={el.index} className={customStyles}>
                                  <img className={styles.cross} src={cross} />
                                  {el.message}
                              </div>
                          );
                      } else {
                          return (
                              <div
                                  key={el.index}
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
