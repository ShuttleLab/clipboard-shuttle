# Clipboard Shuttle

Sync clipboard content across phones, computers, and other devices using a shared **code**. After entering the same code on each device, text sent from one side appears on the others. On desktop you can show a QR code; on mobile you can scan to join without typing the code.

## Local development

### 1. Install dependencies

```bash
npm install
```

### 2. Initialize local D1 and create tables

Local development uses Miniflare’s simulated D1 (injected by `next dev` via `wrangler.toml`). Run the schema first:

```bash
# Optional: create a local DB if you don’t have one yet
# npx wrangler d1 create clipboard-d1-local

# Run schema (local)
npm run d1:migrate:local
```

If you see an error that the database doesn’t exist, run in the project directory:

```bash
npx wrangler d1 create clipboard-d1-local
```

Then put the new `database_id` from the output into `database_id` under `[[d1_databases]]` in `wrangler.toml`. You can also keep the placeholder UUID for local dev and rely on `database_name` only.

### 3. Start the dev server

```bash
npm run dev
```

Open http://localhost:3000 and enter a code of at least 4 letters or numbers (e.g. `12ab`).

## License

Licensed under the GNU Affero General Public License v3.0 — see [LICENSE](./LICENSE).

Free to use, modify, and self-host. If you run a modified version as a network service, you must open-source your modifications (AGPL §13). For commercial licensing without copyleft obligations, contact support@shuttlelab.org.
