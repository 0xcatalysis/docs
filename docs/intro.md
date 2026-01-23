---
sidebar_position: 1
---

# Introduction

<div style={{textAlign: 'center'}}>

![Catalysis Logo](/img/catalysis.png)

</div>

## What is Catalysis?

Catalysis is the **first onchain infrastructure** to **natively integrate coverage** into **DeFi vaults**.

**It makes risk coverage a first-class vault primitive** — enabling **Tier-1 DeFi protocols** to offer vaults and structured yield products with **embedded, programmable risk protection** backed by restaked capital.

### Key Highlights

<!-- 2. **Institution-First Design:** Purpose-built for institutions, with legal enforceability and compliance-ready contracts.
3. **$20B+ Underwriting Capacity:** A deep pool of restaked digital assets (BTC, ETH, SOL) backs every policy, unlocking massive cover sizes for institutional-DeFi. 
4. **Simplified Integration UX:** Coverage can be plugged into any protocol with minimal effort, no custom infra needed. -->

1. **No third-party or custody risk**: Coverage integrates directly with premier vaults on existing **Tier-1 DeFi protocols** (Morpho, Upshift etc).
2. **Competitive Pricing**: LPs access downside protection with minimal impact on net vault APY. Typically 25-75 bps, depending on **risk rating of the DeFi vault**.
3. **Native Vault Coverage**: Institutional LPs don’t need to source or manage **external coverage from third-party protocols**.
4. **Fully onchain and transparent**: Coverage terms and payouts are enforced by smart contracts and executed **without manual intervention** or **committee discretion**.
5. **Simplified Integration UX:** Coverage can be plugged into any protocol with **minimal effort, no custom infra** needed.

<!-- Instant Withdrawals: Covered LPs can withdraw at any time. In the event of a loss, they receive their full withdrawable amount up to the covered loss limit. -->

## Simplified Architecture

![Catalysis Logo](/img/coverage-arch.svg)

Catalysis connects multiple moving parts into a single flow.

1. Restakers are the starting point. They deposit digital assets like ETH, BTC, SOL and other assets into restaking protocols like EigenLayer and Symbiotic. **Catalysis Core** aggregates that capital & the pooled collateral then forms the raw “capacity” for **underwriting risk**.

2. Next, **specialist risk curators** launch dedicated coverage vaults called **CoverPools**. These pools draw capacity from Catalysis Core and are designed to underwrite specific types of risk. Each CoverPool can issue multiple policies, tailored to different verticals or institutional needs.

3. Once restakers delegate capacity to a CoverPool, that pool can issue onchain policies to reputed institutional clients such as trading desks, market makers & prime brokerage firms.

4. Premiums flow into the CoverPool and are automatically distributed back to restakers. In the event of a claim, restaked capital is slashed via Catalysis Core and used to provide cover.


## Next Steps

For answers to common questions, check out our [FAQ page](./faqs.md).

Get started by exploring the [Catalysis Core](./catalysis-core/overview.md) to understand the foundational architecture.