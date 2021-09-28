import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact/Contact";

function Home () {
    return (
      <div className="content_page">
        <>
          <div class="presentation">
            <h1>Hi, I'm Mélanie Vano!</h1>
            <h2>Développeuse Web Junior</h2>
          </div>
          <About />
          <Projects />
          <Contact />
        </>
      </div>
    );
}

export default Home;