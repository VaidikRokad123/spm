# Work Breakdown Structure (WBS) Report

## Project Title: FleetFlow — Modern Intelligent Fleet & Logistics Management System

### Academic Course: Software Project Management (SPM)
### Tutorial Task: Task – 4 (T-4: Work Breakdown Structure)
### Student Details:
* **Vaidik Rokad (23BCE291)** — Backend & DevOps Engineering Lead
* **Rishi Detroja (23BCE288)** — Frontend & UI/UX Engineering Lead

---

## 📌 1. Objective of the Task

The primary objective of this tutorial task is to develop a comprehensive, hierarchical **Work Breakdown Structure (WBS)** for the **FleetFlow** software project. 

A Work Breakdown Structure is a fundamental project management tool defined as a **deliverable-oriented hierarchical decomposition of the total scope of work to be carried out by the project team** to accomplish the project objectives and create the required deliverables.

In the software engineering lifecycle, the WBS serves several critical functions:
1. **Bridges Scope and Scheduling:** It takes the high-level functional scope outlined in the Software Project Management Plan (SPMP / Task-3) and decomposes it into granular, manageable work packages.
2. **Establishes Single Ownership:** It eliminates organizational ambiguity by assigning single-point responsibility for every terminal task.
3. **Serves as Direct Input for Task-5 (Scheduling):** The terminal work packages defined in Level 4 directly form the discrete activities utilized to build the Precedence Activity Network Diagram and Gantt Chart.
4. **Enables Accurate Estimation:** It allows bottom-up effort (hours) and cost estimation, rolling up from work packages to major project milestones.

---

## 🔍 2. Brief Scope of the Selected Project

