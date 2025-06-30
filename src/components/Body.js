// Create your Body component here
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import Avatar from '../assets/myImg.JPG';

const Body = () => {
    return(
        <div id="body" className="body">
            <div className='body-container'>
                <div className="body-profile">
                    <img src={Avatar} alt="Avatar" className="body-img" />

                    <div className="body-content">
                        <div className="body-headline">Jolene Sitienei</div>
                        <div className="body-text">Computer Scientist</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://github.com/jolene-sitienei" target="_blank" rel="noreferrer" className='icon-link'><i><FaGithub /></i></a>
                        <a href="https://www.linkedin.com/in/jolene-sitenei/" target="_blank" rel="noreferrer" className='icon-link'><i><FaLinkedin /></i></a>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Body;