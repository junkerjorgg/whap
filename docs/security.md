# Security and Access Control

This document outlines the security architecture and patterns for data sharing within the application.

## Peer-to-Peer Data Access Pattern

Because data is stored in a decentralized fashion (via GunDB), access control is managed directly between users on a peer-to-peer basis.

### The Access Flow
1. **User Roles**: When User A assigns User B a role in a Case (such as Counsel or Witness) that requires access to private data, User A initiates the access grant.
2. **UI Controls**: User A's interface features action buttons to grant or revoke access to User B for the case's data.
3. **GunDB Certificates**:
   - At the database level, read access is established by User A issuing a **read-only certificate** to User B specifically targeting the Case's data node in GunDB.
   - User B's client uses this certificate to authenticate read requests to User A's node.

This certificate-based sharing mechanism is the default pattern for managing privileged data and must be applied consistently across all modules in the application.
