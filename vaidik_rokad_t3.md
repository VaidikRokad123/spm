# Software Project Management Plan (SPMP): Task-3 (PLT-3)
## Student: Vaidik Rokad (23BCE291)
### Project: FleetFlow (Backend & DevOps SPMP)

---

## 📌 Overview
Task-3 requires preparing a **Software Project Management Plan (SPMP)** for the selected software project (**FleetFlow**). The plan defines the project scope, key assumptions, development milestones, and team role distribution.

---

## 🔍 1. Detailed Project Scope

### In-Scope (Backend & Infrastructure):
* **User & Auth Management:** Secure login, JWT token cookie generation, role-based protection (`manager`, `dispatcher`, `safety_officer`, `financial_analyst`).
* **Database Architecture:** Mongoose schemas and MongoDB setup for Users, Vehicles, Drivers, Trips, Expenses, and Maintenance collections.
* **Business Validation Guardrails:**
  * Blocking trip dispatch if `cargoWeight > maxCapacity`.
  * Blocking driver assignment if license expiry date is passed.
  * Auto-syncing vehicle status to `in_shop` when maintenance is created, and restoring to `available` upon service completion.
* **Containerization:** Docker container setup with `Dockerfile` and automated rebuild scripts (`rebuild.sh`, `rebuild.bat`).

### Out-of-Scope:
* Hardware IoT GPS physical tracker installation on trucks.
* Live third-party payment gateway processing (handled via manual expense logs).

---

## 📋 2. Project Assumptions & Constraints

### Key Assumptions:
* **Technical:** A stable MongoDB database instance (local or MongoDB Atlas) and Node.js v18+ runtime environment will be available throughout development.
* **Operational:** Development is executed by a 2-person team (Vaidik Rokad for Backend/DevOps and Rishi Detroja for Frontend/UI) working in 1-week iterative sprints.
* **Data Privacy:** Employee license data and cost information will remain internal to the system with RBAC enforcement.

### Key Constraints:
* **Timeline:** Project must be designed, integrated, and verified within a 4-week academic development lifecycle.
* **Resource Limits:** Docker containers must run efficiently on standard development workstations (< 500MB RAM footprint per container).

---

## 🗓️ 3. Project Milestones & Timeline

| Milestone | Deliverable / Activity | Target Schedule | Responsible |
| :--- | :--- | :--- | :--- |
| **M1: Requirements & DB Modeling** | Scope finalization, ER diagramming, and Mongoose schema definitions | Week 1 | Vaidik Rokad |
| **M2: Auth & Middleware Security** | Express server setup, JWT cookie auth, RBAC middleware, and error handling | Week 2 | Vaidik Rokad |
| **M3: Business Logic & Controllers** | CRUD controllers for Vehicles, Drivers, Trips, Expenses, and Maintenance with validation rules | Week 3 | Vaidik Rokad |
| **M4: Dockerization & API Testing** | Dockerizing backend container, creating Postman collections, and backend integration testing | Week 4 | Vaidik Rokad |

---

## 👥 4. Team Roles & Responsibilities (RACI Matrix)

* **R** = Responsible (does the work)
* **A** = Accountable (ensures quality & final approval)
* **C** = Consulted (provides input)
* **I** = Informed (receives updates)

| Task / Activity | Vaidik Rokad (Backend) | Rishi Detroja (Frontend) | Fleet Manager / Client |
| :--- | :---: | :---: | :---: |
| Requirements & Scope | **A / R** | **C** | **I** |
| Database & Schema Design | **A / R** | **C** | **I** |
| API Route Security & JWT Auth | **A / R** | **I** | **I** |
| UI/UX Layout & Dashboard Charts | **I** | **A / R** | **C** |
| Business Validation Rules Logic | **A / R** | **C** | **I** |
| Containerization & Docker Setup | **A / R** | **I** | **I** |
