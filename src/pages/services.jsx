import React from 'react'
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Services() {
    return (


        // -----------Services Section---------------

        <section id='servicesSection'>

            <article id='ServicesSect1'>
                <h1 className='text-[35px] font-bold'>Services</h1>
                <p className='text-gray-600 font-bold '>
                    Sell your property at the best market price with expert guidance, trusted buyers, smooth negotiations, and complete documentation support.
                </p> </article>
            <article id='cardContainer'>
                <div className='serviceCard'>
                    <aside className='text-[140px]'>🏠 </aside>
                    <aside>
                        <h1> <span>*</span> Property <b>Buying</b></h1>
                        <p>Find the perfect residential or commercial property with expert guidance, market insights, and a smooth purchasing process.</p>
                    </aside>
                </div>

                <div className='serviceCard'>
                    <aside className='text-[140px]'>🏢</aside>
                    <aside>
                        <h1> <span>*</span> Property <b>Selling</b></h1>
                        <p>Sell your property at the best market price with professional marketing, buyer connections, and complete support.</p>
                    </aside>
                </div>



                <div className='serviceCard'>
                    <aside className='text-[140px]'>📋 </aside>
                    <aside>
                        <h1> <span>*</span>  Property <b>Rental</b></h1>
                        <p>Discover suitable homes, offices, shops, and apartments for rent based on your budget and requirements.</p>
                    </aside>
                </div>




                <div className='serviceCard'>
                    <aside className='text-[140px]'>📈 </aside>
                    <aside>
                        <h1><span>*</span>  Property <b>Investment</b></h1>
                        <p>Make smarter investment decisions with expert advice on profitable properties and long-term growth opportunities.</p>
                    </aside>
                </div>

                <div className='serviceCard'>
                    <aside className='text-[140px]'>🏗️</aside>
                    <aside>
                        <h1> <span>*</span> Property <b>Investment</b></h1>
                        <p>Get professional consultancy for construction projects, land development, planning, and real estate project management.</p>
                    </aside>
                </div>


                <div className='serviceCard'>
                    <aside className='text-[140px]'>💰 </aside>
                    <aside>
                        <h1> <span>*</span> Property <b>Valuation</b></h1>
                        <p>Receive accurate property value estimates based on current market trends, location, and property condition.</p>
                    </aside>
                </div>


                <div className='serviceCard'>
                    <aside className='text-[140px]'>📑
                    </aside>
                    <aside>
                        <h1> <span>*</span> Legal <b>Documentation</b></h1>
                        <p>Complete property transfers, registrations, contracts, and legal paperwork with reliable professional assistance and guidance.</p>
                    </aside>
                </div>

                <div className='serviceCard'>
                    <aside className='text-[140px]'>🔍</aside>
                    <aside>
                        <h1> <span>*</span> Property <b>Management</b></h1>
                        <p>Manage tenants, rent collection, maintenance requests, and property operations efficiently through expert management services.</p>
                    </aside>
                </div>

            </article>

        </section >



    )
}
