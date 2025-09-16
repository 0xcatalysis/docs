---
sidebar_position: 2
---

# Introduction

<div style={{textAlign: 'center'}}>

![Catalysis Logo](/img/catalysis.png)

</div>

# What is a CoverPool

A **CoverPool** is a specialized, risk-isolated coverage instance within Catalysis that holds committed delegations from restakers. It aggregates **slashable** delegations from restakers into a pool of **raw coverage capacity** that can be allocated to underwrite specific institutional & real-world risks.

Each CoverPool is risk-isolated in terms of both legal underwriting & economic risk exposure.

CoverPools act as the primary marketplace entity that connects **restakers (capacity providers)**, **curators (risk managers)** and **clients (institutions seeking coverage)** into a single onchain flow.

Think of a **CoverPool** like a **syndicate at Lloyd’s of London**:

- Each syndicate (CoverPool) insures a particular risk.
- A coverage client can spread protection across **multiple CoverPools**, just as Lloyd’s policyholders often source cover from several syndicates.
- This creates modular, diversified risk underwriting rather than relying on a single insurer.

# Types of CoverPools

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
| **Liability/exposure*** | Catalysis is the responsible underwriter for this pool type. Catalysis creates separate offshore underwriting entities for its coverpools | Catalysis **does not take lead or liability** for underwriting decisions; responsibility sits with the pool owner/operator |
| **Examples** | Internal pools run by Catalysis core team | Sunereum, Native, Spice etc |

# Catalysis Core

CoverPools are backed by a technology called **Catalysis Core**.

**Catalysis Core** is the first Security Abstraction Layer that unlocks **Unified Access to $20B+ ETH, BTC & SOL-backed Economic Security** across major restaking protocols on Ethereum, Bitcoin & Solana.

It introduces a new primitive called **Shared Security Abstraction (SSA)** that separates application logic from the complexities of underlying restaking infrastructure. By standardizing interactions across protocols like EigenLayer, Symbiotic and SatLayer. **Catalysis Core** allows applications and networks to consume restaked security through a single, abstract interface.

![main-colored-v2 [latest] (1).svg](attachment:27fa746e-39f6-4960-81c3-af9faf104274:main-colored-v2_latest_(1).svg)

# **FAQs**

## **1. Do CoverPools hold capital?**

No. CoverPools are “boxes” of delegated capacity from restakers. Capital isn’t moved from restaking protocols.

Delegators commit slashable capacity (e.g., “$10m to this pool”) that can be tapped if a covered event occurs. That capacity stays staked with the underlying restaking protocol but can be slashed and redirected **if a covered event occurs**.

In the early stages, the first CoverPools will be **centrally managed by the Catalysis core team** to bootstrap adoption. Over time, **qualified curators** will be able to spin up and operate their own CoverPools independently.

## **2. Who underwrites the risk?**

Risk is underwritten by specialized entities called **CoverPool Curators**.

- **At launch:** Catalysis itself will serve as the initial curator, running the first CoverPools. These early CoverPools will be underwritten in collaboration with **neutral actuaries** and **independent third-party assessors** to ensure credibility and robustness.
- **Over time:** Underwriting will shift to a **permissionless model**, where any qualified curator—fund managers, risk DAOs, insurance specialists or other domain experts—can spin up and operate their own CoverPools.

## **3. What risks can be covered with Catalysis?**

In principle, **any risk with a CoverPool** can be underwritten.

The **initial focus** is on coverage for **institutional entities and DeFi protocols**, particularly around:

- Institutional financial losses (e.g., strategy underperformance, borrower defaults, third-party failures)
- Market infrastructure risks in lending, stablecoins, and RWA credit

At launch, Catalysis will **not** cover direct smart contract exploits, though this could be reconsidered in the future as the ecosystem matures.

## **4. Why CoverPool architecture?**

The **CoverPool architecture** isolates risk into dedicated pools. Each CoverPool has its own rules, scope and capacity, so losses in one pool don’t spill over into another.

This design mirrors how **traditional insurance syndicates** work (e.g., [Lloyd’s of London](https://www.lloyds.com/)), where multiple underwriters each take a slice of a policy. Similarly, in Catalysis, **multiple CoverPools can underwrite a single policy**, distributing risk and creating a resilient, modular marketplace for risk coverage.

## **5. Are Coverage payouts instant?**

In most cases, payouts are **near-instant** once a claim is triggered, since assets are onchain and execution is programmable. For **larger covers**, there may be a short delay, usually **hours to a few days**, to allow for dispute windows or claim checks.

Unlike traditional coverage, there is **no long manual process** that takes weeks or months. Claims are settled directly and transparently onchain.

CoverPools are “boxes” of committed capacity from restakers/curators. Capital isn’t moved; curators commit slashable capacity (e.g., “$10m to this pool”) that can be tapped if a covered event happens. Initially, the Catalysis team would run the first pools; long-term, any qualified curator can spin one up.