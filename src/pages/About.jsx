import React from 'react'
export default function About() {
    return (
        <main id='aboutUs'>
            <h1>About Our</h1>
            <p>We help you find the perfect home, plot, or commercial space at the best price.</p>

            <section id='aboutcont'>

                <div className='aboutcard'>
                    <h1>🔹 Who We Are</h1>
                    <p>
                        Welcome to [Ak Real Estate], a modern real estate platform built to make property buying, selling, and renting simple and stress-free.
                        <br />
                    </p>
                    <details>
                        <summary>Read more</summary>
                        <p>We are a team of dedicated professionals who believe that finding a home should be easy, transparent, and trustworthy.</p>

                    </details>
                </div>

                <div className='aboutcard'>
                    <h1>🔹 Our Mission</h1>
                    <p>
                        Our mission is to connect people with their perfect property without confusion or middlemen issues.
                        <br />
                    </p>

                    <details>
                        <summary>Read more</summary>
                        <p>We aim to provide a smooth experience where users can explore verified listings and make confident decisions.</p>

                    </details>
                </div>

                <div className='aboutcard'>

                    <h1>🔹 What We Do</h1>
                    <h3>
                        At [Ak Real Estate], we provide:

                    </h3>
                    🏡 Verified property listings
                    <br />🏢 Residential & commercial real estate options
                    <br />📍 Easy search by location, price, and property type
                    <br />🤝 Direct connection between buyers and sellers
                    <br />📊 Honest and updated market information

                </div>


                <div className='aboutcard'>

                    <h1 style={{ marginBottom: '-15px' }} >🔹 Why Choose Us</h1>
                    <br /> ✔ 100% trusted listings
                    <br /> ✔ Easy-to-use platform
                    <br /> ✔ Fast property search
                    <br /> ✔ Transparent process
                    <br /> ✔ Customer support when you need it

                </div>

            </section>

        </main>
    )
}
