import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <div>
        <section> 
            <Navbar /> 
            <Hero />
        </section>
        
        <section>
            About
        </section>

        <section>Technology</section>
        <section>Projects</section>
        <section>Contact</section>
    </div>
  )
}

export default App


