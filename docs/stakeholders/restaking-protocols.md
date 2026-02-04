---
title: Restaking Protocols
sidebar_position: 3
---

# Restaking Protocols

Restaking protocols are the infrastructure layer that **custodies and tracks restaked collateral** and provides the **enforcement rails (rewards + slashing)** that underwriting capacity is built on.

They act as the **coordination layer** between delegators and Catalysis:
- They **custody restaked assets** and expose verifiable accounting of who has delegated what.
- They enforce protocol-defined rules for **reward distribution** and **slashing**, which Catalysis can use as **enforcement primitives for underwriting**.
- They provide the **delegation primitives** that let capital be allocated toward different underwriting configurations (e.g., **CoverPools**).

## FAQs

### **Q1. Which restaking protocols does Catalysis support today?**
**Currently:** **[EigenLayer](https://www.eigencloud.xyz/)** and **[Symbiotic](https://symbiotic.fi/)** (both on **Ethereum Mainnet**).  
Support is implemented via protocol-specific integrations and can expand to additional **restaking and liquidity layers** over time.

### **Q2. Does the restaking protocol take a cut of rewards?**
It depends on the restaking layer (and sometimes the LRT/curator you use). Some protocols apply **protocol-defined fees or reward splits** on AVS reward flows (e.g: [EigenLayer charges 20%](https://x.com/eigencloud/status/2016386803062997049?s=20)).

**Catalysis does not control these fees** — partners should refer to the restaking protocol’s latest fee model.

### **Q3. Can delegators choose any supported restaking protocol?**
**Yes. Delegators can restake via any supported restaking layer.**

Catalysis is designed to utilize underwriting capacity across multiple restaking protocols **in parallel** (capacity remains accounted for within each underlying restaking layer).

### **Q4. Can Catalysis coverage work without a restaking layer?**
**In principle, YES**. But it would require rebuilding the same primitives from scratch (collateral accounting, delegation, rewards distribution and slashing guarantees).

Using established restaking protocols allows Catalysis to **leverage hardened infrastructure and existing liquidity**, which significantly **accelerates go-to-market**.
