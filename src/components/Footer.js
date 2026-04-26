import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialLinks from "./common/SocialLinks";

/**
 * Footer — site-wide footer with social links.
 * Social icons rendered via shared SocialLinks component.
 */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-copywright">
          <h3>Sejal Sahu</h3>
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>Copyright © {year} SS</h3>
        </Col>
        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            <SocialLinks />
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
