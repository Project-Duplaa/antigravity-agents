# Engineering Standards: Scalability, Modularity & Architecture by Default

These standards apply globally across all software development in the Engineering OS.

## 1. Absolute Prohibition of Tightly-Coupled Monoliths
- **Scalability by Default**: Every project, even small prototypes, must be architected with clean service boundaries capable of scaling horizontally.
- **Decoupled Client & Server**: Frontends must consume versioned, decoupled APIs (`/api/v1/`). Never mix server-side rendering logic tightly coupled with database queries in single unstructured files.
- **Hexagonal Architecture (Ports & Adapters)**:
  - **Domain Core**: Pure business logic, zero external framework dependencies.
  - **Ports**: Interface definitions for repositories, message buses, external services.
  - **Adapters**: Concrete implementations (SQL/PostgreSQL/MongoDB, Redis, RabbitMQ, REST clients).

## 2. Statelessness & Distributed System Readiness
- **Stateless Application Layer**: No sticky in-memory session state in application servers. Authentication must use stateless tokens (JWT with cryptographic verification or distributed sessions via Redis).
- **Asynchronous & Event-Driven Readiness**: Time-consuming tasks (file processing, heavy computations, emails) must be designed as background jobs or message consumers, never blocking the main request/response cycle.
- **Data Partitioning & Pagination**: All collection endpoints must enforce pagination (`cursor` or `page` with upper limit `limit <= 100`). Unbounded queries (`SELECT * FROM table` without limits) are strictly forbidden.

## 3. Strict Type Safety & Schemas at Boundaries
- **Strict Typing**: TypeScript (`strict: true`), Python (`mypy` / Pydantic), Rust, and Go must have zero unchecked `any` or ambiguous type casts.
- **Contract-First Validation**: Every incoming payload must be parsed through strict validation schemas (Zod, Pydantic) before reaching application services.

## 4. Defensive Engineering & Zero Secrets
- **Zero Secrets**: API keys, credentials, or private paths must strictly live in `.env` files with a corresponding `.env.example` template.
- **Resilience**: Use retries with exponential backoff and circuit breakers for external service calls.
