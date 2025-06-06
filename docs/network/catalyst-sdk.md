---
sidebar_position: 2
---

# Catalyst-SDK

Catalyst SDK is a set of modular components to build AVSs. It can be considered as a _Swiss Army Knife_ to build **Universal AVSs**. It enables **plug-and-play** functionality with **full customisability** and provides **standard tooling** to build AVSs the “right way”.

Think of it as “**Cosmos-SDK for building AVSs**”. It offers built-in **customizable modules** that facilitate rapid development and flexibility to meet each AVS's specific needs.

It is written in **Go/Rust**, so it’s both performant and fast.

NOTE: The implementation of Catalyst-SDK has already begun and we’re on track to launch a **devnet** in a few weeks.

# SDK Modules

The following modules are part of the Catalyst-SDK. (not an exhaustive list)

| **Module**      | **Use**                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Application** | This module provides interface APIs for AVS developers to implement their business logic. For example, a ZK prover network would use this module to implement the proving and verification logic of ZK proofs.                                                                                                                                                                                                                  |
| **Consensus**   | This module provides implementations of consensus algorithms like [QBFT](https://docs.goquorum.consensys.io/configure-and-manage/configure/consensus-protocols/qbft) and [CometBFT](https://docs.cometbft.com/v0.37/introduction/what-is-cometbft). This is particularly useful for AVSs that require a quorum of nodes to reach agreement on a final result.                                                                   |
| **Networking**  | This module provides APIs to handle all the peer-to-peer (P2P) networking logic. For example, this module can be used to broadcast data to other peers or operators in the network.                                                                                                                                                                                                                                             |
| **Staking**     | This module reads on-chain data to determine the operator set and their associated stakes. Application logic can use this data for leader election, essentially deciding which operator will perform a given task at any specific time.                                                                                                                                                                                         |
| **Slasher**     | This module implements the slashing logic of the AVS network. Slashing actions are signed, broadcast, and verified by all active operators. Once all operators have signed the slashing requests, the slasher module publishes the slashing data on-chain to catalysis contracts for execution.                                                                                                                                 |
| **Rewards**     | This module implements the rewards logic of the AVS network. Rewards are based on actions performed by the application module according to the AVS business logic. The rewards module triggers the on-chain distribution of rewards through catalysis core contracts.                                                                                                                                                           |
| **Crypto**      | This module provides secure private key management with widely adopted signature schemes. It supports [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), [BLS](https://eth2book.info/capella/part2/building_blocks/signatures/), and [Schnorr](https://en.wikipedia.org/wiki/Schnorr_signature) signatures, as well as threshold signatures, Shamir Secret Sharing, and popular hash functions. |
| **Cross-Chain** | This module provides cross-chain compatibility for AVS teams, enabling them to execute tasks on any chain of their choice based on their requirements (such as reducing gas fees, faster block times, etc.). It also allows AVSs to distribute rewards and execute slashings from any chain they prefer.                                                                                                                        |

![Architecture](./img/arch.png)
