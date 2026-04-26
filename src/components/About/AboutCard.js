import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTheme } from "../../context/ThemeContext";

function AboutCard() {
  const { role } = useTheme();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sejal Sahu</span>{" "}
            from <span className="purple">Bhilai, Chhattisgarh, India</span>.
            <br />
            I’m currently pursuing my B.Tech in{" "}
            <span className="purple">Computer Science & Engineering (Artificial Intelligence)</span> at{" "}
            <span className="purple">CSVTU</span>.
            <br />
            
            {role === "aiml" ? (
              <>
                I recently worked as a{" "}
                <span className="purple">Research Intern</span> at{" "}
                <span className="purple">IIT Kanpur</span>, focusing on Hyperspectral Imaging and Deep Learning.
              </>
            ) : (
              <>
                I recently worked as a{" "}
                <span className="purple">Research Intern</span> at{" "}
                <span className="purple">IIT Kanpur</span>, where I honed my skills in analyzing complex data structures.
              </>
            )}
            
            <br />
            <br />
            Outside of coding and data analysis, I love engaging in activities that keep me
            active and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton 🏸
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "var(--accent)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sejal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
