# Software Project Management Plan (SPMP) Report

## Project Title: FleetFlow — Modern Intelligent Fleet & Logistics Management System

### Academic Course: Software Project Management (SPM)
### Student Details:
* **Vaidik Rokad (23BCE291)** — Backend & DevOps Engineering Lead
* **Rishi Detroja (23BCE288)** — Frontend & UI/UX Engineering Lead

---

## 📌 1. Executive Summary & System Overview

This **Software Project Management Plan (SPMP)** establishes the operational framework, architectural scope, delivery schedule, risk management matrix, team governance, and resource allocation for engineering and deploying **FleetFlow** — a production-ready, modular, and cloud-capable Fleet & Logistics Management System.

### 1.1 Problem Statement & Strategic Objective
Modern logistics companies face major operational challenges due to fragmented spreadsheets, manual paper logbooks, uncoordinated dispatching, lack of automated safety guardrails, and opaque operational expenditures. Dispatchers frequently risk road safety and legal compliance by inadvertently assigning cargo loads exceeding vehicle payload capacities or assigning drivers with expired commercial licenses. Furthermore, vehicle maintenance downtime is often untracked in real time, leading to double-booking and catastrophic on-road breakdowns.

The primary strategic objective of **FleetFlow** is to replace disconnected, error-prone manual logistics workflows with a centralized, role-governed web platform. FleetFlow serves as a single source of truth for fleet assets, trip lifecycles, driver compliance records, preventative maintenance workflows, and granular operating expenditures (fuel, tolls, repairs).

---

### 1.2 In-Scope Functional & Technical Modules

```
                                  ┌─────────────────────────────────────────┐
                                  │       FleetFlow Enterprise System       │
                                  └────────────────────┬────────────────────┘
                                                       │
         ┌──────────────────┬──────────────────────────┼──────────────────────────┬──────────────────┐
         │                  │                          │                          │                  │
         ▼                  ▼                          ▼                          ▼                  ▼
┌─────────────────┐┌─────────────────┐   ┌───────────────────────────┐   ┌─────────────────┐┌─────────────────┐
│ Vehicle & Asset ││ Driver Credential│   │ Trip Dispatch & Routing   │   │ Maintenance &   ││ Fuel & Expense  │
│ Lifecycle Mgmt  ││ Compliance Guard │   │ (Payload & Safety Checks) │   │ Auto-Sync Engine││ Analytics Portal│
└─────────────────┘└─────────────────┘   └───────────────────────────┘   └─────────────────┘└─────────────────┘
```

#### A. Vehicle & Asset Lifecycle Management
* **Central Asset Registry:** Digital tracking of vehicle fleet profiles including VIN, make, model, year, license plate, fuel type, and odometer readings.
* **Vehicle Categorization:** Granular classification by capacity and type (`Truck`, `Van`, `Semi`, `Tanker`, `Flatbed`).
* **Real-Time Operational States:** Automated tracking of state transitions (`available` ➔ `on_trip` ➔ `in_shop` ➔ `retired`).
* **Capacity Specifications:** Enforced definitions for maximum payload weight (kg) and volumetric cargo capacity.

#### B. Driver Credentialing & Compliance Management
* **Driver Master Records:** Centralized directory containing legal name, phone, email, assigned vehicle, and Commercial Driver's License (CDL) numbers.
* **Automated License Validity Guard:** Algorithmic verification preventing driver assignment to any dispatch route if the license expiry date is passed or within a grace threshold.
* **Driver Duty Status:** Dynamic state management (`active`, `on_trip`, `suspended`, `on_leave`, `inactive`).
* **Safety & Performance History:** Incident logs, safety rating scores, and historical trip completion metrics.

#### C. Trip Dispatching & Operational Routing
* **Trip Lifecycle Pipeline:** End-to-end management across stages (`scheduled` ➔ `dispatched` ➔ `in_progress` ➔ `completed` ➔ `cancelled`).
* **Automated Overload Protection:** Strict business rule blocking trip creation/dispatch if `cargoWeight > vehicle.maxCapacity`, returning structured validation errors.
* **Intelligent Driver-Vehicle Pairing:** Validation ensuring only drivers with status `active` and vehicles with status `available` are assigned.
* **Route & Cargo Tracking:** Logging origin, destination, cargo classification, estimated departure, and actual arrival timestamps.

