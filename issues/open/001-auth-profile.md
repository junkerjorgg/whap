# Issue #1: Basic Authentication and Profile Setup with GunDB

## Status
- State: Open
- Branch: feature/auth-profile
- Assignee: Agent

## Objective
Provide a simple user signup, login, and profile management (Name, Church membership, Office) interface stored in GunDB. The login interface should use https://github.com/junkerjorgg/gun-login as a starting point. Profile data must support OPC Book of Discipline Chapter II Jurisdiction requirements by tracking congregation, presbytery, and church office.

## Implementation Plan
- [ ] Step 1: Integrate and style a login interface based on the `gun-login` package.
- [ ] Step 2: Implement authentication logic (signup, login, logout, and persistent session recovery on page load) using GunDB SEA.
- [ ] Step 3: Create profile editing UI where users can view and edit their profile properties (Name, local Congregation, regional Presbytery, and Office: Minister, Ruling Elder, Deacon, or communicating member).
- [ ] Step 4: Add unit and integration tests verifying user session setup, session teardown on logout, and profile field updates.
- [ ] Step 5: Update documentation in `docs/features/auth-profile.md` describing user database schema, keys, and session lifecycle.

## Acceptance Criteria
- [ ] User can sign up with a unique username and password.
- [ ] User can log in and successfully retrieve their session.
- [ ] Logged-in users can view, update, and persist Name, Congregation, Presbytery, and Office fields.
- [ ] Session is recovered on refresh when `sessionStorage` recall is enabled.
- [ ] All test suites pass cleanly.

## Agent Activity Log
- 2026-08-24: Created the issue file.
