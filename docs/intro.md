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

1. **No third-party or custody risk**: Coverage integrates directly with premier vaults on existing **Tier-1 DeFi protocols** (Morpho, Upshift etc).
2. **Competitive Pricing**: LPs access downside protection with minimal impact on net vault APY. Typically 25-75 bps, depending on **risk rating of the DeFi vault**.
3. **Native Vault Coverage**: Institutional LPs don’t need to source or manage **external coverage from third-party protocols**.
4. **Fully onchain and transparent**: Coverage terms and payouts are enforced by smart contracts and executed **without manual intervention** or **committee discretion**.
5. **Simplified Integration UX:** Coverage can be plugged into any protocol with **minimal effort, no custom infra** needed.

## Simplified Architecture

<div style={{textAlign: 'center'}}>
  <img src="/img/og.svg" alt="E2E Flow" style={{width: '100%', border: '1px solid black'}} />
</div>

## How It Works

Catalysis connects restaked capital, risk underwriting and DeFi vaults into a single, onchain coverage flow.

#### 1. **Restakers provide underwriting capacity**

Restakers deposit assets such as ETH, BTC and stablecoins into restaking protocols like EigenLayer and Symbiotic.
**Catalysis Core** aggregates this restaked capital.

This pooled collateral represents the **system’s raw underwriting capacity** — capital that can be programmatically allocated to **cover risks on DeFi vaults**.

#### 2. **CoverPools express risk pricing**

Catalysis deploys dedicated coverage vaults called **CoverPools**. CoverPools act as the operational layer where capital is committed to defined risk profiles.

Each CoverPool sources capacity from Catalysis Core and is configured to underwrite a specific class of risk. For example: an **A-rated USDC lending vault** versus an **A+ WETH-denominated yield vault**, based on risk ratings and underwriting parameters.

#### 3. **CoverPools issue onchain coverage to DeFi vaults**

Once restakers delegate capacity to a CoverPool, that pool can issue onchain coverage to **selected, high-quality DeFi vaults** on Tier-1 protocols such as **Morpho, Nest Credit and Upshift**.

Coverage is **vault-specific, opt-in** and enforced entirely through smart contracts.

#### 4. **Premiums and claims are settled programmatically**

Coverage premiums paid by covered vault depositors flow directly into the relevant CoverPool and are **automatically distributed to restakers**.

If a predefined loss event occurs, **Catalysis Core enforces slashing** on the delegated restaked capital. The slashed funds are then routed to compensate depositors in the covered vault, **up to the covered loss amount**.

## Next Steps

To learn about the stakeholders in Catalysis, check out the [Stakeholders overview](./stakeholders/overview.md).

Get started by exploring the [Catalysis Core](./catalysis-core/overview.md) to understand the foundational architecture.