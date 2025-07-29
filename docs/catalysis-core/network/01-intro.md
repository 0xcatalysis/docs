---
sidebar_position: 1
---

# Introduction

## What is a Network?

A Network in the Catalysis ecosystem refers to any decentralized protocol that provides custom verification mechanisms of off-chain operations. A Network is composed of on-chain contracts for verification and an off-chain network of Operators. The off-chain part consists of client software run by network operators and network-specific validation logic.

Operators execute the service on behalf of the Network and then post evidence of their execution on-chain to the Network contracts. Operators play a critical role in ensuring network integrity:

- If the Operators perform tasks properly, the Network can distribute rewards.
- If the Operators perform tasks maliciously, their delegate stake can be slashed by the Network.

Different restaking ecosystems have different names for these Networks:

- [EigenLayer](https://www.eigenlayer.xyz/): Autonomous Verifiable Service **(AVS)**
- [Symbiotic](https://www.symbiotic.fi/): **Network**
- [Satlayer](https://www.satlayer.xyz/): Bitcoin Validated Service **(BVS)**
- [Jito](https://www.jito.network/restaking/): Node Consensus Network **(NCN)**
- [Kernel](https://kerneldao.com/): Dynamic Validation Network **(DVN)**

## Why Build a Network?

Launching new decentralized infrastructure networks requires substantial time and effort to bootstrap capital and operators. Builders should focus on their core product differentiators rather than bootstrapping economic security.

Shared security allows developers to "rent" economic security from larger PoS chains like Ethereum, Bitcoin, and Solana. This allows them to focus more on their product’s core value and innovation without the significant overhead of setting up a new consensus mechanism or validator networks from scratch.

The key benefits of building a Network that leverages shared security include:

- **Security via Restaking**: Leverage restaking mechanism using a variety of assets to secure your Network.
- **Focus on your project's unique value**: Spend less time and resources accumulating economic security from scratch.
- **Bootstrap your Operator network**: Quickly access a large network of experienced Operators.
- **Decentralization and Trust**: Build on trust-minimized, decentralized infrastructure.

## Why Should Networks build on Catalysis?

For AVS teams, Catalysis abstraction layer offers unparalleled **flexibility** and **efficiency**. We allow for the creation of “*partial AVSs”* that can operate across multiple restaking platforms, enabling, for the first time, market-wide **price discovery** for economic security.

This approach — what we call a “*multi-planetary*” model of shared security — ensures that AVSs aren’t tied to a single restaking protocol. Instead, they can leverage the best features of each platform, optimizing both their security and resiliency.

Catalysis also offers a **flexible framework** for developers, giving them the tools they need to experiment with different security configurations and find what works best for their needs. **We provide the infrastructure; while AVS teams bring the innovation.**

## What Networks Can Be Built on Catalysis?

The scope of Network design is broad. The Catalysis Network supports a wide range of decentralized services - any off-chain computation that can be verified on-chain. This flexibility allows developers to create custom verification mechanisms tailored to their specific use cases.

The only requirement is that evidence of off-chain execution must be posted on-chain to enable verification.

Example Use Cases:

- **Rollups** → Secure L2 scaling solutions.
- **Data Availability Networks** → Ensure reliable, censorship-resistant data storage.
- **Decentralized AI** → On-chain verification of AI models and inference.
- **Prediction Markets** → Trust-minimized markets to predict outcomes.
- **ZK-Verifiable Networks** → Off-chain computation verified with zero-knowledge proofs.
- **Decentralized Stablecoins** → Algorithmic and collateral-backed stable assets secured via shared security.
- **And More** → Any service that requires trustless on-chain verification.

## Summary of Benefits

1. **Dynamic Rebalancing**: AVSs can dynamically rebalance economic security in real-time across multiple restaking platforms, ensuring optimal performance and cost-effectiveness.
2. **Native Rewards**: AVSs can natively distribute rewards to restakers on any platform where economic security is sourced — eliminating the need for cross-chain transfers or bridging.
3. **Enhanced Buying Power**: By aggregating demand across AVSs, Catalysis enhances buying power, fostering competition among restaking protocols. This leads to better pricing for AVSs.
4. **Unified Interface**: AVS teams can access multiple pools of economic security through a single, unified interface, simplifying the complexity of managing multi-platform operations.
5. **Robust Security**: AVSs built with Catalysis are more resilient against cascading slashings and the migration of restaked assets, offering stronger protection.
6. **Enhanced Developer Experience (DevEx)**: Our Catalyst-SDK streamlines the process of building **universal, robust AVSs**, saving time and reducing duplication of efforts.
