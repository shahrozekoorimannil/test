# Techno Designer Fans & Lights

A premium, production-ready full-stack e-commerce storefront and admin management system tailored for luxury lighting and BLDC fans.

## Features

### Storefront
- **High-Performance UI**: Server-side rendered pages using Next.js 15, optimized with Turbopack and React 19.
- **Dynamic Product Catalog**: Supports variants, dynamic stock checking, and complex filtering.
- **Premium Design**: Apple-inspired aesthetics featuring Tailwind CSS, Framer Motion animations, and custom typography (Playfair Display & Montserrat).
- **Secure Checkout**: Integrated Razorpay payment gateway with automatic inventory reservation.

### Admin Dashboard
- **POS (Point of Sale)**: Dedicated walk-in counter billing interface.
- **CRM System**: Track Customer Lifetime Value (LTV) and order history.
- **Inventory Management**: Track and adjust low-stock variants dynamically.
- **RBAC**: Strict Role-Based Access Control ensuring only verified `ADMIN` users can access management routes.

## Tech Stack
- **Framework**: Next.js 16.2.9 (App Router)
- **Database**: PostgreSQL (Neon)
- **ORM**: Drizzle ORM
- **Auth**: Auth.js v5 (Google OAuth + Credentials)
- **Styling**: Tailwind CSS v4, Shadcn UI
- **State Management**: Zustand
- **Payments**: Razorpay
- **Emails**: Resend + React Email
- **Storage**: Cloudinary

## Installation

1. Clone the repository
2. Run `npm install` (Make sure you use `--legacy-peer-deps` due to framer-motion compatibility)
3. Copy `.env.example` to `.env.local` and populate the keys.
4. Run `npx drizzle-kit push` to synchronize the database schema.
5. Run `npm run dev` to start the development server.

## Scripts
- `npm run dev` - Start dev server
- `npm run build` - Compile for production
- `npm run lint` - Run ESLint checks

## License
Proprietary Software - All Rights Reserved.
