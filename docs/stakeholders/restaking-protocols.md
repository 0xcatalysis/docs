---
title: Restaking Protocols
sidebar_position: 3
---

# Restaking Protocols

Restaking protocols are the infrastructure layer that custody-tracks restaked collateral and provides the enforcement rails (rewards + slashing) that underwriting capacity is built on.

## Role in the network
Restaking protocols act as the **coordination layer** between delegators and Catalysis:
- They maintain the authoritative accounting of restaked collateral.
- They enforce protocol-defined rules for reward distribution and penalties.

## What restaking protocols do
- **Custody and accounting**: track who has restaked what, and under what conditions.
- **Rewards**: distribute protocol rewards to restakers (mechanism varies by protocol).
- **Enforcement**: apply penalties / slashing where the protocol rules require it.

## How Catalysis uses the restaking layer
Catalysis relies on restaking protocols to:
- Confirm available underwriting capacity (collateral + accounting)
- Align payout/reward logic with the underlying collateral state
- Provide integration points (hooks/interfaces) used by Catalysis contracts and adapters

## Why it matters
The restaking layer is the foundation for underwriting credibility:
- If collateral can’t be tracked or enforced reliably, coverage capacity is less meaningful.
- Restaking primitives shape the risk and liquidity assumptions of CoverPools.
