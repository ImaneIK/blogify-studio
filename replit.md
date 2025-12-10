# Blogify - Blog Platform

## Overview
Blogify is a blog platform built with React, TypeScript, and Vite. It features a public-facing blog with articles, categories, and about pages, as well as a dashboard for content management.

## Project Structure
- `src/` - Main source code
  - `components/` - React components
    - `ui/` - Shadcn UI components
    - `blog/` - Blog-specific components (navbar, footer, article cards)
    - `dashboard/` - Dashboard layout and sidebar
  - `pages/` - Route pages (Index, ArticlePage, Dashboard, etc.)
  - `data/` - Mock data for articles
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions
- `public/` - Static assets

## Tech Stack
- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Shadcn UI components
- React Router for routing
- TanStack Query for data fetching
- React Hook Form + Zod for forms

## Running the Project
The application runs on port 5000 using `npm run dev`.

## Routes
### Public Routes
- `/` - Homepage with featured and latest articles
- `/article/:id` - Individual article page
- `/categories` - Browse by categories
- `/about` - About page
- `/auth` - Authentication page

### Dashboard Routes
- `/dashboard` - Main dashboard
- `/dashboard/articles` - Manage articles
- `/dashboard/create` - Create new article
- `/dashboard/assets` - Manage assets
- `/dashboard/settings` - Settings

## Recent Changes
- December 10, 2025: Imported from Lovable to Replit environment
  - Updated Vite config to run on port 5000
  - Configured allowedHosts for Replit proxy
  - Removed lovable-tagger dependency
