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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nam nihil modi quasi doloribus odit qui incidunt ea voluptates saepe, error consequatur impedit, est, quos laboriosam illum aliquam tenetur natus.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque repellat nobis excepturi ex perspiciatis et, voluptatum fugit aliquid deserunt, voluptatem molestias ab quas veritatis. Eveniet explicabo repudiandae reprehenderit. Alias, dolore?
            </motion.div>
        </div>


    </div>
  )
}

export default About