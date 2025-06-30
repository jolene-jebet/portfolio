// Create your About component here
import IMG from "../assets/Detective.png";

const About = () =>{
    return(
        <div id = "about" className="about">
            <h1 className="about-heading">About me</h1>
            <div className = "about-info">
                <p className = "about-desc">
                    Hello! My name is Jolene Sitienei, and I&#39;m an enthusiast about the entire tech landscape. My experience spans from developing user-friendly mobile applications to tackling complex coding challenges, and I&#39;m eager to explore various domains within the tech field.</p>
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