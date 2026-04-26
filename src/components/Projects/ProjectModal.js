import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()} style={{ position: "relative" }}>
        <button className="modal-close-btn" onClick={onClose}>
          <AiOutlineClose />
        </button>

        <h2>{project.title}</h2>

        <div className="modal-section">
          <h4>📋 Overview</h4>
          <p>{project.description}</p>
        </div>

        {project.howItWorks && (
          <div className="modal-section">
            <h4>⚙️ How It Works</h4>
            <p>{project.howItWorks}</p>
          </div>
        )}

        {project.results && (
          <div className="modal-section">
            <h4>📊 Key Results</h4>
            <p>{project.results}</p>
          </div>
        )}

        {project.techStack && project.techStack.length > 0 && (
          <div className="modal-section">
            <h4>🛠️ Tech Stack</h4>
            <div>
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-chip">{tech}</span>
              ))}
            </div>
          </div>
        )}

        <div className="modal-buttons">
          <Button variant="primary" href={project.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
          {project.demoLink && (
            <Button variant="primary" href={project.demoLink} target="_blank">
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
