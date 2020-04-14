import React, { useState } from "react"
import './App.css';

import logo from './logo.svg';
import './App.css';

import dayu from "./大鱼.m4a"

import App3 from "./Addtodolist"
import History from "./History"

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));


// App2 start




function App2() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // 
  const [Todo, setTodo] = useState("");
  const [List, setList] = useState([]);
  const [Hislist, setHislist] = useState([])

  return (
    <>
      <div>
        <audio src={dayu} autoPlay> <code>audio</code>elm</audio>

      </div>
      <Tabs

        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="ToDoList" {...a11yProps(0)} />
        <Tab label="History" {...a11yProps(1)} />

      </Tabs>
      <TabPanel value={value} index={0}>

        <div className="greeting">
          <img src={logo} alt="flaut" height="220" width="220" />

        </div>
        <App3 todo={Todo} settodo={setTodo} list ={List} setlist={setList} hislist={Hislist} sethislist={setHislist} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="greeting">
          <img src={logo} alt="flaut" height="220" width="220" />

        </div>
        <History todo={Todo} settodo={setTodo} list ={List} setlist={setList} hislist={Hislist} sethislist={setHislist} />
      </TabPanel>



    </>)
}

export default App2;