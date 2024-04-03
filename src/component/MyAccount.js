import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OrderScreen from '../component/Orderscreen.js'
import Address from '../component/Address.js'
import EditProfile from './Editprofile.js';
import { useDispatch, useSelector } from 'react-redux';
import { saveMyAccountTab } from '../store/slices/cart-slice.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const dispatch = useDispatch()
  const {myAccountTab} = useSelector(state => state.cart);
  
  

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    dispatch(saveMyAccountTab(newValue));
  };

  return (
    <div className='p-2  min-h-[100%] md:min-h-screen'>
      <div className='container p-4 h-full border border-gray-400'>
        <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
          className="flex flex-col md:flex-row"
        >
          <Box className='hidden md:block'>
            <Tabs

              orientation="vertical"

              value={myAccountTab}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label="My Orders" {...a11yProps(0)} />
              <Tab label="User Profile" {...a11yProps(1)} />
              <Tab label="Address" {...a11yProps(2)} />

            </Tabs>
          </Box>
          <Box className={"block md:hidden "}>
            <Tabs
              variant='scrollable'
              value={myAccountTab}
              onChange={handleChange}
            >
              <Tab label="My Orders" {...a11yProps(0)} />
              <Tab label="User Profile" {...a11yProps(1)} />
              <Tab label="Address" {...a11yProps(2)} />

            </Tabs>
          </Box>

          <TabPanel style={{ flexGrow: 1 }} value={myAccountTab} index={0}>
            <OrderScreen />
          </TabPanel>
          <TabPanel style={{ flexGrow: 1 }} value={myAccountTab} index={1}>
            <EditProfile />
          </TabPanel>
          <TabPanel value={myAccountTab} index={2}>
            <Address />
          </TabPanel>


        </Box>
      </div>
    </div>
  );
}
