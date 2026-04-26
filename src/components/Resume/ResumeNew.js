import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfAiml from "../../Assets/sejal_sahu_resume.pdf";
import pdfDs from "../../Assets/sejal_sahu_resume_ds.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useTheme } from "../../context/ThemeContext";
import { resumeLabels } from "../../data/roleContent";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const { role } = useTheme();

  const pdf = role === "ds" ? pdfDs : pdfAiml;
  const label = resumeLabels[role] || resumeLabels.aiml;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "300px" }}
          >
            <AiOutlineDownload />
            &nbsp;{label}
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            loading={
              <div style={{ textAlign: "center", padding: "2rem", color: "var(--accent)" }}>
                Loading resume…
              </div>
            }
            error={
              <div style={{ textAlign: "center", padding: "2rem", color: "#ff6b6b" }}>
                Failed to load resume. Please try again.
              </div>
            }
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "300px" }}
          >
            <AiOutlineDownload />
            &nbsp;{label}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
