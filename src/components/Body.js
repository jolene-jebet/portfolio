// Create your Body component here
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import Avatar from '../assets/Software.png';

const Body = () => {
    return(
        <div id='body'>
            <div className='body-container'>
                <div className="body-profile">
                    <img src={Avatar} alt="Avatar" className="body-img" />

                    <div className="body-content">
                        <div className="body-headline">Jolene Sitienei</div>
                        <div className="body-text">Software Engineer</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://github.com/jolene-sitienei" target="_blank" rel="noreferrer" className='icon-link'><FaGithub /></a>
                        <a href="https://www.educative.io/" target="_blank" rel="noreferrer" className='icon-link'><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Body;