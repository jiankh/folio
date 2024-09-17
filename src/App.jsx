import { useRef, useState, useEffect } from "react";
import "./app.scss";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Technology from "./components/technology/Technology";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
    const [showNav, setShowNav] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update state based on whether the ref section is intersecting (on screen)
                setShowNav(entry.isIntersecting);
            },
            {
                root: null, // null means it will observe changes in relation to the viewport
                threshold: 0.1, // 10% of the item has to be in view for the callback to run
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup function to unobserve when component unmounts or ref changes
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            {showNav && <Navbar />}
            <section ref={ref}>
                <Hero />
            </section>

            <section>
                <About />
            </section>

            <section>
                <Technology />
            </section>
            <section>
                <Project />
            </section>
            
            <section>
                <Contact />
            </section>

            <Footer />
        </div>
    );
}

export default App;

