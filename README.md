⚡ TestForge

TestForge is a lightweight automation framework starter designed to help developers and QA engineers quickly set up a structured testing project.

Instead of spending time creating folders, organizing page objects, or setting up reusable utilities, TestForge provides a clean and scalable project layout out of the box. This allows you to focus on writing tests rather than managing project structure.

The framework structure is intentionally tool-agnostic, making it suitable for a wide range of automation tools including Selenium, Playwright, Cypress, TestCafe, or other UI and API testing libraries.

🚀 Key Features

Pre-configured project structure for automation testing

Compatible with multiple automation tools and frameworks

Built-in helper utilities for common tasks (logging, error handling, XPath utilities)

Centralized configuration management for environments and browsers

Utility modules for shared functionality such as data generation and API interactions

Ready to integrate with popular reporting tools such as Allure, Extent Reports, or Playwright reports

Designed to keep test projects modular, organized, and easy to maintain

📁 Project Structure

When you initialize a new project using TestForge, the following directory structure is created:

<your_project_name>/

├─ helpers/
│   ├─ xpathHandler.js
│   ├─ errorHandler.js
│   └─ logger.js
│
├─ pages/
│   ├─ common/        # Reusable UI components (navigation, footer, modals)
│   ├─ auth/          # Authentication related pages (login, signup, reset password)
│   └─ settings/      # User settings, profile, preferences
│
├─ tests/
│   ├─ auth/          # Authentication test scenarios
│   └─ settings/      # Tests related to user settings
│
├─ configs/
│   └─ example.config.js   # Environment or browser configuration
│
├─ reports/                # Location for generated test reports
│
├─ utils/
│   └─ dataGenerator.js    # Utility for generating random test data
│
├─ package.json
└─ README.md

This structure helps maintain clear separation between test logic, page objects, utilities, and configuration, making automation projects easier to scale and maintain over time.

📦 Installation

Install TestForge globally using npm:

npm install -g testforge
🛠 Getting Started
1. Create a new project directory
mkdir my_automation_project
cd my_automation_project
2. Initialize the framework

Run the TestForge CLI command:

testforge
3. Select your setup

You can choose between:

Generic Structure – creates an empty framework structure ready for any automation tool

Sample Setup – generates example page objects and test files to demonstrate how the structure works

📑 Example Usage
Using Playwright

Add Playwright test specifications inside the tests/ directory

Implement page objects inside the pages/ directory

Configure browser or environment settings in configs/example.config.js

Using Selenium

Implement the Page Object Model within the pages/ directory

Write test cases using JUnit or TestNG inside tests/

Manage WebDriver and environment configuration inside configs/

👨‍💻 Author

Ritik Gowardhan

Email: ritikgowardhan1@gmail.com

GitHub: https://github.com/ritikgowardhan

📜 License

This project is released under the MIT License, allowing you to freely use, modify, and distribute it according to the license terms.

If TestForge helps you get started faster with automation testing, consider starring the repository on GitHub.