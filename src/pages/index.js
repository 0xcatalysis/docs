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
    "DeFi Vaults",
    "Stablecoins",
    "RWAfi",
    "Vault Infrastructure",
    "Morpho",
    "Nest Credit",
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
            Catalysis<br />Documentation
          </Heading>
          <p className="hero-subtitle">
          Infrastructure to Natively Integrate Risk Coverage into DeFi Vaults.
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
      description="Infrastructure to Natively Integrate Risk Coverage into DeFi Vaults."
    >
      <HomepageHeader />
      {/* <main className="home-main">
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}