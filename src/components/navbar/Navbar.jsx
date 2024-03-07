import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {

    return (
        <motion.div 
        initial={{y:-70}}
        transition={{duration:1}}
        animate={{y:0}}
        className="navbar">
            
            <div className="wrapper">
                <motion.div className="logo">               
                    jeanh
                </motion.div>

                <span>
                    <a href="">about</a>
                    <a href="">technology</a>
                    <a href="">projects</a>
                    <a href="">contact</a>
                </span>
            </div>
        </motion.div>
    )
}

export default Navbar