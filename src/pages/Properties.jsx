import React from 'react'
import "../App.css"
import propApi from "../pages/propertiesdata.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBath, faBed, faCommentsDollar, faLocation, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
export default function Properties() {

  let propertiesData = propApi.map((v, i) => {
    return (
       <div key={i} className='mt-16 ' id='itimcontainer' >

        <article>
          <img className='w-[700px] h-[500px]' loading='lazy' src={v.image} alt="Properties Image" />
        </article>


        <article >
          <header>

            <div>  <span className='text-[20px]'>Price <FontAwesomeIcon id='dollaricon' icon={faCommentsDollar} /></span> <h1 className=' font-sherif font-[600] text-[25px] '> {v.price}</h1>
            </div>

            <div>  <span className='text-[15px]'>Furnished </span> <h2 className=' font-sherif font-[600] text-[20px] text-gray-800 '> {v.furnished}</h2>
            </div>


            <div>  <span className='text-[15px]'>Construction</span> <h2 className=' font-sherif font-[600] text-[20px] text-gray-800 '> Finished</h2>
            </div>

            <div>
              <span className='text-[15px]'>Area </span> <h2 className=' font-sherif font-[600] text-[20px] text-gray-800 '> {v.area}</h2>

            </div>
          </header>

          <aside>

            <div>
              <div>
                <span className='text-[12px]'>Bedrooms <FontAwesomeIcon icon={faBed}/></span> <h1 className=' font-sherif font-[600] text-[17px] '> {v.bedrooms}</h1>

              </div>


              <div>
                <span className='text-[12px]'>Bathrooms <FontAwesomeIcon icon={faBath}/></span> <h1 className=' font-sherif font-[600] text-[17px] '> {v.bathrooms}</h1>

              </div>

              <div>
                <span className='text-[12px]'>Location <FontAwesomeIcon icon={faLocation}/></span> <h1 className=' font-sherif font-[600] text-[17px] '> {v.location}</h1>
              </div>

              <footer id='links'>
                <a href="http://localhost:5173/#contactUs">
                  <button style={{display:"flex" , justifyContent:"center" ,alignItems:"center"}}>Buy now</button></a>
                <a href={v.tel} target='blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
              </footer>

            </div>

          </aside>

        </article>



      </div>

    )
  })

  return (
    <div>


      {/* Properties Section */}

      <main id='propertiesSection' className="w-full flex flex-col justify-center items-center">

        <section className='flex flex-col justify-center items-center'>

          <h1 className='font-bold text-center mb-[20px] text-[45px] w-fit '>Properties</h1>
          <p>A beautiful modern home located in a prime neighborhood with spacious rooms, a stylish interior, and excellent amenities.</p>

        </section>

        <section >
          {propertiesData}
        </section>

      </main>

    </div>
  )
}
