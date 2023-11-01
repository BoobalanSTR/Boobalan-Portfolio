"use client"
import Navbar from './Components/Navbar/Navbar'
import Explore from './Homepage/explore'
import backgroundImage from '../../public/assets/img/backMain.jpg'
import Craftman from './Homepage/craftman';
import Skills from './Homepage/skills';
import Services from './Homepage/services';
import ContactForm from './Homepage/contact';
import Footer from './Homepage/footer';
import { useRef, MouseEventHandler } from 'react';
export default function Home() {
  const style = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
  };
  const craftmanRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const scrollToAbout: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    if (craftmanRef.current) {
      craftmanRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContactForm: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="custom-background-class" style={style}>
      <Navbar
        scrollToAbout={scrollToAbout}
        scrollToContactForm={scrollToContactForm}
      />
      <Explore />
      <Craftman prop1="Value for prop1" prop2={42} ref={craftmanRef} />

      <Skills />
      <Services />
      <ContactForm ref={contactFormRef} />
      <Footer />
    </div>
  )
}
