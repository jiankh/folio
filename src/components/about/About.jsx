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
                    Hey! I'm Jean Huang, a tech enthusiast living in New York City. With a background in Biomedical Engineering, I've always been drawn to the intersection of technology and innovation. This passion led me to transition my career and dive into the world of programming and software development. As a self-taught and driven individual, I'm constantly seeking new challenges and opportunities to grow. I'm excited to apply my skills and knowledge to exciting projects.
                </div>
            </div>


        </div>
    )
}

export default About