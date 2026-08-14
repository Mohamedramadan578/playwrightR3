---
applyTo: "tests/**/*.ts"
---

# Test writing instructions for this workspace

When creating or editing Playwright test cases in this repository, follow these rules:

- Do not repeat the same test case. Each scenario should be unique and meaningful.
- Give every test case a clear number, for example: Scenario 01, Scenario 02, and so on.
- Add tags to each test case when appropriate to support grouping and filtering.
- Keep responses brief and token-efficient.
- Follow the existing Playwright and Page Object Model structure used in this workspace.
- Prefer readable, maintainable test code over overly verbose implementations.
- Use the existing page-object and fixture patterns rather than placing raw UI logic directly in the test file.
