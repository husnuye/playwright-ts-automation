
# Playwright TypeScript Automation Framework

This repository contains an end-to-end (E2E) test automation framework built with [Playwright](https://playwright.dev/) and TypeScript.

## 🚀 Features

- ✅ Headless/Headed browser execution
- ✅ Page Object Model (POM) structure
- ✅ Test data separation
- ✅ GitHub Actions CI integration
- ✅ Allure test reporting
- ✅ Live Allure report hosted via GitHub Pages

## 📂 Project Structure
├── src/
│   ├── pages/           → Page classes
│   ├── tests/           → Test scenarios
│   └── testData.ts      → Static test data
├── playwright.config.ts → Test runner configuration
└── .github/workflows/   → GitHub Actions CI pipeline

## 🧪 Run Tests Locally

```bash
npm install
npx playwright install --with-deps
npx playwright test

To open the default HTML report:

npx playwright show-report


npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report

📊 Live Test Report (Allure)

👉 View Latest Allure Report
(Test results are updated automatically after each push to main.)

🔁 CI/CD

This project uses GitHub Actions to:
	•	Run tests on push
	•	Generate Allure reports
	•	Publish reports to GitHub Pages

📄 License

This project is open source and available under the MIT License.
