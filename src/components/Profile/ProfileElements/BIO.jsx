import React from 'react';
import { useDispatch } from 'react-redux';
import { notificationThunk } from '../../../redux/thunks/notificationThunk';
import cogwheel from '../../../assets/cogwheel.svg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import styles from '../Profile.module.scss';
import { useLogoutMutation } from '../../../redux/api/authApi';
// import { Paper } from '@mui/material';
import loadingCircle from '../../../assets/loadingCircle.gif';

const BIO = ({ username, regDate }) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const instanceOfRegDate = new Date(`${regDate}`);
    const parsedRegDate = `on site since ${instanceOfRegDate.getUTCDate()} ${instanceOfRegDate
        .toLocaleString('en-US', { month: 'long' })
        .toLowerCase()} ${instanceOfRegDate.getFullYear()}`;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [logout, { isLoading }] = useLogoutMutation();
    const handleLogout = async () => {
        try {
            await logout();
            dispatch(
                notificationThunk({
                    message: 'You have successfully logged out',
                    type: 'SUCCESS',
                })
            );
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <div className={styles.username}>
                {username}
                <img
                    onClick={handleClick}
                    className={styles.cogwheel}
                    src={cogwheel}
                />
                <Menu
                    sx={{ backgroundColor: 'transparent' }}
                    id="fade-menu"
                    // MenuListProps={{
                    //     'aria-labelledby': 'fade-button',
                    // }}
                    MenuListProps={{
                        style: { backgroundColor: 'transparent' },
                    }}
                    PaperProps={{
                        style: {
                            // backgroundColor: 'rgb(199, 199, 199, 1)',
                            backgroundColor: 'gray',
                            color: 'white',
                            // backgroundColor: 'transparent',
                            // boxShadow: 'none',
                        },
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    {/* <Paper> */}
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleLogout}>
                        {isLoading ? (
                            <img
                                style={{ height: '24px', margin: '0 auto' }}
                                src={loadingCircle}
                            />
                        ) : (
                            'Logout'
                        )}
                    </MenuItem>
                    {/* </Paper> */}
                </Menu>
            </div>
            <div className={styles.metaData}>no bio yet / {parsedRegDate}</div>
        </div>
    );
};

export default BIO;
