# Issue #5: Specifications and Evidence/Witness Attachment

## Status
- State: Open
- Branch: feature/specifications-evidence
- Assignee: Agent

## Objective
Implement Specifications under Charges and track official Citations for witnesses and the accused as required by OPC BCO Chapter III and IV. A Specification contains detailed incident data (Description, Date, Time, Location, associated Witnesses, reference to other charges/specifications, and supporting documents/recordings).  The specifications should be linked to the relevant evidence found in the chronology of the facts of the case as described in BCO Chapter III, Section 7.b and 8.b.  The chronology should provide links from its facts to the specifications that contain those facts.

## Implementation Plan
- [ ] Step 1: Implement the UI view (`specification-list`, `specification-view`) to render Specifications under a selected Charge.
- [ ] Step 2: Create forms (`add-specification`) to input Description, Date, Time, Location, and select/assign associated Witnesses from the Case directory. Ensure the layout prompts for the concrete facts and circumstances required to substantiate the charge (BCO BD Chapter III, Section 5).
- [ ] Step 3: Support referencing another Charge/Specification and its judgment to handle adjudication dependencies.
- [ ] Step 4: Implement adding supporting document or recording metadata/URLs (`supporting-document-recording-list`, `supporting-document-recording-view`) to a Specification.
- [ ] Step 5: Implement a Case Chronology component displaying a timeline of the facts of the case, as described in BCO Chapter III, Section 7.b and 8.b. Link each fact in the chronology to the relevant evidence/documents.
- [ ] Step 6: Add bilateral linking between the Case Chronology and Specifications: each chronology item must provide links back to the specific Specifications that contain those facts, and each Specification must link to its corresponding entries in the chronology.
- [ ] Step 7: Implement citation tracking for assigned Witnesses and the Accused. When a witness is added, the system should generate a Citation record (suggested forms format) tracking status (Draft, Issued, Served, Awaiting Response).
- [ ] Step 8: Add tests verifying correct persistence of Specifications, Citation records, Chronology items, and their bidirectional mappings in GunDB.
- [ ] Step 9: Update documentation in `docs/features/specifications-evidence.md` defining schemas for Specifications, Citations, Chronology, and Evidence attachments.

## Acceptance Criteria
- [ ] User can add a Specification to a Charge outlining concrete facts (Date, Time, Location, Description).
- [ ] Specification lists associated Case witnesses and links them.
- [ ] User can reference another Charge or Specification inside a Specification.
- [ ] The Case displays a Chronology of Facts linked to relevant evidence documents (per BCO BD III 7.b / 8.b).
- [ ] The Case Chronology has working bilateral links connecting facts to the corresponding Specifications that contain them.
- [ ] The system tracks official Citations for witnesses and the accused (Draft, Issued, Served, etc.).
- [ ] User can attach document/recording URLs/references to a Specification.
- [ ] All test suites pass cleanly.

## Agent Activity Log
- 2026-08-24: Created the issue file.
