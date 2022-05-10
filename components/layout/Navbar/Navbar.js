import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from "../../../pages";
import Agencies from "../Agencies/agencies";
import Articles from "../Articles/articles";
import Categories from "../Categories/categories";
import Operations from "../Operations/operations";
import Workunits from "../Workunits/workunits";
import Recipes from "../Recipes/recipes";
import Dashboard from "../Dasbhoard/dashboard";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <div>{children}</div>
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

export default function Navbar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%'}}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{borderRight: 1, borderColor: 'divider'}}
            >
                <Tab label="Dashboard" {...a11yProps(0)} />
                <Tab label="Agences" {...a11yProps(1)} />
                <Tab label="Articles" {...a11yProps(2)} />
                <Tab label="Catégories" {...a11yProps(3)} />
                <Tab label="Opérations" {...a11yProps(4)} />
                <Tab label="Recettes" {...a11yProps(5)} />
                <Tab label="Chaînes de production" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} index={0} style={{width: '100%'}}>
                <Dashboard/>
            </TabPanel>
            <TabPanel value={value} index={1} style={{width: '100%'}}>
                <Agencies/>
            </TabPanel>
            <TabPanel value={value} index={2} style={{width: '100%'}}>
                <Articles/>
            </TabPanel>
            <TabPanel value={value} index={3} style={{width: '100%'}}>
                <Categories/>
            </TabPanel>
            <TabPanel value={value} index={4} style={{width: '100%'}}>
                <Operations/>
            </TabPanel>
            <TabPanel value={value} index={5} style={{width: '100%'}}>
                <Recipes/>
            </TabPanel>
            <TabPanel value={value} index={6} style={{width: '100%'}}>
                <Workunits/>
            </TabPanel>
        </Box>
    );
}
