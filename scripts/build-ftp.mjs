// Builds the site as plain files in out/ for FTP hosting (upload the contents of out/).
// The /api route needs a Node server, so it is moved aside for this build only.
import { execSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";

const api = "src/app/api";
const parked = "scripts/.api-parked";
const moved = existsSync(api);
if (moved) renameSync(api, parked);
try {
  execSync("next build", { stdio: "inherit", env: { ...process.env, STATIC_EXPORT: "1" } });
} finally {
  if (moved) renameSync(parked, api);
}
