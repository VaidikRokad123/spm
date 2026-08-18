# Software Project Management: Task-4 (PLT-4)
## Student: Vaidik Rokad (23BCE291)
### Project: FleetFlow (Work Breakdown Structure - WBS: Backend & Infrastructure)

---

## 📌 Overview
Task-4 requires developing a hierarchical **Work Breakdown Structure (WBS)** for the selected software project (**FleetFlow**). The WBS breaks down the project into manageable levels (Level 1 Project -> Level 2 Subsystems -> Level 3 Work Packages -> Level 4 Specific Tasks).

---

## 🌲 1. Hierarchical Work Breakdown Structure (WBS Tree)

```text
1.0 FleetFlow System (Backend & Database Infrastructure)
├── 1.1 System Core & Server Architecture
│   ├── 1.1.1 Express.js Server Initialization
│   ├── 1.1.2 Database Connection Module (MongoDB / Mongoose)
│   └── 1.1.3 Central Error Handling Middleware
├── 1.2 Database Schemas & Data Modeling
│   ├── 1.2.1 User & Auth Schema (Bcrypt Password Hashing)
│   ├── 1.2.2 Vehicle Registry Schema (Capacity, Type, Odometer)
│   ├── 1.2.3 Driver Registry Schema (License Validity, Status)
│   ├── 1.2.4 Trip Operations Schema (Weight Check, Route)
│   └── 1.2.5 Financial Schemas (Expense Log, Maintenance Service)
├── 1.3 Security & API Routing
│   ├── 1.3.1 JWT Token Generation & Cookie Cookie Auth
│   ├── 1.3.2 Role-Based Access Control (RBAC) Guard (Manager, Dispatcher, Safety, Finance)
│   └── 1.3.3 Input Payload Validation (express-validator)
├── 1.4 Business Logic & Automation Rules
│   ├── 1.4.1 Overload Check (cargoWeight > vehicle.maxCapacity)
│   ├── 1.4.2 License Expiry Guard for Driver Assignment
│   └── 1.4.3 Auto-Sync Vehicle Status (In Shop <-> Available)
└── 1.5 DevOps & Deployment
    ├── 1.5.1 Dockerfile & .dockerignore Configuration
    └── 1.5.2 Automated Rebuild Scripts (rebuild.sh & rebuild.bat)
```

---

## 📖 2. WBS Dictionary (Work Package Details)

| WBS Code | Work Package Name | Assignee | Output / Deliverable | Acceptance Criteria |
| :--- | :--- | :--- | :--- | :--- |
| **1.1.1** | Server Initialization | Vaidik Rokad | `server.js` & `app.js` | Express app listens on port 3000 with CORS & JSON parser. |
| **1.2.1** | User Schema & Auth | Vaidik Rokad | `user.model.js` | Passwords hashed using bcrypt prior to database insert. |
| **1.3.2** | RBAC Middleware | Vaidik Rokad | `auth.middleware.js` | Rejects unauthorized roles with 403 Forbidden status code. |
| **1.4.1** | Trip Weight Check | Vaidik Rokad | `trip.controller.js` | Returns 400 error if cargo weight exceeds vehicle capacity. |
| **1.4.3** | Maintenance Auto-Sync | Vaidik Rokad | `maintenance.controller.js` | Locks vehicle as `in_shop` during active maintenance. |
| **1.5.1** | Docker Setup | Vaidik Rokad | `Dockerfile` | Image builds cleanly with Node 18 Alpine runtime. |

---

## 📊 3. WBS Work Breakdown by Phase

1. **Phase 1: Planning & Schema Architecture (WBS 1.1 - 1.2)**
   - Designing collections, compound indexes, and entity relationships.
2. **Phase 2: Security & Core Controllers (WBS 1.3 - 1.4)**
   - Implementing authentication, token verification, and operational constraint checks.
3. **Phase 3: Containerization & Verification (WBS 1.5)**
   - Wrapping server in Docker container and running Postman API integration tests.
