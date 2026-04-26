import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import { useTheme } from "../../context/ThemeContext";

function Home2() {
  const { role } = useTheme();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            
            {role === "aiml" ? (
              <p className="home-about-body">
                I’m an AI/ML enthusiast who loves transforming data into
                intelligent, reliable solutions. Over my time at CSVTU, I’ve explored several
                technologies and found my passion in building deep learning
                models and computer vision pipelines.
                <br />
                <br />
                I’m proficient in
                <i>
                  <b className="purple">
                    {" "}
                    Python, C++, PyTorch, and SQL{" "}
                  </b>
                </i>
                — and I enjoy working across both AI research and software engineering.
                <br />
                <br />
                My key areas of interest include developing
                <i>
                  <b className="purple">
                    {" "}
                    Deep Learning Architectures, Machine Learning Models,{" "}
                  </b>
                </i>
                and exploring new ways to process complex data and signals.
                <br />
                <br />
                Whenever possible, I love building projects with
                <b className="purple"> Python </b> and modern AI frameworks like{" "}
                <i>
                  <b className="purple">PyTorch</b> and{" "}
                  <b className="purple">Scikit-learn</b>.
                </i>
              </p>
            ) : (
              <p className="home-about-body">
                I’m a data-driven professional who loves extracting meaningful insights
                from complex datasets. Over my time at CSVTU, I’ve honed my skills in
                analytics, visualization, and statistical modeling.
                <br />
                <br />
                I’m proficient in
                <i>
                  <b className="purple">
                    {" "}
                    SQL, Python, Pandas, and Data Visualization{" "}
                  </b>
                </i>
                — bridging the gap between raw data and actionable business strategy.
                <br />
                <br />
                My key areas of interest include driving
                <i>
                  <b className="purple">
                    {" "}
                    Business Intelligence, Exploratory Data Analysis,{" "}
                  </b>
                </i>
                and predictive modeling to solve real-world challenges.
                <br />
                <br />
                Whenever possible, I love building dashboards and analytical solutions with
                <b className="purple"> Python </b> and tools like{" "}
                <i>
                  <b className="purple">Tableau</b>, <b className="purple">Power BI</b>, and{" "}
                  <b className="purple">Matplotlib</b>.
                </i>
              </p>
            )}
            
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar" 
                style={{ 
                  borderRadius: "50%", 
                  width: "280px", 
                  height: "280px", 
                  objectFit: "cover", 
                  border: "4px solid var(--accent)" 
                }} 
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
