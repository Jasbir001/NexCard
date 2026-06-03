# Developer Documentation & Architecture Guide

Welcome to the NexCart developer documentation. This document describes the application architecture, directory structure, global state context, routing guards, and styling conventions.

---

## 📂 Directory Layout

The codebase follows the Next.js App Router structure combined with a separate `src` folder for shared reusable components, contexts, and layouts:

```
frontend/
├── app/                      # Next.js App Router Pages
│   ├── account/              # User Dashboard pages
│   ├── auth/                 # Tabbed login & register forms
│   ├── cart/                 # Invoice & checkout page
│   ├── categories/           # Category catalog lists
│   ├── orders/               # Timeline order tracker page
│   ├── products/             # Details, bundles, & reviews page
│   ├── layout.tsx            # Global layout root
│   └── page.tsx              # Index home landing view
│
├── src/                      # Source core elements
│   ├── components/           # UI pieces (Navbar, Hero, Footer, Drawer)
│   ├── context/              # StoreContext and ThemeContext
│   ├── layouts/              # MainLayout wrapper
│   └── views/                # Full view page files
```

---

## ⚡ Global State Management

Global state is controlled using React Context APIs defined inside `src/context/StoreContext.tsx`.

### 1. `StoreProvider` State Model
The context handles:
- **Product catalog**: List of active products with details, specs, and user reviews.
- **Shopping Cart**: Standard array of items (`product`, `quantity`) synced with `localStorage`.
- **Wishlist**: Array of products bookmarked by the user.
- **User Profile**: Contains name, email, phone number, avatar image, and registration metadata.
- **Saved Payments & Addresses**: Relational address logs and linked wallets/UPI structures.
- **Authentication State**:
  - `isLoggedIn`: Boolean synced to local storage flag `nexcart-logged-in`.
  - `isAuthModalOpen`: Triggers the global login alert window from anywhere in the application.

### 2. Actions & Context Methods
- `loginUserAction(emailOrPhone, password)`: Updates state, initializes default addresses, and writes login status.
- `registerUserAction(name, phone, email, password)`: Creates profiles and switches state to logged-in.
- `logoutUser()`: Resets authentication flags, clears cart list, and removes addresses.
- `addToCart(product, quantity)`: Appends products and pops open the side Cart Drawer automatically.

---

## 🔒 Route Gating & Guards

Protected pages inspect `isLoggedIn` flags on mount and redirect unauthorized users to the `/auth` page:

1. **Dashboard Redirects**:
   - `/account`, `/orders`, `/wishlist`, and `/cart` pages execute a client-side check.
   - Example:
     ```tsx
     useEffect(() => {
       const savedLoggedIn = localStorage.getItem('nexcart-logged-in');
       const checkedLoggedIn = savedLoggedIn ? JSON.parse(savedLoggedIn) : false;
       if (!checkedLoggedIn) {
         router.push('/auth?redirect=/target-page');
       }
     }, [isLoggedIn]);
     ```

2. **Actions Guarding**:
   - Homepage lists (`FeaturedProducts`, `BestSellers`) and details components guard interactive buttons.
   - Clicking "Add to Cart", "Buy Now", or "Wishlist" triggers `setAuthModalOpen(true)` if `isLoggedIn === false`.
