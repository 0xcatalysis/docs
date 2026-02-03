---
sidebar_position: 3
---

# DeFi Vault Protocols

Vault protocols are the integration surface where coverage is offered as a first-class primitive via opt-in Covered Vaults.

## What vault protocols do
- Host vault infrastructure where **Covered Vaults** sit alongside **Base Vaults**.
- Define the vault-level integration surface for premiums, claims, and accounting.
- Route vault interactions through adapter flows (e.g., deposit/withdraw).

## How coverage shows up to users
- Users deposit into a **Covered Vault** to opt into protection.
- Premiums are paid via the vault’s fee / APY haircut mechanics (implementation-specific).
- Claims are credited back to the Covered Vault when a valid trigger occurs.

## Why this matters
- Avoids external coverage workflows.
- Keeps protection, pricing, and payouts tightly coupled to vault risk.
