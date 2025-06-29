// Create your Footer component here
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id='footer' className='footer'>
            <div className='footer-contact-info'>
                <h1 className='footer-heading'>Connect with me</h1>
                <p className="footer-contact-access">Email: jolene.sitienei@strathmore.edu</p>
                <p className="footer-contact-access">Phone: +254 111 763 954</p>
            </div>
            <div>
                <h1>Social links</h1>
                <div className="social-icons">
                    <a href="https://www.educative.io/"><i><FaTwitter /></i></a>
                    <a href="https://www.educative.io/"><i><FaInstagram /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;