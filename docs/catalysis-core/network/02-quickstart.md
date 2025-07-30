---
sidebar_position: 2
---

# Quickstart

This quickstart guide walks you through using the **Lumos CLI** to build and deploy an SSN (Shared Security Network) on Catalysis Network. We'll use the official Docker image to simplify setup and ensure consistency across environments.

:::info Access Required

**To use the Lumos CLI and Catalysis Core, you need to contact the Catalysis team for access.** The Lumos CLI Docker image is currently private and requires proper authentication to pull and use.

📧 **Contact**: [yanshu@catalysis.network](mailto:team@catalysis.network) or reach out via [telegram](https://t.me/xyanshu) to request access.

:::

## Prerequisites

Before starting, ensure you have:

- **Docker** installed and running
- **Access to an Ethereum testnet** (Sepolia, Holesky, Hoodi) with testnet ETH
- **RPC endpoint** for your chosen network
- **Basic understanding** of blockchain concepts

## Docker Setup

We'll use the official Lumos CLI Docker image:

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`# Pull the latest image
docker pull ghcr.io/0xcatalysis/lumos-cli:v0.2.0

# Create an alias for easier usage
alias lumos="docker run --rm -v \\$(pwd):/workspace -v \\$HOME/.catalyst:/root/.catalyst ghcr.io/0xcatalysis/lumos-cli:v0.2.0"`}
</div>

The volume mounts ensure:

- `-v $(pwd):/workspace`: Current directory is accessible for config files
- `-v $HOME/.catalyst:/root/.catalyst`: Key storage persists between commands

## Phase 1: Setup & Key Management

### Step 1: Generate Cryptographic Keys

Your SSN needs three types of keys for different operations:

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`# Generate all keys at once (recommended)
lumos key generate-all \\
  --task-signing-key-type ecdsa \\
  --passphrase-file /workspace/passphrase.txt

# OR generate keys individually
lumos key generate --name p2p_key --type ecdsa --passphrase-file /workspace/passphrase.txt
lumos key generate --name submitter_key --type ecdsa --passphrase-file /workspace/passphrase.txt  
lumos key generate --name task_signing_key --type ecdsa --passphrase-file /workspace/passphrase.txt`}
</div>

**Key Types:**

- **P2P Key**: For peer-to-peer communication between nodes
- **Submitter Key**: For signing and submitting transactions on-chain
- **Task Signing Key**: For signing task results and attestations

**Key Generation Options:**

- `--type`: `ecdsa` or `bls` (ECDSA recommended for most use cases)
- `--passphrase-file`: Path to file containing passphrase (more secure than interactive input)
- `--key-dir`: Custom directory for key storage (default: `~/.catalyst`)

### Step 2: List and Verify Keys

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`# List all generated keys
lumos key list

# Import existing keys if needed
lumos key import \\
  --name existing_key \\
  --passphrase-file /workspace/passphrase.txt \\
  --private-key-file /workspace/private_key.txt`}
</div>

## Phase 2: Network Deployment

### Step 3: Register Your Network

Deploy the core smart contracts for your SSN:

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`lumos network register \\
  --name "MyAwesomeSSN" \\
  --metadata "https://myssn.com/metadata.json" \\
  --rpc-url "https://sepolia.infura.io/v3/YOUR_PROJECT_ID" \\
  --private-key-name submitter_key \\
  --passphrase-file /workspace/passphrase.txt \\
  --output-file /workspace/network_config.json`}
</div>

**Required Parameters:**

- `--name`: Human-readable name for your network
- `--metadata`: URL to metadata JSON describing your SSN
- `--rpc-url`: Ethereum RPC endpoint for contract deployment
- `--private-key-name`: Name of key for transaction signing
- `--output-file`: Path to save network configuration (contains contract addresses)

**What This Does:**

