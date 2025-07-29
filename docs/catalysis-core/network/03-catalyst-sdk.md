---
sidebar_position: 3
---

# Catalyst-SDK

Catalyst SDK is a comprehensive framework for building and managing **Actively Validated Services (AVS)** on the Catalyst network. It can be considered as a _Swiss Army Knife_ to build **Universal AVS**. It enables **plug-and-play** functionality with **full customisability** and provides **standard tooling** to build networks the "right way".

Think of it as "**Cosmos-SDK for building AVS**". It offers built-in **customizable modules** that facilitate rapid development and flexibility to meet each network's specific needs.

It is written in **Go**, so it's both performant and fast.

**NOTE: The Catalyst-SDK is currently in Private Devnet. Private Testnet will launch in July 2025.**

## SDK Modules

The following modules are part of the Catalyst-SDK:

| **Module**      | **Use**                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **BaseApp**     | Core application framework that coordinates all components. Provides lifecycle management, dependency injection through wiring, and serves as the entry point for AVS applications. Handles initialization and orchestration of P2P, consensus, execution, state management, and HTTP server components.                                                                                                                         |
| **Listener**    | Entry point for task ingestion from various sources (HTTP APIs, smart contract events, external services). Validates incoming tasks, broadcasts them via P2P to other nodes, and forwards valid tasks to the consensus engine for processing.                                                                                                                                                                                  |
| **Consensus**   | Implements distributed consensus mechanisms with customizable leader election strategies. Manages task lifecycle, coordinates leader election per task round, ensures fault tolerance through fallback handling, and forwards signed results to the execution module. Supports pluggable consensus algorithms and stake-based leader selection.                                                                                    |
| **Execution**   | Validates signed results from consensus, implements custom AVS business logic through TaskHandler interface, manages attestation creation and broadcasting, collects attestations from network peers, and forwards aggregated attestations to the submitter when quorum is reached. Provides framework for secure task execution and verification.                                                                                |
| **Submitter**   | Finalizes tasks by submitting aggregated attestations to on-chain TaskManager contracts. Handles blockchain transactions with retry mechanisms, supports both ECDSA and BLS signature schemes, manages transaction confirmation, and triggers post-submission logic. Implements concurrent submission with exponential backoff for failed attempts.                                                                                |
| **Crypto**      | Comprehensive cryptographic module supporting ECDSA and BLS keys with encrypted storage. Provides secure key generation, management, and signing operations. Supports multiple key types (P2P, task signing, submitter keys), implements keystore with passphrase protection, and offers both raw and high-level cryptographic operations.                                                                                      |
| **P2P**         | Handles peer-to-peer networking using libp2p protocols. Implements peer discovery, connection management, message broadcasting and routing between nodes. Supports customizable stream handlers, error responders, and metadata exchange. Provides health monitoring and automatic reconnection mechanisms for robust multi-node communication.                                                                                    |
| **State**       | Manages persistent application state across the AVS lifecycle. Provides key-value storage interface for module data, handles state synchronization between components, and supports state queries and updates. Used by various modules to store configuration, peer information, and task processing state.                                                                                                                        |
| **Server**      | HTTP API server providing external communication endpoints. Integrates with the listener module to receive tasks via REST APIs, exposes health checks and metrics endpoints, and supports custom route handlers for AVS-specific functionality. Includes both main API server and optional metrics server.                                                                                                                         |

## Core Modules

### 1. Listener Module

The **Listener** module serves as the entry point for task ingestion into the AVS network. It acts as a central hub that receives tasks from various sources and coordinates their distribution across the network.

**Responsibilities:**

- Receive tasks from multiple sources (HTTP APIs, smart contract events, gRPC services, internal modules)
- Validate task structure and integrity before processing
- Broadcast tasks to all network peers via P2P communication
- Forward validated tasks to the consensus engine for leader election and processing
- Handle task timeouts and prevent processing of expired tasks

**Core Flow:**

1. **Task Reception:** Accepts tasks from any input source with validation
2. **Task Broadcasting:** Distributes tasks to all network participants via P2P
3. **Consensus Forwarding:** Submits tasks to consensus engine for coordinated processing

### 2. Consensus Module

The **Consensus Module** coordinates distributed agreement on task execution through a leader-driven consensus mechanism with customizable strategies.

**Core Flow:**

1. **Task Reception:** Receives validated tasks from the listener module
2. **Leader Election:** Executes configurable leader election strategy based on stake, rotation, or custom algorithms
3. **Task Processing:** 
   - If node is elected leader: executes the task and creates signed result
   - If node is not leader: waits for signed result from elected leader
4. **Fallback Handling:** Implements automatic failover with new leader election if current leader fails or times out
5. **Result Distribution:** Broadcasts signed results to the execution module for attestation

**Responsibilities:**

- Manage task lifecycle with deduplication of concurrent attempts
- Execute pluggable leader election strategies (stake-based, round-robin, custom)
- Coordinate task execution with timeout and retry mechanisms
- Ensure signed results are properly distributed across the network
- Handle consensus failures through automatic leader re-election

### 3. Execution Module

The **Execution Module** validates signed results and orchestrates the attestation process across network participants.

**Core Flow:**

1. **Result Validation:** Receives and validates signed results from consensus
2. **Business Logic Execution:** Runs custom AVS logic through TaskHandler interface
3. **Attestation Creation:** Generates cryptographic attestations for validated results
4. **Network Broadcasting:** Distributes attestations to all network peers
5. **Quorum Collection:** Aggregates incoming attestations until threshold is met
6. **Submission Trigger:** Forwards aggregated attestations to submitter when quorum is achieved

**Responsibilities:**

- Validate correctness of signed task results using custom verification logic
- Execute AVS-specific business logic through pluggable TaskHandler interface
- Create and broadcast cryptographic attestations to network peers
- Monitor and collect attestations from other validators
- Aggregate attestations and verify quorum requirements are met
- Handle attestation timeouts and mismatch scenarios with recovery mechanisms

### 4. Submitter Module

The **Submitter Module** handles the final step of task processing by committing results to the blockchain and managing post-processing workflows.

**Core Flow:**

1. **Attestation Reception:** Receives aggregated attestations from execution module
2. **Blockchain Submission:** Submits attestations to TaskManager smart contracts
3. **Transaction Management:** Handles gas estimation, transaction broadcasting, and confirmation
4. **Retry Logic:** Implements exponential backoff for failed submissions
5. **Post-Processing:** Executes custom callbacks and triggers reward distribution

**Responsibilities:**

- Submit aggregated attestation sets to on-chain TaskManager contracts
- Support both ECDSA and BLS signature schemes for different blockchain requirements
- Manage transaction lifecycle with proper gas handling and confirmation monitoring
- Implement robust retry mechanisms with exponential backoff for network issues
- Handle concurrent submissions through goroutine-based processing
- Execute post-submission logic including rewards distribution and logging

## **Supporting Libraries**

1. **Types Library** – Defines core data structures (Task, SignedResult, Attestation) and interfaces (TaskHandler, Module) used across all components
2. **Errors Library** – Provides structured error handling with context and wrapping capabilities for better debugging and monitoring
3. **Log Library** – Implements structured logging with configurable levels, topics, and output formats for comprehensive observability
4. **Z Library** – Offers logging field utilities for consistent and efficient log message construction across all modules

## **Flow Diagram**

![SDK Flow](./img/sdk-flow-1.png)
