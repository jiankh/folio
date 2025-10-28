import "./about.scss"
import gsap from "gsap"
import { useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

const About = () => {

    gsap.registerPlugin(ScrollTrigger)
    const containerRef = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "top top",
                scrub: 0.5,
                
            }
        });

        tl.fromTo(".image img", 
            {xPercent: -100, opacity: 0},
            {xPercent: 0, opacity: 1, duration: 1}
        )
        .fromTo(".aboutText", 
            {xPercent: 100, opacity: 0},
            {xPercent: 0, opacity: 1, duration: 1}, 
            "<"
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} id="about" className="about">   

            <h1>About Me</h1>

            <div className="wrapper">
                <div className="image">
                    <img src="pic.jpg" alt="Profile Picture" />
                </div>

                <div className="aboutText">
                    Hi, I’m Jean Huang — a data analyst and tech enthusiast from New York City with a background in Biomedical Engineering. I’m passionate about uncovering insights through data and using technology to create impactful solutions. My journey started in engineering, but my curiosity for coding and analytics pushed me to expand into data science and software development. I enjoy blending technical skills with analytical thinking to make data both useful and accessible.
                </div>
            </div>


        </div>
    )
}

export default About