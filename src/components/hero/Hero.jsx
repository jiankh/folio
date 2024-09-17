import "./hero.scss"
import { easeIn, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

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
            delay: 0
        }
    }
}

const textVariants = {
    initial: {
        y: "-100%",
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: easeIn,
            delay: 0
        }
    },
    exit: {
        opacity:0,
        y: "100%",
        transition: {duration: 1}
    }
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

    const [ref, inView] = useInView({
        triggerOnce:true,
        threshold:0.4
    })

    // console.log("InView:", inView);

    return (
        <div className="hero">
            <div className="wrapper">
                <div className="box">
                    <motion.div
                        ref={ref}
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
                    {/* Software Engineer / Web Dev   |  NYC */}
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
                        exit="exit"
                    >
                        <pre>I'M  </pre> Jean Huang
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
