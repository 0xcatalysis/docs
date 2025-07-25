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
    "On-chain insurance",
    "Oracles",
    "Slashing Protection",
    "Prediction Markets",
    "Under-collateralized Lending",
    "AI Inference Engines",
    "Modular Stablecoins",
    "RWA Financing",
    "Intents Solvers",
    "Decentralized Prime Brokerages",
    "Risk Tranching",
    "Token Launch Custody",
    "Guaranteed Flash Loans",
    "ZK Co-Processors",
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
          Unlocking Unified Access to $20B+ of ETH, BTC & SOL-backed Economic Security.
          </p>
                    <div className="hero-buttons">
           <Link
              className="start-building-button"
              to="/docs/intro"
            >
              Introduction to Catalysis Network
            </Link>
            <div className="hero-buttons-row">
              <Link
                className="start-building-button"
                to="/docs/architecture/overview"
              >
                Catalysis Core
              </Link>
              <Link
                className="start-building-button"
                to="/docs/coverage/intro"
              >
                Catalysis Coverage
              </Link>
            </div>
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
      description="Unified Access to $20B+ of ETH, BTC & SOL-backed Economic Security."
    >
      <HomepageHeader />
      {/* <main className="home-main">
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
