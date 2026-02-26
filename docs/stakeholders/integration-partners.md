---
title: Integration Partners
sidebar_position: 5
---

# Integration Partners

Integration partners are **frontends, aggregators and earn platforms** that help users discover and access **Covered Vaults** through familiar experiences — without forcing an external “buy coverage” workflow.

They are the **distribution layer** for Catalysis:
- They surface covered opportunities where users already allocate capital.
- They route deposits into Covered Vaults via standard UX flows and secure vault integrations.

## Visualization

<div style={{textAlign: 'center'}}>
  <img src="/img/5.svg" alt="Integration Partners" style={{width: '100%', border: '1px solid black'}} />
</div>
---

## What Catalysis enables
1. **Native integration**: Coverage **integrates directly** with vaults on existing Tier-1 DeFi protocols (Morpho, Euler, Upshift etc).
2. **Competitive Pricing**: Depositors access downside protection with minimal impact on net vault APY. **Typically 25–75 bps, depending on DeFi vault rating.¹**
3. **Fully onchain and transparent**: Coverage terms and payouts are enforced by smart contracts and executed **without manual intervention or committee discretion**.
4. **Opt-in coverage**: Platforms can offer coverage as an opt-in upgrade. Existing vaults and yields remain unchanged, **only users who want protection opt in**.

## FAQs

### Q1. What does the integration process look like for a distribution partner?
Integration is straightforward:
1. **UI surfacing**: list **Covered Vaults** alongside **Base Vaults**, and show premium cost + coverage summary.
2. **Routing**: update your deposit/withdraw flows to route to the **Covered Vault** contracts (instead of the Base Vault) when users opt in.
3. **Smart contract hookup (optional)**: if you use routers/bundlers, add the Covered Vault calls to your existing route so the end state is a standard onchain vault position.

### Q2. Is it time-consuming?
Typically **NO**.
- Most partners ship in **< 2 weeks** (UI + routing + basic checks).
- With deeper testing, edge cases and staging cycles, it can take **~3 weeks**.

### Q3. What’s in it for distribution partners?
- **Differentiated product**: “covered yield” is a clear upgrade vs standard vault listings.
- **Seamless UX**: users opt into protection inside the same vault flow — no external policy step.
- **Competitive rates**: users get access to risk coverage at low premium impact on net APY (risk-calibrated).
- **Better stickiness**: protection reduces perceived downside, which can improve retention and larger allocations.

### Q4. What’s the most important thing to communicate in the UI?
Make the covered vs base choice obvious and comparable:
- **Premium cost** (bps or estimated net yield impact)
- **Coverage scope** (what is covered / not covered, in plain language)
- Key **limits & conditions** (e.g., max coverage capacity, trigger conditions, any relevant constraints)

A good default is: **“Base = higher yield, no protection. Covered = slightly lower yield, defined protection.”**

### Q5. What are integration partners not responsible for?
- **Pricing or underwriting** (handled by Catalysis + CoverPools)
- **Claims decisions or execution** (defined by coverage terms and executed by the system)
