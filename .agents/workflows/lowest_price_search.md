---
description: Daily Batch Update Workflow for Lowest Price Search
---

# // turbo-all
# Daily Batch Update: Lowest Price Search and Link Integration

This workflow ensures that the Elite Mall's 20+ curated products are updated **once a day** with the actual current lowest price available on major Korean shopping platforms (Naver Shopping, Coupang, 11st, etc.). This ensures high reliability and a stable user experience during the early stage of server operation.

## Prerequisites
- Existing product catalog in `lib/products.ts`.
- Daily execution schedule (e.g., 09:00 AM KST).
- `search_web` tool availability.

## Step-by-Step Execution

1. **Perform Multi-Platform Search**
   - Use `search_web` with the query `[Product Name] 최저가`.
   - Identify the primary platforms: Naver Smart Store, Coupang, 11st, Gmarket, Auction.

2. **Verify Lowest Current Price**
   - Compare the prices found across the top 3-5 results.
   - Note the platform and the precise price (including shipping if possible).

3. **Extract Direct Purchase URLs**
   - Ensure the `purchaseUrl` in the product data points to the specific product detail page of the cheapest mall.
   - Always prefer official smart stores or large platform links (Musinsa, Coupang, Kakao) as they are more reliable for AdSense/Affiliate purposes.

4. **Update `lib/products.ts`**
   - Update `price` (removing "₩" prefix as it is added in the UI).
   - Update `purchaseUrl`.
   - Update `malls` array with the latest comparison data (at least 2-3 malls).

5. **Aesthetics Sync**
   - Ensure the `tag` reflects the new status if applicable (e.g., '최저가 보장', '가성비 1위').

## CRITICAL RULE
**NEVER use placeholder URLs (like # or generic homepages) for the `purchaseUrl` if a real one can be found via search. The goal is direct conversion.**
