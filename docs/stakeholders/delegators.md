---
title: Delegators
sidebar_position: 2
---

# Delegators

Delegators supply the capital that backs Catalysis **CoverPools**. In return, they earn underwriting fees (premiums) while taking on a defined loss risk.

## Role in the network
Delegators are the **capacity providers** of the system:
- Their capital is the source of underwriting capacity.
- CoverPools use that capacity to offer protection to Covered Vaults.

## What delegators provide
- **Restaked capital** (directly or via an LRT / curator) that is allocated to a CoverPool.
- Optional delegation of underwriting preferences to a curator (where applicable).

## How delegators earn
Delegators generally earn a blend of:
- **Restaking rewards** (from the underlying restaking layer), and
- **Underwriting fees** (premiums paid by Covered Vault participants into CoverPools)

Returns depend on:
- CoverPool utilization (how much capacity is actively underwriting)
- Premium rate(s)
- Claims experience (whether payouts are triggered)

## What delegators risk
Delegators take on **loss exposure** defined by the coverage terms of the CoverPools they fund.
If a covered event occurs:
- CoverPools pay claims as specified, which can reduce delegator-backed capital.

(Exact risk boundaries depend on the specific CoverPool and coverage definition.)

## How delegators participate
Common participation paths:
- **Direct restaking** → allocate to a CoverPool
- **Via an LRT** → LRT allocates/restakes on behalf of users
- **Via a curator** → curator configures/allocates underwriting capacity

## What to evaluate before allocating
- What loss events are covered (and what is explicitly not covered)
- Maximum payout / limits and how payouts are executed
- Premium rate and expected utilization
- Any timing constraints (e.g., allocation windows, withdrawal rules, cooldowns)
