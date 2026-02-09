Proptech Dashboard - Expert Listing
A modern, production-ready dashboard application built with Next.js 16, TypeScript, Tailwind CSS, and Zustand. This project demonstrates senior frontend engineering practices with clean architecture, separation of concerns, and pixel-perfect design implementation.

🚀 Live Demo
[Add your deployed link here]

📋 Features
✅ Implemented
Modern Tech Stack: Next.js 16 (App Router), TypeScript, Tailwind CSS v3, Zustand

Clean Architecture: Feature-based organization with clear separation of concerns

Design System: Custom color palette, typography, and component library

Responsive Design: Fully responsive layout for all screen sizes

Interactive Components:

Sales overview with interactive chart (3 bars per month)

Listings and Users overview cards with metrics

Property carousel with image slides

Calendar modal with date selection

Budgeting modal with feature list

User menu with profile information

State Management: Predictable state with Zustand stores

Type Safety: Strict TypeScript with no any types

Performance: Optimized components, code splitting, and lazy loading

📊 Dashboard Components
Sales Overview

Interactive chart with 3 bars per month (Jan-Sep)

Time range selector (Week/Month/Year)

Key metrics: Total Inflow, MRR, Commission Revenue, GMV

Trend indicators with percentages

Listings Overview

Total, Active, and Archived listings

Compact number formatting (k/M)

Icon integration with custom colors

Users Overview

Total users, Riders, and Subscribers

Consistent design with listings overview

Custom arrow icons for navigation

Property Carousel

Three property slides with images

Individual slider controls per card

Navigation dots for each slide

🎨 Design Implementation
Colors: Exact hex codes from Figma design

Typography: Proper font sizes and weights

Spacing: Consistent spacing system

Icons: Custom SVG icons with proper sizing

Interactions: Hover states, tooltips, and animations

🏗️ Project Structure

proptech-dashboard/
├── app/                          # Next.js 16 App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page (redirects to dashboard)
│   ├── globals.css              # Global styles
│   └── dashboard/               # Dashboard route
│       ├── layout.tsx           # Dashboard layout
│       └── page.tsx             # Dashboard page
├── components/                   # Reusable components
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx          # Main header with navigation
│   │   ├── Sidebar.tsx         # Dashboard sidebar
│   │   ├── UserMenu.tsx        # User menu with tooltip
│   │   └── UserMenuModal.tsx   # User menu modal
│   └── ui/                      # UI primitives
│       ├── Card.tsx            # Card component
│       ├── Tooltip.tsx         # Tooltip component
│       ├── ArrowIcon.tsx       # Custom arrow icon
│       ├── CalendarModal.tsx   # Calendar modal
│       ├── BudgetingModal.tsx  # Budgeting modal
│       ├── PropertyCarousel.tsx # Property carousel
│       └── LoadingSpinner.tsx  # Loading spinner
├── features/                    # Feature-based modules
│   └── dashboard/              # Dashboard feature
│       ├── components/         # Feature components
│       │   ├── sales-overview/ # Sales overview components
│       │   ├── listings-overview/
│       │   └── users-overview/
│       ├── hooks/              # Custom hooks
│       │   └── useDashboardMetrics.ts
│       ├── store/              # Feature store
│       │   └── dashboard.store.ts
│       └── types/              # Feature types
│           └── dashboard.types.ts
├── lib/                        # Utilities and helpers
│   ├── formatters/             # Formatting utilities
│   │   └── currency.ts         # Currency formatting
│   └── mock/                   # Mock data
│       └── dashboard.data.ts   # Dashboard mock data
├── store/                      # Global stores
│   └── ui.store.ts             # UI state management
├── types/                      # Global type definitions
│   └── common.ts               # Common TypeScript types
├── public/                     # Static assets
│   └── img/                    # Images
│       ├── slider1.png          # Carousel image 1
│       └── slider2.png          # Carousel image 2
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies

 Technical Decisions
Architecture
Feature-based Organization: Components grouped by feature for better maintainability

Presentational/Container Pattern: Clear separation between UI and logic

Custom Hooks: Reusable logic extraction for data fetching and state management

Type Safety: Comprehensive TypeScript types with strict configuration

State Management
Zustand: Lightweight state management with minimal boilerplate

Feature Stores: Separate stores for different concerns (UI, Dashboard)

Selectors: Optimized re-renders with Zustand selectors

Styling
Tailwind CSS: Utility-first CSS framework with custom configuration

Design Tokens: Consistent color palette and spacing in config

Responsive Utilities: Mobile-first responsive design

Custom Animations: Smooth transitions and animations

Performance
Code Splitting: Automatic code splitting by Next.js App Router

Image Optimization: Next.js Image component for optimized images

Lazy Loading: Component and image lazy loading

Memoization: React.memo for expensive components

📦 Installation & Setup
Prerequisites
Node.js 18+ and npm/yarn

Installation Steps
Clone the repository

git clone <repository-url>
cd proptech-dashboard

Install dependencies

npm install
# or
yarn install

Set up environment variables

# Create .env.local file in root directory
# Add any required environment variables

Run development server

npm run dev
# or
yarn dev

Open in browser

http://localhost:3000

Build for Production

npm run build
npm start

🔧 Configuration
Tailwind CSS
The project uses a custom Tailwind configuration with:

Extended color palette matching Figma design

Custom spacing for specific design requirements

Animation keyframes for interactive elements

Plugin-free approach for simplicity

TypeScript
Strict mode enabled

No any types allowed

Path aliases for clean imports

Comprehensive type definitions

Next.js
App Router for modern routing

Server Components by default

Optimized builds and image handling

Type-safe routing

📁 Key Files Explained
app/dashboard/page.tsx
Main dashboard page that orchestrates all dashboard components with proper layout and state management.

components/ui/Card.tsx
Reusable card component with configurable headers, backgrounds, and borders.

features/dashboard/hooks/useDashboardMetrics.ts
Custom hook for fetching and managing dashboard metrics with loading and error states.

lib/formatters/currency.ts
Currency formatting utility with support for Nigerian Naira (₦) and compact notation.

store/ui.store.ts
Global UI state management for modals, tooltips, and other UI interactions.

🎯 Development Guidelines
Component Structure
Each component has a single responsibility

Presentational components are separate from container components

Custom hooks for business logic

Proper TypeScript interfaces for all props

Styling Convention
Use Tailwind utility classes

Extract repeated patterns to component classes

Follow design system tokens

Responsive design with mobile-first approach

State Management
Use Zustand for global state

Keep state as close to where it's used as possible

Use selectors for derived state

Implement proper loading and error states

TypeScript Best Practices
No any types

Comprehensive interface definitions

Type safety for API responses

Proper null/undefined handling

🚀 Deployment
Vercel (Recommended)
Push code to GitHub/GitLab/Bitbucket

Import project in Vercel

Configure environment variables

Deploy with automatic CI/CD

Netlify
Build command: npm run build

Publish directory: .next

Configure redirects for SPA routing

Self-Hosting
Build the application: npm run build

Start production server: npm start

Configure reverse proxy (Nginx/Apache)