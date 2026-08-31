# Agent Operating Rules: In-Repo Issue Lifecycle & Doc Sync

You are an autonomous software engineering assistant. You must follow the issue lifecycle defined below whenever implementing tasks, tracking work, and updating documentation.

---

## 1. Issue Workflow Protocol

When assigned a task or asked to work on an issue:

1. **Creating an Issue & Feature Linking (If creating a new issue):**
   - When creating a new issue file under `issues/open/<issue-id>-<slug>.md` from a feature in `FEATURES.md` or `docs/features/`, immediately add a link from the relevant feature entry in `FEATURES.md` or `docs/features/<relevant-doc>.md` to the newly created issue file.

2. **Locate & Parse the Issue:**
   - Find the relevant issue file under `issues/open/<issue-id>-<slug>.md`.
   - Read the **Objective**, **Developer Comments**, **Implementation Plan**, and **Acceptance Criteria**.

3. **Incremental Execution & State Tracking:**
   - Execute one checklist item at a time.
   - After each logical unit of work, update the issue file by marking the completed step: `[x]`.
   - Record significant design decisions, edge cases handled, or schema changes under `## Agent Activity Log`.

4. **Testing & Verification:**
   - Run existing and newly created test suites before considering implementation complete.
   - Do not proceed to documentation updates if tests fail.

5. **Documentation Synchronization (Mandatory):**
   - Identify the relevant technical document under `docs/features/` (create one if it does not exist) or `FEATURES.md`.
   - Update architecture diagrams, endpoint definitions, configuration parameters, or usage examples affected by your changes.
   - Mark the `- [x] Update documentation` item in the issue.

6. **Closing the Issue:**
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

## Developer Comments
<!-- Notes, feedback, or comments added by human developers -->

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

- **Atomicity:** Keep changes tightly scoped to the assigned issue. Do not refactor unrelated modules unless explicitly instructed in the issue specification.  Note that some module stubs already exist in which you should implement a new feature.
- **Fail-Fast:** If a blocker, missing dependency, or ambiguous specification is encountered, halt execution, log the blocker under `## Agent Activity Log`, and prompt the user for clarification before modifying additional files.
- **Feature-to-Issue Linking:** Whenever creating an issue from a feature described in `FEATURES.md` or `docs/features/`, link from the relevant feature in `FEATURES.md` or `docs/features/<relevant-doc>.md` directly to the created issue file (`issues/open/<issue-id>-<slug>.md`).
- **Clean Git Commits:** When committing, reference the issue ID in the format: `feat(scope): #<ID> summary of changes`.  To support semantic-release, if a commit is a breaking change, label it with `BREAKING CHANGE:"` following the Conventional Commits specification.
- **Book of Discipline Compliance:** The application implements the roles, steps, and processes described in the Book of Discipline of the Orthodox Presbyterian Church (OPC), available at https://opc.org/BCO/BD.html. Use this reference as the canonical workflow and terminology guide for cases, charges, trials, appeals, and judicatory processes.

---

## 4. UI/Styling Guidelines

- **Widget Preference:** Prefer to use BeerCSS widgets when they are available. When it is necessary to create a custom widget which is not available in BeerCSS, use Material Design guidelines and specifications to design it.
- **BeerCSS Integration:** In order to use BeerCSS in Lit elements, use the integration base class provided in https://github.com/timblack1/lit-beercss.
- **Responsive Design:** Build all UI components with responsive design principles (using flexible layouts, media queries, and container queries) to ensure the application works seamlessly on mobile phones, tablets, and desktop/computer monitor sized screens.

---

## 5. Security & Access Control

- **Data Access Patterns:** All access to privileged data (such as case files, evidence, and specifications) is granted explicitly on a peer-to-peer basis.
  - User B may only access User A's data if User A has granted B access through the UI (e.g., by assigning them a case role requiring that access).
  - The UI must expose controls (buttons) for User A to grant/revoke B's access based on their role.
  - At the database level (GunDB), read access must be granted by User A issuing a read-only certificate to User B for the specific case's data. This pattern must be implemented consistently throughout the app.


