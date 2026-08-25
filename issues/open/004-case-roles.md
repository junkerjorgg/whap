# Issue #4: Case Roles and Contact Directory

## Status
- State: Open
- Branch: feature/case-roles
- Assignee: Agent

## Objective
Implement a directory of case participants and assign them specific roles (Accuser, Accused, Witnesses, Counsel, Judicatories). Tailor UI views and access controls based on the current user's role on the active Case. Enforce OPC BCO requirements regarding Counsel communicant membership and role mappings.

## Implementation Plan
- [ ] Step 1: Create UI list and detail views (`person-list`, `relation-to-case-list`) to display participants associated with a Case.
- [ ] Step 2: Implement forms to add people (specifying Name, Church membership, Office) and link them to the active Case.
- [ ] Step 3: Support assigning explicit roles (Accuser, Accused, Counsel, Judicial Advisory Committee, Judicatory, Witness, Amicus curiae). The UI should display a warning or check if the assigned Counsel is not a communicant member of the OPC in good standing, per OPC BCO Chapter IV, Section 3.
- [ ] Step 4: Set up basic client-side access control, filtering views based on the user's role in a Case (e.g., hiding confidential evidence from non-counsel/non-judicatory users).  This should be implemented by only granting user B access to user A's data if A has granted B access through the UI by giving user B a role in the case which requires that access.  So the UI should have buttons for user A to give user B access, based on B's role.  At the GunDB level, this read access is granted by user A issuing a read-only certificate to user B for that case's data.  This is the general pattern for granting users access to privileged data in this app, and should be implemented consistently throughout the app.
- [ ] Step 5: Add tests checking role assignments, contact lookups, and corresponding role-based UI restriction logic.
- [ ] Step 6: Update documentation in `docs/features/case-roles.md` detailing the access control model and role matrix.

## Acceptance Criteria
- [ ] User can add a person and relate them to a Case with a specific role.
- [ ] Multiple roles can be assigned, and each displays correctly on the Case participants screen.
- [ ] UI displays eligibility validation/alerts for the Counsel role (OPC communicant status).
- [ ] UI successfully restricts sensitive Case data based on the active user's role (e.g., Witness view is restricted compared to Accused/Counsel).
- [ ] All test suites pass cleanly.

## Agent Activity Log
- 2026-08-24: Created the issue file.
