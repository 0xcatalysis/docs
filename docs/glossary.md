---
title: Glossary
sidebar_position: 5
---

# Glossary

### 1. DeFi Vault

A **DeFi vault** is a smart contract that accepts user deposits and automatically executes predefined blockchain-based yield strategies without manual intervention. Users deposit assets into the vault, and the vault allocates that capital according to preset rules, often managed or configured by a curator or strategy provider.

### 2. Risk Coverage

**Risk coverage** is onchain protection attached to a vault deposit that compensates users if pre-defined loss events occur. Instead of treating losses as an unbounded downside, coverage introduces explicit terms — what is covered, how much can be paid out and under what conditions. **You can think of it as "onchain insurance" but "programmable and unregulated".**

### 3. Coverage Fee (Premium)

A **coverage fee (premium)** is the price paid for risk coverage, **typically quoted in basis points (bps) per year**. In vault-native designs, the premium is usually collected seamlessly through vault accounting (often as a small reduction in net APY), **making coverage feel like an integrated feature rather than a separate purchase**.

### 4. Underwriting

**Underwriting** is the process of evaluating a vault's risk profile and deciding whether it can be covered, at what pric, and under what limits. It converts qualitative risk (strategy complexity, asset risk, oracle risk, smart contract risk, operational risk) into quantitative parameters like **premium rate, capacity allocation and maximum payout**.

### 5. Covered Vault

A **Covered Vault** is a DeFi vault that offers embedded risk coverage as part of the deposit experience. Depositors can choose to enable coverage and receive downside protection under predefined terms, while the vault and coverage layer handle premium collection, accounting and potential payout flows.

### 6. Base Vault

A **Base Vault** is the same underlying DeFi vault strategy without coverage enabled. Users in the base vault earn the "full" strategy yield but also face the full downside if something breaks, whereas covered vault users trade a small premium for defined protection.

### 7. Vault-Native Coverage

**Vault-native coverage** means coverage is integrated directly into the vault's core workflows—deposit, withdrawal, share accounting, and yield reporting—rather than being an external policy a user must buy and manage separately. This makes protection simpler to adopt, easier to distribute through partners, and more composable with structured yield products.

### 8. Underwriting Capacity

**Underwriting capacity** is the total amount of loss exposure that can be safely supported by the capital backing the coverage system. It's effectively the "coverage balance sheet"—how much protection can be issued without overextending the backing capital, after accounting for buffers, limits, and risk constraints.

### 9. DeFi Curator

A **DeFi Curator** is the risk manager responsible for configuring and maintaining the base vault's parameters and running yield-generating strategies. Examples: **[Gauntlet](https://www.gauntlet.xyz/), [Steakhouse Financial](https://www.steakhouse.financial/)**.

### 10. Risk Pricing

**Risk pricing** is the method used to set premiums based on the probability and severity of potential losses for a given vault. It reflects expected loss, uncertainty, tail risk, and capital availability—so higher-risk vaults pay more, and premiums can adjust as utilization and market conditions change.

### 11. Coverage Limit

A **coverage limit** is the maximum amount that can be paid out for a covered vault or policy under defined conditions. Limits make protection explicit and bounded—users know the maximum downside protection they're buying, and the system ensures payouts cannot exceed what was committed.

### 12. Coverage Duration

**Coverage duration** is the period during which coverage is active and claims are valid under the policy terms. Duration matters because risk changes over time—shorter durations are easier to price and manage, while longer durations may require more conservative limits or higher premiums.

### 13. Opt-In Coverage

**Opt-in coverage** means depositors choose whether they want protected exposure at the moment they deposit (or when they interact with the vault). This preserves flexibility: users who want maximum yield can stay uninsured, while users who care about downside protection can pay the premium and receive defined coverage terms.

### 14. Covered TVL

**Covered TVL** is the amount of total value locked in Covered Vaults compared to the Base Vaults. It's a core adoption metric because it measures how much capital users are choosing to protect, not just how much capital is sitting in overall.

### 15. Coverage Penetration

**Coverage penetration** is the share of a Base vault's (or ecosystem's) total TVL that is covered—i.e., Covered TVL divided by Base Vaukt TVL. It captures whether protection is becoming the default behavior for depositors, and it's often a leading indicator of institutional readiness.

### 16. Loss Event

A **loss event** is a qualifying incident that results in measurable losses to vault depositors and is covered under the policy terms. Depending on design, it can include things like bad debt, oracle failures, exploit-driven losses, or asset-level shocks—so long as it matches the defined conditions for payout.

### 17. Delegator

A **delegator** is the capital provider who supplies backing capital that makes coverage possible and earns premiums in return. Delegators take on the risk of loss (within defined constraints) so that vault users can receive protection, creating a market where risk is explicitly priced and transferred.

### 18. Restaked Backing

**Restaked backing** refers to using restaked collateral as the economic foundation for underwriting coverage capacity. Instead of relying on traditional insurance balance sheets, coverage capacity is supported by onchain collateral that can credibly back payouts, enabling scalable and transparent coverage for DeFi vaults.
