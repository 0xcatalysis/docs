# Overview

**The Catalysis Network coordinates a set of stakeholders that collectively enable onchain, vault-native risk coverage**.

Capital allocators supply **underwriting capacity** via restaking protocols, Catalysis structures that capacity into **CoverPools** and DeFi vault protocols expose **Covered Vaults** where premiums and claims are handled at the vault layer.

**Integration partners** then distribute these **Covered Vaults** through familiar frontends, **making coverage accessible without adding a separate "external" workflow for users**.

## Key terms
- **CoverPool**: A risk-isolated underwriting pool funded by delegator capital. It receives premiums and pays claims when triggered.
- **Base Vault**: Standard vault exposure (no coverage).
- **Covered Vault**: Vault exposure with an embedded coverage mechanism (premiums + claim crediting handled at the vault layer).
- **Adapter**: Integration module that connects Catalysis coverage logic to a specific vault protocol implementation.

## Key Stakeholders

| **#** | **Stakeholder** | **Description** |
| --- | --- | --- |
| **1** | **Delegator (Restaker / LRT)** | - Supplies capital that back CoverPools (**Capacity Providers**)<br/>- **Earns yields** in exchange for bearing loss risk<br/>- May participate directly or via LRTs and vault curators |
| **2** | **Restaking Protocol (EigenLayer)** | - **Custodies and tracks restaked collateral**; enforces slashing / reward distribution<br/>- Serves as the **coordination layer** between Catalysis and restakers |
| **3** | **Catalysis** | - Smart-contract-based **risk coverage infrastructure** that creates and manages **CoverPools**<br/>- **Calculates risk premiums** and provides **vault-native integration** via custom adapters (e.g., Morpho Adapter) |
| **4** | **DeFi Protocols (Vault-Based)** | - Vault infrastructure where **coverage is embedded as an opt-in** **Covered Vault** alongside a **Base Vault** (e.g., Morpho)<br/>- Defines the **vault-level integration surface** for premiums, claims and accounting via adapters |
| **5** | **Integration Partners (Distribution)** | - **Frontends and aggregators that surface Covered Vaults to LPs** and route deposits (e.g., **Superform, Jumper Earn**)<br/>- Distribute covered vault opportunities to users without requiring an **external “coverage workflow”** |

## Visualization

***Note: This is an example illustration. Logos shown don't necessarily indicate active integrations or partnerships.***

<div style={{textAlign: 'center'}}>
  <img src="/img/e2e-distribution.png" alt="E2E Flow" style={{maxWidth: '800px', width: '100%'}} />
</div>
