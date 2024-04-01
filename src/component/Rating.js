import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';



const CommonRating = ({ value, isReadOnly, onChange }) => {
    console.log(value)


    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="text-feedback"
                value={value}
                style={{}}
                readOnly={isReadOnly}
                onChange={onChange}
                precision={0.5}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <Box sx={{ ml: 1 }}>{Number(value)?.toFixed(1)}</Box>
        </Box>
    );
}
CommonRating.defaultProps = {
    value: 0, isReadOnly: true
}

export default CommonRating;