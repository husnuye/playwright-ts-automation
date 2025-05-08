/*
# Playwright Automation Framework (TypeScript)

This repository demonstrates a structured and scalable end-to-end (E2E) test automation framework built with **Playwright** and **TypeScript**.

The framework follows industry-standard practices such as:
- Modular **Page Object Model (POM)**
- Clean separation of **test logic** and **test data**
- Reusable components and assertions
- Built-in support for **Docker** and **CI/CD pipelines**

## Framework Highlights

-  Built on [Playwright](https://playwright.dev/) with full **TypeScript** support  
-  Clean, modular **Page Object Model** (`pages/`)  
-  Secure and reusable **test credentials** (`config/`)  
-  HTML + Allure **reporting** support (local & CI)
-  GitHub Actions pipeline for automatic test execution and reporting  
-  Docker support for consistent environment execution

## Project Structure

project-root/
├── pages/                   # Page object classes
├── config/                  # Static test data (e.g., credentials)
├── tests/                   # Spec files (test cases)
├── playwright.config.ts     # Playwright settings
├── .github/workflows/       # GitHub Actions CI configuration
├── Dockerfile               # Docker setup to run tests in container
├── package.json             # Dependencies and scripts
└── README.md                # Project overview (this file)```
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
