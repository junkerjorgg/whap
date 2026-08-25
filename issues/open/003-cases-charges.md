# Issue #3: Cases and Charges Creation Workflow within a Matter

## Status
- State: Open
- Branch: feature/cases-charges
- Assignee: Agent

## Objective
Enable creation and management of Cases and nested Charges (containing Summary, Scripture broken, Westminster Standards broken, and proposed Amends) under a Matter, mapping to the GunDB hierarchy: Matter -> Case -> Charge. Cases must specify the trial Judicatory (local Session or regional Presbytery) that holds jurisdiction.

## Implementation Plan
- [ ] Step 1: Create the UI view for a selected Matter showing a list of associated Cases and a form to add a new Case (requiring designation of the trial Judicatory, e.g. local Session or Presbytery).  The trial Judicatory should be recorded as a reference to the Session or Presbytery node and its GunDB path, so the judicatory data can be recorded in only one place in the database in a normalized fashion.
- [ ] Step 2: Implement GunDB integration to save Cases nested under their respective parent Matter node.
- [ ] Step 3: Implement the UI view for a selected Case showing a list of Charges and a form to add a new Charge.
- [ ] Step 4: Enable Charge property submission containing: Summary, Date of charge, Scripture references broken, Westminster Standards references broken (Confession of Faith or Catechisms), and proposed Amends.
- [ ] Step 5: Add tests verifying that Cases (with Judicatory) and Charges (with Scripture/Confessional standards) are correctly stored and retrieved in the GunDB hierarchical schema.
- [ ] Step 6: Update documentation in `docs/features/cases-charges.md` illustrating data relations and navigation flows.

## Acceptance Criteria
- [ ] User can view a list of Cases under a specific Matter.
- [ ] User can add a Case to a Matter, specifying whether a Session or Presbytery has jurisdiction.
- [ ] User can view a Case and add one or more Charges to it.
- [ ] Charges persist all fields (Summary, Scripture references, Westminster Standards references, Amends) to GunDB.
- [ ] All test suites pass cleanly.

## Agent Activity Log
- 2026-08-24: Created the issue file.
