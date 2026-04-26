import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiMysql,
} from "react-icons/di";
import {
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiStreamlit,
  SiTableau,
  SiPowerbi,
  SiTensorflow
} from "react-icons/si";
import { useTheme } from "../../context/ThemeContext";

function Techstack() {
  const { role } = useTheme();

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <div className="tech-icons-text">NumPy</div>
      </Col>
      
      {role === "aiml" ? (
        <>
          <Col xs={4} md={2} className="tech-icons">
            <SiPytorch />
            <div className="tech-icons-text">PyTorch</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiTensorflow />
            <div className="tech-icons-text">TensorFlow</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiOpencv />
            <div className="tech-icons-text">OpenCV</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus />
            <div className="tech-icons-text">C++</div>
          </Col>
        </>
      ) : (
        <>
          <Col xs={4} md={2} className="tech-icons">
            <SiTableau />
            <div className="tech-icons-text">Tableau</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPowerbi />
            <div className="tech-icons-text">Power BI</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiScikitlearn />
            <div className="tech-icons-text">Scikit-learn</div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiStreamlit />
            <div className="tech-icons-text">Streamlit</div>
          </Col>
        </>
      )}
    </Row>
  );
}

export default Techstack;