**FleetFlow** is a modular, high-performance web platform designed to streamline, automate, and monitor fleet logistics workflows. The system integrates five core operational domains into a unified source of truth:

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   FleetFlow Functional Scope                                    │
├───────────────────┬───────────────────┬─────────────────────┬───────────────────┬───────────────┤
│ Vehicle & Asset   │ Driver Credential │ Trip Dispatch &     │ Maintenance &     │ Fuel & Cost   │
│ Management        │ & Compliance      │ Payload Validation  │ Status Sync       │ Accounting    │
│ (Specs, Registry, │ (CDL Verification,│ (Overload Guard,    │ (In-Shop Lock,    │ (km/L, Cost/km│
│ Status Lifecycle) │ Safety Logs)      │ Route Tracking)     │ Service Records)  │ Analytics)    │
└───────────────────┴───────────────────┴─────────────────────┴───────────────────┴───────────────┘
```

* **User Authentication & Access Control:** Role-Based Access Control (RBAC) protecting endpoints and UI views for `manager`, `dispatcher`, `safety_officer`, and `financial_analyst`.
* **Vehicle & Asset Lifecycle Management:** Master vehicle registry tracking VIN, vehicle category (`Truck`, `Van`, `Semi`, `Tanker`, `Flatbed`), license plates, odometer readings, and status transitions (`available`, `on_trip`, `in_shop`, `retired`).
* **Driver Credentialing & Compliance:** Driver profiles, CDL license numbers, and automated verification preventing driver assignment if license is expired.
* **Trip Dispatch & Safety Enforcements:** Origin/destination routing, status lifecycle tracking, and algorithmic validation blocking dispatch when cargo weight exceeds vehicle capacity (`cargoWeight > maxCapacity`).
* **Preventative & Corrective Maintenance:** Service ticket tracking with automated bidirectional vehicle status synchronization (`in_shop` $\leftrightarrow$ `available`).
* **Expense Accounting & Telemetry Analytics:** Granular expense logs (fuel, toll, maintenance), fuel efficiency computations ($\text{km/L}$), interactive visual charts (Recharts), and PDF/CSV export capabilities.

---

## ⚙️ 3. Approach Used for Constructing the WBS

The WBS has been engineered using a **deliverable-oriented, top-down decomposition methodology**, adhering strictly to industry-standard software project management principles:

1. **The 100% Rule:** The WBS captures 100% of the project scope defined in the SPMP. The sum of child work packages at every level represents 100% of the scope of their parent element with zero non-essential additions.
2. **Mutually Exclusive Elements (MECE):** No work package or sub-deliverable overlaps with another branch. This prevents duplicate coding effort and double-counting of labor or cost.
3. **Deliverable Orientation:** Each node in the tree represents a concrete, verifiable outcome (e.g., `Mongoose Schemas`, `JWT Auth Middleware`, `Recharts Dashboard View`) rather than an ambiguous ongoing activity.
4. **The 8/80 Rule:** Decomposition terminates at Level 4, where each terminal work package represents between **8 and 80 person-hours** of engineering effort, ensuring that tasks are small enough to estimate accurately and large enough to avoid micromanagement.
5. **Single Responsibility Principle:** Every terminal work package is assigned to exactly one primary engineer (**Vaidik Rokad** for Backend/DevOps or **Rishi Detroja** for Frontend/UI), ensuring clear accountability.

### WBS Level Definitions

| Level | Classification | Description | Example from FleetFlow |
| :---: | :--- | :--- | :--- |
| **Level 1** | **Overall Project** | The complete system deliverable. | `1.0 FleetFlow Fleet Management System` |
| **Level 2** | **Major Phase / Subsystem** | Major lifecycle phase or architectural subsystem. | `1.3 Backend & Core Engine Development` |
| **Level 3** | **Sub-Deliverable / Module** | Functional component or service module within a subsystem. | `1.3.4 Trip Dispatch & Routing Module` |
| **Level 4** | **Terminal Work Package** | Concrete, assignable, and testable engineering work package. | `1.3.4.2 Implement Cargo Overload Validation Hook` |

---

## 🌲 4. Hierarchical Work Breakdown Structure (WBS Tree)

Below is the complete 4-level hierarchical Work Breakdown Structure for **FleetFlow**:

```text
1.0 FleetFlow Intelligent Fleet & Logistics Management System
├── 1.1 Project Initiation & Requirements Engineering
│   ├── 1.1.1 Requirement Gathering & Stakeholder Elicitation
│   │   ├── 1.1.1.1 Conduct logistics dispatcher and fleet manager interviews
│   │   ├── 1.1.1.2 Analyze legacy paper logbooks and manual dispatch workflows
│   │   ├── 1.1.1.3 Formulate Software Requirements Specification (SRS)
│   │   └── 1.1.1.4 Review and baseline requirements with project stakeholders
│   ├── 1.1.2 Feasibility Study & Architecture Evaluation
│   │   ├── 1.1.2.1 Perform technical feasibility study (Node.js, MongoDB, React 19)
│   │   ├── 1.1.2.2 Perform economic and operational feasibility assessment
│   │   └── 1.1.2.3 Define cloud containerization feasibility (Docker)
│   └── 1.1.3 Project Planning & Baseline Establishment
│       ├── 1.1.3.1 Define project scope and boundary constraints
│       ├── 1.1.3.2 Formulate Software Project Management Plan (SPMP)
│       ├── 1.1.3.3 Create 4-week Agile milestone roadmap and sprint backlog
│       └── 1.1.3.4 Construct Risk Management Matrix and mitigation protocols
├── 1.2 System & UI/UX Design
│   ├── 1.2.1 System & Technical Architecture Design
│   │   ├── 1.2.1.1 Define 3-tier client-server architectural pattern
│   │   ├── 1.2.1.2 Define Express MVC folder structure and service layering
│   │   └── 1.2.1.3 Define RESTful API endpoint contract specifications
│   ├── 1.2.2 Database & Data Model Design
│   │   ├── 1.2.2.1 Construct Entity-Relationship (ER) diagram for collections
│   │   ├── 1.2.2.2 Design Mongoose schemas (Users, Vehicles, Drivers, Trips, Maintenance, Expenses)
│   │   └── 1.2.2.3 Define database indexes, integrity rules, and cascade strategies
│   ├── 1.2.3 User Interface & Experience (UI/UX) Design
│   │   ├── 1.2.3.1 Create low-fidelity wireframes for dashboard and management views
│   │   ├── 1.2.3.2 Design color palette, dark mode theme tokens, and typography system
│   │   └── 1.2.3.3 Design interactive modal forms and responsive layout grids
│   └── 1.2.4 Security & Governance Design
│       ├── 1.2.4.1 Design JWT stateless authentication flow with httpOnly cookie storage
│       ├── 1.2.4.2 Formulate Role-Based Access Control (RBAC) authorization matrix
│       └── 1.2.4.3 Design input validation rules and error serialization format
├── 1.3 Backend & Core Engine Development [Lead: Vaidik Rokad]
│   ├── 1.3.1 Authentication & RBAC Security Module
│   │   ├── 1.3.1.1 Implement user registration and bcrypt password hashing (10 rounds)
│   │   ├── 1.3.1.2 Implement JWT token generation and cookie verification middleware
│   │   └── 1.3.1.3 Implement role-guard authorization middleware (manager, dispatcher, etc.)
│   ├── 1.3.2 Vehicle & Fleet Asset Management Engine
│   │   ├── 1.3.2.1 Implement Vehicle CRUD controller with VIN and capacity validations
│   │   ├── 1.3.2.2 Implement vehicle status state machine (available, on_trip, in_shop, retired)
│   │   └── 1.3.2.3 Implement vehicle odometer update and telemetry logging
│   ├── 1.3.3 Driver Registry & Compliance Engine
│   │   ├── 1.3.3.1 Implement Driver profile CRUD with CDL credential storage
│   │   ├── 1.3.3.2 Implement automated license expiry verification guard
│   │   └── 1.3.3.3 Implement driver duty status and safety rating updater
│   ├── 1.3.4 Trip Dispatching & Routing Operations Engine
│   │   ├── 1.3.4.1 Implement Trip creation and dispatch controller
│   │   ├── 1.3.4.2 Implement Cargo Overload Validation Hook (cargoWeight <= maxCapacity)
│   │   └── 1.3.4.3 Implement trip completion, duration calculation, and odometer sync
│   ├── 1.3.5 Maintenance Lifecycle Management Engine
│   │   ├── 1.3.5.1 Implement service work order creation and priority assignment
│   │   ├── 1.3.5.2 Implement atomic vehicle status lock (locks vehicle to in_shop)
│   │   └── 1.3.5.3 Implement service resolution and auto-unlock (restores vehicle to available)
│   └── 1.3.6 Expense & Cost Accounting Module
│       ├── 1.3.6.1 Implement itemized trip expense logging (Fuel, Toll, Repairs, Lodging)
│       ├── 1.3.6.2 Implement fuel economy calculator (km/L and operational cost/km)
│       └── 1.3.6.3 Implement aggregated financial metrics calculation for analytics
├── 1.4 Frontend & UI/UX Development [Lead: Rishi Detroja]
│   ├── 1.4.1 App Shell & Design System Foundation
│   │   ├── 1.4.1.1 Initialize React 19 + Vite application scaffold
│   │   ├── 1.4.1.2 Build CSS variable design system tokens (colors, typography, glassmorphism)
│   │   └── 1.4.1.3 Create reusable UI components (Buttons, Cards, Badges, Modals, Tables)
│   ├── 1.4.2 Authentication & Protected Navigation
│   │   ├── 1.4.2.1 Implement Login view with credential validation and error states
│   │   ├── 1.4.2.2 Implement AuthContext and client-side session state management
│   │   └── 1.4.2.3 Implement role-guarded sidebar navigation with permission filtering
│   ├── 1.4.3 Fleet Management Views (Vehicles & Drivers)
│   │   ├── 1.4.3.1 Build Vehicle Registry table with search, filters, and status badges
│   │   ├── 1.4.3.2 Build Vehicle Create/Edit modal form with payload capacity fields
│   │   └── 1.4.3.3 Build Driver Management view with CDL license expiry indicators
│   ├── 1.4.4 Trip Dispatching & Live Operations UI
│   │   ├── 1.4.4.1 Build Trip Dispatcher form with auto-populated vehicle/driver dropdowns
│   │   ├── 1.4.4.2 Implement client-side overload warning and license check feedback
│   │   └── 1.4.4.3 Build Active Trips tracking table with status transition action buttons
│   ├── 1.4.5 Maintenance Tracking & Expense Logging UI
│   │   ├── 1.4.5.1 Build Maintenance Work Orders board with priority color tags
│   │   ├── 1.4.5.2 Build Expense Logging modal form with category selectors
│   │   └── 1.4.5.3 Build Financial Analyst expense audit and approval interface
│   ├── 1.4.6 Visual Analytics & Interactive Dashboard
│   │   ├── 1.4.6.1 Build real-time KPI overview cards (Active Fleet, In-Shop, Spend)
│   │   ├── 1.4.6.2 Integrate Recharts Donut chart for Vehicle Status distribution
│   │   └── 1.4.6.3 Integrate Recharts Stacked/Bar chart for Monthly Trips vs Expense trends
│   └── 1.4.7 Reporting & Data Export Utilities
│       ├── 1.4.7.1 Implement client-side PDF executive report generator
│       └── 1.4.7.2 Implement CSV data export utility for Trips, Vehicles, and Expenses
├── 1.5 DevOps, Containerization & Build Automation
│   ├── 1.5.1 Environment Configuration & Secret Management
│   │   ├── 1.5.1.1 Configure environment variables (.env.example, PORT, MONGO_URI, JWT_SECRET)
│   │   └── 1.5.1.2 Set up development scripts in package.json (dev, start, build)
│   ├── 1.5.2 Docker Containerization
│   │   ├── 1.5.2.1 Author multi-stage production Dockerfile with Alpine Node runtime
│   │   └── 1.5.2.2 Configure .dockerignore to optimize container build context
│   └── 1.5.3 Build & Automation Scripts
│       ├── 1.5.3.1 Develop automated Windows rebuild script (rebuild.bat)
│       └── 1.5.3.2 Develop automated Unix/Linux shell rebuild script (rebuild.sh)
├── 1.6 Testing & Quality Assurance
│   ├── 1.6.1 Backend API Unit & Integration Testing
│   │   ├── 1.6.1.1 Create Postman Collection covering all API endpoints
│   │   └── 1.6.1.2 Execute automated API integration tests and assert response codes
│   ├── 1.6.2 Frontend Component & UI Responsiveness Testing
│   │   ├── 1.6.2.1 Perform cross-browser compatibility tests (Chrome, Edge, Firefox, Safari)
│   │   └── 1.6.2.2 Verify mobile and tablet responsive layout breakpoints
│   ├── 1.6.3 Security, RBAC & Edge-Case Validation
│   │   ├── 1.6.3.1 Validate RBAC rejection rules (verify 403 status for unauthorized roles)
│   │   └── 1.6.3.2 Execute safety edge-case tests (cargo overload and expired license rejection)
│   └── 1.6.4 User Acceptance Testing (UAT)
│       ├── 1.6.4.1 Formulate UAT test scenarios and dispatch workflow test scripts
│       └── 1.6.4.2 Execute UAT with mock dispatchers and log defect resolutions
├── 1.7 Deployment, Data Seeding & Verification
│   ├── 1.7.1 Container Deployment & Network Verification
│   │   ├── 1.7.1.1 Build and deploy Docker container locally and verify port bindings
│   │   └── 1.7.1.2 Validate MongoDB connectivity and container health checks
│   └── 1.7.2 Seed Data Population & Workflow Verification
│       ├── 1.7.2.1 Create automated database seed script with realistic fleet records
│       └── 1.7.2.2 Execute end-to-end smoke test across full dispatch and maintenance cycle
└── 1.8 Project Closure, Documentation & Final Artifacts
    ├── 1.8.1 Technical Architecture & API Documentation
    │   ├── 1.8.1.1 Author comprehensive project README with setup and deployment guide
    │   └── 1.8.1.2 Document REST API endpoints and data model schemas
    ├── 1.8.2 User Manuals & Operational Guidelines
    │   ├── 1.8.2.1 Author Role-Based User Manual for Managers, Dispatchers, and Safety Officers
    │   └── 1.8.2.2 Create troubleshooting and error resolution guide
    └── 1.8.3 SPM Project Closeout & Final Artifacts
        ├── 1.8.3.1 Prepare SPM Tutorial Task Deliverables (SPMP, WBS, Scheduling, Metrics)
        └── 1.8.3.2 Conduct final project retrospective and archive development baseline
