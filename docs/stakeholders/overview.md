# Overview

The Catalysis Network ecosystem consists of several key stakeholders, each playing a crucial role in maintaining security, providing coverage, and ensuring the network's decentralized operation.

## Key Stakeholders

| **#** | **Stakeholder** | **Description** |
| --- | --- | --- |
| **1** | **Delegator** (Restaker / Restaking Curators / LRTs) | - Supplies restaked assets that back cover pools (Capacity Providers)<br/>- Earns yield + underwriting fees in exchange for bearing loss risk<br/>- May act directly or via LRTs or defi risk managers<br/>- Can delegate pricing / underwriting decisions to a restaking vault curator |
| **2** | **Restaking Protocol (Infra)** | - Custodies and tracks restaked collateral, enforces slashing<br/>- Exposes reward / slashing hooks that Catalysis smart-contracts call<br/>- Serves as the coordination layer between Catalysis and restakers |
| **3** | **Coverpool Curator** | - Creates individual cover pools (risk scope, coverage limits, exclusions)<br/>- Prices risk and sets premiums using on-/off-chain data & actuarial models (Underwriter)<br/>- Continuously monitors pool health, updates parameters, and flags claims for adjudication |
| **4** | **Catalysis** | - Smart-contract infrastructure that orchestrates the marketplace<br/>- In the event of a payout, it routes restaker capital into cover pools and facilitates payout liquidity<br/>- Automates premium collection, claims distribution and reward accounting<br/>- Hosts claims-processing framework & optional legal guarantor / SPV wrappers |
| **5** | **Coverage Client** (Institutions, DeFi Protocols) | - Entity purchasing protection (e.g., credit borrower, custodian, RWA holder)<br/>- Pays premiums for defined loss cover<br/>- Might need to submit claims when trigger events occur<br/>- Become policy holders once policy is issued |

# E2E Flow Visualization

![E2E Flow](/img/flow-12.svg)

## Sequence Diagram

![E2E Flow](/img/sequence-diagram.svg)