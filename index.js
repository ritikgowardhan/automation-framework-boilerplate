#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

const root = process.cwd();

console.log("🚀 Setting up TestForge Automation Framework...");

try {

// Copy the full src framework (includes configs, page-objects, tests, utils)
fs.copySync(
path.join(__dirname, "src"),
path.join(root, "src"),
{ overwrite: false }
);

// Copy scripts folder if present
if (fs.existsSync(path.join(__dirname, "scripts"))) {
fs.copySync(
path.join(__dirname, "scripts"),
path.join(root, "scripts"),
{ overwrite: false }
);
}

// Create artifacts folders
fs.ensureDirSync(path.join(root, "artifacts/screenshots"));
fs.ensureDirSync(path.join(root, "artifacts/reports"));

console.log("✅ TestForge framework installed successfully!");

} catch (err) {
console.error("❌ Error setting up framework:", err);
}
