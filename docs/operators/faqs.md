---
sidebar_position: 4
---

# FAQs for Node Operators

1. **What are the prerequisites for a node operator to join the Catalysis Network?**

There are no prerequisites. If you’re already running a node for a network/AVS on any restaking protocol (EigenLayer, Jito, SatLayer, etc.), you’re automatically part of the Catalysis Network.

2. **What are the main responsibilities of a node operator in the Catalysis Abstraction layer?**

You need to run a couple of commands to register your node with the Catalysis Network. And then you just run your node as you normally would. Except, now you'll be running the Catalysis-Powered AVS node software.

Register your node with the Catalysis Network using a few simple commands, and then continue operating it as usual. Catalysis seamlessly integrates AVS security, **so you only need to run the AVS node software once, regardless of how many restaking protocols the AVS spans**. No additional infrastructure overhead.

3. **Say an AVS exists on Eigenlayer (Ethereum) + Satlayer (Babylon). As a NO, do we need to partner with Eigenlayer and Satlayer to be able to participate?**

No, you don’t need to partner with any restaking protocol directly. However, you do need to partner with LRTs/Vault curators to get delegations on Eigenlayer and Satlayer. Catalysis abstracts these integrations, allowing you to run AVSs across multiple restaking protocols without individual agreements.

4. **Does a node operator participate at two levels - both the shared security protocol (SSP) layer and the abstraction layer?**

No, you only participate at one level: the Catalysis Abstraction Layer. You run one node per AVS. And Catalysis seamlessly manages security delegation across multiple SSPs.

5. **If a node operator wants to run an AVS on a new Shared Security Protocol (SSP), do they need stake in that SSP?**

Yes, node operators must have economic security delegation on the SSP to participate. For example, if you want to run an AVS on Symbiotic, you need delegated security from Symbiotic vaults.

6. **How are rewards distributed to node operators?**

Rewards are distributed directly by the SSPs. If you’re running a Catalysis-Powered AVS (say $100M) secured by EigenLayer ($50M) + Symbiotic ($50M), you’ll receive separate payouts from both EigenLayer and Symbiotic based on your stake and participation.
