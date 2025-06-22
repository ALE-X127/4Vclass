import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import SignUp from "./pages/SignUp/SignUp";
import Navigation from "./components/Navigation/Navigation";

import History from "./components/ClassProgect/History/History";
import Now from "./components/ClassProgect/Now/now";
import Stories from "./components/ClassProgect/stories/stories";
import MenuV from "./components/ClassProgect/MenuV/MenuV";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Navigation />
      <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
         
         
      }}>
        <Routes>
          <Route path="/menu" element={<MenuV />} />
          <Route path="/History" element={<History />} />
          <Route path="/now" element={<Now />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;

// import React, { useEffect, useState } from 'react'

// const Clock = () => {
//     const [clock, setClock] = useState(new Date());

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setClock(new Date());
//         }, 1000);

//         return () => {
//             window.clearInterval(intervalId);
//         }
//     });

//   return (
//     <div>
//         {String(clock.getHours()).padStart(2, '0')}:
//         {String(clock.getMinutes()).padStart(2, '0')}:
//         {String(clock.getSeconds()
// ).padStart(2, '0')}
// </div>
// )
// }

// export default Clock
