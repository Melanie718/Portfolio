import ProjectCard from "./ProjectCard";


function Projects () {
    return (
      <div class="content" id="projects">
      <span class="anchor" name="target"></span>
        <h1 className="m-2">Mes projets réalisés</h1>
        <div className="m-5 d-flex justify-content-between">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    );
};

export default Projects;