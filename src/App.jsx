import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GetTickets } from './GetTickets/getTickets'
import { Page7 } from "./GetTickets/Page7.jsx";
import { Page6 } from "./GetTickets/Page6.jsx";
import { Page5 } from "./GetTickets/Page5.jsx";
import { Page4 } from "./GetTickets/Page4.jsx";
import { Page3 } from "./GetTickets/Page3.jsx";
import { Page2 } from "./GetTickets/Page2.jsx";
import { Page1 } from "./GetTickets/Page1.jsx";
import { FirstPage } from "./GetTickets/FirstPage.jsx";
import  Footer  from "./GetTickets/Footer.jsx";
function App() {

  return (
    <>
      <FirstPage />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <GetTickets />
      {/* <Footer/> */}
    </>
  );
}

export default App
