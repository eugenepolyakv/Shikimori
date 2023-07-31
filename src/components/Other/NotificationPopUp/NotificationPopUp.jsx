import React, { useEffect, useState } from 'react';
import styles from './NotificationPopUp.module.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import cross from '../../../assets/cross.svg';
import { notificationThunkManualClose } from '../../../redux/thunks/notificationThunk';
import { useDispatch } from 'react-redux';
function NotificationPopUp() {
    const data = useSelector((state) => state.notificationSlice.notifications);
    const dispatch = useDispatch();
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
        //     <div className={`${styles.transformDivToDissapear}`}></div>
        //     <div className={`${styles.errorDiv}`}>
        //         <img className={styles.cross} src={cross} />
        //         some text
        //     </div>
        //     <div className={`${styles.transformDivToDissapear}`}></div>
        //     <div className={`${styles.errorDiv}`}>
        //         <img className={styles.cross} src={cross} />
        //         some text
        //     </div>
        //     <div className={`${styles.errorDiv}`}>
        //         <img className={styles.cross} src={cross} />
        //         some text
        //     </div>
        // </div>
        <div className={notifications.length ? styles.container : null}>
            {notifications.length
                ? notifications.map((el) => {
                      if (el.status != 'DISSAPEARS') {
                          let customStyles = styles.errorDiv;
                          switch (el.status) {
                              case 'SLIDE_IN':
                                  customStyles += ` ${styles.slideIn}`;
                                  break;
                              //   case 'SHOWN':
                              //       customStyles += ` ${styles.slideOut}`;
                              //       break;
                              case 'SLIDE_OUT':
                                  customStyles += ` ${styles.slideOut}`;
                                  break;
                              case 'REMOVED':
                                  customStyles += ` ${styles.removed}`;
                                  break;
                          }
                          return (
                              <div key={el.index} className={customStyles}>
                                  <img
                                      className={styles.cross}
                                      src={cross}
                                      onClick={() =>
                                          dispatch(
                                              notificationThunkManualClose({
                                                  newID: el.index,
                                              })
                                          )
                                      }
                                  />
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
