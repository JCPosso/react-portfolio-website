import React,{useState} from 'react'
import './ContactElements.css';
import ContactForm from './ContactForm';
import ContactSucess from './ContactSucess';
import {ContactContainer,ContactContainer2,ContactH1} from './ContactStyles';
const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
    return (
       <ContactContainer id="contact">
           <ContactH1> Contact Me!</ContactH1>
           <ContactContainer2>
           {!isSubmitted ? (
                <ContactForm submitForm={submitForm} />
                ) : (
                <ContactSucess />
                )}
           </ContactContainer2>
       </ContactContainer>
    )
}

export default Contact
