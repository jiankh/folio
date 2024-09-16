import "./technology.scss"
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"

const textVariant = {
    initial: {y:"-100%"}, 
    animate: {
        y:0,
        transition: {
            duration: 1,
        }
    },
    
}

const Technology = () => {

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
    <div className="technology" ref={ref}>   

        <motion.h1>Technology</motion.h1>

        <div className="wrapper">
            <div className="tech1">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                Javascript
            </div>
            <div className="tech2">    
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                React
            </div>
            <div className="tech3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                HTML
            </div>
            
            <div className="tech4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
                CSS/SCSS/Tailwind
            </div>
            <div className="tech5">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
            Python

            </div>
            <div className="tech6">               
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                SQL

            </div>
            <div className="tech7">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />
                PANDAS

            </div>
            <div className="tech8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"></img>
                Power BI
            </div>
            {/* <div className="tech9">Power BI</div>
            <div className="tech10"></div> */}
        </div>


    </div>
  )
}

export default Technology