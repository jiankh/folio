import "./project.scss"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import projects from '../../projectData'
import openNew from '/images/open-in-new.svg'

const Project = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "start end"]
    })

    const yBg = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-25%"]
    )

    const top4Projects = projects.slice(0, 4)

    return (
        <div className="project" ref={ref}>

            <motion.h1>Projects</motion.h1>

            <div className="wrapper">
                {/* 
                <motion.div style={{ y: yBg }} className="project-wrap project-1">

                    <div className="project-img"></div>
                    <div className="project-description"></div>

                </motion.div> */}


                {top4Projects.map((project, index) => (
                    <motion.div
                        key={index}
                        style={{ y: yBg }}
                        className={`project-wrap project-${index + 1}`}>

                        <div className="project-img">
                            <img src={project.img} alt="" />
                        </div>

                        <div class="project-description">
                            <div className="wrap-title">
                                <h2>{project.title}</h2>
                                <div class="buttons">
                                    <a href={project.codeLink}>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                                    </a>

                                    <a href={project.previewLink}>
                                        <img src="https://raw.githubusercontent.com/jiankh/apps/main/dist/images/open-in-new.svg" alt="" />
                                    </a>

                                </div>


                            </div>

                            <p>{project.description}</p>
                        </div>

                    </motion.div>
                ))}




            </div>

            <div className="more-projects">
                <a href="">
                    see more
                </a>
            </div>


        </div>
    )
}

export default Project