import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {

    return (
        <motion.div 
        initial={{ y: -70  }}
        animate={{ y: 0  }}
        transition={{ duration: 0.5 }}
        className="navbar"
        exit={{ y: 70, opacity:0}} //wont work because it just gets kick out from main app with a trigger
        
        >
            
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