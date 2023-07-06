import React from 'react';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { blue } from '@mui/material/colors';

const Rating = ({ rating = 0 }) => {
    const totalStars = 5;
    const activeStars = Math.round(rating) / 2;
    const styleForStar = { width: '60px', height: '60px', color: '#ff5500' };
    return (
        <Box
            sx={{
                display: 'inline-flex',
                position: 'relative',
                cursor: 'pointer',
                textAlign: 'left',
            }}
        >
            {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStars ? (
                    activeStars - index == 0.5 ? (
                        <Box position="relative">
                            <Box
                                sx={{
                                    width: '50%',
                                    overflow: 'hidden',
                                    position: 'absolute',
                                }}
                            >
                                <StarIcon style={styleForStar} />
                            </Box>
                            <Box>
                                <StarBorderIcon style={styleForStar} />
                            </Box>
                        </Box>
                    ) : (
                        <StarIcon style={styleForStar} />
                    )
                ) : (
                    <StarBorderIcon style={styleForStar} />
                );
            })}
        </Box>
    );
};

export default Rating;
