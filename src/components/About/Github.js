import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import CONFIG from "../../config/constants";

/**
 * Github — renders GitHub contribution calendar.
 * Username sourced from centralized config.
 */
function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username={CONFIG.githubUsername}
        blockSize={30}
        blockMargin={10}
        color="var(--accent, #00D4AA)"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
