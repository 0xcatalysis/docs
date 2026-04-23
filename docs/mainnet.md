---
sidebar_label: Mainnet contracts
---

import ContractAddressTable from '@site/src/components/ContractAddressTable';

# Mainnet contracts

This page lists **official Catalysis smart contract deployments on Ethereum mainnet**. Use these canonical addresses for integrations and onchain verification.

Catalysis contracts are **upgradeable** (proxy-based). **This page is the official reference** for these addresses; when upgrades or new deployments happen, we will **update them here**.

Sepolia testnet deployments use the same proxy addresses where applicable; the TimelockController is mainnet-only in the reference deployment set.

## Core contracts

<ContractAddressTable
  rows={[
    { name: 'StakeManager (Proxy)', address: '0x5be5220F81e76e0CF6089fb7E7aE9eF48a8D64Be' },
    { name: 'SlashingManager (Proxy)', address: '0x7Bc39bf135eF3c30E542C196719c91455ff489f0' },
    { name: 'RewardsManager (Proxy)', address: '0x8ae0F0B94fe782D7F055B04d4699c3cc01632b46' },
    { name: 'SSPRouter (Proxy)', address: '0xF39E592E93A7a925a57464e0120B555A25590486' },
    { name: 'EigenAdapter (Proxy)', address: '0xe6168092892E545701D92BEe10149178bE0EEDF4' },
    { name: 'ChainlinkPriceFeed (Proxy)', address: '0x57F750E3B8e095A5b3AE96030F0cac5dFe2f8A16' },
  ]}
/>

## Coverage contracts

<ContractAddressTable
  rows={[
    { name: 'TimelockController', address: '0x776Ab5890b6c62544dF06471A3705Ed83BeEA2f7' },
    { name: 'PolicyManager (Proxy)', address: '0xfb771BE75365D2a1D32be198e03ce8a2125e2699' },
    { name: 'ClaimManager (Proxy)', address: '0x3ceE181C3E78fB9968f0Fb0935d2db0723B9Cb45' },
    { name: 'PremiumManager (Proxy)', address: '0xEc7322D6754709d5001B710ec4fB2547a89B3aD1' },
    { name: 'CoverPoolFactory (Proxy)', address: '0x4f3DbB70cD85bcb63303FBa8610Cb163aDDA4E66' },
    { name: 'SpecRegistry (Proxy)', address: '0x90EfF742958dd4c54ede3ED365375a14077D0A58' },
    { name: 'Swapper (Proxy)', address: '0x148Bfe2330cEe4f227addb47736a105DB427dc31' },
    { name: 'UniswapV3Adapter', address: '0x0C17b63bd19B175E7C3B0561957ED534244Eee3E' },
  ]}
/>

## Vault contracts

[EigenLayer AVS](https://app.eigenlayer.xyz/avs/0xe6168092892e545701d92bee10149178be0eedf4/operator-set/1)

<ContractAddressTable
  rows={[
    {
      name: 'Gauntlet WETH Prime Vault (Morpho)',
      address: '0x2371e134e3455e0593363cBF89d3b6cf53740618',
    },
    { name: 'CoverPool', address: '0xfCDd94D12884aCb8AB3b48c5930DF20F4973B221' },
    { name: 'CoveredVaultWrapper (Proxy)', address: '0x45dC31c63a87193555F48c4b95CA61Aa119A9B3E' },
    { name: 'DurationVault (wstETH)', address: '0x2134028ADaBE52464E2e3170961F74F4F52D0f51' },
  ]}
/>
