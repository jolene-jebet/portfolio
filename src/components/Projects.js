// Create your Projects component here
import Project from '../assets/login.png';
import data from '../data/projects.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
    // settings for the slider
    // dots: shows the dots at the bottom of the slider
    // infinite: makes the slider loop back to the start when it reaches the end
    // initialSlide: sets the first slide
    // slidesToShow: shows 3 slides at a time
    // slidesToScroll: scrolls through 3 slides at a time
    // responsive: sets different settings for different screen sizes
    // breakpoint: sets the screen size at which the settings change
    // settings: sets the new settings for the screen size
    const settings = {
        dots: true,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        //centerPadding: '20px',//trying to space 
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    initialSlide: 0,
                    //centerPadding: '10px' //trying to space
                }
            }
        ]
    };

    return (
        <div id='projects' className="projects">
            <div className='heading'>
                <h2>WORKS</h2>
            </div>
            <div className='projects-container'>
                <Slider {...settings}>
                    {
                        data.map((project, key) => {
                            return (
                                <div key={key} className='project'>
                                    <div className='content'>
                                        <img src={Project} alt="Project" />
                                        <h2 className='name'>{project.name}</h2>
                                        {
                                            project.description.length > 130
                                                ? <p className='description-min'>{project.description}</p>
                                                : <p className='description'>{project.description}</p>
                                        }
                                        <div>
                                            <a
                                                className='project-button'
                                                target='_blank'
                                                href={project.link}
                                                rel='noreferrer'
                                            >github</a>
                                        </div> 
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}
export default Projects;