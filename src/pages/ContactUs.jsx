import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInbox, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
export default function ContactUs() {
    const [formdata, setformData] = useState(
        {
            name: "",
            email: "",
            phone: "",
            message: ''
        })




    // let verifyForm = (e) => {

    //    {
    //         fMessError.innerHTML = "";
    //         fNameError.innerHTML = "";
    //         fEmailError.innerHTML = "";
    //         fPhoneError.innerHTML = "";
    //         fName.style.border = "2px solid green";
    //         fPhone.style.border = "2px solid green";
    //         fEmail.style.border = "2px solid green";
    //         fMess.style.border = "2px solid green";
    //         return true;

    //     }
    // }

    let formhandling = (e) => {
        e.preventDefault();

        let fName = document.getElementById("fName")
        let fEmail = document.getElementById("fEmail")
        let fPhone = document.getElementById("fPhone")
        let fMess = document.getElementById("fMess")
        let fNameError = document.getElementById("fNameError")
        let fEmailError = document.getElementById("fEmailError")
        let fPhoneError = document.getElementById("fPhoneError")
        let fMessError = document.getElementById("fMessError")
        let form = document.getElementById("form")

        const phoneRegex = /^03\d{9}$/;

        if (!fName.value.trim()) {
            e.preventDefault();
            fName.style.border = "2px solid red";
            fNameError.innerHTML = "Plz enter your name!";
            fName.focus();
            return false;
        }
        else if (!fEmail.value.trim()) {
            e.preventDefault();

            fNameError.innerHTML = "";
            fName.style.border = "2px solid green";
            fEmail.style.border = "2px solid red";
            fEmailError.innerHTML = "Plz enter your mail!";
            fEmail.focus();
            return false;
        }

        else if (!fPhone.value.trim()) {
            fNameError.innerHTML = "";
            fEmailError.innerHTML = "";
            fName.style.border = "2px solid green";
            fEmail.style.border = "2px solid green";
            fPhone.style.border = "2px solid red";
            fPhoneError.innerHTML = "Plz enter your number!";
            fPhone.focus();
            return false;
        }

        else if (!phoneRegex.test(fPhone.value.trim())) {
            fNameError.innerHTML = "";
            fEmailError.innerHTML = "";
            fName.style.border = "2px solid green";
            fEmail.style.border = "2px solid green";
            fPhone.style.border = "2px solid red";
            fPhoneError.innerHTML = "Plz enter valid no!";
            fPhone.focus();
            return false;
        }


        else if (!fMess.value.trim()) {

            fNameError.innerHTML = "";
            fEmailError.innerHTML = "";
            fPhoneError.innerHTML = "";
            fName.style.border = "2px solid green";
            fPhone.style.border = "2px solid green";
            fEmail.style.border = "2px solid green";
            fMess.style.border = "2px solid red";
            fMessError.innerHTML = "Plz enter a message";
            fPhone.focus();
            return false;
        } else {

            axios.post("https://real-estate-back-end-six.vercel.app/api/enquery/insert", formdata)
                .then((res) => {
                    alert("Information Saved Successfully!")

                    console.log(res.data);

                    setformData({
                        name: "",
                        email: "",
                        phone: "",
                        message: ""
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }



    let getVale = (event) => {
        let oldData = { ...formdata };
        let oldName = event.target.name;
        let oldValue = event.target.value;
        oldData[oldName] = oldValue;
        setformData(oldData)
    }


    return (

        // -----------Contact US----------------

        <main id='contactUs'>
            <ToastContainer />
            <a id='whatsapp' href="https://wa.me/923094194640" target='blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
            <section id='topCont'>
                <h1>Contact Us</h1>

                <p>
                    We'd love to hear from you. Get in touch with our team for inquiries,
                    support, or any questions you may have. We're here to help.
                </p>
            </section>
            <section id='intSection'>

                <article id='inputSect'>
                    <form id='form' onSubmit={formhandling} >

                        <div>
                            <label htmlFor="fName">Enter Name</label>
                            <input onChange={getVale} name='name' value={formdata.name} type="text" id='fName' className='form-control' placeholder='Enter your nmae.....' />
                            <p className='error' id='fNameError'>  </p>
                        </div>

                        <div>
                            <label htmlFor="fEmail">Enter E-mail</label>
                            <input onChange={getVale} name='email' value={formdata.email} type="email" id='fEmail' placeholder='Enter your mail....' />
                            <p className='error' id='fEmailError'>  </p>

                        </div>

                        <div>
                            <label htmlFor="fPhone">Enter Phone no</label>
                            <input onChange={getVale} name='phone' value={formdata.phone} type="text" id='fPhone' placeholder='Enter your no....' />
                            <p className='error' id='fPhoneError'>  </p>
                        </div>

                        <div>
                            <label htmlFor="fMess">Enter Message</label>
                            <input onChange={getVale} name='message' value={formdata.message} type="text" id='fMess' placeholder='Enter your message....' />
                            <p className='error' id='fMessError'>  </p>

                        </div>
                        <button type='submit'  >Send Now</button>

                    </form>


                </article>
                <article id='contSect'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13596.849932124032!2d74.46686067065428!3d31.573220554883722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2s!4v1781686214849!5m2!1sen!2s"
                        width="400"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div>
                        <a href="mailto:abdullahkhon391@gmail.com"><FontAwesomeIcon className='bg-dark p-[4px] rounded-xl' style={{ color: "orangered", backgroundColor: 'black' }} icon={faEnvelope} /> Email: My/Email</a>
                        <a href="tel:+923094194640"><FontAwesomeIcon className='bg-dark p-[4px] rounded-xl text-[14px] ' style={{ color: "", backgroundColor: 'blue' }} icon={faPhone} /> Phone: 03094194640</a> <br />
                        <a href="https://www.linkedin.com/in/abdullah-khan-4a0682376/" target='blank'><FontAwesomeIcon className='bg-dark p-[4px] rounded-xl' style={{ color: "blue", backgroundColor: 'white' }} icon={faLinkedin} /> My/Linkdin </a>
                        <a href="https://github.com/itswarriyo" target='black'><FontAwesomeIcon className='bg-dark p-[4px] rounded-xl mt-2' style={{ color: "white", backgroundColor: 'black' }} icon={faGithub} /> My/GitHub </a>
                    </div>

                </article>
            </section>

        </main>

    )
}
