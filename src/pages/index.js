import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";
import React from "react";

import Heading from "@theme/Heading";

function StripedBackground() {
  const lines = Array.from({ length: 30 }, (_, i) => (
    <div key={i} className="striped-line">
      <div className="striped-line-left"></div>
      <div className="striped-line-right"></div>
    </div>
  ));
  
  return <div className="striped-background desktop-only">{lines}</div>;
}

function FeaturePills() {
  const features = [
    "Oracles",
    "Prediction Markets", 
    "AI Inference Engines",
    "ZK Co-Processors",
    "Intents Solvers",
    "Keeper Networks",
    "Anything"
  ];
  
  return (
    <div className="feature-pills-container">
      {features.map((feature, idx) => (
        <div key={idx} className="feature-pill">
          <span></span> {feature}
        </div>
      ))}
    </div>
  );
}

function HomepageHeader() {
  return (
    <header className="hero-banner">
      <StripedBackground />
      <div className="hero-content">
        <div className="hero-left">
        </div>
        <div className="hero-right">
          <Heading as="h1" className="hero-title">
            Catalysis Network Documentation
          </Heading>
          <p className="hero-subtitle">
          Unlocking Unified Access to $20B+ of ETH, BTC & SOL-backed Economic Security for Developers.
          </p>
          <div className="hero-buttons">
            <Link
              className="start-building-button"
              to="/docs/intro"
            >
              Introduction to Catalysis
            </Link>
          </div>
          <FeaturePills />
        </div>
      </div>
    </header>
  );
}

export default function Home() {

  return (
    <Layout
      title="Catalysis"
      description="Unified Access to $20B+ of ETH, BTC & SOL-backed Economic Security for Developers"
    >
      <HomepageHeader />
      {/* <main className="home-main">
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
