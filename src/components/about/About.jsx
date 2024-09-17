import "./about.scss"
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"
import { useInView } from "react-intersection-observer"

const textVariant = {
    initial: {y:"-100%"}, 
    animate: {
        y:0,
        transition: {
            duration: 1,
        }
    },
    
}

const About = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "start end"]
    })

    const yBg = useTransform(
        scrollYProgress,
        [0,1],
        ["0%", "-25%"]
    )

  return (
    <div className="about" ref={ref}>   

        <motion.h1>About Me</motion.h1>

        <div className="wrapper">
            <div className="image">
                <img src="sample.jpg" alt="Profile Picture" />
            </div>

            <motion.div style={{y:yBg}} className="aboutText">
                Hey! I'm Jean Huang, a tech enthusiast living in New York City. With a background in Biomedical Engineering, I've always been drawn to the intersection of technology and innovation. This passion led me to transition my career and dive into the world of programming and software development. As a self-taught and driven individual, I'm constantly seeking new challenges and opportunities to grow. I'm excited to apply my skills and knowledge to exciting projects.
            </motion.div>
        </div>


    </div>
  )
}

export default About