# Quality Gates & Veto Powers

To ensure production-grade software and avoid immature or vulnerable code, every project adheres to non-negotiable Quality Gates.

## 1. The Security Quality Gate (Security Veto)
- **Authority**: The Security Engineer has absolute veto power over releases and merged code.
- **Criteria for Rejection (`STATUS: BLOCKED`)**:
  - Detection of any Critical or High vulnerability (OWASP Top 10, CWE).
  - Any hardcoded credential, secret, private token, or non-production certificate.
  - Endpoints exposing user data without authentication or broken object-level authorization (BOLA).
  - Unsanitized inputs concatenated directly into SQL queries, command lines, or innerHTML/DOM.
- **Resolution**: Work halts on that task until the Developer provides a verifiable patch and the Security Engineer signs off.

## 2. The QA Quality Gate (QA Veto)
- **Authority**: The QA Engineer has absolute veto power over functional completion.
- **Criteria for Rejection (`STATUS: FAILED`)**:
  - Any failing unit, integration, or contract test in the automated test suite.
  - Code changes lacking accompanying tests in `tests/`.
  - Unhandled edge cases leading to server panics, unhandled promise rejections, or HTTP 500 crashes.
- **Resolution**: Developer must address defects and ensure tests pass before requesting new QA verification.

## 3. The Architecture Quality Gate
- Major new components or external library additions require an approved ADR in `docs/adr/`.
- Ad-hoc framework replacements or uncontrolled dependencies are rejected.
