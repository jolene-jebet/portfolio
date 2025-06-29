// Create your About component here
import IMG from "../assets/Detective.png";

const About = () =>{
    return(
        <div id = "about" className="about">
            <h1 className="about-heading">About me</h1>
            <div className = "about-info">
                <p className = "about-desc">A text here about myself</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;