```

---

## 📊 5. Tabular Representation of the WBS (Level 2 Summary)

The table below summarizes the eight Level-2 phases of the FleetFlow WBS, their primary deliverable artifacts, responsible engineering leads, and estimated durations:

| WBS Code | Major Project Phase | Primary Deliverable Artifacts | Responsible Owner | Estimated Duration |
| :---: | :--- | :--- | :--- | :---: |
| **1.1** | **Project Initiation & Requirements Engineering** | Software Requirements Specification (SRS), Feasibility Report, SPMP Document | Vaidik Rokad & Rishi Detroja | **1.0 Week** |
| **1.2** | **System & UI/UX Design** | System Architecture Diagram, Mongoose ER Schemas, UI Wireframes & Theme Tokens | Vaidik Rokad & Rishi Detroja | **1.0 Week** |
| **1.3** | **Backend & Core Engine Development** | Express RESTful API, JWT Auth/RBAC Middleware, Business Logic Validation Engines | Vaidik Rokad | **1.5 Weeks** |
| **1.4** | **Frontend & UI/UX Development** | React 19 Application Shell, Management Views, Recharts Analytics, PDF/CSV Exports | Rishi Detroja | **1.5 Weeks** |
| **1.5** | **DevOps, Containerization & Build Automation** | Production Dockerfile, `.env.example`, `rebuild.bat`, `rebuild.sh` Automation | Vaidik Rokad | **0.5 Week** |
| **1.6** | **Testing & Quality Assurance** | Postman API Test Suite, RBAC Security Audit Report, UAT Defect Log | Vaidik Rokad & Rishi Detroja | **1.0 Week** |
| **1.7** | **Deployment, Data Seeding & Verification** | Containerized Local Runtime, Database Seeder (`seed.js`), Smoke Test Sign-Off | Vaidik Rokad | **0.5 Week** |
| **1.8** | **Project Closure, Documentation & Artifacts** | User Manual, Master README, SPM Tutorial Task Reports (T1–T6) | Vaidik Rokad & Rishi Detroja | **0.5 Week** |

---

## 📖 6. WBS Dictionary for Selected Work Packages

The **WBS Dictionary** provides detailed specifications for representative terminal work packages (Level 4), detailing the scope of work, technical inputs, required deliverables, and objective acceptance criteria:

| WBS Code | Work Package Name | Assignee | Work Description | Technical Inputs | Output / Deliverable | Objective Acceptance Criteria |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| **1.2.2.2** | **Design Mongoose Schemas** | Vaidik Rokad | Define Mongoose data schemas for User, Vehicle, Driver, Trip, Expense, and Maintenance models with required field constraints and enumerations. | SRS data dictionary, ER diagrams | Six schema files (`*.model.js`) | Schemas enforce required types, enum constraints (`status`, `role`), and timestamps. |
| **1.3.1.2** | **JWT & Cookie Middleware** | Vaidik Rokad | Implement stateless token generator upon login and Express middleware to decode tokens stored in HTTP-only cookies. | Express setup, User model, JWT Secret | `auth.middleware.js`, `auth.controller.js` | Returns HTTP 401 Unauthorized for missing/tampered tokens; attaches decoded `req.user` payload. |
| **1.3.4.2** | **Cargo Overload Guard** | Vaidik Rokad | Implement business validation logic in `trip.controller.js` checking that cargo load does not exceed vehicle capacity. | Trip creation payload, Vehicle capacity spec | Trip controller validation hook | Rejects trip creation with HTTP 400 and error message `"Cargo weight exceeds vehicle maximum capacity"`. |
| **1.3.5.2** | **Maintenance Status Lock** | Vaidik Rokad | Implement atomic Mongoose hook transitioning vehicle status to `in_shop` whenever a maintenance work order is opened. | Maintenance order payload, Vehicle collection | `maintenance.controller.js` logic | Vehicle status automatically switches to `in_shop` and cannot be selected for new trips. |
| **1.4.1.2** | **CSS Design System Tokens** | Rishi Detroja | Build custom CSS variables for dark-mode palette, typography hierarchy, card surfaces, and responsive breakpoints in vanilla CSS. | UI Wireframes, Color specifications | `index.css` design system | Clean, cohesive dark UI with zero layout breakage across desktop ($1920\text{px}$) and mobile ($375\text{px}$). |
| **1.4.6.2** | **Recharts Donut Chart** | Rishi Detroja | Integrate Recharts library to render an interactive donut chart showing real-time Vehicle Status Distribution. | Vehicle status aggregate API data | `DashboardView.jsx` chart component | Dynamic slice colors matching status types (`available`: green, `on_trip`: blue, `in_shop`: amber); responsive resize. |
| **1.5.2.1** | **Dockerfile Authoring** | Vaidik Rokad | Write optimized multi-stage `Dockerfile` using lightweight `node:18-alpine` base image. | Project dependencies, Express server script | `Dockerfile`, `.dockerignore` | Container builds with zero errors; memory footprint $\le 500\text{ MB}$; runs via `docker run -p 3000:3000`. |
| **1.6.1.1** | **Postman Test Collection** | Vaidik Rokad | Build comprehensive Postman test suite with automated test assertions for all CRUD, auth, and validation endpoints. | API Endpoint Specifications | `FleetFlow.postman_collection.json` | 100% of defined API request tests pass with assertions validating HTTP status codes and JSON response bodies. |
| **1.7.2.1** | **Database Seed Script** | Vaidik Rokad | Develop automated Node.js seed script (`seed.js`) populating realistic demo users, vehicles, drivers, past trips, and expenses. | Mongoose Models, Sample test dataset | `backend/seed.js` script | Running `node seed.js` clears old collections and successfully inserts sanitized demo records into MongoDB. |

---

## 💡 7. Benefits of the Prepared WBS for FleetFlow

1. **Definitive Scope Boundary:** The WBS establishes clear system boundaries, preventing scope creep by ensuring that every line of code written maps directly to a defined work package.
2. **Bottom-Up Estimation Precision:** Effort, staffing, and time estimates are calculated at the 8–80 hour work package level and rolled up, ensuring far greater accuracy than top-down guessing.
3. **Unambiguous Ownership & Accountability:** With dedicated leads (**Vaidik Rokad** for Backend/DevOps and **Rishi Detroja** for Frontend/UI), there is zero ambiguity regarding who builds, tests, and owns each feature.
4. **Foundational Precursor to Task-5 (Scheduling):** The Level-4 terminal work packages serve as the exact activity list for constructing the Activity Network Diagram (CPM) and Gantt Chart in the upcoming scheduling tutorial.
5. **Objective Progress Measurement:** Project completion is tracked through verified deliverable milestones rather than subjective percentage claims, enabling early detection of delays.
6. **Risk Isolation:** Critical architectural risks (such as cargo overloading, license expiry checks, and Docker container memory limits) are mapped directly to specific work packages and mitigated early.

---

## 🎯 8. Conclusion & Sign-Off

A comprehensive, 4-level hierarchical Work Breakdown Structure has been successfully developed for the **FleetFlow Intelligent Fleet & Logistics Management System**. The structure decomposes the complete project into eight major Level-2 phases, 28 Level-3 sub-modules, and 62 Level-4 terminal work packages satisfying the 100% and 8/80 rules. 

This WBS provides the definitive structural baseline for all subsequent software project management tasks, including activity precedence networking, critical path analysis, Gantt scheduling (Task-5), and project metric calculations (Task-6).

### Baseline Approvals:

* **Vaidik Rokad (23BCE291)** — *Backend & DevOps Lead* `[ Signed: 2026-08-18 ]`
* **Rishi Detroja (23BCE288)** — *Frontend & UI/UX Lead* `[ Signed: 2026-08-18 ]`
