import { useState, useRef, useEffect } from "react";
import heroImage from "./assets/dp.png";
import ScrollToTop from "./ScrollToTop";
import WAVES from 'vanta/dist/vanta.waves.min.js';

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      // Waves
      setVantaEffect(() => WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: '#1a232e'
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      id="Home"
      className="h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800 text-white z-0" ref={vantaRef}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 md:gap-4 z-20">
        {/* <WaveBackground /> */}
        <div className="md:w-1/3">
          <img src={heroImage} alt="My profile" className="hidden md:block" />
        </div>

        <div className="flex flex-col h-full justify-center text-center  md:w-2/3">
          <h2 className="font-heading font-bold text-4xl md:text-6xl uppercase">
            Hi! I'm Divya Prakash
          </h2>
          <h3 className="font-heading font-bold text-2xl md:text-4xl uppercase text-lime-600">
            a web developer
          </h3>
          <p className="text-gray-500 text-2xl py-4">
            Based in Bengaluru. Passionate about creating digital solutions that
            empower people and businesses.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
