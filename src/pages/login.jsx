import React, { useState } from "react";
import { ArrowLongUpIcon, KeyIcon } from "@heroicons/react/24/solid";
import "./login.css";

const Login = () => {
  const [isSaas, setIsSaas] = useState(true);

  return (
    <div className="auth-container">
      {/* Left Section */}
      <div className="auth-left">
        <img src="/png/logoFaded.png" alt="logo" className="auth-left-logo" />
        <div className="auth-card shadow-card">
          <div className="auth-card-header">
            <img src="/svg/logo.svg" alt="logo" className="auth-card-logo" />
            <span className="auth-card-title">AI to Detect & Autofix Bad Code</span>
          </div>
          <div className="auth-stats">
            <div className="stat">
              <span className="stat-value">30+</span>
              <span className="stat-label">Language Support</span>
            </div>
            <div className="stat">
              <span className="stat-value">10K+</span>
              <span className="stat-label">Developers</span>
            </div>
            <div className="stat">
              <span className="stat-value">100K+</span>
              <span className="stat-label">Hours Saved</span>
            </div>
          </div>
        </div>
        <div className="auth-chart shadow-card">
          <div className="chart-header">
            <img src="/svg/GraphAuth.svg" alt="graph" />
            <div className="chart-details">
              <div className="chart-trend">
                <ArrowLongUpIcon className="icon-up" />
                14%
              </div>
              <span className="chart-duration">This week</span>
            </div>
          </div>
          <div className="chart-info">
            <span className="chart-title">Issues Fixed</span>
            <span className="chart-value">500K+</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="auth-right">
        <div className="auth-form shadow-card">
          <div className="auth-form-header">
            <div className="auth-brand">
              <img src="/svg/logo.svg" alt="logo" />
              <span className="auth-brand-title">CodeAnt AI</span>
            </div>
            <div className="auth-welcome">Welcome to CodeAnt AI</div>
            <div className="auth-mode">
              <button className={`auth-mode-button ${isSaas ? "active" : ""}`} onClick={() => setIsSaas(true)}>
                SAAS
              </button>
              <button className={`auth-mode-button ${!isSaas ? "active" : ""}`} onClick={() => setIsSaas(false)}>
                Self Hosted
              </button>
            </div>
          </div>
          <div className="auth-options">
            {isSaas ? (
              <div className="auth-signin-options">
                {["github", "bitbucket", "azure-devops", "gitlab"].map((provider) => (
                  <a key={provider} href="./home" className="auth-signin-option">
                    <img src={`/svg/${provider}.svg`} alt={provider} className="auth-icon" />
                    Sign in with {provider.charAt(0).toUpperCase() + provider.slice(1)}
                  </a>
                ))}
              </div>
            ) : (
              <div className="auth-signin-options">
                <a href="./home" className="auth-signin-option">
                  <img src="/svg/gitlab.svg" alt="gitlab" className="auth-icon" />
                  Sign in with GitLab
                </a>
                <a href="./home" className="auth-signin-option">
                  <KeyIcon className="auth-icon" />
                  Sign in with SSO
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="auth-privacy">
          By signing up you agree to the <b>Privacy Policy</b>.
        </div>
      </div>
    </div>
  );
};

export default Login;
