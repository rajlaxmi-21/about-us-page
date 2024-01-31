import React from 'react'
import Aboutus from './component/Aboutus'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration:1000,
    });
  }, []);
  return (
    <div>
        <Aboutus />
    </div>
  )
}

export default App
