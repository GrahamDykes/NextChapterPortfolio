import './Contact.css'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_5rv1juh', 'template_c2yortl', form.current, 'MXfzDyyFshgPUNKzr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            form.current.reset();
            alert("You sent Graham a msg")
        };
  return (
   <>
   <div className='contact'>
    Contact Me:
    <a href="https://github.com/GrahamDykes/"><ion-icon className='contacticon' name="logo-github"></ion-icon></a>
    <a href="https://www.linkedin.com/in/graham-dykes-19b10312"><ion-icon className='contacticon' name="logo-linkedin"></ion-icon></a>
    {/* <a href="mailto:grahamdykes@gmail.com"><ion-icon name="mail-outline"></ion-icon></a> */}
   </div>
   <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',}}>
    <form ref={form} onSubmit={sendEmail } style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',}} className='contactform'>
      <label>Name</label>
      <input type="text" className="greenBorder" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" className="greenBorder"/>
      <label>Message</label>
      <textarea name="message" style={{width:'30%', height:'100px'}} className="greenBorder"/>
      <input type="submit" value="Send" className="marginToppy"/>
    </form>
    </div>
   </>
  )
}

export default Contact
