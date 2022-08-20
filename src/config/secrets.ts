import dotenv from "dotenv";
import fs from "fs"

if (fs.existsSync(".env.test")) {
  console.debug("Using .env.test file to supply config environment variables");
  dotenv.config({ path: ".env.test" });
} else if (fs.existsSync(".env.development")) {
  console.debug("Using .env.development file to supply config environment variables");
  dotenv.config({ path: ".env.development" });
} else if (fs.existsSync(".env.production")) {
  console.debug("Using .env.production file to supply config environment variables");
  dotenv.config({ path: ".env.production" });
} else {
  console.debug("Using .env file to supply config environment variables");
  dotenv.config({ path: ".env" });
}

export const ENVIRONMENT = process.env.NODE_ENV;
export const DB_USER = process.env.DB_USER
export const DB_PASS = process.env.DB_PASS
export const DB_NAME = process.env.DB_NAME
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT

if (!DB_USER) {
  console.log("Set DB_USER environment variable.");
  process.exit(1);
}

if (!DB_PASS) {
  console.log("Set DB_PASS environment variable.");
  process.exit(1);
}

if (!DB_NAME) {
  console.log("Set DB_NAME environment variable.");
  process.exit(1);
}

if (!DB_HOST) {
  console.log("Set DB_HOST environment variable.");
  process.exit(1);
}

if (!DB_PORT) {
  console.log("Set DB_PORT environment variable.");
  process.exit(1);
}