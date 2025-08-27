---
sidebar_position: 1
---

# Introduction

<div style={{textAlign: 'center'}}>

![Catalysis Logo](/img/catalysis.png)

</div>

## What is Catalysis?

Catalysis is the first **Onchain Risk Coverage Infrastructure** purpose-built for **Institutional DeFi**. It turns restaked capital into **programmable protection** for **lending markets, stablecoins and structured yield products**.

It is powered by Catalysis Core that provides unified access to **$20B+ of ETH, BTC & SOL-backed economic security**.

### Key Highlights

1. **Programmable, Fully Onchain:** Smart contracts handle dynamic real-time premium pricing, automated underwriting, onchain claims assessment and fast payouts.
2. **Institution-First Design:** Purpose-built for institutions, with legal enforceability and compliance-ready contracts.
3. **$20B+ Underwriting Capacity:** A deep pool of restaked digital assets (BTC, ETH, SOL) backs every policy, unlocking massive cover sizes for institutional-DeFi. 
4. **Simplified Integration UX:** Coverage can be plugged into any protocol with minimal effort, no custom infra needed.

## Simplified Architecture

![Catalysis Logo](/img/Coverpool-simplified.svg)

Catalysis Coverage connects three moving parts into a single flow.

Restakers are the starting point. They deposit digital assets like ETH, BTC, SOL and other assets into restaking protocols like EigenLayer, Symbiotic and Babylon. **Catalysis Core** aggregates that capital & the pooled collateral then forms the raw “capacity” for underwriting risk.

Next, **specialist risk curators** launch dedicated coverage vaults called **CoverPools**. These pools draw capacity from Catalysis Core and are designed to underwrite specific types of risk. Each CoverPool can issue multiple policies, tailored to different verticals or institutional needs.

Once restakers delegate capacity to a CoverPool, that pool can issue onchain policies to reputed institutional clients such as trading desks, market makers & prime brokerage firms.

Premiums flow into the CoverPool and are automatically distributed back to restakers. In the event of a claim, restaked capital is slashed via Catalysis Core and used to cover losses.


## FAQs

### **1. Do CoverPools hold capital?**

No. CoverPools are “boxes” of delegated capacity from restakers. Capital isn’t moved from restaking protocols.

Delegators commit slashable capacity (e.g., “$10m to this pool”) that can be tapped if a covered event occurs. That capacity stays staked with the underlying restaking protocol but can be slashed and redirected **if a covered event occurs**.

In the early stages, the first CoverPools will be **centrally managed by the Catalysis core team** to bootstrap adoption. Over time, **qualified curators** will be able to spin up and operate their own CoverPools independently.

## **2. Who underwrites the risks?**

Risk is underwritten by specialized entities called **CoverPool Curators**.

- **At launch:** Catalysis itself will serve as the initial curator, running the first CoverPools. These early CoverPools will be underwritten in collaboration with **neutral actuaries** and **independent third-party assessors** to ensure credibility and robustness.
- **Over time:** Underwriting will shift to a **permissionless model**, where any qualified curator—fund managers, risk DAOs, insurance specialists or other domain experts—can spin up and operate their own CoverPools.

## **3. What risks can be covered with Catalysis?**

In principle, **any risk with a CoverPool** can be underwritten. The **initial focus** is on coverage for **institutional entities and DeFi protocols**, particularly around:

- Institutional financial losses (e.g., strategy underperformance, borrower defaults, third-party failures)
- Market infrastructure risks in lending, stablecoins, and RWA credit

At launch, Catalysis will **not** cover direct smart contract exploits, though this could be reconsidered in the future as the ecosystem matures.

## **4. Why CoverPool architecture?**

The **CoverPool architecture** isolates risk into dedicated pools. Each CoverPool has its own rules, scope and capacity, so losses in one pool don’t spill over into another.

This design mirrors how **traditional insurance syndicates** work (e.g., [Lloyd’s of London](https://www.lloyds.com/)), where multiple underwriters each take a slice of a policy. Similarly, in Catalysis, **multiple CoverPools can underwrite a single policy**, distributing risk and creating a resilient, modular marketplace for risk coverage.

## **5. Are Coverage Payouts instant?**

In most cases, payouts are **near-instant** once a claim is triggered, since assets are onchain and execution is programmable. For **larger covers**, there may be a short delay, usually **hours to a few days**, to allow for dispute windows or claim checks.

Unlike traditional coverage, there is **no long manual process** that takes weeks or months. Claims are settled directly and transparently onchain.

Get started by exploring the [Catalysis Core](./catalysis-core/overview.md) to understand the foundational architecture.
