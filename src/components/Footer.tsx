
/* import Footer from "./Footer" */
import ContactUs from "./generals/ContactUs"
import FooterContact from "./generals/FooterContact"
import Testimonials from "./Testimonials"


const Footer = () => {
  return (
    <footer className=" text-whsite">
        <Testimonials/>
        <ContactUs/>
       <FooterContact/>
    </footer>
  )
}
export default Footer