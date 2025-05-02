/*
# Playwright Automation Framework (TypeScript)

This repository demonstrates a structured and scalable end-to-end (E2E) test automation framework built with [Playwright](https://playwright.dev/) and TypeScript. The framework follows industry-standard practices such as modular page objects, clean test separation, reusable assertions, and CI/CD integration.

## Framework Highlights
- Built on Playwright’s native test runner with full TypeScript support
- Clear page object model with shared base class functionality
- Clean test data separation via `credentials.ts`
- HTML and Allure reporting enabled for both local and CI usage
- GitHub Actions pipeline configured to execute tests and publish reports

## Project Structure
```
project-root/
├── pages/                   # Page object classes
├── config/                  # Static test data (e.g., credentials)
├── tests/                   # Spec files
├── playwright.config.ts     # Playwright settings
├── .github/workflows/       # GitHub Actions CI configuration
├── package.json             # Dependencies and scripts
└── README.md                # Project overview
```

## How to Execute Tests Locally

Install dependencies:
```bash
npm install
npx playwright install --with-deps
```

Run all tests:
```bash
npx playwright test
```

View the HTML report:
```bash
npx playwright show-report
```

Generate and view the Allure report:
```bash
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

## CI/CD Process
The framework is integrated with GitHub Actions to:
- Run tests on every push to `main`
- Collect trace, video, and screenshot artifacts
- Generate Allure reports automatically
- Publish live reports to GitHub Pages

**Live Report Access:** [https://husnuye.github.io/playwright-ts-automation/](https://husnuye.github.io/playwright-ts-automation/)

## License
This project is available under the MIT License.
*/
