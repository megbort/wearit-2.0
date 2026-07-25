# WearIt v2.0

Welcome to WearIt—an urban clothing retailer concept built with Next.js.

This is the second iteration of the project, initially created during my early days of learning front-end development. In this version, we’re incorporating modern techniques and enhancements based on the original site’s concepts. Expect many ongoing updates and improvements 😊.

Visit the live site at [wearit.megankrenbrink.com](https://wearit.megankrenbrink.com)

Hope you enjoy exploring!

— Megan Krenbrink

<br>

---

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static export)
npm run build

# Start storybook server
npm run storybook
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
Open [http://localhost:6006](http://localhost:6006) to view storybook.

### Environment

The app talks to the [WearIt Backend](../wearit-backend) GraphQL API. Set the
endpoint via an environment variable (create a gitignored `.env.local` for local
overrides):

```bash
# .env.local
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:4000/graphql
```

`NEXT_PUBLIC_*` values are inlined at build/boot time, so restart the dev server
after changing them.

> **Deployment note:** the app is built as a **static export** (`output: 'export'`)
> and the output is copied to the host — there is no Next.js server running at
> runtime (no SSR, ISR, or middleware).

## Tech Stack

- **Next.js** (App Router) with **TypeScript**
- **Tailwind CSS** for styling, with **MUI** for a few components
- **Apollo Client** + **GraphQL** for data fetching and auth
- **Zustand** for global state (cart, auth, notifications)
- **next-intl** for internationalized UI strings and light/dark theming
- **Storybook** for UI development
- **Cloudinary** for cloud-based image storage and delivery

## Project Structure

```
src/
├── app/              # Next.js app directory (routing, pages)
├── components/       # Reusable UI components
│   └── ui/           # UI primitives (Button, Select, etc.)
├── hooks/            # Custom React hooks (useAuth, etc.)
├── i18n/             # next-intl configuration
├── services/         # Apollo client, GraphQL queries, models, and Zustand store
├── stories/          # Storybook stories
├── styles/           # Global and typography styles
├── theme/            # MUI theme configuration
└── utils/            # Utility functions

messages/             # Localized UI strings (en.json)
```

## Backend

This frontend is powered by a Node.js / GraphQL backend built with Apollo Server
and MongoDB — see the [WearIt Backend](../wearit-backend) repo. It handles the
product catalog and user authentication (login, registration, and session refresh
via httpOnly cookies). Point the app at a running backend with
`NEXT_PUBLIC_GRAPHQL_URL` as described above.
