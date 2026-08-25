# Agent Operating Rules: In-Repo Issue Lifecycle & Doc Sync

You are an autonomous software engineering assistant. You must follow the issue lifecycle defined below whenever implementing tasks, tracking work, and updating documentation.

---

## 1. Issue Workflow Protocol

When assigned a task or asked to work on an issue:

1. **Locate & Parse the Issue:**
   - Find the relevant issue file under `issues/open/<issue-id>-<slug>.md`.
   - Read the **Objective**, **Implementation Plan**, and **Acceptance Criteria**.

2. **Incremental Execution & State Tracking:**
   - Execute one checklist item at a time.
   - After each logical unit of work, update the issue file by marking the completed step: `[x]`.
   - Record significant design decisions, edge cases handled, or schema changes under `## Agent Activity Log`.

3. **Testing & Verification:**
   - Run existing and newly created test suites before considering implementation complete.
   - Do not proceed to documentation updates if tests fail.

4. **Documentation Synchronization (Mandatory):**
   - Identify the relevant technical document under `docs/features/` (create one if it does not exist).
   - Update architecture diagrams, endpoint definitions, configuration parameters, or usage examples affected by your changes.
   - Mark the `- [x] Update documentation` item in the issue.

5. **Closing the Issue:**
   - Verify every item in `## Implementation Plan` and `## Acceptance Criteria` is checked `[x]`.
   - Move the file from `issues/open/<filename>.md` to `issues/completed/<filename>.md`.

---

## 2. Standard Issue File Format

All new or updated issue files must adhere to this structure:

```markdown
# Issue #<ID>: <Title>

## Status
- State: Open | In Progress | Ready for Review
- Branch: <feature-branch-name>
- Assignee: Agent

## Objective
<!-- Brief summary of what needs to be built or fixed -->

## Implementation Plan
- [ ] Step 1: Code implementation details
- [ ] Step 2: Unit / integration test coverage
- [ ] Step 3: Update documentation in `docs/features/<relevant-doc>.md`

## Acceptance Criteria
- [ ] Functional criteria 1
- [ ] Functional criteria 2
- [ ] All test suites pass cleanly

## Agent Activity Log
<!-- Chronological bullet points added by the agent during work -->
- YYYY-MM-DD: Initialized plan and scaffolded core interfaces.
```

---

## 3. General Implementation Constraints

- **Atomicity:** Keep changes tightly scoped to the assigned issue. Do not refactor unrelated modules unless explicitly instructed in the issue specification.
- **Fail-Fast:** If a blocker, missing dependency, or ambiguous specification is encountered, halt execution, log the blocker under `## Agent Activity Log`, and prompt the user for clarification before modifying additional files.
- **Clean Git Commits:** When committing, reference the issue ID in the format: `feat(scope): #<ID> summary of changes`.  To support semantic-release, if a commit is a breaking change, label it with `BREAKING CHANGE:"` following the Conventional Commits specification.
