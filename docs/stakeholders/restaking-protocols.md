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

## Visualization

<div style={{textAlign: 'center'}}>
  <img src="/img/restaking-protocols-1.svg" alt="Coverpool Restaking" style={{width: '100%', border: '1px solid black'}} />
</div>
---

## FAQs

### **Q1. Which restaking protocols does Catalysis support today?**
**Currently:** **[EigenLayer](https://www.eigencloud.xyz/)** and **[Symbiotic](https://symbiotic.fi/)** (both on **Ethereum Mainnet**).  
Support is implemented via protocol-specific integrations and can expand to additional **restaking and liquidity layers** over time.

### **Q2. Does the restaking protocol take a cut of rewards?**
It depends on the restaking layer (and sometimes the LRT / curator you use). Some protocols apply **protocol-defined fees or reward splits** on AVS reward flows (e.g: **[EigenLayer charges 20% fees](https://x.com/eigencloud/status/2016386803062997049?s=20)**).

**Catalysis does not control these fees** — partners should refer to the restaking protocol’s latest fee model.

### **Q3. Can delegators choose any supported restaking protocol?**
**Yes. Delegators can restake via any supported restaking layer.**

Catalysis is designed to utilize underwriting capacity across multiple restaking protocols **in parallel** (capacity remains accounted for within each underlying restaking layer).

### **Q4. Can Catalysis coverage work without a restaking layer?**
**In principle, YES**. But it would require rebuilding the same primitives from scratch (collateral accounting, delegation, rewards distribution and slashing guarantees).

Using established restaking protocols allows Catalysis to **leverage hardened infrastructure and existing liquidity**, which significantly **accelerates go-to-market**.


## FAQs - Caps, Duration & Incentives

### **Q1: What exactly are delegation caps?**

**Delegation Caps** represent phased increases in underwriting capacity. Each cap introduces one or more new **duration-based vaults**, each with a defined size, duration and incentive structure.

The Catalysis roadmap currently has **three caps spanning Q1 to Q3 2026**.

### **Q2: Do early restakers earn meaningfully higher returns?**
**YES**. Delegators participating in early caps benefit from higher incentives, resulting in meaningfully higher **risk-adjusted returns**.

### **Q3: Is the cap per vault, per CoverPool or global?**
**No, Caps are not per vault or per Coverpool.** Each cap generally supports multiple vaults or coverpools depending on the coverage demand and business requirements.

### **Q4: Can caps be increased mid-duration?**
**NO**. Once a cap is filled, capital is locked for the full duration of that vault. **New capacity is added only via a new cap.**

### **Q5: Who decides when a new cap is opened?**
**The Catalysis Core team** decides the terms and conditions of opening up a new cap. Each new cap increases the overall coverage limit and is opened based on demand, risk appetite and operational readiness.

### **Q6: Can I delegate to multiple caps at the same time?**
**NO**. Each cap corresponds to a separate duration-based vault. Capital must be withdrawn from one vault before redeploying into another.

### **Q7: If I've delegated to Cap 1, what happens when the duration ends?**

**Withdrawals open at maturity.** You can withdraw your capital or redeploy it into new vaults in the subsequent caps with updated parameters and incentives.

### **Q8: How long do incentives last within a single cap?**

Incentives for each cap are designed to last approximately **one full calendar year**.

### **Q9: What incentives apply in each cap?**

Each cap may have different **restaking and protocol incentives ($EIGEN, $CAT)**. As a result, the risk-reward profile and APR vary across caps.
