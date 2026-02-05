# React TanStack Ecosystem Lab

A hands-on lab for building a React app using the TanStack ecosystem from scratch.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **TanStack Router** - File-based routing
- **TanStack Query** - Server state management
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Setup

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── api/                    # API functions
│   ├── pizzas.ts          # fetchPizzas
│   ├── orders.ts          # submitOrder
│   ├── user.ts            # fetchUser, updateUser
│   └── index.ts
├── features/
│   ├── home/              # Home page feature
│   │   ├── components/    # PizzaMenu, Cart, OrderConfirmation
│   │   ├── hooks/         # usePizzaMenuQuery, useOrderUpdate, useCart
│   │   └── index.tsx
│   ├── profile/           # Profile page feature
│   │   ├── components/    # ProfileForm
│   │   ├── hooks/         # useUserQuery, useUserUpdate
│   │   └── index.tsx
│   └── about/
├── routes/                # TanStack Router file-based routes
│   ├── __root.tsx
│   ├── index.tsx
│   ├── about.tsx
│   └── profile.lazy.tsx
├── shared/                # Shared components (Header, Footer)
└── main.tsx              # App entry with QueryClientProvider
```

## Features

### TanStack Router
- File-based routing in `src/routes/`
- Lazy loading support (`profile.lazy.tsx`)
- Type-safe navigation

### TanStack Query
- **Queries**: `usePizzaMenuQuery`, `useUserQuery`
- **Mutations**: `useOrderUpdate`, `useUserUpdate`
- Automatic caching and background refetching
- Optimistic updates with cache invalidation

## Learning Goals

1. Set up TanStack Router with file-based routing
2. Implement data fetching with TanStack Query
3. Handle mutations and cache updates
4. Organize code by feature (colocation)
5. Separate API layer from UI layer
