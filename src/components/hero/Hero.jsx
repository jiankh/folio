import "./hero.scss"
import { easeIn, motion } from "framer-motion"

const sliderVariants = {
    initial: {
        x: "100vw"
    },
    animate: {
        x: "-100%",
        transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
            delay: 1.5
        }
    }
}

const textVariants = {
    initial: {
        y: "100%",
        opacity: 1
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: easeIn,
            delay: 1
        }
    },
    hidden: { opacity: 0, scale: 0.65 }
}

const subtextVariant = {
    initial: {
        x: "100vw"
    },
    animate: {
        x: "0",
        transition: {
            duration: 3,
            ease: "linear",

        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <div className="box">
                    <motion.div
                        className="welcome"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                    >WELCOME, AND
                    </motion.div>
                </div>

                
                <motion.div
                    className="subtitle"
                    variants={subtextVariant}
                    initial="initial"
                    animate="animate"
                    >
                    <hr />
                    Software Engineer / Web Dev   |  NYC
                </motion.div>
            

                <div className="slidingContainer">
                    <motion.div
                        className="slidingTextContainer"
                        variants={sliderVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <pre>  Hello   Hola   Bonjour   您好   Olá   こんにちは   Aloha   안녕하세요   Salve    नमस्ते   здравствуйте   السلام عليكم  Ahoj   Hello   Hola   Bonjour   您好    Olá   こんにちは   Aloha   안녕하세요   Salve   नमस्ते   здравствуйте   السلام عليكم  Ahoj
                        </pre>
                    </motion.div>
                </div>

                <div className="box">
                    <motion.div
                        className="name"
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="hidden"
                    >
                        I'M JEAN HUANG
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
