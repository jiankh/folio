import "./technology.scss"
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react"

const shakeVariants = {
    hover: {
      x: [0, -10, 10, -5, 5, 0],
      transition: {
        repeat: false,
        duration: 0.4,
        ease: "linear",
      },
    },
  };

const Technology = () => {

  return (
    <div id="technology" className="technology">   

        <h1>Stack</h1>

        <div className="wrapper">
            <div className="tech1">
            <motion.img
                variants={shakeVariants}
                whileHover='hover'
             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                Javascript
            </div>
            <div className="tech2">    
                <motion.img
                variants={shakeVariants}
                whileHover='hover' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                React
            </div>
            <div className="tech3">
                <motion.img
                variants={shakeVariants}
                whileHover='hover' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                HTML
            </div>
            
            <div className="tech4">
                <motion.img
                variants={shakeVariants}
                whileHover='hover' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
                CSS/SCSS/Tailwind
            </div>
            <div className="tech5">
            <motion.img
                variants={shakeVariants}
                whileHover='hover' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
            Python

            </div>
            <div className="tech6">               
                <motion.img
                variants={shakeVariants}
                whileHover='hover' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                SQL

            </div>
            <div className="tech7">
                <motion.img
                variants={shakeVariants}
                whileHover='hover' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />
                PANDAS

            </div>
            <div className="tech8">
                <motion.img
                variants={shakeVariants}
                whileHover='hover' src="https://www.svgrepo.com/show/354428/tableau-icon.svg" />
                Tableau
            </div>
            {/* <div className="tech9">Power BI</div>
            <div className="tech10"></div> */}
        </div>


    </div>
  )
}

export default Technology