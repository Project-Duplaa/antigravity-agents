# Inter-Agent Handoff Protocol

Communication between agents in the Engineering OS must be backed by documented artifacts to eliminate ambiguity and prevent loss of context.

## Workflow Phases & Required Artifacts

```
1. Requirement Analysis
       │
       ▼
2. Architecture (Architect) ────────► Produces `docs/adr/ADR-XXX-<name>.md`
       │
       ▼
3. Security Review (Security) ──────► Produces `docs/security/SEC-XXX-<name>.md`
       │                              [Status: APPROVED | BLOCKED]
       ▼
4. Implementation (Developer) ──────► Writes code in `src/` & tests in `tests/`
       │                              (Only proceeds if Security is APPROVED)
       ▼
5. QA Validation (QA) ──────────────► Produces `docs/qa/QA-XXX-<name>.md`
       │                              [Status: PASSED | FAILED]
       ▼
6. Verification & Knowledge Sync ───► Orchestrator updates README, changelog,
                                      and Obsidian project note (`Projects/<name>.md`)
```

## Mandatory Artifact Locations
- **Architecture**: `docs/adr/ADR-XXX-<name>.md`
- **Security**: `docs/security/SEC-XXX-<name>.md`
- **QA**: `docs/qa/QA-XXX-<name>.md`
- **Knowledge Base**: `C:\Engineering\Obsidian\Projects\<Project>.md`
