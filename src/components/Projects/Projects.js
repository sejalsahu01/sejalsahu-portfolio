import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectModal from "./ProjectModal";
import Particle from "../Particle";
import { useTheme } from "../../context/ThemeContext";
import projectData from "../../data/projects";

function Projects() {
  const { role } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = projectData.filter(
    (p) => p.role === "both" || p.role === role
  );

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filtered.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <div onClick={() => setSelectedProject(project)}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Container>
  );
}

export default Projects;
