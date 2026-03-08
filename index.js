/**
 * index.js
 *
 * Description:
 * Entry point of the TestForge automation framework CLI.
 *
 * Responsibilities:
 * - Initialize the framework
 * - Generate folder structures
 * - Setup project scaffolding
 *
 * Usage:
 * npx testforge init
 */

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
  console.log("🚀 Welcome to TestForge - Automation Framework Starter");

  const answer = await askQuestion(
    "Do you want to include sample page & test files? (y/n): "
  );

  const withSamples = answer.trim().toLowerCase().startsWith("y");
  const targetDir = process.cwd();

  const srcDir = path.join(targetDir, "src");

  // Ensure src folder exists
  fs.ensureDirSync(srcDir);

  // Copy framework folders inside src
  fs.copySync(path.join(__dirname, "helpers"), path.join(srcDir, "helpers"), { overwrite: true });
  fs.copySync(path.join(__dirname, "utils"), path.join(srcDir, "utils"), { overwrite: true });

  // Copy configs and reports to root
  fs.copySync(path.join(__dirname, "configs"), path.join(targetDir, "configs"), { overwrite: true });
  fs.copySync(path.join(__dirname, "reports"), path.join(targetDir, "reports"), { overwrite: true });

  if (withSamples) {
    fs.copySync(path.join(__dirname, "pages"), path.join(srcDir, "pages"), { overwrite: true });
    fs.copySync(path.join(__dirname, "tests"), path.join(srcDir, "tests"), { overwrite: true });

    console.log("✅ Folder structure with sample files created.");
  } else {
    fs.ensureDirSync(path.join(srcDir, "pages"));
    fs.ensureDirSync(path.join(srcDir, "tests"));

    console.log("✅ Empty folder structure created.");
  }

  console.log("\n🎉 Setup complete!");
  console.log("Run tests using:");
  console.log("npm test");
}

init();