import React, { useState } from 'react'
import "../App.css"
import logo from "../img-container/headerlog.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook, faHome, faUser } from '@fortawesome/free-regular-svg-icons';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';
import { faHomeUser } from '@fortawesome/free-solid-svg-icons';
export function Header() {

  const [showNav, setNav] = useState(false)


  return (


    <div>
      {/* ----------------Header Section----------- */}

      <header id='headerSection'>

        <nav>
          <span onClick={() => setNav(!showNav)} id='menueBar'>☰</span>
          <ul id='navList' className={(showNav) ? "showNav" : ""} >
            <li onClick={() => setNav(false)} ><a href="http://localhost:5173/#homeSection" > <FontAwesomeIcon icon={faHome} /> Home</a></li>
            <li onClick={() => setNav(false)}><a href="http://localhost:5173/#propertiesSection"> <FontAwesomeIcon icon={faHomeUser} /> Properties</a></li>
            <li onClick={() => setNav(false)}><a href="http://localhost:5173/#servicesSection"> <FontAwesomeIcon icon={faServicestack} />Services</a></li>
            <li onClick={() => setNav(false)}><a href="http://localhost:5173/#aboutUs"><FontAwesomeIcon icon={faUser} /> About</a></li>
            <li onClick={() => setNav(false)}><a href="http://localhost:5173/#contactUs"><FontAwesomeIcon icon={faContactBook} /> Contact Us</a></li>
          </ul>

          <ul>
            <li style={{ background: "white", width: "100px", borderRadius: "20px" }} ><img src={logo} loading='lazy' alt="Header Logo" /></li>
            <li className='text-[35px] font-bold  '>Ak-Estate</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}


{/* ----------------Home Section----------- */ }

export function Home() {
  return (


    <div>
      <a href="#homeSection"> <span id='topper'>&uarr;</span></a>
      <main id='homeSection' className='flex justify-center items-center'>
        <section>

          <img style={{ zIndex: '-1', position: "absolute", height: "700px", width: '100%' }} loading='lazy' src="../src/img-container/bg-img-home-2.webp" alt="The Image of Home For Background Cover" />
          <h1 className='text-[40px] font-bold mt-[-140px] text-center mb-12'>Find Your Dream Property Today</h1>

        </section>
      </main>
    </div>
  )
}


