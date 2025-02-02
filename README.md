# Goal

The goal should be to reconcile through open communication, rather than to condemn and drive people to defensively avoid communication.

Listen to Rich Mullins' song titled "I Will Be My Brother's Keeper."

# Data structure

The data structure is as follows.

```text
User
    - Matter(s)
        - Case(es)
            - Charge(s)
                - Accuser
                - Accused
                - Date of charge
                - Summary
                - Scripture broken
                - Standards broken
                - Amends
                - Objection(s)
                - Specification(s)
                    - Reference to other charge/specification and its judgment
                    - Description
                    - Date
                    - Time
                    - Location
                    - Witnesses
                    - Supporting documents or recordings
                    - Objection(s)
                    - Preliminary investigation (form, admissibility, etc.)
                        - By Accuser
                        - By Accused
                        - By Judicatory
                    - Judgment
                        - By Accuser
                        - By Accused
                        - By Judicatory
                - Preliminary investigation (form, admissibility, etc.)
                    - By Accuser
                    - By Accused
                    - By Judicatory
                - Judgment
                    - By Accuser
                    - By Accused
                    - By Judicatory
                - Appeal
            - Counsel
            - Appeal(s)
            - Complaint(s)
            - Overture(s)
        - Trial(s)
            - Charge(s)
            - Disposition
    - Person
        - Name
        - Church membership
        - Office, if any
        - Relation to case
```

# Other features to implement

* Start with "go to him and be reconciled."  "Take one or two along with you."  If a matter is resolved prior to trial, remove it from its role in the trial, but still permit the trial's access to it.
* references to minutes by judicatory, meeting date and location, page number, item number
* objections attached to each item to which objections can be made
* references to the Book of Discipline
* steps of the Book of Discipline (workflow)
* Notifications of users regarding actions they need to take
* Countercharges
* Regularly export all your data in machine-readable and human-readable formats, via download or backup to Google Drive
* New evidence after the beginning or completion of a trial.  So, evidence needs to be marked regarding whether it has been submitted in a particular trial.
* Honor whether documents are sealed from public access.

Kinds of user roles.  Each needs its own view of the data.

* Accused
* Accuser
* Counsel
* Judicial Advisory Committee
* Judicatory
* Witness

# Encryption

Choose an encryption algorithm that will last.  See https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/ism/cyber-security-guidelines/guidelines-cryptography.