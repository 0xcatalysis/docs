---
title: Delegators
sidebar_position: 2
---

# Delegators

Delegators supply the capital that backs Catalysis **CoverPools**. In return, they earn **coverage fees (premiums)** while taking on well-defined loss risks.

They are the **capacity providers** of the system:
- Their capital is the source of underwriting capacity.
- CoverPools use that capacity to offer protection to **Covered Vaults**.

## Visualization

<div style={{textAlign: 'center'}}>
  <img src="/img/delegators.svg" alt="Delegators" style={{width: '98%', border: '1px solid black'}} />
</div>

## Risk Design

Catalysis is designed to **minimize tail risk** for restakers through **strict vault selection, disciplined underwriting and capped downside exposure**.

1. **Tier-1 DeFi vault eligibility**: Coverage is intentionally limited to **ONLY A-rated vaults** curated by **[Gauntlet](https://www.gauntlet.xyz/)** and **[Steakhouse Financial](https://www.steakhouse.financial/)** on Tier-1 protocols such as **Morpho**.
2. **Quantitative underwriting**: Vault eligibility and pricing are informed by our robust underwriting engine across **curator quality, protocol risk and asset profile**.
3. **Capped loss scenarios**: Historical data indicates a **&lt;1% chance** of a qualifying vault triggering the maximum payout (e.g., 10% of TVL).

## How Delegators Earn

Delegators generally earn a blend of:
1. **Coverage fees (Base APY)**: Premiums paid by **Covered Vault** participants
2. **Native Staking Rewards (Optional)**: Native ETH staking APY for ETH LSTs (say **$wsETH**)
3. **Restaking Rewards**: Incentives from the underlying restaking layer (say **$EIGEN**)
4. **Catalysis Incentives**: Protocol incentives (**wherever applicable**)

## FAQs

### **Q1. Is Catalysis legally “insurance”?**
**NO. Catalysis is not an insurer and does not provide insurance or reinsurance services.**

Catalysis provides native onchain risk coverage infrastructure, where:
- Terms are transparent and programmatic
- Capital providers knowingly take on defined risk
- Payouts follow pre-specified smart-contract based rules  

For more details, please visit our [T&Cs page](https://catalysis.network/t-and-c).

### **Q2. Can delegators lose principal?**
**YES.** If a covered trigger occurs, the CoverPool pays out according to its terms. Those payouts can reduce the capital backing the pool (and therefore delegator principal).

### **Q3. What drives my realized returns over time?**
Returns generally depend on:
- **CoverPool utilization:** How much capacity is actively underwriting
- **Premium rates:** Risk-calibrated pricing
- **Claims frequency:** How often payout events trigger (**highly unlikely**)

### **Q4. Can I withdraw or reallocate?**
Typically, capital allocated to a CoverPool is **locked for a fixed duration (typically ~90 days)**.

Depending on the configuration, Catalysis can support **Early withdrawals** (with constraints) or **Withdrawal restrictions** while capacity is actively underwriting.

### **Q5. What types of risks are covered by Catalysis CoverPools?**
Coverage is **vault-level and risk-specific**, not protocol-wide.

Depending on the vault configuration, covered risks may include:
1. **Curator Risk** – mispricing, parameter misconfiguration, or strategy failure.
2. **Asset-Level Risk** – sudden de-peg, extreme volatility, or collateral impairment.
3. **Bad-Debt Risk** – borrower default, oracle error, or collateral shortfall.
4. **Smart Contract Risk** – vulnerability in vault, Morpho, or token contracts.

Each CoverPool explicitly defines what is covered and what is excluded. Delegators should always review the coverpool’s risk specification before allocating.

### **Q6. What should I evaluate before allocating to a CoverPool?**
Focus on the pool’s risk boundary and economics:
- What events are covered (and explicitly not covered)
- Payout limits / maximum loss and how payouts execute
- Premium rate assumptions and expected utilization
- Any timing constraints (allocation windows, withdrawal rules, cooldowns)

### **Q7. How are payouts calculated if a loss event occurs?**
**Payouts are proportional to the loss amount, not binary**.
- **Losses are assessed per depositor**, based on changes in the vault’s price per share between deposit and withdrawal. If the price per share at withdrawal is lower than at deposit, the difference is treated as a qualifying loss.
- Example: If a depositor enters when 1 share = $1.00 and exits when 1 share = $0.90, the $0.10 difference represents a loss eligible for coverage.

For example, **for A-rated Morpho vaults, the maximum payout may be capped at up to 10% of vault TVL, with historical data indicating a very low probability (&lt;1%) of reaching that cap**.

### **Q8. Are losses isolated between different CoverPools?**
**YES.** All CoverPools are fully isolated:
- Each DeFi vault is paired with its own CoverPool
- Losses in one coverpool do not affect other pools (isolated)
- There is no shared global pool **(we don’t normalize losses)**

This **modular isolation model is intentional** and designed to limit contagion risk.

### **Q9. Who decides which vaults are eligible for coverage?**
**Vault eligibility is strictly controlled.** This is currently decided by the Catalysis Core team. As we progressively decentralize the protocol, it will be decided by future governance proposals.  

Eligibility is determined using:
- Internal quantitative underwriting models
- Curator quality and track record
- Protocol risk, asset profile, and historical behavior

**Lower-tier or experimental vaults are intentionally excluded during the initial launch phase**. Currently, coverage is limited to only A-rated vaults curated by Steakhouse Financial and Gauntlet on Tier-1 DeFi protocols (e.g., Morpho)

### **Q10. How is risk monitored over time?**
**Risk monitoring is continuous.**
- Underwriting models are updated with live vault and protocol data
- External risk signals and ratings are sourced from **[Credora](https://www.credora.network/)** (via [RedStone](https://www.redstone.finance/))
- Real-time security monitoring is supported by partners such as **[Hypernative](https://www.hypernative.io/)**

If risk conditions deteriorate materially, new coverage issuance can be paused or repriced.

### **Q11. Is claims resolution fully automated?**
Claims resolution is **FULLY AUTOMATED** in the current phase:
- Determined by pre-defined smart contract logic
- Triggers are programmatically detectable and onchain
- There is currently no discretionary governance veto over valid claims
- Some edge cases may rely on oracle inputs or offchain verification

**The system is designed to move toward a hybrid resolution** as coverage limits scale and governance is in place.

### **Q12. What assets do delegators earn rewards in?**
**Delegators earn in the same collateral/asset type as the underwriting capital** they are delegating.

Depending on the CoverPool:
- Coverage premiums (often in the vault’s base asset or stablecoins)
- Restaking rewards from the underlying restaking layer (e.g., EigenLayer)
- Catalysis protocol incentives, where applicable

**Currently, we don’t support transfers like USDC to ETH since we want to ensure asset liability matching**. But, rewards can be in **$WETH** for **$wstETH** underwriting capital (same base asset conversion). We’ll support more kinds of reward tokens (say **$USDC, $USDT**) in the future.

### **Q13. Can I choose different risk-reward profiles?**
**YES.** Catalysis supports multiple CoverPools with different characteristics:
- Lower-risk pools backing top-tier vaults with conservative payout caps
- Higher-yield pools with higher utilization or broader coverage scope

**Delegators can allocate capital across Coverpools based on their risk appetite.**

### **Q14. How long is my capital locked?**
CoverPools typically operate with **fixed allocation periods, commonly around 90 days**. But it depends on the specific configuration of CoverPools and the risk reward metrics.

### **Q15. What is the current stage of the protocol?**
**Catalysis is currently in a controlled mainnet rollout phase**. It is launching on **Ethereum mainnet** in **late Q1 2026.** 

For this launch, coverage is limited to top-tier vaults, risk parameters are conservative and scale is intentionally capped. This approach prioritizes correctness and confidence before expanding to other DeFi vaults / protocols.

### **Q16. Why should restakers participate early?**
Early participation allows restakers to:
- Back one of the first **revenue-generating AVSs** supported by real economic activity
- Earn **premium-driven yield** while underwriting the next wave of DeFi adoption
- Gain exposure to **high-quality Covered Vaults** with disciplined underwriting
- Earn **early catalysis protocol incentives** (where applicable)

Catalysis is a first-of-its-kind AVS bringing **vault-native risk coverage** onto restaking rails. This is not incremental — it’s a step-function unlock.

### **Q17. Do you rehypothecate restaker capital?**
**NO.**

At the current stage, **capital allocated to a CoverPool is not rehypothecated or reused elsewhere**. It’s used 1:1. Capital is only used as underwriting capacity for the specific risks defined by that coverpool.

We intentionally avoid rehypothecation today because it introduces **additional layers of correlation and tail risk**, which is not appropriate during an early, controlled rollout.

In the future, we may explore underwriting **fully uncorrelated markets** (e.g., RWAs or real-world insurance risks) — but only once the system has matured and risk isolation can be preserved.

### **Q18. Is there real demand for onchain coverage at scale?**

**YES. ABSOLUTELY.**
- As DeFi and stablecoins go mainstream, major crypto and fintech platforms are launching structured earn products at scale, signaling sustained demand for risk-managed yield.
- Products like **[Coinbase Earn](https://www.coinbase.com/en-gb/earn)** and **[Kraken’s vaults with Veda](https://x.com/krakenfx/status/2015809818661970210?s=20)** show that users (**retail and institutional**) want yield that is **risk-adjusted, not just higher APY**.
- Institutional allocators **cannot deploy meaningful size without clear downside protection**, a behavior long established in TradFi where lower yield is accepted in exchange for risk mitigation.
- Existing coverage markets already indicate **$50M–$100M of coverage demand per Tier-1 protocol like Morpho**, revealing a clear supply gap that covered vaults can unlock natively and efficiently.

### **Q19. When does my delegation start earning premiums?**
**Day 1.**
- Premium APR is **dynamic** and determined by supply/demand: **coverage demand** vs **available underwriting capacity**.
- Premiums typically scale as **Covered Vault TVL** grows and **CoverPool utilization** increases.
- In parallel, restakers may continue earning **restaking-layer rewards** (e.g., EigenLayer) and **Catalysis incentives** (where applicable).

### **Q20. When does slashing activate?**
**Day 1.** Once your capital is locked for the specified duration, it becomes **slashable** under the pool’s **pre-defined coverage conditions**.

### **Q21: What happens if Catalysis contracts have a bug?**
Catalysis contracts are audited by Tier-1 auditors including **[ChainSecurity](https://www.chainsecurity.com/)**, **[Sigma Prime](https://sigmaprime.io/)** and **[Failsafe](https://getfailsafe.com/)**.

That said, smart contract risk is never zero — **even Aave is not immune**. This is why we’re launching coverage conservatively and scaling it gradually.

### **Q22: Is the coverage non-custodial? Do you ever take custody of funds?**
**NO.**

**Catalysis never takes custody of funds.** Underwriting capital remains **custodied in the underlying restaking layer (e.g., EigenLayer)** and is referenced by Catalysis contracts for underwriting and enforcement logic. Premium and payout flows are executed onchain into the underlying DeFi vault protocol (e.g., Morpho) according to protocol-defined rules.

### **Q23: Is this correlated with EigenLayer slashing risk?**
**NO**.

**IT HAS ZERO CORRELATION WITH AVS SLASHING RISKS.** Coverage risk is separate from EigenLayer AVS slashing. Losses only occur from economic underwriting events, not validator misbehavior or uptime faults.  

Catalysis does not rehypothecate stake, underwriting capital is used on a strict 1:1 basis and remains uniquely allocated.

### **Q24: How is this different from Nexus Mutual?**

| **Dimension** | Catalysis Coverage | Nexus Mutual |
| --- | --- | --- |
| **Product** | **Vault-native** risk coverage infrastructure | **Discretionary** onchain insurance mutual |
| **Coverage UX** | Embedded **natively inside DeFi vaults** as a first-class primitive | External cover **purchased separately** as a standalone product |
| **Underwriting** | **Transparent**, smart contract based model using onchain data with Credora risk ratings; **no discretionary underwriting** | **Discretionary underwriting** by members; opaque capital allocation and offchain claim assessment |
| **Pricing** | **Risk-aware**, vault-level pricing driven by Catalysis underwriting engine; **typically 4–5× cheaper** for Tier-1 and A/B-rated vaults | Utilization-based pricing with discretionary parameters; often **materially more expensive** for comparable risk |
| **Settlement** | **Programmable, onchain settlement**; DeFi vault-native infrastructure built to scale with institutional vault distribution | **Manual claims process, slower settlement**; legacy insurance logic not designed as vault infrastructure |