#### D. Maintenance Lifecycle & Asset Status Sync
* **Service Work Orders:** Preventative, corrective, and emergency maintenance tickets with priority levels (`low`, `medium`, `high`, `critical`).
* **Bidirectional Vehicle Status Synchronization:**
  * When a maintenance service order is initiated, the vehicle status automatically transitions to `in_shop`.
  * When the service order is marked `completed` or `resolved`, the vehicle status is restored to `available`.
* **Cost & Vendor Tracking:** Capturing spare parts costs, labor charges, mechanic notes, and next service odometer milestones.

#### E. Granular Expense Accounting & Fuel Analytics
* **Trip Expense Logging:** Itemized tracking of operating costs categorized into `fuel`, `toll`, `maintenance`, `lodging`, `permit`, and `other`.
* **Fuel Efficiency Computation:** Calculating real-time fuel efficiency metrics ($\text{km/L}$) and operational cost per kilometer ($\text{Cost/km}$).
* **Vehicle ROI & Cost Allocation:** Aggregating total ownership and running costs per vehicle to identify underperforming or high-cost assets.

#### F. Executive Dashboard, Interactive Charts & Export Tools
* **Real-Time KPI Metric Cards:** Instantaneous summary counts for Total Vehicles, Active Drivers, Ongoing Trips, Vehicles In-Shop, and Monthly Operating Costs.
* **Visual Analytics (Recharts):**
  * Interactive Pie/Donut charts displaying Vehicle Status Distribution.
  * Interactive Stacked/Bar charts illustrating Monthly Trips vs Expense Trends.
* **Enterprise Reporting Engine:**
  * PDF summary report generation for audit and executive review.
  * CSV/Excel data export utilities for tabular records (Trips, Expenses, Vehicle Registry).

#### G. Enterprise Platform Architecture & Security Foundations
* **Role-Based Access Control (RBAC):** Strict four-tier permission model tailored for:
  1. `manager` — Full administrative control across all resources, users, and financial reports.
  2. `dispatcher` — Creation and assignment of trips, vehicle availability checks, and driver dispatching.
  3. `safety_officer` — Driver compliance auditing, license validity reviews, incident reports, and maintenance checks.
  4. `financial_analyst` — Expense approval, operating cost breakdowns, fuel efficiency analytics, and export generation.
* **Authentication & Session Security:** Stateless JSON Web Token (JWT) architecture delivered via secure `httpOnly` cookies with bcrypt password hashing (10 salt rounds).
* **RESTful Backend Architecture:** Modular Express.js MVC structure with structured Mongoose schemas, schema validations, and centralized error-handling middleware.
* **Containerized Deployment:** Multi-stage Docker configuration ensuring environment parity across development, testing, and production.

---

### 1.3 Explicit System Exclusions (Out-of-Scope)
* **Physical Hardware Manufacturing:** Custom design or assembly of OBD-II / CAN-bus GPS tracker physical hardware.
* **Automated Banking Clearance:** Direct integration with banking payment gateways (manual financial logging and approval workflows are used).
* **Multi-National Customs Compliance:** International cross-border customs declarations and currency exchange rate fluctuations outside domestic operating regulations.
* **Native Mobile Binary Compilation:** Native Swift/Kotlin application store packages (the application is architected as an ultra-responsive Progressive Web Application accessible on all mobile and desktop browsers).

---

## 📋 2. Operational Constraints & Foundational Assumptions

### 2.1 Foundational Assumptions
1. **Technical Infrastructure:** A stable Node.js runtime (v18.x LTS or higher) and MongoDB database instance (local MongoDB Community Server or cloud MongoDB Atlas) will remain accessible throughout all development and testing phases.
2. **Team Organization:** Development is executed by an agile, dedicated 2-engineer engineering pod:
   * **Vaidik Rokad** — Lead Backend, Database, Security & DevOps Engineer.
   * **Rishi Detroja** — Lead Frontend, UI/UX, State Management & Visual Analytics Engineer.
