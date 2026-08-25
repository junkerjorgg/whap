# Issue #2: Matters Management CRUD & GunDB Integration

## Status
- State: Open
- Branch: feature/matters-crud
- Assignee: Agent

## Objective
Fix the broken/stubbed GunDB `matters` mapping in `MatterList.js` and implement a full CRUD workflow for Matters (create, read, update, delete) linked to the authenticated user's GunDB space. The Matter model must track the Matthew 18/informal reconciliation phase to facilitate pre-judicial steps.

## Implementation Plan
- [ ] Step 1: Fix `MatterList.js` constructor to correctly query, map, and subscribe to user's matters in GunDB, reactively pushing items to the `matters` property.
- [ ] Step 2: Implement input handling in the `add-matter` component to save new matters with a title, description, and initial Matthew 18 Reconciliation Stage (e.g., Stage 1: Private Confrontation, Stage 2: Taking One or Two Witnesses, Stage 3: Institutional/Judicial Process).
- [ ] Step 3: Implement components for viewing details of an individual matter, and provide controls to edit and delete matters, including updating their current Matthew 18 stage.
- [ ] Step 4: Add unit and integration tests verifying reactive GunDB subscription, data addition, and deletion events.
- [ ] Step 5: Update documentation in `docs/features/matters-crud.md` describing Matter schema and Lit-GunDB integration patterns.

## Acceptance Criteria
- [ ] User can see a reactive list of their matters.
- [ ] User can add a new matter and see it immediately appended to the list with its Matthew 18 stage.
- [ ] User can update a matter's title, description, and Matthew 18 stage.
- [ ] User can delete a matter, removing it from GunDB and updating the list.
- [ ] All test suites pass cleanly.

## Agent Activity Log
- 2026-08-24: Created the issue file.
