---
title: DeFi Vaults
sidebar_position: 4
---

# DeFi Vaults

DeFi vault protocols are where coverage becomes a product users can actually choose. They expose **Covered Vaults** (opt-in coverage) alongside **Base Vaults** (no coverage), so premiums and claims are handled within the vault lifecycle.

Vault protocols like Morpho are the **integration surface** for users:
- They host vaults that represent the underlying strategy/exposure.
- They provide the onchain mechanics that make “covered vs base” a clear choice.

## Base Vault vs Covered Vault
- **Base Vault**: standard vault participation (no premiums, no coverage).
- **Covered Vault**: vault participation plus embedded coverage.
  - Premiums are paid via the Covered Vault’s accounting (implementation-specific).
  - If a covered loss event occurs, claim value is credited back to the Covered Vault per coverage terms.

## What vault protocols provide
- Vault primitives: deposits, withdrawals, accounting, shares, fees
- A clean integration path for Catalysis adapters to:
  - collect premiums,
  - apply/reflect coverage costs, and
  - credit claims back to the vault when triggered
