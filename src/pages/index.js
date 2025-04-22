import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";
import React from "react";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function StripedBackground() {
  const lines = Array.from({ length: 30 }, (_, i) => (
    <div key={i} className="striped-line">
      <div className="striped-line-left"></div>
      <div className="striped-line-right"></div>
    </div>
  ));
  
  return <div className="striped-background">{lines}</div>;
}

function FeaturePills() {
  const features = [
    "Oracles",
    "Prediction Markets", 
    "AI Inference Engines",
    "ZK Co-Processors",
    "Intents Solvers",
    "Keeper Networks"
  ];
  
  return (
    <div className={styles.featurePillsContainer}>
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
    <header className={clsx(styles.heroBanner)}>
      <StripedBackground />
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
        </div>
        <div className={styles.heroRight}>
          <Heading as="h1" className={styles.title}>
            Catalysis Network
          </Heading>
          <p className={styles.subtitle}>
            The First Security Abstraction Layer
          </p>
          <div className={styles.buttons}>
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
      description="The First Security Abstraction Layer"
    >
      <HomepageHeader />
      <main className="home-main">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
