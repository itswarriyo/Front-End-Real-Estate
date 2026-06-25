import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Suspense, lazy } from "react";
import logo from "./img-container/headerlog.webp";
import './App.css'
import './media-responsive.css'
const Header = lazy(() =>
  import("./pages/Header.jsx").then(module => ({ default: module.Header }))
);

const Home = lazy(() =>
  import("./pages/Header.jsx").then(module => ({ default: module.Home }))
);

const Properties = lazy(() => import("./pages/Properties.jsx"));
const Services = lazy(() => import("./pages/services.jsx"));
const ContactUs = lazy(() => import("./pages/ContactUs.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Footer = lazy(() => import("./pages/Footer.jsx"));

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Suspense
        fallback={
          <div className="loader-container">
            <img style={{ width: "300px" }} src={logo} loading='lazy' alt="Company Logo" className="loader-logo" />
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        }
      >
        <Header />
        <Home />
        <Properties />
        <Services />
        <About />
        <ContactUs />
        <Footer /></Suspense>

    </>
  )
}

export default App
