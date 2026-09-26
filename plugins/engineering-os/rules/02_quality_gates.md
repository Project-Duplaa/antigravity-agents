# Quality Gates & Veto Powers

To ensure production-grade software and avoid immature or vulnerable code, every project adheres to non-negotiable Quality Gates.

## 1. The Security Quality Gate (Security Veto)
- **Authority**: The Security Engineer has absolute veto power over releases and merged code.
- **Criteria for Rejection (`STATUS: BLOCKED`)**:
  - Detection of any Critical or High vulnerability (OWASP Top 10, OWASP LLM Top 10, CWE).
  - Any hardcoded credential, secret, private token, or non-production certificate.
  - Endpoints exposing user data without authentication or broken object-level authorization (BOLA).
  - Unsanitized inputs concatenated directly into SQL queries, command lines, or innerHTML/DOM.
  - Auth tokens stored in localStorage without compensating controls.
  - Missing rate limiting on authentication endpoints.
  - LLM/AI features without input sanitization and output validation.
- **Resolution**: Work halts on that task until the Developer provides a verifiable patch and the Security Engineer signs off.

## 2. The Database Quality Gate (Database Veto)
- **Authority**: The Data Architect has absolute veto power over data layer implementations.
- **Criteria for Rejection (`STATUS: BLOCKED`)**:
  - No ERD exists before developer starts implementing data access code.
  - Money stored as FLOAT/REAL instead of NUMERIC or INTEGER (cents).
  - Foreign keys without indexes (causes slow JOINs and CASCADE deletes).
  - Missing CHECK constraints on status/enum columns (allows garbage data).
  - Unbounded queries without LIMIT (can return millions of rows).
  - N+1 query patterns detected (loop of individual SELECTs).
  - SQLite without WAL mode or `foreign_keys = ON` in desktop apps.
  - Destructive migration without 2-phase protocol.
- **Resolution**: Developer must fix data layer issues and the Data Architect verifies before proceeding.

## 3. The QA Quality Gate (QA Veto)
- **Authority**: The QA Engineer has absolute veto power over functional completion.
- **Criteria for Rejection (`STATUS: FAILED`)**:
  - Any failing unit, integration, or E2E test in the automated test suite.
  - Code changes lacking accompanying tests.
  - Unhandled edge cases leading to server panics, unhandled promise rejections, or HTTP 500 crashes.
  - Content doesn't match PRD Content Map (lorem ipsum, generic names, invented stats).
  - Accessibility blockers (no keyboard navigation, missing alt text, low contrast).
- **Resolution**: Developer must address defects and ensure tests pass before requesting new QA verification.

## 4. The Architecture Quality Gate
- Major new components or external library additions require an approved ADR in `docs/adr/`.
- Ad-hoc framework replacements or uncontrolled dependencies are rejected.
- Tightly-coupled monoliths, shared databases between services, or broken hexagonal boundaries are blocked.

## 5. The Design Quality Gate (Anti-AI Design Veto)
- **Authority**: The Designer has veto power over visual implementations.
- **Criteria for Rejection**:
  - Any AI tell detected (see `05_anti_ai_design_standards.md` for the full list).
  - Text-only pages without real imagery.
  - Generic icons (default Lucide) instead of curated domain-specific icons.
  - Three identical cards in a row or repeated section layouts.
- **Resolution**: Developer must fix visual issues before QA can proceed.