3. **Data Integrity:** Initial seed datasets for vehicles, drivers, past trip logs, and expense records are validated against schema constraints prior to integration testing.
4. **Client & Regulatory Standards:** Fleet operating assumptions adhere to standard transportation safety laws (mandatory valid commercial licensing and strict prohibition of vehicle cargo overloading).

### 2.2 Project Constraints
* **Schedule Constraint:** The entire system development lifecycle — including planning, architecture, implementation, automated testing, and documentation — must be completed within a strict **4-week timeline**.
* **Performance Budget:**
  * Backend REST API response latency must remain strictly **$\le 100\text{ ms}$** for all standard CRUD operations under normal load.
  * Frontend initial page load time must stay under **$1.5\text{ seconds}$**, maintaining a smooth 60 FPS UI interaction.
* **Resource & Memory Footprint:** Containerized Docker instances must run smoothly on standard development workstations with memory consumption constrained to **$\le 500\text{ MB}$** per service container.
* **Security Constraints:** Passwords must never be stored in plain text; all authentication tokens must expire within configured lifetimes and be protected against XSS/CSRF attacks.

---

## 🗓️ 3. Execution Schedule & Milestone Roadmap

The project follows an iterative 4-week Agile development roadmap divided into five milestone deliverables:

```
Week 1                Week 2                Week 3                Week 4
[ M1: Kickoff & SRS ] ──► [ M2/M3: Core Dev ] ──► [ M4: Business Logic] ──► [ M5: Integration & QA ]
  - Scope & Schemas         - Backend APIs          - Overload / Sync         - Docker & Tests
  - UI Wireframes           - React Dashboards      - Recharts & Exports      - Final Handover
```

### Milestone Roadmap Table

| Milestone ID | Phase / Deliverable | Key Technical Deliverables | Target Schedule | Responsible Lead |
| :--- | :--- | :--- | :--- | :--- |
| **M1** | **Project Kickoff & Requirements Analysis** | • Software Requirements Specification (SRS)<br>• Entity Relationship (ER) Data Model<br>• UI/UX Wireframes & Component Specs<br>• Initial SPMP and WBS Documentation | **Week 1** | Vaidik Rokad & Rishi Detroja |
| **M2** | **Core Backend Architecture & Auth Security** | • Express.js MVC Server Setup<br>• Mongoose Schemas (User, Vehicle, Driver, Trip, Expense, Maintenance)<br>• JWT Authentication & Cookie Security<br>• Role-Based Access Control (RBAC) Middleware | **Week 2** | Vaidik Rokad |
| **M3** | **Frontend Component System & UI Foundation** | • React 19 + Vite Application Shell<br>• Modern Design System & CSS Tokens (`index.css`)<br>• Responsive Navigation Sidebar & Role-Based Menu Filtering<br>• Master Dashboard Layout & Modal Forms | **Week 2** | Rishi Detroja |
| **M4** | **Business Rule Engine & Visual Analytics** | • Cargo Overload Validation Engine<br>• Driver License Expiration Guard<br>• Maintenance Auto-Sync Logic (`in_shop` $\leftrightarrow$ `available`)<br>• Recharts Interactive Visualizations<br>• PDF & CSV Export Utilities | **Week 3** | Vaidik Rokad & Rishi Detroja |
| **M5** | **System Integration, Dockerization & QA** | • Multi-stage Docker Containerization<br>• Automated Build Scripts (`rebuild.bat`, `rebuild.sh`)<br>• Postman API Integration Test Suite<br>• End-to-End User Acceptance Verification<br>• Final SPM Project Closeout & Handover | **Week 4** | Vaidik Rokad & Rishi Detroja |

---

## 👥 4. Organizational Team Structure & Responsibilities

### 4.1 Detailed Role Distribution

