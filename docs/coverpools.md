---
sidebar_position: 2
---

# CoverPools

<div style={{textAlign: 'center'}}>

![Catalysis Logo](/img/E2E-Flow.svg)

</div>

## What is a CoverPool

A **CoverPool** is a specialized, risk-isolated coverage instance within Catalysis that holds committed delegations from restakers. It aggregates **slashable** delegations from restakers into a pool of **raw coverage capacity** that can be allocated to underwrite specific institutional & real-world risks.

Each CoverPool is risk-isolated in terms of both legal underwriting & economic risk exposure.

CoverPools act as the primary marketplace entity that connects **restakers (capacity providers)**, **curators (risk managers)** and **clients (institutions seeking coverage)** into a single onchain flow.

Think of a **CoverPool** like a **syndicate at Lloyd’s of London**:

- Each syndicate (CoverPool) insures a particular risk.
- A coverage client can spread protection across **multiple CoverPools**, just as Lloyd’s policyholders often source cover from several syndicates.
- This creates modular, diversified risk underwriting rather than relying on a single insurer.

## Types of CoverPools

CoverPools can be categorized into two separate categories:

1. **Catalysis-curated**
2. **3rd-Party-curated**

The core differences are highlighted below:

| **Aspect** | **Catalysis-curated CoverPools** | **3rd-party-curated CoverPools** |
| --- | --- | --- |
| **Ownership** | Owned/operated by Catalysis (legal + operational) | Owned/operated by a 3rd party (teams with expertise in insuring specific use-cases) (e.g., Sunereum, Native, Spice) |
| **Underwriting** | **Catalysis** is the underwriter | **3rd party** underwrites risks |
| **Risk management** | Works with risk managers like Chaos Labs, LLamaRisk, Hypernative etc to monitor and manage risk parameters on a real-time basis | 3rd party provides its own risk monitoring & intelligence (may optionally integrate Catalysis analytics). |
| **Service model** | **SLA for ongoing risk intelligence** | **Independent pool**; Catalysis provides onchain infrastructure + marketplace, not day-to-day operational or legal help |
| **Parameter control** | **Catalysis** sets/updates parameters (with risk managers input & governance) | **3rd party** sets/updates parameters; Catalysis enforces via smart-contract rules only |
| **Examples** | Internal pools run by Catalysis core team | Sunereum, Native, Spice etc |


## Catalysis Core

CoverPools are backed by a technology called **Catalysis Core**.

**Catalysis Core** is the first Security Abstraction Layer that unlocks **Unified Access to $20B+ ETH, BTC & SOL-backed Economic Security** across major restaking protocols on Ethereum, Bitcoin & Solana.

It introduces a new primitive called **Shared Security Abstraction (SSA)** that separates application logic from the complexities of underlying restaking infrastructure. By standardizing interactions across protocols like EigenLayer, Symbiotic and SatLayer. **Catalysis Core** allows applications and networks to consume restaked security through a single, abstract interface.

![Catalysis Logo](/img/3D.svg)
