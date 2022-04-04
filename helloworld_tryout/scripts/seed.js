const path = require("path");
const util = require("util");
const fse = require("fs-extra");
const unzip = require("unzip-stream");
const crypto = require("crypto");
const uuid = require("uuid-v4");

const zipPath = path.resolve("data.zip");
const dataPath = path.resolve("data");
const uploadDataPath = path.join(dataPath, "uploads");

const uploadPath = path.join("public", "uploads");
const tmpPath = path.resolve(".tmp");

const dotEnv = path.resolve(".env");

const sqlite = require("sqlite3").verbose();

async function dumpSqlite() {
  const db = new sqlite.Database(".tmp/data.db");
  const sql = fse.readFileSync("./data/dump.sql").toString();

  await util.promisify(db.exec).bind(db)(sql);
  await util.promisify(db.close).bind(db);
}

async function updateUid() {
  const filePath = `./package.json`;

  try {
    if (fse.existsSync(filePath)) {
      const rawFile = fse.readFileSync(filePath);
      const packageJSON = JSON.parse(rawFile);

      if (packageJSON.strapi.uuid.includes("FOODADVISOR")) return null;

      packageJSON.strapi.uuid =
        `FOODADVISOR-${
          process.env.GITPOD_WORKSPACE_URL ? "GITPOD-" : "LOCAL-"
        }` + uuid();

      const data = JSON.stringify(packageJSON, null, 2);
      fse.writeFileSync(filePath, data);
    }
  } catch (e) {
    console.error(e);
  }
}

async function seed() {}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
