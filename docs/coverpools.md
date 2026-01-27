---
sidebar_position: 2
---

# CoverPools

<div style={{textAlign: 'center'}}>

</div>

## What is a CoverPool

A **CoverPool** is a risk-isolated coverage instance in Catalysis that aggregates **committed, slashable restaker delegations** into a pool of **raw coverage capacity**. That capacity is allocated to underwrite risks for specific vaults on **Tier-1 DeFi protocols**

CoverPools are isolated across both **underwriting logic** and **economic exposure**.

## What CoverPools do

![Catalysis Logo](/img/E2E-Flow.svg)

1. **Connect**: Restakers (capacity providers) ↔ Vaults (e.g., Morpho, Euler) in a single onchain flow
2. **Aggregate**: Slashable delegations → usable coverage capacity
3. **Issue**: Coverage contracts with explicit terms (limits, pricing, payouts)

## How CoverPools enable modular risk coverage

**DeFi Vaults are modular**; each vault’s risk profile is different (protocol mechanics, assets, curator/manager controls, strategy parameters, dependencies).

A single global pool either **overprices safe vaults** or **cross-subsidizes risky ones**. CoverPools solve this by **matching vault modularity with coverage modularity**.

1. **Per vault or vault class**: A CoverPool is configured for a specific vault (say Morpho Gauntlet USDC Prime, Morpho Steakhouse ETH) **not “all vaults.”**
2. **Capacity is pool-scoped**: Restakers choose which CoverPool to back; **losses (and incentives) stay contained within that pool**.
3. **Pricing is accurate**: **Risk is priced inside the CoverPool** that takes it and premiums reflect each pool’s mandate.
4. **Coverage stays composable**: **New vault designs don’t break the system**. When vault types evolve (new curators, strategies, protocols), Catalysis can spin up new CoverPools to match them.
