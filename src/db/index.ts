import { createClient } from '@libsql/client';
import { drizzle, type LibSQLDatabase } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import * as schema from './schema';

// A real on-disk SQLite file — never ":memory:" — so data survives restarts
// and deploys. Defaults to ./data/lxxi.db; override with DATABASE_URL for a
// different location (e.g. an absolute path on the VPS).
const DB_PATH = process.env.DATABASE_URL || './data/lxxi.db';
const MIGRATIONS_FOLDER = resolve(process.cwd(), 'drizzle');

type Db = LibSQLDatabase<typeof schema>;

declare global {
    var _drizzleDb: Db | undefined;
}

/**
 * Lazily opens the local SQLite file (creating it and running any pending
 * migrations on first access) and caches the client across hot-reloads.
 * Call this inside route handlers — never at module top-level — so
 * `next build` never touches the filesystem.
 *
 * Uses @libsql/client (ships prebuilt native binaries — no node-gyp compile
 * step) rather than bun:sqlite: Next.js loads route modules inside a plain
 * Node.js worker for both `next build`'s page-data collection and the actual
 * `next dev`/`next start` server process itself, even when the surrounding
 * script is run via `bun run` — so a Bun-only builtin is never reliably
 * resolvable there.
 */
export async function getDb(): Promise<Db> {
    if (global._drizzleDb) return global._drizzleDb;

    mkdirSync(dirname(resolve(/* turbopackIgnore: true */ DB_PATH)), { recursive: true });
    const client = createClient({ url: `file:${DB_PATH}` });

    const db = drizzle(client, { schema });
    await migrate(db, { migrationsFolder: MIGRATIONS_FOLDER });

    global._drizzleDb = db;
    return db;
}