```
                       ┌─────────────────────────────────────────────────┐
                       │               Project Management                │
                       │   Vaidik Rokad (Backend) & Rishi Detroja (UI)   │
                       └────────────────────────┬────────────────────────┘
                                                │
                 ┌──────────────────────────────┴──────────────────────────────┐
                 │                                                             │
                 ▼                                                             ▼
┌─────────────────────────────────┐                           ┌─────────────────────────────────┐
│     Vaidik Rokad (23BCE291)     │                           │     Rishi Detroja (23BCE288)    │
│    Backend & DevOps Lead        │                           │    Frontend & UI/UX Lead        │
├─────────────────────────────────┤                           ├─────────────────────────────────┤
│ • MongoDB Database Modeling     │                           │ • React 19 Component Hierarchy  │
│ • Express RESTful API Endpoints │                           │ • CSS Design System & Layouts   │
│ • JWT Authentication & RBAC     │                           │ • Recharts Data Visualization   │
│ • Business Validation Guardrails│                           │ • PDF / CSV Export Integration  │
│ • Docker & Build Automation     │                           │ • Role-Based Navigation UI      │
│ • Postman API Test Suites       │                           │ • Client State & API Services   │
└─────────────────────────────────┘                           └─────────────────────────────────┘
```

### 4.2 Comprehensive RACI Governance Matrix
The **RACI Matrix** establishes unambiguous operational ownership across all functional areas:
* **R — Responsible:** The team member who directly executes the task.
* **A — Accountable:** The team member who holds final decision authority and quality sign-off.
* **C — Consulted:** The team member providing two-way technical input.
* **I — Informed:** The team member kept updated on progress and outcomes.

| Project Activity / Work Package | Vaidik Rokad (Backend / DevOps) | Rishi Detroja (Frontend / UI) | Fleet Stakeholder / Client |
| :--- | :---: | :---: | :---: |
| **1. Requirements Elicitation & SPMP Definition** | **A / R** | **A / R** | **I** |
| **2. Database Schema Modeling (Mongoose/MongoDB)** | **A / R** | **C** | **I** |
| **3. RESTful API Architecture & Routing** | **A / R** | **C** | **I** |
| **4. JWT Cookie Authentication & RBAC Middleware** | **A / R** | **I** | **I** |
| **5. Business Logic: Cargo Overload Validation** | **A / R** | **C** | **I** |
| **6. Business Logic: Driver License Expiry Guard** | **A / R** | **C** | **I** |
| **7. Business Logic: Maintenance Auto-Sync Logic** | **A / R** | **C** | **I** |
| **8. UI/UX Design System, Color Tokens & CSS** | **C** | **A / R** | **I** |
| **9. React Component Architecture & Layout Shell** | **I** | **A / R** | **I** |
| **10. Role-Guarded UI Views & Protected Navigation** | **C** | **A / R** | **I** |
| **11. Interactive Charting Engine (Recharts)** | **I** | **A / R** | **C** |
| **12. PDF Report Generation & CSV Export Tools** | **C** | **A / R** | **C** |
| **13. Docker Containerization & Build Automation** | **A / R** | **I** | **I** |
| **14. API Integration Testing & Postman Suite** | **A / R** | **C** | **I** |
| **15. User Acceptance Testing (UAT) & Sign-Off** | **A / R** | **A / R** | **A / C** |

---

## 💰 5. Resource Allocation & Financial Budget Plan

To ensure sustainable execution, resources and effort are distributed across key operational domains:

```
                            Resource Allocation Breakdown
 ┌────────────────────────────────────────────────────────────────────────────┐
 │  Personnel & Full-Stack Engineering (50%)                                  │
 ├────────────────────────────┬────────────────────────────┬──────────────────┤
 │ Cloud & Database (15%)     │ QA & Testing (15%)         │ Toolchains (10%) │
 ├────────────────────────────┴────────────────────────────┴──────────────────┤
 │ Contingency & Documentation (10%)                                          │
 └────────────────────────────────────────────────────────────────────────────┘
```

| Budget Category | Percentage Allocation | Description & Dedicated Tools |
| :--- | :---: | :--- |
| **Personnel & Engineering** | **50%** | Backend engineering, database design, frontend components, and UI integration labor. |
| **Cloud Infrastructure & Database** | **15%** | MongoDB Atlas cluster provisioning, cloud container hosting, and SSL/TLS certificates. |
| **Testing & Quality Assurance** | **15%** | Postman API test automation, cross-browser compatibility verification, and security vulnerability scans. |
| **Developer Toolchains & CI/CD** | **10%** | Git repository hosting, Docker container registry, package management, and IDE extensions. |
| **Training, Documentation & Contingency** | **10%** | Technical user manual creation, stakeholder walkthroughs, and emergency risk buffers. |

