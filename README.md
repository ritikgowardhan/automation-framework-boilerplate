# TestForge Automation Framework

**TestForge** is a scalable automation testing framework boilerplate designed for modern web testing.
It provides a clean folder structure, reusable page objects, utilities, and organized test suites.

---

# Installation

Install using **npx**

```
npx rg-testforge
```

or install globally

```
npm install rg-testforge
```

---

# 📁 Project Structure

```
project-root
│
├── artifacts
│   ├── reports
│   └── screenshots
│
├── scripts
│
├── src
│   │
│   ├── configs
│   │   ├── env.config.js
│   │   └── example.config.js
│   │
│   ├── core
│   │   └── common_page_objects
│   │       ├── action-utils.js
│   │       ├── button.js
│   │       ├── navigation.js
│   │       └── ui_selectors.js
│   │
│   ├── page-objects
│   │
│   ├── test-data
│   │   ├── login.fixture.json
│   │   └── sampledata.json
│   │
│   ├── tests-suites
│   │   ├── auth
│   │   │   └── login.test.js
│   │   │
│   │   └── settings
│   │       └── settings.test.js
│   │
│   └── utils
│       ├── api.client.js
│       ├── dataGenerator.js
│       ├── errorHandler.js
│       ├── logger.js
│       └── xpathHandler.js
│
└── README.md
```

---

# 📂 Folder Explanation

### artifacts

Stores test execution outputs.

```
reports      → Test execution reports
screenshots  → Failure screenshots
```

---

### configs

Environment configuration files.

```
env.config.js       → Environment settings
example.config.js   → Sample configuration
```

---

### core/common_page_objects

Reusable UI interaction components.

```
action-utils.js → common UI actions
button.js       → button interactions
navigation.js   → navigation helpers
ui_selectors.js → shared selectors
```

---

### page-objects

Page Object Model implementation.

Each page should contain UI actions and locators for a specific page.

Example:

```
loginPage.js
settingsPage.js
```

---

### test-data

Stores test input data.

```
login.fixture.json
sampledata.json
```

---

### tests-suites

Test cases organized by feature.

```
auth
settings
```

Example:

```
login.test.js
settings.test.js
```

---

### utils

Helper utilities used across the framework.

```
api.client.js
dataGenerator.js
errorHandler.js
logger.js
xpathHandler.js
```

---

# ⚡ Features

✔ Clean automation framework structure
✔ Page Object Model support
✔ Reusable utilities
✔ Config driven testing
✔ Organized test suites
✔ Easy setup using CLI

---

# 👨‍💻 Author

Ritik Gowardhan

GitHub
https://github.com/ritikgowardhan

---

# 📜 License

MIT License
