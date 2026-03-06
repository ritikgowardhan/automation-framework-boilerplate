#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");
const readline = require("readline");

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

async function init() {
  console.log("Welcome to TestForge - Automation Framework Starter");

  const answer = await askQuestion("Do you want to include sample page & test files? (y/n): ");
  const withSamples = answer.trim().toLowerCase().startsWith("y");

  const targetDir = process.cwd();

  // Always copy helpers
  fs.copySync(path.join(__dirname, "helpers"), path.join(targetDir, "helpers"), { overwrite: true });

  // Copy generic folders
  fs.copySync(path.join(__dirname, "configs"), path.join(targetDir, "configs"), { overwrite: true });
  fs.copySync(path.join(__dirname, "reports"), path.join(targetDir, "reports"), { overwrite: true });
  fs.copySync(path.join(__dirname, "utils"), path.join(targetDir, "utils"), { overwrite: true });

  // Pages & Tests
  if (withSamples) {
    fs.copySync(path.join(__dirname, "pages"), path.join(targetDir, "pages"), { overwrite: true });
    fs.copySync(path.join(__dirname, "tests"), path.join(targetDir, "tests"), { overwrite: true });
    console.log("✅ Folder structure with sample files created.");
  } else {
    fs.mkdirSync(path.join(targetDir, "pages"), { recursive: true });
    fs.mkdirSync(path.join(targetDir, "tests"), { recursive: true });
    console.log("✅ Empty folder structure created.");
  }

  console.log("🎉 Setup complete!");
}

init();
