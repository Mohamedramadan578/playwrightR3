---
name: playwright-pom
description: Use when applying the Page Object Model design pattern in this Playwright workspace to keep tests maintainable and organized.
---

# Page Object Model Design Pattern

Use this skill when you need to add or maintain Playwright automation in this repository using the Page Object Model (POM) design pattern.

## Goal
Create maintainable end-to-end tests by separating concerns:
- test scenarios in tests/
- page-specific interactions in pages/
- shared browser setup in fixture/
- reusable actions and assertions in utility/

## Design pattern intent
This workspace uses POM to keep browser tests readable, reusable, and easier to maintain. The pattern avoids placing raw selectors and UI interactions directly inside test files.

## When to use this skill
Use this skill for:
- adding a new browser test scenario
- creating a new page object for a feature
- refactoring duplicated logic into reusable helpers
- improving selectors, assertions, or test readability
- fixing a test that is tightly coupled to UI implementation details

## Workflow

### 1. Understand the scenario
- Read the business flow you want to automate.
- Identify the page or feature area involved.
- Check whether an existing page object already covers the behavior.

### 2. Choose the correct layer
- Put test steps in tests/.
- Put page-specific methods in pages/.
- Put shared setup in fixture/.
- Put repeated browser actions and assertions in utility/.

### 3. Build or extend the page object
- Create or update a page class that extends BasePage.
- Keep locators private and readonly.
- Expose high-level methods that describe user actions, not raw Playwright APIs.
- Prefer methods like login, submitForm, selectOption, uploadFile over low-level implementation details.

### 4. Use helpers instead of duplicating logic
- If the same action is repeated, move it to utility/Actions.ts.
- If the same assertion is repeated, move it to utility/Assertions.ts.
- Keep page objects focused on their page responsibilities.

### 5. Connect the page object to the test fixture
- If a page object is needed in tests, register it in fixture/fixture.ts.
- Keep fixture wiring simple and consistent with the existing pattern.

### 6. Write the test scenario
- Keep the test readable and scenario-focused.
- Use the page object methods rather than calling raw locators directly.
- Add assertions that validate the actual user-visible outcome.

### 7. Validate and refine
- Run the relevant Playwright test.
- Fix flaky behavior by improving selectors or waiting strategy.
- Remove unnecessary sleep statements when a more reliable wait exists.

## Decision points
- If the flow already exists in a page object, reuse it.
- If the flow is new, create a new page object rather than stuffing logic into the test.
- If logic is reused across multiple pages, move it to utility/.
- If data is reused across scenarios, place it in test-data/.

## Quality checklist
A solution is complete when:
- the test is readable and focused on behavior
- page object methods are reusable and descriptive
- selectors are centralized in the page class
- duplicated actions/assertions are moved to helpers
- the code follows the existing BasePage + page-object + fixture structure
- the relevant Playwright test runs successfully

## Example prompts
- Create a new page object for the checkout flow using this architecture.
- Refactor this test so it uses the existing page object pattern.
- Move this repeated browser action into the shared utility layer.
- Add a new fixture-backed page object for a feature under test.