---

## 📡 6. Stakeholder Governance & Communication Strategy

Effective communication ensures seamless synchronization between team members and project evaluators:

| Target Audience | Communication Channel | Frequency | Operational Objective & Deliverable |
| :--- | :--- | :--- | :--- |
| **Core Engineering Pod** (Vaidik & Rishi) | Daily Standup / Slack Sync | **Daily (15 mins)** | Review previous day's deliverables, resolve technical blockers, and align on API contracts. |
| **Sprint Review & Code Demo** | Live Pair Review / Screen Share | **Weekly (End of Sprint)** | End-to-end demonstration of completed features, milestone evaluation, and backlog refinement. |
| **Faculty Guide / Evaluator** | Formal Milestone Review Meetings | **Bi-Weekly** | Presentation of SPMP milestones, architecture walkthrough, and live deployment inspection. |
| **End-Users & Dispatchers** | UAT Feedback Sessions | **Milestone M4 & M5** | Validation of trip dispatching flows, overload validation feedback, and dashboard usability. |

---

## ⚠️ 7. Risk Analysis & Mitigation Matrix

A proactive risk mitigation strategy was formulated to preempt technical and operational bottlenecks:

| Risk ID | Risk Factor & Description | Severity | Likelihood | Impact Area | Proactive Mitigation Strategy |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **R1** | **Trip Cargo Overloading**<br>Dispatcher accidentally enters cargo exceeding truck limits. | **High** | **High** | Safety & Compliance | Enforce server-side validation hook in `trip.controller.js` blocking write operations if `cargoWeight > vehicle.maxCapacity` with clear HTTP 400 response. |
| **R2** | **Expired Driver Dispatch**<br>Assigning a driver with expired or suspended license. | **High** | **Medium** | Legal Compliance | Implement automated date comparison middleware verifying driver's `licenseExpiryDate > Date.now()` prior to trip dispatch confirmation. |
| **R3** | **Maintenance State Desynchronization**<br>Vehicle booked for trip while physically in repair. | **High** | **Medium** | Fleet Operations | Implement atomic Mongoose database update hooks that automatically set `vehicle.status = 'in_shop'` upon work order creation and prevent dispatch. |
| **R4** | **Database Index & Query Bottlenecks**<br>High query latency on large trip and expense datasets. | **Medium** | **Low** | Performance | Create compound MongoDB indexes on frequently queried fields (`vehicleId`, `driverId`, `status`, `createdAt`). |
| **R5** | **Frontend Chart Rendering Lag**<br>Recharts re-rendering multiple times on dashboard state changes. | **Medium** | **Medium** | User Experience | Memoize chart components with `React.useMemo` and optimize aggregate data transformations on the backend before delivery. |
| **R6** | **Scope Creep & Schedule Delay**<br>Addition of complex features jeopardizing 4-week timeline. | **High** | **Medium** | Schedule | Enforce strict Change Control Process (CCP); relegate IoT hardware and native mobile builds to future phases. |

---

## 🎯 8. Project Success Criteria & Sign-Off

The **FleetFlow** project will be deemed successful upon satisfying the following verifiable acceptance criteria:
1. **Functional Completeness:** 100% execution of in-scope vehicle, driver, trip, maintenance, and expense CRUD workflows.
2. **Rule Enforcement:** Zero false-positive bypasses of cargo overload and license validity safety checks.
3. **Security Compliance:** Complete RBAC isolation where unauthorized roles are barred from restricted routes.
4. **Containerized Portability:** Seamless local and cloud orchestration using `docker run` and automated build scripts.
5. **Quality Verification:** Passing 100% of defined Postman integration tests and UAT test cases.

### Baseline Approvals:

* **Vaidik Rokad (23BCE291)** — *Backend & DevOps Lead* `[ Signed: 2026-08-18 ]`
* **Rishi Detroja (23BCE288)** — *Frontend & UI/UX Lead* `[ Signed: 2026-08-18 ]`
