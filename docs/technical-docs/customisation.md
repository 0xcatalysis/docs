---
sidebar_position: 2
title: Customisation
---

:::caution
This documentation is under active development. Some features may change as we continue to improve the framework.
:::

# Customisation Guide

This guide outlines the various customization options available for different modules in the Catalysis framework.

## Execution Engine Customisations

The execution engine can be customized with custom functions for attestation, attestation collection, attestation verification, and peer public key retrieval.

### Available Customisations

1. **Attestor**
```go
// custom attestor function
func WithAttestor(attestor func(ctx context.Context, engine *ExecutionEngine, result *types.SignedResult) (*types.Attestation, error)) Option
```

2. **Attestation Collector**
```go
// custom attestation collector function
func WithAttestationCollector(collector func(ctx context.Context, engine *ExecutionEngine, result *types.SignedResult) (*types.AggregatedAttestation, error)) Option
```

3. **Attestation Verifier**
```go
// custom attestation verifier function
func WithAttestationVerifier(verifier func(ctx context.Context, engine *ExecutionEngine, attestation *types.Attestation, result *types.SignedResult) (bool, error)) Option
```

4. **Peer Key Getter**
```go
// custom peer key getter function
func WithPeerKeyGetter(getter func(engine *ExecutionEngine, peerID string) ([]byte, error)) Option
```

### Implementation Example

1. Define custom functions in your codebase:
```go
func customAttestor(ctx context.Context, engine *ExecutionEngine, result *types.SignedResult) (*types.Attestation, error) {
    // custom logic
}

func customAttestationCollector(ctx context.Context, engine *ExecutionEngine, result *types.SignedResult) (*types.AggregatedAttestation, error) {
    // custom logic
}
```

2. Add to `ExecutionOptions` in `custom_options.go`:
```go
var ExecutionOptions = []execution.Option{
    execution.WithAttestor(customAttestor),
    execution.WithAttestationCollector(customAttestationCollector),
}
```

3. Configure in `app.go`:
```go
if err := avs.ConfigureExecutionEngine(); err != nil {
    log.Error("Failed to configure execution engine", "error", err)
    return nil, err
}
```

## Consensus Engine Customisations

The consensus engine can be customized with custom functions for leader election, stake management, and peer filtering.

### Available Customisations

1. **Leader Election Strategy**
```go
func WithLeaderElectionStrategy(strategy func(ce *ConsensusEngine, tx *types.Task) (string, error)) Option
```

2. **Stake Management Strategy**
```go
func WithStakeManagementStrategy(strategy func(ce *ConsensusEngine, peerID string) (uint64, error)) Option
```

3. **Peer Filter Strategy**
```go
func WithPeerFilterStrategy(strategy func(ce *ConsensusEngine, peers []string) []string) Option
```

### Implementation Example

1. Define custom functions:
```go
func customLeaderElectionStrategy(ctx context.Context, engine *ConsensusEngine, tx *types.Task) (string, error) {
    // custom logic
}
```

2. Add to `ConsensusOptions` in `custom_options.go`:
```go
var ConsensusOptions = []consensus.Option{
    consensus.WithLeaderElectionStrategy(customLeaderElectionStrategy),
}
```

3. Configure in `app.go`:
```go
if err := avs.ConfigureConsensusEngine(); err != nil {
    log.Error("Failed to configure consensus engine", "error", err)
    return nil, err
}
```

## P2P Engine Customisations

The P2P engine can be customized with custom functions for stream handling, error response, and metadata exchange.

### Available Customisations

1. **Stream Handler**
```go
func WithStreamHandler(handler func(engine *P2PEngine, stream network.Stream)) Option
```

2. **Error Responder**
```go
func WithErrorResponder(responder func(stream network.Stream, errorMsg string)) Option
```

3. **Metadata Exchange**
```go
func WithMetadataExchange(enable bool) Option
```

### Implementation Example

1. Define custom functions:
```go
func customStreamHandler(engine *P2PEngine, stream network.Stream) {
    // custom logic
}

func customErrorResponder(stream network.Stream, errorMsg string) {
    // custom logic
}
```

2. Add to `P2POptions` in `custom_options.go`:
```go
var P2POptions = []p2p.Option{
    p2p.WithStreamHandler(customStreamHandler),
    p2p.WithErrorResponder(customErrorResponder),
}
```

3. Configure in `app.go`:
```go
if err := avs.ConfigureP2PEngine(); err != nil {
    log.Error("Failed to configure p2p engine", "error", err)
    return nil, err
}
```

## Server Engine Customisations

The server engine can be customized with various middleware and handler functions.

### Available Customisations

1. **Middleware**
```go
func WithMiddleware(middleware func(handler http.Handler) http.Handler) Option
```

2. **Error Handler**
```go
func WithErrorHandler(handler func(w http.ResponseWriter, err error)) Option
```

3. **Request Logger**
```go
func WithRequestLogger(logger func(r *http.Request)) Option
```

4. **Shutdown Timeout**
```go
func WithShutdownTimeout(timeout time.Duration) Option
```

5. **Server Configurer**
```go
func WithServerConfigurer(configurer func(server *http.Server)) Option
```

6. **Auth Middleware**
```go
func WithAuthMiddleware(middleware func(next http.Handler) http.Handler) Option
```

7. **Rate Limiter**
```go
func WithRateLimiter(limiter func(next http.Handler) http.Handler) Option
```

8. **Metrics Collector**
```go
func WithMetricsCollector(collector func(r *http.Request, duration time.Duration, statusCode int)) Option
```

### Implementation Example

1. Define custom functions:
```go
func customMiddleware(handler http.Handler) http.Handler {
    // custom logic
}

func customErrorHandler(w http.ResponseWriter, err error) {
    // custom logic
}
```

2. Add to `ServerOptions` in `custom_options.go`:
```go
var ServerOptions = []server.Option{
    server.WithMiddleware(customMiddleware),
    server.WithErrorHandler(customErrorHandler),
}
```

3. Configure in `app.go`:
```go
if err := avs.ConfigureServerEngine(); err != nil {
    log.Error("Failed to configure server engine", "error", err)
    return nil, err
}
```