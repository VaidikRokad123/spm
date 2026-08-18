# Software Project Management Plan (SPMP): Task-3 (PLT-3)
## Student: Rishi Detroja (23BCE288)
### Project: FleetFlow (Frontend UI & Charts SPMP)

---

## 📌 Overview
Task-3 requires preparing a **Software Project Management Plan (SPMP)** for the selected software project (**FleetFlow**). The plan defines the project scope, key assumptions, development milestones, and team role distribution.

---

## 🔍 1. Detailed Project Scope

### In-Scope (Frontend & User Interface):
* **UI/UX & Responsive Layout:** Clean dark-mode dashboard UI using vanilla CSS custom variables (`index.css`), responsive sidebar navigation, and mobile-friendly design.
* **Role-Based Navigation:** Sidebar item filtering (`Sidebar.jsx`) hiding cost pages from safety officers and restricted areas from unauthenticated users.
* **Interactive Analytics & Charts:** Visual representation of data using Recharts (vehicle status pie chart, monthly trip vs expense bar graphs).
* **Reporting & Export Tools:** PDF report generation and CSV data download utilities for Fleet Managers and Financial Analysts.
* **API Integration & State:** Axios services for connecting React components to Express backend endpoints.

### Out-of-Scope:
* Native mobile app compilation (iOS/Android app store releases).
* Real-time WebSocket streaming (polling/HTTP REST updates used instead).

---

## 📋 2. Project Assumptions & Constraints

### Key Assumptions:
* **Technical:** Users access the web app using modern web browsers (Chrome, Edge, Firefox, Safari) with JavaScript enabled.
* **Operational:** Development is executed by a 2-person team (Rishi Detroja for Frontend/UI and Vaidik Rokad for Backend/DevOps).
* **Backend Availability:** Backend REST APIs will expose documented endpoints returning structured JSON data.

### Key Constraints:
* **Timeline:** Frontend layout, component development, and API integration must be completed within 4 weeks.
* **Performance:** UI component render time and chart redrawing must remain under 100ms for smooth 60fps interaction.

---

## 🗓️ 3. Project Milestones & Timeline

| Milestone | Deliverable / Activity | Target Schedule | Responsible |
| :--- | :--- | :--- | :--- |
| **M1: UI Design & CSS System** | Color tokens, dark theme styling (`index.css`), component library foundation | Week 1 | Rishi Detroja |
| **M2: Component Architecture** | Layout structure, Header, protected Navigation Sidebar, and modal forms | Week 2 | Rishi Detroja |
| **M3: Interactive Charts & Analytics** | Integrating Recharts for vehicle status distribution and monthly expense analytics | Week 3 | Rishi Detroja |
| **M4: API Wiring & Report Export** | Connecting views to backend endpoints, adding CSV export & PDF generator | Week 4 | Rishi Detroja |

---

## 👥 4. Team Roles & Responsibilities (RACI Matrix)

* **R** = Responsible (does the work)
* **A** = Accountable (ensures quality & final approval)
* **C** = Consulted (provides input)
* **I** = Informed (receives updates)

| Task / Activity | Rishi Detroja (Frontend) | Vaidik Rokad (Backend) | Fleet Manager / Client |
| :--- | :---: | :---: | :---: |
| UI Wireframes & Layout Design | **A / R** | **C** | **I** |
| Component Development (React 19) | **A / R** | **I** | **I** |
| Charting & Visualization (Recharts) | **A / R** | **I** | **I** |
| API Specification Alignment | **C** | **A / R** | **I** |
| Role-Based Navigation Logic | **A / R** | **C** | **I** |
| Export to PDF/CSV Feature | **A / R** | **I** | **I** |
