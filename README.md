# LXXI Limited — Website

The public website for LXXI Limited, an African alternative investments firm.
Built with Next.js 16 (App Router, Turbopack), Tailwind CSS v4, SQLite
(Drizzle ORM), and Auth.js (NextAuth).

## Getting started

Uses [Bun](https://bun.sh) — the same runtime CI and the VPS deploy pipeline
use, so `bun.lock` stays the single source of truth for dependency versions.

```bash
bun install
cp .env.example .env.local   # fill in the values — see below
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
bun run build   # production build
bun run start   # serve a production build locally (port 3005)
bun run lint    # eslint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill it in.

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Path to the local SQLite file. Defaults to `./data/lxxi.db` if unset |
| `ZEPTOMAIL_TOKEN` | ZeptoMail API token — must include the `Zoho-enczapikey ` prefix |
| `ZEPTOMAIL_URL` | ZeptoMail API host, e.g. `api.zeptomail.com/` |
| `MAIL_FROM` | Sending address (domain must be verified in ZeptoMail) |
| `MAIL_FROM_NAME` | Sending display name |
| `MAIL_NOTIFY_TO` | Internal recipient(s) for contact/inquiry notifications — a single address or a comma-separated list |
| `AUTH_SECRET` | Auth.js session secret — generate with `npx auth secret` |

`getDb()` (`src/db/index.ts`) connects lazily, only inside route handlers —
never at module top-level — so `bun run build` succeeds even with no
environment configured. It's a real on-disk SQLite file (never `:memory:`),
created automatically on first access, with any pending migrations under
`drizzle/` applied at the same time.

### Database (Drizzle ORM + SQLite)

Schema lives in `src/db/schema.ts`. After changing it:

```bash
bun run db:generate   # writes a new SQL migration under drizzle/
```

Commit the generated migration file — it's applied automatically the next
time `getDb()` runs (including in production), no manual migration step
needed on deploy. `bun run db:studio` opens Drizzle Studio, a local GUI for
browsing the database.

The database file (`data/lxxi.db` by default) is gitignored and lives outside
version control. Because the CI/CD deploy pulls new code with `git reset
--hard`, which never touches untracked files, the database persists across
deploys without any special handling.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`:

1. **`verify`** job — installs (`bun install --frozen-lockfile`), lints, and
   builds on a GitHub-hosted runner via [`oven-sh/setup-bun`](https://github.com/oven-sh/setup-bun).
   If this fails, the VPS is never touched.
2. **`deploy`** job — SSHes into the VPS and runs the deploy script inlined
   directly in `deploy.yml`'s `script:` block (no separate file — since it's
   sent over the SSH session rather than living inside the app's own git
   working directory, it's never at risk of being rewritten mid-run by the
   `git reset --hard` it performs). It backs up the currently-live build and
   `bun.lock`/`bun.lockb`, pulls the new code, runs `bun install
   --frozen-lockfile`, lints, and builds again — and **automatically rolls
   back to the previous commit and restarts pm2 on it** if any of those
   steps, or a post-restart health check, fails. A failed deploy always
   leaves production on the last known-good version.

The VPS runs the app under Bun (matching local dev and CI) — `pm2 restart`
just restarts whatever process pm2 was already configured to run there.

Required GitHub repo configuration (Settings → Secrets and variables →
Actions):

- **Secrets**: `VPS_HOST`, `VPS_USERNAME`, `VPS_SSH_KEY`, `VPS_PORT`
- **Variables**: `VPS_APP_DIR`, `VPS_PM2_ID`, `VPS_HEALTH_URL` (defaults to
  `http://127.0.0.1:3005`, matching the `start` script's port)

One-time setup on the VPS itself, before the first deploy:

```bash
git clone <repo-url> <VPS_APP_DIR>
cd <VPS_APP_DIR>
cp .env.example .env.local   # fill in production values
bun install --frozen-lockfile
bun run build
pm2 start "bun run start" --name lxxi
pm2 save
```

Note the `pm2 id` or process `--name` used — that's the value for
`VPS_PM2_ID`.

See `.github/workflows/deploy.yml` for the full rollback logic.

## Tech stack

- [Next.js 16](https://nextjs.org/docs) (App Router, Turbopack, `next/font`)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [SQLite](https://www.sqlite.org/) via [Drizzle ORM](https://orm.drizzle.team/) and [@libsql/client](https://github.com/tursodatabase/libsql-client-ts)
- [Auth.js (NextAuth)](https://authjs.dev/) — credentials-based session auth
- [ZeptoMail](https://www.zoho.com/zeptomail/) for transactional email
- TypeScript throughout; ESLint via `eslint-config-next`
