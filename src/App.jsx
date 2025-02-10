import { useRef, useState, useEffect } from "react";
import "./app.scss";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Technology from "./components/technology/Technology";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Spacer from "./components/Spacer";
import LoadingScreen from "./components/loading/LoadingScreen";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showNav, setShowNav] = useState(false);

    const heroRef = useRef();
    const aboutRef = useRef()
    const projectRef = useRef()
    const technologyRef = useRef()
    const contactRef = useRef()


    //LOADING ANIMATION CONTROL
    const handleLoadingComplete = () => {
        setIsLoading(false);
        setTimeout(() => {
            setShowNav(true)
        }, 1000)
    };

    //HIDE NAVBAR LOGIC
    useEffect(() => {
        if (!isLoading) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setShowNav(entry.isIntersecting);
                },
                {
                    root: null,
                    threshold: 0.1,
                }
            );

            if (heroRef.current) {
                observer.observe(heroRef.current);
            }

            // Cleanup function to unobserve when component unmounts or ref changes
            return () => {
                if (heroRef.current) {
                    observer.unobserve(heroRef.current);
                }
            };
        }
    }, [isLoading, heroRef]);

    //Smooth Scrolling Lenis
    const lenis = new Lenis({})
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)



    if (isLoading) {
        return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
    }


    return (
        <div className="web-container">
            <Navbar isVisible={showNav} />
            <section id="hero" className="section1" ref={heroRef}>
                <Hero />
            </section>
            <section id="about" className="section2" ref={aboutRef}>
                <About />
            </section>
            <section id="technology" className="section3" ref={technologyRef}>
                <Spacer />
                <Technology />
            </section>
            <section id="project" className="section4" ref={projectRef}>
                <Spacer />
                <Project />
            </section>
            <section id="contact" className="section5" ref={contactRef}>
                <Contact />
            </section>
            <Footer />
        </div>
    );
}

export default App;

