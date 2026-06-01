# Bilim Bulak

A web platform providing psychological support and assessment for school and kindergarten teachers in Kyrgyzstan. Teachers can take psychological/speech therapy tests, access courses (including affirmations and meditation), and manage their professional profiles.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| UI Components | HeroUI v3 |
| State Management | Zustand |
| Server State | TanStack Query v5 |
| Forms | React Hook Form + Zod |
| i18n | next-intl (Kyrgyz / Russian) |
| HTTP | Axios |
| Notifications | Sonner |

## Project Structure

```
src/
├── app/[locale]/          # Next.js App Router pages (locale-prefixed)
│   ├── auth/              # Sign-in, sign-up, OTP, forgot/reset password
│   ├── user/              # Dashboard, courses, tests
│   ├── privacy/           # Privacy policy
│   └── terms/             # Terms of service
├── entities/              # Domain data models, API calls, types, schemas
│   ├── auth/              # Auth flows (sign-in, sign-up, OTP, password reset)
│   └── user/              # Courses, tests, profile, payments
├── features/              # UI-connected business logic (forms, hooks, handlers)
│   ├── auth/              # Auth feature slices
│   └── user/              # Course cards, test runner, profile form, payments
├── widgets/               # Composed page-level sections
│   ├── landing/           # Landing page: intro, steps, welcome
│   ├── layout/            # Header, footer, mobile nav, user layout
│   ├── courses/           # Courses list, course detail, video modal
│   └── tests/             # Tests list
├── shared/                # Reusable utilities, hooks, stores, UI primitives
│   ├── api/               # Axios instance with auth + locale interceptors
│   ├── stores/            # Zustand stores (auth, OTP)
│   ├── lib/               # Hooks, helpers, constants
│   └── ui/                # Generic UI components
├── i18n/                  # next-intl routing and request config
└── messages/              # Translation files (kg.json, ru.json)
```

The architecture follows **Feature-Sliced Design (FSD)**: `entities → features → widgets → app`.

## Getting Started

### Prerequisites

- Node.js 24 (see [.nvmrc](.nvmrc))
- npm

```bash
nvm use   # switches to Node 24 via .nvmrc
```

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=https://your-api-host.com/api
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app redirects to the default locale (`/kg/`).

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Internationalization

The app supports two locales:

- `kg` — Kyrgyz (default)
- `ru` — Russian

All routes are prefixed with the locale: `/kg/`, `/ru/`. Translation files live in [src/messages/](src/messages/).

## Authentication Flow

1. **Sign-up step 1** — personal info (phone, name, password)
2. **Sign-up step 2** — professional info (region, organization, position)
3. **OTP verification** — 6-digit code sent to phone, with a persistent countdown
4. **Sign-in** — phone + password → JWT stored in Zustand auth store
5. **Forgot password** → OTP → new password

Unauthenticated users are redirected to `/auth/sign-in` on 401 responses (except the login endpoint itself).

## Key Features

- **Tests** — timed psychological/speech therapy assessments with confirm and complete flows
- **Courses** — video-based courses with YouTube thumbnails; includes affirmations and meditation sections
- **Profile** — editable professional profile with region/district/organization cascading selects
- **Payments** — course access gated by payment status
- **Locale-aware API** — certain endpoints automatically receive a language prefix based on the active locale
