import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Reviews from '../component/Reviews.js'

const MyTabs = ({ product }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const a11yProps = (index) => {
        return {
            id: `tabpanel-${index}`,
            'aria-controls': `tabpanel-${index}`,
            "sx": { '&.Mui-selected': { color: 'orange' } }
        };
    };

    const CustomTabPanel = ({ value, index, children }) => {
        return (
            <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
                {value === index && children}
            </div>
        );
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    variant='scrollable'
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    TabIndicatorProps={{ sx: { backgroundColor: 'orange' } }} // Customize indicator color
                >
                    <Tab
                        label="Description"
                        {...a11yProps(0)}

                    />
                    <Tab
                        label="Specifications"
                        {...a11yProps(1)}

                    />
                    <Tab
                        label="Product Reviews"
                        {...a11yProps(2)}

                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className='p-2'>{product?.about}</div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                {/* {product?.specs} */}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Reviews product={product}/>
            </CustomTabPanel>
        </Box>
    );
};

export default MyTabs;
