/**
 * Centralized configuration — env-driven with safe defaults.
 * All hardcoded values extracted here for single-source-of-truth.
 */
const CONFIG = {
  githubUsername: process.env.REACT_APP_GITHUB_USERNAME || "sejalsahu01",
  siteUrl: process.env.REACT_APP_SITE_URL || "https://sejalsahu.netlify.app",
  siteName: "Sejal Sahu",
  preloaderDurationMs: 1200,
};

export default CONFIG;
