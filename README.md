# Summary

This is a web application that helps members of the Orthodox Presbyterian
Church (and others) implement the biblical process for handling sin and conflict.

## Status

It is currently only in the planning stages; it is not yet implemented.  It is seeking input on its design in the form of feature proposals in pull requests.

## Key goals & features:

* App to guarantee due process in OPC courts
* Especially to:
  * defeat slander, prejudice, and partiality
  * protect those falsely accused
  * oppose the current influence of feminism and egalitarianism
* Crowdsource accountability with the power of general members and the public
* Progressively bring biblical justice to the OPC, and the OPC's justice to the world
* **Process:**  Follow OPC Book of Discipline (and Ken Sande's book "The Peacemaker" before formal charges), make app useful outside OPC and church
  * The aim should be to reconcile first through _free and open communication_, rather than to prejudicially condemn and drive people to defensively _avoid_ communication
  * But in the formal process, the app should ensure the process is followed, especially to protect the accused, maintaining proper levels of confidentiality
    * Users must sign an in-app confidentiality agreement to serve as counsel or witness to access private information. Should the agreement create a fiduciary (attorney-client privilege) role?  Financial penalty for breach?
    * Data will be stored in graded levels of confidentiality implied by Matthew 18, controlled by data owner, especially the accused.
* **Handles hierarchical complexity:** Specifications can link to and depend on other charges, specifications, appeals, complaints, grounds, even from other cases, like in X's social graph, for their adjudicated truthfulness. Truth dependency travels up the chain for each case, and can be viewed in summary. This handles cases' complexity.
* **Adjudication by multiple authorities:** Public, church members, accuser, accused, and ecclesiastical judicatory. In parallel for accountability.
* Content structure
  * Public landing page
  * Admin dashboard?
  * User dashboard, User/Matters/Cases (see main "Data structure" below)
  * Trial argument organization - chronology, charges & specifications, scripture & confessions, opening, prosecution, defense, cross, redirect, closing
  * Roles, contact list: accuser, accused, witnesses, counsel, judicatories, amicus curiae, congregations (membership), sentence, amends
  * Case status: history of the adjudication at each ecclesiastical court level
  * Public banger quote widget for users to offer quotes to app's public front page/social network/notifications, quotes link to case, respecting confidentiality levels
  * Public cry wolf registry for unrepentant convicted slanderers
* Implement related civil case tracking? Defamation concern.
* AI to help find case law, precedent, scripture, confessions, form arguments, summarize evidence, case adjudication.
* Syndicated, decentralized AI job processing using Chrome built-in AI
* Users encouraged to host their own database nodes
* Tech stack:  GunDB, BeerCSS, Lit
* Open source
* Image, audio, video files stored elsewhere, option to use IPFS
* Installable Progressive Web App
* Decentralized server architecture - host behind web worker cache loaded from multiple peer GunDB or IPFS nodes?

## How to Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md).

# The main problems to solve

We have a process, but we do not always follow that process, because it is too onerous, and those who are humble and loathe to slander in their own defense receive inadequate protection from those who slander them first. The process is too onerous for those who recognize how rigorous it must be to preserve truth and justice, and who recognize how detailed their defense must be.  When the actual process followed lacks that rigor and detail, it is a sham and not the true discipline of Christ’s church.

The truth of one accusation can depend on the truthfulness of another.

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
* Amends should include discipline for false or unsubstantiated accusations
* Regularly export all your data in machine-readable and human-readable formats, via download or backup to Google Drive
* Notice that you store all data in your browser in a decentralized fashion, and you are responsible to backup your data, or migrate it to a new browser (using a button in the app).  App attempts to make centralized backups but makes no guarantee that any data will be backed up.
* Permit user to mark evidence as needing review by an attorney.
* New evidence after the beginning or completion of a trial.  So, evidence needs to be marked regarding whether it has been submitted in a particular trial.
* Honor whether documents are sealed from public access.

Kinds of user roles.  Each needs its own view of the data.

* Accused
* Accuser
* Counsel
* Judicial Advisory Committee
* Judicatory
* Witness
* Amicus curiae?

# Encryption

Choose an encryption algorithm that will last.  See https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/ism/cyber-security-guidelines/guidelines-cryptography.  Does Gun permit choosing algorithms?  Which algorithms does it use?  Compare with this list.