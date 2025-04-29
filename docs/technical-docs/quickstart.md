---
sidebar_position: 1
title : Quickstart
---
:::caution
This documentation is under active development. Some features may change as we continue to improve the framework.
:::

# Quickstart

:::caution
We are working to open-source Lumos-cli. Meanwhile, if you want access, please submit [this form](https://forms.gle/cNgW92WARAw5Awjx6).
:::

## Step 1: Register a New Network/AVS

Register your network and get the relevant contract addresses in the Catalysis network:

```bash
lumos network register --name <network-name> --address <network-address>
```

## Step 2: Configure Assets for a Network/AVS

Next, configure assets for your network to establish economic security for your network:

```bash
lumos network configure-assets --name <network-name> --asset-address <asset-address> --asset-value <asset-value>
```

## Step 3: Scaffold a New Network/AVS Project

Finally, scaffold your new AVS project with the desired tasks:

```bash
lumos scaffold --network-name <network-name> --task-names <task-name1>,<task-name2>
```

### Example:

```bash
lumos scaffold --avs-name Test --task-names Sqrt,Squaring
```

## Step 4: Project Structure and Implementation

After scaffolding, you'll get a project with the following directory and file structure:

```
Test-avs/
├── avs/
│   ├── app.go
│   ├── custom_options.go
│   ├── handler.go
│   ├── module.go
│   ├── service.go
│   └── types.go
├── cmd/
│   └── cmd.go
├── main.go
├── go.mod
└── README.md

```

### Implementation Steps

1. Implement the following functions in `service.go`:
   - `Execute`
   - `Verify`

2. Implement in `handler.go`:
   - `MakeSqrtRequest`
   - `handleSqrtRequest`

3. Update data types in `types.go`:
   - `SqrtResponse`
   - `SqrtRequest`

### Next Steps

After implementing the required functions and updating the data types:

1. Update the config file with the contract addresses obtained from Step 1
2. Follow the build instructions in the project's `README.md`
3. Run your AVS using the commands specified in the documentation
4. Test the functionality by submitting sample requests

For troubleshooting and additional configuration options, refer to the full documentation.
