# Overview

The Catalysis Network ecosystem consists of several key stakeholders, each playing a crucial role in maintaining security, providing coverage, and ensuring the network's decentralized operation.

# Key Stakeholders

| **#** | **Stakeholder** | **Description** |
| --- | --- | --- |
| **1** | **Delegator** (Restaker / Restaking Curators / LRTs) | - Supplies restaked assets that back cover pools (Capacity Providers)<br/>- Earns yield + underwriting fees in exchange for bearing loss risk<br/>- May act directly or via LRTs or defi risk managers<br/>- Can delegate pricing / underwriting decisions to a restaking vault curator |
| **2** | **Restaking Protocol (Infra)** | - Custodies and tracks restaked collateral, enforces slashing<br/>- Exposes reward / slashing hooks that Catalysis smart-contracts call<br/>- Serves as the coordination layer between Catalysis and restakers |
| **3** | **Coverpool Curator** | - Creates individual cover pools (risk scope, coverage limits, exclusions)<br/>- Prices risk and sets premiums using on-/off-chain data & actuarial models (Underwriter)<br/>- Continuously monitors pool health, updates parameters, and flags claims for adjudication |
| **4** | **Catalysis** | - Smart-contract infrastructure that orchestrates the marketplace<br/>- In the event of a payout, it routes restaker capital into cover pools and facilitates payout liquidity<br/>- Automates premium collection, claims distribution and reward accounting<br/>- Hosts claims-processing framework & optional legal guarantor / SPV wrappers |
| **5** | **Coverage Client** (Institutions, DeFi Protocols) | - Entity purchasing protection (e.g., credit borrower, custodian, RWA holder)<br/>- Pays premiums for defined loss cover<br/>- Might need to submit claims when trigger events occur<br/>- Become policy holders once policy is issued |

# E2E Flow (Visualized)

![E2E Flow](/img/flow-12.svg)

# Flow

| **Step No** | **Step Title** | **What happens** | **Primary Actor(s)** |
| --- | --- | --- | --- |
| 1 | **Policy Ideation** | Find institutions, Defi protocols, target borrowers that require coverage (Distribution, BD) | Coverpool Curator |
| 2 | **Risk Pricing** | Price risk; prepare risk assessment report with metrics (Premiums, OCL, OYS, DI etc) | Coverpool Curator |
| 3 | **Policy - I** | Premium rates, payment cycles shared with the borrower; confirming borrower is okay with payment terms | Coverpool Curator |
| 4 | **Capacity Sourcing - I** | Request delegations from delegators (LRTs, restaking curators); risk premiums, assessment report shared | Catalysis, Restaking Protocol |
| 5 | **Capacity Sourcing - II** | Delegators (LRTs, restaking curators) decide on whether to underwrite risk; based on risk assessment report from coverpool curator | Delegator |
| 6 | **Capacity Sourcing - III** | Delegators (LRTs, restaking curators) delegate capital to Coverpool via Catalysis Core (Tech); Coverage issued | Catalysis |
| 7 | **Policy Binding** | Catalysis creates a policy under the coverpool managed by curator; borrower pays first premium | Catalysis |
| 8 | **Premiums Collection** | Collect premiums from borrower (Tech) | Catalysis |
| 9 | **Premiums Distribution** | Split premiums among delegators, curator fee, coverage platform fee (Tech) | Catalysis |
| 10 | **Ongoing Monitoring** | Monitor & observe underwriting health, price feeds, protocol metrics. | Coverpool curator |
| 11 | **Claims Trigger** | Insured (or lender in lending protocols) triggers coverage payout | Policy-holder |
| 12 | **Claims Assessment** | Validate facts, run risk model, check exclusions. | Coverpool curator |
| 13 | **Claim Decision** | Approve / reject / partial payout vote. | Coverpool curator |
| 14 | **Claim Payout Calculation** | Compute indemnity amount minus deductible. | Catalysis |
| 15 | **Claims Disbursement** | Move collateral / stablecoin to beneficiary. | Catalysis |
| 16 | **Subrogation / Recovery** | Pursue borrower collateral / legal recovery. | Catalysis |
| 17 | **Reporting & disclosures** | Publish stats: premiums written, loss ratios, pool solvency. (Analytics Tech) | Catalysis |
| 18 | **Capital Withdrawals / Rollover** | Delegators exit or roll capacity at term end. | Delegator |
