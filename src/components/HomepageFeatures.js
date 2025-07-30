export default function HomepageFeatures() {
  return (
    <div className="features-section">
      <div className="container">
        <div className="padding-vert--xl">
          <div className="row">
            <div className="col col--4">
              <div className="text--center padding-horiz--md">
                <img
                  src="/img/price-discovery.svg"
                  alt="Global Price Discovery"
                  className="feature-image"
                  width={200}
                />
                <h2>Global Price Discovery</h2>
                <p>
                  Enables global price discovery by aggregating supply (shared
                  security protocols) & demand (SSNs).
                </p>
              </div>
            </div>
            <div className="col col--4">
              <div className="text--center padding-horiz--md">
                <img
                  src="/img/unified-interface.svg"
                  alt="Single Unified Interface"
                  className="feature-image"
                  width={200}
                />
                <h2>Single Unified Interface</h2>
                <p>
                  Provides a single unified interface to source economic security
                  across multiple restaking protocols.
                </p>
              </div>
            </div>
            <div className="col col--4">
              <div className="text--center padding-horiz--md">
                <img
                  src="/img/secure-avs.svg"
                  alt="Build Robust SSNs"
                  className="feature-image"
                  width={200}
                />
                <h2>Build Robust SSNs</h2>
                <p>
                  Protects SSNs from instability caused by the movement of
                  restaked capital between restaking platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
