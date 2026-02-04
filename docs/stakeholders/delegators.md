---
title: Delegators
sidebar_position: 2
---

# Delegators

Delegators supply the capital that backs Catalysis **CoverPools**. In return, they earn **coverage fees (premiums)** while taking on well-defined loss risks.

They are the **capacity providers** of the system:
- Their capital is the source of underwriting capacity.
- CoverPools use that capacity to offer protection to **Covered Vaults**.

## Risk Design

Catalysis is designed to **minimize tail risk** for restakers through **strict vault selection, disciplined underwriting and capped downside exposure**.

1. **Tier-1 DeFi vault eligibility**: Coverage is intentionally limited to **ONLY A-rated vaults** curated by **[Gauntlet](https://www.gauntlet.xyz/)** and **[Steakhouse Financial](https://www.steakhouse.financial/)** on Tier-1 protocols such as **Morpho**.
2. **Quantitative underwriting**: Vault eligibility and pricing are informed by our robust underwriting engine across **curator quality, protocol risk and asset profile**.
3. **Capped loss scenarios**: Historical data indicates a **&lt;1% chance** of a qualifying vault triggering the maximum payout (e.g., 10% of TVL).

## How delegators earn

Delegators generally earn a blend of:
1. **Coverage fees**: Premiums paid by Covered Vault participants (**Base APY**)
2. **Restaking rewards**: Incentives from the underlying restaking layer (say EigenLayer)
3. **Catalysis incentives**: Protocol incentives (wherever applicable)

## FAQs

### **Q1. Can delegators lose principal?**  

**YES. If a covered trigger occurs, the CoverPool pays out according to its terms**. Those payouts can reduce the capital backing the pool (and therefore delegator principal).

### **Q2. What drives my realized returns over time?**

Returns generally depend on:
- **CoverPool utilization**: How much capacity is actively underwriting
- **Premium rates**: Risk-calibrated pricing
- **Claims frequency**: How often payout events trigger (typically low)

### **Q3. Can I withdraw or reallocate?**

Typically, capital allocated to a CoverPool is **locked for a fixed duration** (commonly ~3 months).  

Depending on the configuration, Catalysis can support:
- **Early withdrawals** (with constraints), or
- **Withdrawal restrictions** while capacity is actively underwriting.

### **Q4. What should I evaluate before allocating to a CoverPool?**  

Focus on the pool’s risk boundary and economics:
- What events are covered (and explicitly not covered)
- Payout limits / maximum loss and how payouts execute
- Premium rate assumptions and expected utilization
- Any timing constraints (allocation windows, withdrawal rules, cooldowns)

