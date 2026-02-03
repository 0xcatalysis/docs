---
sidebar_position: 2
---

# Restaking Protocols

The restaking protocol is the infrastructure layer that custody-tracks restaked collateral and provides the enforcement rails (slashing + rewards) Catalysis builds on.

## What the Restaking Protocol does
- Custodies and tracks restaked collateral for delegators.
- Enforces slashing / reward distribution based on protocol rules.
- Provides hooks / interfaces used by Catalysis integrations.

## Why it matters
- Defines the underlying security model and enforcement guarantees.
- Acts as the coordination layer between **delegators** and **Catalysis**.

## How it interacts with Catalysis
- Catalysis reads collateral state and accounting from the restaking layer.
- Payouts and reward flows depend on the protocol’s enforcement primitives.
