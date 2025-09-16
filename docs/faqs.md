---
sidebar_position: 2
---

# FAQs

## **1. Do CoverPools hold capital?**

No. CoverPools are "boxes" of delegated capacity from restakers. Capital isn't moved from restaking protocols.

Delegators commit slashable capacity (e.g., "$10m to this pool") that can be tapped if a covered event occurs. That capacity stays staked with the underlying restaking protocol but can be slashed and redirected **if a covered event occurs**.

In the early stages, the first CoverPools will be **centrally managed by the Catalysis core team** to bootstrap adoption. Over time, **qualified curators** will be able to spin up and operate their own CoverPools independently.

## **2. Who underwrites the risks?**

Risk is underwritten by specialized entities called **CoverPool Curators**.

- **At launch:** Catalysis itself will serve as the initial curator, running the first CoverPools. These early CoverPools will be underwritten in collaboration with **neutral actuaries** and **independent third-party assessors** to ensure credibility and robustness.
- **Over time:** Underwriting will shift to a **permissionless model**, where any qualified curator—fund managers, risk DAOs, insurance specialists or other domain experts—can spin up and operate their own CoverPools.

## **3. What risks can be covered with Catalysis?**

In principle, **any risk with a CoverPool** can be underwritten. The **initial focus** is on coverage for **institutional entities and DeFi protocols**, particularly around:

- Institutional financial losses (e.g., strategy underperformance, borrower defaults, third-party failures)
- Market infrastructure risks in lending, stablecoins, and RWA credit

At launch, Catalysis will **not** cover direct smart contract exploits, though this could be reconsidered in the future as the ecosystem matures.

## **4. Why CoverPool architecture?**

The **CoverPool architecture** isolates risk into dedicated pools. Each CoverPool has its own rules, scope and capacity, so losses in one pool don't spill over into another.

This design mirrors how **traditional insurance syndicates** work (e.g., [Lloyd's of London](https://www.lloyds.com/)), where multiple underwriters each take a slice of a policy. Similarly, in Catalysis, **multiple CoverPools can underwrite a single policy**, distributing risk and creating a resilient, modular marketplace for risk coverage.

## **5. Are Coverage Payouts instant?**

In most cases, payouts are **near-instant** once a claim is triggered, since assets are onchain and execution is programmable. For **larger covers**, there may be a short delay, usually **hours to a few days**, to allow for dispute windows or claim checks.

Unlike traditional coverage, there is **no long manual process** that takes weeks or months. Claims are settled directly and transparently onchain.
