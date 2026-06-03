# NexCart - Premium E-Commerce Platform

NexCart is a state-of-the-art e-commerce storefront web application built on **Next.js (v16)** and **TailwindCSS (v4)**. It delivers a high-fidelity, interactive, and responsive shopping experience featuring local storage state synchronization, custom animations, and comprehensive user account management.

---

## 🌟 Key Features

### 🔒 User Authentication & Security Flow
- **Mandatory Login Gate**: Restricts shopping activities (Checkout, Wishlisting, Order tracking, Cart viewing, and Account directories) to authenticated users.
- **Combined Auth Portal**: A single tabbed route (`/auth`) supporting registration or login with full visual feedback, eye-toggle passwords, and automatic redirection.
- **Global Auth Modal**: Informative modal prompts that appear when guest users click "Add to Cart" or "Buy Now" on home pages, category lists, or product cards.

### 👤 Customer Account Dashboard (`/account`)
- **Profile Overview**: View account details (Avatar, verified flags, member since indicators) and edit profile parameters.
- **Address Book**: Add, edit, or delete multiple delivery locations with support for Indian cities and default delivery check boxes.
- **Coupons & Rewards**: Tracks reward points balance and available discount codes with one-click copy buttons.
- **Linked Payments**: Save and manage credit cards and UPI handles securely.

### 🛒 Cart & Checkout Timeline
- **Interactive Slide Drawer**: Interactive cart slide drawer with full quantity control and automatic coupon application.
- **Live Order Tracking Timelines**: Visual order stepper mapping state nodes (`Pending` ➔ `Confirmed` ➔ `Packed` ➔ `Shipped` ➔ `Out for Delivery` ➔ `Delivered`) on the `/orders` page.

### ⚡ Product Details Explorer
- **Gallery Carousel**: Image select indicator carousel and dot navigations.
- **Delivery Checkers**: Dynamic pincode validator checking support for Cash on Delivery and estimating shipping days.
- **Bundle Sales**: Frequently Bought Together boxes allowing multi-product checkouts in a single click.

---

## 🛠️ Getting Started

### 1. Installation
Install the project dependencies:
```bash
npm install
```

### 2. Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) on your browser to view the application.

### 3. Production Build
Compile and verify the TypeScript build output:
```bash
npm run build
```
