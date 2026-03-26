---
title: DeFi Vaults
sidebar_position: 3
---

# DeFi Vaults

DeFi vault protocols are where coverage becomes a product users can actually choose. They expose **Covered Vaults** (opt-in coverage) alongside **Base Vaults** (no coverage), so premiums and claims are handled within the vault lifecycle.

Vault protocols like **[Morpho](https://morpho.org/)** are the **integration surface** for users. They host the vaults representing the underlying strategy/exposure (often curated by groups like **[Gauntlet](https://www.gauntlet.xyz/)** & **[Steakhouse Financial](https://www.steakhouse.financial/)**).

## Base Vault vs Covered Vault

<div style={{textAlign: 'center'}}>
  <img src="/img/covered-base-vault.svg" alt="Base vs Covered" style={{width: '100%', border: '1px solid black'}} />
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

### Q1. What is a Covered Vault?
A **Covered Vault** is an **[ERC4626](https://docs.openzeppelin.com/contracts/4.x/erc4626)-compliant vault** deployed by Catalysis that wraps an 
existing DeFi vault (the "**Base Vault**") with per-user risk coverage. Depositors in a Covered Vault get the same yield exposure as the Base Vault, minus a small premium haircut — in exchange for **protection against principal loss**.

### Q2. Where does a Covered Vault live — on the vault protocol or on Catalysis?
The Covered Vault is a **[Catalysis contract](https://catalysis.network)**. It wraps the Base Vault (which lives on **[Morpho](https://morpho.org)**, **[Euler](https://euler.finance)**, or another supported protocol), but the **coverage accounting** — PPS tracking, shortfall calculations, premium haircuts — all happens at the Catalysis layer.

**All deposits are automatically routed to the underlying Base Vault**. The vault position earns yield inside the Base Vault, but the coverage logic sits entirely within the Covered Vault contract.

### Q3. Is the Covered Vault a different strategy than the Base Vault?
**No**. The Covered Vault routes all deposits into the paired Base Vault, so the **yield exposure is identical**. The difference is the coverage layer — **Covered Vault depositors pay a small premium haircut** on their yield in exchange for protection against principal loss from covered events.

### Q4. What happens when coverage expires?
**Coverage periods have a fixed duration (e.g., 90 days)** starting from when the 
Coverpool is fully activated — not from the date the covered vault is deployed.

**Upon expiry, the Covered Vault is no longer insured and functions equivalently to the Base Vault**. Depositors can withdraw at any time. If coverage is renewed, a new period begins after a brief transition window (typically 24–48 hours).

If renewal doesn't happen, depositors who stay in the Covered Vault continue earning the Base Vault's full yield (no premium haircut, since there is no active coverage to pay for).

### Q5. What is the premium haircut?
The premium haircut is a small percentage of yield deducted as a coverage premium. It is set by the **Catalysis underwriting engine** using real-time risk data from the 
**[Credora](https://www.credora.network/)** API (vault rating, probability of shortfall loss, expected loss, etc.).

```
Net Covered Vault APY = Base Vault APY − Premium Haircut
```

For example, if the Base Vault yields 5% APY and the haircut is 75 bps (0.75%), 
the depositor's net APY is **4.25%**.

**Haircuts are vault-specific** and can adjust dynamically if a vault's risk profile changes — though for highly-rated (A-rated) vaults, they tend to be stable.

### Q6. What is the deductible?
**The deductible is a per-user loss threshold below which coverage does not pay out**. It functions like a standard insurance deductible — it absorbs small fluctuations and ensures payouts only occur for meaningful losses and not for common idiosyncratic losses.

For example, with a 1% deductible on a $1M deposit, the first $10,000 of any 
shortfall is absorbed by the user. Coverage pays out on any shortfall above that.

### Q7. What events are covered?
Coverage applies whenever the Base Vault's PPS (**Price-Per-Share**) declines below
a user's deposit PPS. The primary causes of this are:

- **Smart contract exploits / hacks** — vulnerabilities in the Base Vault or its
  underlying strategies
- **Bad debt** — unrecoverable losses from undercollateralized or insolvent positions
  within the Base Vault's lending markets
- **Curator errors** — misallocation or operational mistakes by the vault curator
- **Strategy failures** — breakdown of yield strategies that leads to principal loss

**What's not covered:** market drawdowns, impermanent loss, or reduced yield that
does not result in PPS falling below the user's deposit PPS.

### Q8. Is there a lock-up period for depositors?
**No**. Covered Vault depositors can withdraw at any time during the active coverage period, subject to the TVL cap. **There is no lock-up**.

### Q9. What is the TVL cap?
**The TVL cap is the maximum aggregate deposits the Covered Vault will accept**. It is determined by the size of the Coverpool (underwriting capital) and the vault's tail-risk profile as assessed by the Catalysis underwriting engine.

For example, if a vault's worst-case loss probability is 10%, then $1M in the 
Coverpool can back up to $10M in the Covered Vault (a 10x ratio). The TVL cap scales proportionally as more underwriting capital is delegated.

### Q10. How does coverage actually work?
**Coverage is per-user and triggers automatically when a depositor withdraws**. There is no separate claims process, no oracle, no governance vote.

At withdrawal, the Covered Vault contract:
1. *Looks up the user's **Price Per Share (PPS)** at the time of deposit*
2. *Compares it to the current PPS from the Base Vault*
3. *If the current PPS is lower, a shortfall exists*
4. *Applies the deductible — coverage only pays out if the shortfall exceeds it*
5. *Slashes the net coverage amount from EigenLayer Duration vaults*
6. *Delivers the current vault value + coverage payout to the user*

**From the user's perspective, they simply withdraw and receive their principal back (minus the deductible)**. The mechanics are transparent to them.

### Q11. Who sets the parameters for a Covered Vault?
Parameters are set by the **admin** (the Catalysis core team or an authorized 
curator) at deployment:

| Parameter | Set by |
|---|---|
| Base Vault address | Admin at deployment |
| Coverage duration | Admin at deployment |
| Deductible | Admin at deployment |
| TVL cap | Underwriting engine (scales with Coverpool) |
| Premium haircut | Underwriting engine (dynamic, Credora-powered) |

Curators cannot modify the premium haircut or TVL cap after deployment — those are 
controlled exclusively by the Catalysis underwriting engine.