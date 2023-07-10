import React from 'react';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import FullStar from '../../../assets/FullStar.svg';
import EmptyStar from '../../../assets/EmptyStar.svg';
import HalfStar from '../../../assets/HalfStar.svg';
const Rating = ({ rating = 0 }) => {
    const totalStars = 5;
    const activeStars = Math.round(rating) / 2;
    const styleForStar = {
        width: '60px',
        height: '50px',
        color: 'ff5500',
    };
    return (
        // <Box
        //     sx={{
        //         display: 'inline-flex',
        //         textAlign: 'left',
        //     }}
        // >
        <div>
            {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStars ? (
                    activeStars - index == 0.5 ? (
                        <img key={index} style={styleForStar} src={HalfStar} />
                    ) : (
                        <img key={index} style={styleForStar} src={FullStar} />
                    )
                ) : (
                    <img key={index} style={styleForStar} src={EmptyStar} />
                );
            })}
        </div>
        // </Box>
    );
};

export default Rating;
