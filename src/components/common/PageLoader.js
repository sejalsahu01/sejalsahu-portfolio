import React from "react";

/**
 * PageLoader — Suspense fallback for lazy-loaded pages.
 * Shows a minimal loading indicator while page chunks download.
 */
function PageLoader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        color: "var(--accent, #00D4AA)",
        fontSize: "1.2rem",
        fontFamily: "inherit",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "24px",
          height: "24px",
          border: "3px solid var(--accent-dim, rgba(0,212,170,0.15))",
          borderTopColor: "var(--accent, #00D4AA)",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
          marginRight: "12px",
        }}
      />
      Loading…
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default PageLoader;