- Deploys `NetworkManager`, `StakeManager`, and `TaskManager` contracts
- Registers your SSN on-chain
- Outputs contract addresses and configuration to JSON file

### Step 4: Configure Network Assets (Vaults)

Add vaults that provide economic security to your network:

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`# Add a vault to committee 0
lumos network add-vault \\
  --output-file /workspace/network_config.json \\
  --vault-address "0x742d35Cc6634C0532925a3b8D3Ac3C3A8D3Ce0C4" \\
  --committee-id 0 \\
  --private-key-name submitter_key \\
  --passphrase-file /workspace/passphrase.txt \\
  --rpc-url "https://sepolia.infura.io/v3/YOUR_PROJECT_ID"

# Set maximum network limit for the vault
lumos network set-max-limit \\
  --output-file /workspace/network_config.json \\
  --vault-address "0x742d35Cc6634C0532925a3b8D3Ac3C3A8D3Ce0C4" \\
  --committee-id 0 \\
  --amount 1000000000000000000 \\
  --private-key-name submitter_key \\
  --passphrase-file /workspace/passphrase.txt \\
  --rpc-url "https://sepolia.infura.io/v3/YOUR_PROJECT_ID"`}
</div>

**Vault Configuration:**

- **Vault Address**: Address of the restaking vault (from Symbiotic, EigenLayer, etc.)
- **Committee ID**: Numeric identifier for the committee (start with 0)
- **Amount**: Maximum stake limit in wei (18 decimal places for ETH)

### Step 5: Configure Task Types

Define the types of tasks your SSN will handle:

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`# Set task type for committee 0
lumos network set-task-type \\
  --output-file /workspace/network_config.json \\
  --committee-id 0 \\
  --task-type 1 \\
  --private-key-name submitter_key \\
  --passphrase-file /workspace/passphrase.txt \\
  --rpc-url "https://sepolia.infura.io/v3/YOUR_PROJECT_ID"

# Set task majority threshold (e.g., 67% = 6700)
lumos network set-task-majority \\
  --output-file /workspace/network_config.json \\
  --committee-id 0 \\
  --task-majority 6700 \\
  --private-key-name submitter_key \\
  --passphrase-file /workspace/passphrase.txt \\
  --rpc-url "https://sepolia.infura.io/v3/YOUR_PROJECT_ID"`}
</div>

**Task Configuration:**

- **Task Type**: Numeric identifier for different task categories
- **Task Majority**: Percentage threshold for task validation (in basis points: 6700 = 67%)

## Phase 3: Operator Management

### Step 6: Register Operators

Operators can register themselves to participate in your network:

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`# Register an operator
lumos network register-operator \\
  --output-file /workspace/network_config.json \\
  --operator-address "0x1234567890123456789012345678901234567890" \\
  --peer-id "12D3KooWGjwvskBvG7GfqCYWDFfr6CvV8y7Z5aPTq5F4sB9nErWX" \\
  --public-key "0x04abc123..." \\
  --private-key-name submitter_key \\
  --passphrase-file /workspace/passphrase.txt \\
  --rpc-url "https://sepolia.infura.io/v3/YOUR_PROJECT_ID"`}
</div>

### Step 7: Add Operators to Committees

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`# Add operator to committee 0
lumos network add-operator \\
  --output-file /workspace/network_config.json \\
  --operator-address "0x1234567890123456789012345678901234567890" \\
  --committee-id 0 \\
  --private-key-name submitter_key \\
  --passphrase-file /workspace/passphrase.txt \\
  --rpc-url "https://sepolia.infura.io/v3/YOUR_PROJECT_ID"`}
</div>

## Phase 4: Development & Deployment

### Step 8: Scaffold Your SSN Project

Generate boilerplate code for your custom SSN logic:

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`lumos scaffold \\
  --SSN-name "MyAwesomeSSN" \\
  --task-names "DataValidation,ComputeProof" \\
  --github-username "your-github-username"`}
</div>

