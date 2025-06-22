import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SchoolIcon from '@mui/icons-material/School';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './Navigation.css'; 

const Navigation = () => {
  return (
    <AppBar position="static" >
      <Toolbar className="toolbar"  >
        <Box className="nav-buttons">

 
        <Button component={Link} to="/menu" color="inherit" className="nav-icon">
            <SchoolIcon />
          </Button>

          {/* <Button component={Link} to="/stories" color="inherit" className="nav-icon">
            <AutoStoriesIcon/>
          </Button> */}

          <Button component={NavLink} to="/history" color="inherit" className="nav-icon">
            <HistorySharpIcon/>
          </Button>

          <Button component={Link} to="/now" color="inherit" className="store-button">
            <InsertEmoticonIcon />
          </Button>


        </Box>
      </Toolbar>
   </AppBar>
  );
};

export default Navigation;
// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';

// const UseEffectExample = () => {
//     const [counter, setCounter] = useState("");

//     useEffect(() => {
//        SetTimeOut({
// },1000)
//     }, [text]);

//   return (
//     <input onChange={(ev) => setText(ev.target.value)}/>
//   )
// }

// export default UseEffectExample;
