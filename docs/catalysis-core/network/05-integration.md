---
sidebar_position: 5
---

# Integration

This guide walks through the integration flow for an SSN. The process is split into three key phases:

1. **Setup Phase** – Deploy contracts and initialize the network.
2. **Implementation Phase** – Add your business logic with the SDK.
3. **Deployment Phase** – Package the implementation and hand off to operators.

## 1. **Setup Phase**

This phase is focused on bootstrapping your network.

### 🔹 Step 1: Deploy Smart Contracts

Use the Lumos CLI to deploy the three core contracts for SSN:

- `NetworkManager`
- `StakeManager`
- `TaskManager`

You’ll need to provide details like the **Network Name, SSN Metadata, Chain ID, RPC URL, Deployer Private Key** etc.

```bash
lumos network register --flags
```

This deploys the contracts to your specified chain (e.g., Sepolia, or Holesky) and returns a network output JSON with all deployed contract addresses.

### 🔹 Step 2: Share Deployment Info with Operators

Once deployed, share the contract addresses and network metadata with your operators. They’ll need this info to register and run nodes.

### 🔹 Step 3: Operator Registration

Operators must install the Lumos CLI and register themselves with the SSN using:

```bash
lumos network register operator --flags
```

Each operator provides their `operator metadata`, `p2p_peer_id` (used for validator identity) and any additional information needed for your network.

The command:

- Registers the operator with the NetworkManager
- Binds them to the deployed SSN contracts
- Stores their registration info on-chain

📌 **This step is initiated by the operator, but requires contract details from the SSN developer.**

### 🔹 Step 4: SSN Owner Adds Committees and Vaults

Once operators are registered, the SSN owner configures the network’s security structure:

- Create committees using:

```bash
lumos committee create --flags
```

- Add vaults (representing sources of economic security) to each committee:

```bash
lumos vault add --flags
```

The vaults are registered with the `StakeManager` and mapped to the corresponding committees.

These vaults are later used to:

- Verify the stake backing each operator
- Resolve slashing or reward logic

🛠️ **All of this is still handled using the Lumos CLI. No SDK logic is touched yet.**

## 2. **Implementation Phase**

This is where you define the task logic for your network — how tasks are executed and verified.

### 🧱 Step 1: Scaffold Boilerplate

Run the scaffold command to generate boilerplate SSN logic:

```bash
lumos scaffold --flags
```

This creates a basic project structure with two key functions:

- `execute()` — defines how your SSN handles a task
- `verify()` — defines how task results are validated

### 🧠 Step 2: Implement Business Logic

Implement the `execute` and `verify` methods with your custom task logic. This is the core of your SSN’s behavior.

### ⚙️ Step 3: Package the SSN Client

Once the logic is implemented:

- Package the SSN code as a Docker image
- Prepare a `config.yaml` file with:
  - Deployed contract addresses (from Setup Phase)
  - Any SSN-specific runtime parameters

📝 **This config is currently not auto-generated. Developers must manually include the contract addresses from the Setup phase.**

## 3. **Deployment Phase**

With everything in place, you’re ready to launch your network & hand it over to Operators.

### 🚀 Step 1: Distribute the Client to Operators

Once your SSN logic is packaged:

- Share the **Docker image** and the accompanying **`config.yaml`** file with your operators.
- Operators run the SSN client using this image + config.

The config should include:

- `TaskManager`, `StakeManager`, and `NetworkManager` contract addresses
- Vault and committee references (as configured in the setup phase)
- Any other network-specific runtime parameters

At this point, the SSN is live and operators are now fully capable of processing and validating tasks on-chain.

### 📊 Step 2: Monitor with Observability Tools

Once deployed, it’s crucial to monitor the behavior and health of your network.

- The SSN client includes built-in observability features (metrics, logging & tracing).
- These help **SSN developers** monitor task processing, operator participation, error rates and latency.
- **Operators** can use these tools to monitor node uptime, rewards processing and slashing exposure.

> Good observability makes it easier to debug issues, track liveness and understand network performance over time.
