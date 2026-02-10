---
title: DeFi Vaults
sidebar_position: 4
---

# DeFi Vaults

DeFi vault protocols are where coverage becomes a product users can actually choose. They expose **Covered Vaults** (opt-in coverage) alongside **Base Vaults** (no coverage), so premiums and claims are handled within the vault lifecycle.

Vault protocols like Morpho are the **integration surface** for users. They host the vaults representing the underlying strategy/exposure (often curated by groups like **Steakhouse, Gauntlet and Sentora**).

## Base Vault vs Covered Vault

<div style={{textAlign: 'center'}}>
  <img src="/img/base-vs-covered.svg" alt="Base vs Covered" style={{width: '100%', border: '1px solid black'}} />
</div>
---

1. **Base Vault (Unchanged)**:
**The original vault remains fully intact** — same strategy, same TVL, same APY. No coverage logic, capital or risk is imposed on existing LPs.

2. **Covered Vault (Opt-In Layer)**:
A separate vault for LPs who want protection. **Deposits are routed 1:1 into the Base Vault**.
In exchange for coverage, LPs accept a **small APY haircut** and receive partial principal protection up to the covered amount.

3. **CoverPool (Risk Capital Layer)**:
**Each covered vault is paired with a dedicated CoverPool** funded by restaked capital. This pool acts as the onchain source of protection capital.

## FAQs

### **Q1. Where does a Covered Vault live — on the vault protocol or on Catalysis?**
A Covered Vault lives on the **underlying DeFi vault protocol** (e.g., **[Morpho](https://morpho.org)** / **[Euler](https://euler.finance)**).

Catalysis provides the **coverage logic and adapter integration**, but the vault position and accounting remain within the vault protocol’s infrastructure.

### **Q2. Is the Covered Vault a different strategy than the Base Vault?**
**NO**. The Covered Vault is designed to route deposits **into the same Base Vault exposure**.  

The difference is the **coverage layer**: premium payments and claim crediting apply **only to Covered Vault depositors**.

### **Q3. What do users actually get when a claim happens?**
When a covered trigger occurs, cover amount is **credited back to the Covered Vault** according to the coverage definition and limits. Users benefit through the vault’s normal accounting.