**Scaffold Output:**

- Creates a new project directory with template code
- Generates `execute()` and `verify()` function templates
- Includes Docker configuration and build scripts
- Sets up basic project structure with dependencies

### Step 9: Start Relay Node (Optional)

For local testing and development, start a relay node to facilitate P2P communication:

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`lumos relay \\
  --key-id p2p_key \\
  --http-address 127.0.0.1:3600 \\
  --p2p-tcp-address 127.0.0.1:3500 \\
  --p2p-advertise-private-addresses \\
  --p2p-relay-loglevel debug \\
  --passphrase-file /workspace/passphrase.txt`}
</div>

**Relay Configuration:**

- `--key-id`: P2P key for relay identity
- `--http-address`: HTTP endpoint for relay communication
- `--p2p-tcp-address`: TCP address for P2P networking
- `--p2p-advertise-private-addresses`: Enable for local development
- `--p2p-relay-loglevel`: Logging level for debugging

## Management Commands

### Removing Assets and Operators

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`# Remove a vault from the network
lumos network remove-vault \\
  --output-file /workspace/network_config.json \\
  --vault-address "0x742d35Cc6634C0532925a3b8D3Ac3C3A8D3Ce0C4" \\
  --committee-id 0 \\
  --private-key-name submitter_key \\
  --passphrase-file /workspace/passphrase.txt \\
  --rpc-url "https://sepolia.infura.io/v3/YOUR_PROJECT_ID"

# Remove an operator from the network
lumos network remove-operator \\
  --output-file /workspace/network_config.json \\
  --operator-address "0x1234567890123456789012345678901234567890" \\
  --committee-id 0 \\
  --private-key-name submitter_key \\
  --passphrase-file /workspace/passphrase.txt \\
  --rpc-url "https://sepolia.infura.io/v3/YOUR_PROJECT_ID"`}
</div>

## Security Best Practices

1. **Passphrase Management**: Always use `--passphrase-file` instead of interactive input for automated scripts
2. **Key Storage**: Keep the `~/.catalyst` directory secure and backed up
3. **Private Keys**: Never share private keys or include them in version control
4. **RPC URLs**: Use secure, authenticated RPC endpoints for production deployments
5. **Network Configuration**: Keep your `network_config.json` file secure - it contains critical contract addresses

## Next Steps

After completing this quickstart:

1. **Implement Custom Logic**: Edit the scaffolded code to implement your SSN-specific task execution and verification logic
2. **Testing**: Test your SSN on testnet before mainnet deployment  
3. **Monitoring**: Set up observability and monitoring for your deployed network
4. **Documentation**: Create operator guides and user documentation for your specific SSN

For more detailed information, check out the [Integration Guide](./integration) and [Catalyst SDK Documentation](./catalyst-sdk).

## Troubleshooting

### Common Issues

**Docker Volume Permissions**:

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`# Fix permission issues on Linux/macOS
sudo chown -R \\$USER:\\$USER ~/.catalyst`}
</div>

**Key Not Found**:

<div style={{
  fontFamily: 'Roboto, monospace',
  fontWeight: 'bold',
  backgroundColor: '#f6f8fa',
  border: '1px solid #d1d9e0',
  borderRadius: '6px',
  padding: '16px',
  margin: '16px 0',
  fontSize: '14px',
  lineHeight: '1.45',
  color: '#24292f',
  whiteSpace: 'pre-wrap'
}}>
{`# Verify keys exist
lumos key list
# Check key directory permissions
ls -la ~/.catalyst/keys`}
</div>

**RPC Connection Issues**:

- Verify RPC URL is accessible
- Check network connectivity
- Ensure sufficient ETH for gas fees

**Transaction Failures**:

- Verify private key has sufficient ETH
- Check gas price and limits
- Confirm contract addresses in network config

For additional help, consult the [FAQ section](./faqs) or reach out to the Catalysis community.
