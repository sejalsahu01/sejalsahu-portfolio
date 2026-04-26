import React from "react";

/**
 * ErrorBoundary — catches render crashes in child tree.
 * Without this, any component error = full white screen.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // In production, send to monitoring service (Sentry, LogRocket, etc.)
    if (process.env.NODE_ENV === "development") {
      console.error("[ErrorBoundary]", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            color: "white",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <h2 style={{ color: "var(--accent, #00D4AA)", marginBottom: "1rem" }}>
            Something went wrong
          </h2>
          <p style={{ opacity: 0.7, maxWidth: "400px" }}>
            An unexpected error occurred. Please refresh the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "1.5rem",
              padding: "0.6rem 1.5rem",
              background: "var(--btn-bg, #0e7460)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
