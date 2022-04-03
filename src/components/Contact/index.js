import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm  = useRef();


  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover")
    },3000)
  },[])


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        'service_8zddaw8',
        'template_kugzyls',
        refForm.current,
        'HdBIzvaMv2Ruv4OAy'
    ).then(
        () => {
            alert('Message succesfully sent!')
            window.location.reload(false)
        },
        () =>{
            alert("Failed to send the message, please try again.")
        }
    )
  }

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['C','o','n','t','a','c','t', ' ', 'm', 'e']}
                        idx={15}
                        letterClass={letterClass}
                     />
                </h1>
                <p>I am interested in freelance opportunities - especially
            ambitious or large projects. However, if you have other request or
            question, don't hesitate to contact me using below form
            either.</p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required></input>
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required></input>
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required />
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Atharv Arote,
                <br />
                India,
                <br />
                'Shree', Sr.no 970-1/2,
                <br />
                Nashik - 422009 <br/>
                <span>atharvarote@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[19.980713,73.770134]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[19.980713,73.770134]}>
                        <Popup>
                            Atharv lives here, come over for a cup of coffee :)
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}

export default Contact;