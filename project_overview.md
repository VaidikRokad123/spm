# 🚛 FleetFlow: Project Overview
### Modular Fleet & Logistics Management System

FleetFlow is a centralized, rule-based digital hub designed to optimize the lifecycle of a delivery fleet, monitor driver safety, track operational expenses, and provide real-time dashboard analytics. This project replaces inefficient, manual paper logbooks with a robust, digital system that ensures safety compliance and financial transparency.

---

## 🎯 Core Objectives & Scope

1. **Automation of Fleet Lifecycles:** Replace manual tracking with automated state transitions (e.g., changing vehicle status to `In Shop` when a maintenance log is created and returning it to `Available` once complete).
2. **Safety & Regulatory Compliance:** Enforce constraints like blocking expired-license drivers from trips and preventing payload overloading (`cargoWeight > maxCapacity`).
3. **Financial Transparency:** Track and aggregate fuel expenses, maintenance costs, and acquisition overheads to compute key performance metrics like vehicle ROI % and Cost-per-Kilometer (₹/km).
4. **Role-Based Access Control (RBAC):** Provide custom dashboards and actions tailored to system roles (Fleet Manager, Dispatcher, Safety Officer, and Financial Analyst).

---

## 🏗️ Technical Architecture & Stack

FleetFlow is built on a modern **MERN (MongoDB, Express, React, Node)** stack:

```
┌────────────────────────────────────────────────────────┐
│                    Frontend (React 19 + Vite)          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │  Pages   │  │Components│  │ Context  │  │Services │ │
│  │(11 pages)│  │(Common)  │  │(AuthCtx) │  │(Axios)  │ │
│  └────┬─────┘  └──────────┘  └──────────┘  └────┬────┘ │
│       │              HTTP + JWT (Bearer Token)  │      │
└───────┼─────────────────────────────────────────┼──────┘
        │                                         │
┌───────▼─────────────────────────────────────────▼─────┐
│                    Backend (Express.js)               │
│  ┌──────┐  ┌──────────┐  ┌───────────┐  ┌───────────┐ │
│  │Routes│→ │Middleware│→ │Validators │→ │Controllers│ │
│  │ (8)  │  │(Auth+Err)│  │(Schemas)  │  │ (8 files) │ │
│  └──────┘  └──────────┘  └───────────┘  └─────┬─────┘ │
└────────────────────────────────────────────────┼───────┘
                                                │
┌───────────────────────────────────────────────▼────────┐
│                    MongoDB (Mongoose ODM)              │
│  ┌──────┐ ┌───────┐ ┌──────┐ ┌────┐ ┌───────┐ ┌──────┐ │
│  │User  │ │Vehicle│ │Driver│ │Trip│ │Expense│ │Maint.│ │
│  └──────┘ └───────┘ └──────┘ └────┘ └───────┘ └──────┘ │
└────────────────────────────────────────────────────────┘
```

### Technology Breakdown:
* **Frontend:** React 19, Vite, React Router 7, Recharts (for charts), Framer Motion (for animations), Axios (for HTTP requests), Lucide React.
* **Backend:** Node.js, Express.js, Mongoose ODM (Object Document Mapper), JSON Web Tokens (JWT) for stateless authentication, bcryptjs for password hashing, and express-validator.
* **Database:** MongoDB (using indexes for status, type, and dates, with virtual fields for license validity and driver stats).

---

## 🗄️ Database Schemas & Relationships

FleetFlow uses six core collections in MongoDB with cross-reference relationships:

1. **Users:** Handles system access and roles (`manager`, `dispatcher`, `safety_officer`, `financial_analyst`).
2. **Vehicles:** Tracks name, license plate, type, capacity, acquisition cost, status (`available`, `on_trip`, `in_shop`, `retired`), and current odometer.
3. **Drivers:** Tracks name, license number, safety score (0–100), status (`on_duty`, `off_duty`, `on_trip`, `suspended`), license expiry date, and assigned vehicle.
4. **Trips:** Connects a vehicle and driver to cargo weight, origin, destination, trip status (`draft`, `dispatched`, `completed`, `cancelled`), and odometer stats.
5. **Expenses:** Logs costs tied to a vehicle (and optional trip) categorized by type (`fuel`, `maintenance`, `insurance`, `other`).
6. **Maintenance:** Records service type, cost, mechanics, date, and status (`scheduled`, `completed`).

---

## ⚙️ Key Workflows

### 1. Trip Dispatching & Completion Lifecycle
* **Validation:** Rejects dispatch if cargo weight exceeds vehicle capacity, or if the driver's license is expired.
* **State Change on Dispatch:** Vehicle and Driver statuses are automatically updated to `on_trip`.
* **State Change on Completion:** Final odometer is logged, vehicle changes back to `available`, driver returns to `on_duty`, and the driver's total and completed trip metrics are incremented.

### 2. Maintenance Lifecycle & Auto-Sync
* **Service Creation:** Creating a scheduled maintenance ticket for a vehicle automatically changes its status to `in_shop`.
* **Dropdown Filtering:** Vehicles in `in_shop` status are automatically omitted from the dispatcher's available vehicle dropdown to prevent dispatching unsafe vehicles.
* **Service Completion:** Completing the maintenance logs the repair cost as an expense and restores the vehicle's status to `available`.
