# Software Project Management: Task-4 (PLT-4)
## Student: Rishi Detroja (23BCE288)
### Project: FleetFlow (Work Breakdown Structure - WBS: Frontend & Analytics)

---

## 📌 Overview
Task-4 requires developing a hierarchical **Work Breakdown Structure (WBS)** for the selected software project (**FleetFlow**). The WBS breaks down the project into manageable levels (Level 1 Project -> Level 2 Subsystems -> Level 3 Work Packages -> Level 4 Specific Tasks).

---

## 🌲 1. Hierarchical Work Breakdown Structure (WBS Tree)

```text
1.0 FleetFlow System (Frontend & User Interface)
├── 1.1 UI Design System & Styling Foundation
│   ├── 1.1.1 CSS Tokens & Global Variables (index.css)
│   ├── 1.1.2 Dark Mode Design Palette & Glassmorphism Cards
│   └── 1.1.3 Custom Buttons, Form Inputs, & Modals
├── 1.2 Layout & Navigation Architecture
│   ├── 1.2.1 Responsive Sidebar Navigation (Sidebar.jsx)
│   ├── 1.2.2 Role-Based Menu Filtering (Hiding pages based on user role)
│   └── 1.2.3 Header Bar & User Profile Card
├── 1.3 Page Views & Features
│   ├── 1.3.1 Dashboard Overview Page
│   ├── 1.3.2 Vehicles Management Table
│   ├── 1.3.3 Driver Registry & Safety Rating View
│   ├── 1.3.4 Trip Operations Dispatch Interface
│   └── 1.3.5 Expenses & Maintenance Logs View
├── 1.4 Data Visualization & Reporting
│   ├── 1.4.1 Vehicle Status Distribution Pie Chart (Recharts)
│   ├── 1.4.2 Monthly Trip & Expense Bar Graphs
│   └── 1.4.3 Data Export Utilities (CSV Download & PDF Generation)
└── 1.5 API Integration & State Management
    ├── 1.5.1 Auth Context & Session Storage
    └── 1.5.2 Axios Service Layer for Backend REST API Endpoints
```

---

## 📖 2. WBS Dictionary (Work Package Details)

| WBS Code | Work Package Name | Assignee | Output / Deliverable | Acceptance Criteria |
| :--- | :--- | :--- | :--- | :--- |
| **1.1.1** | CSS Design System | Rishi Detroja | `index.css` | Defines standardized colors, typography, and dark mode tokens. |
| **1.2.2** | Role Navigation Filter | Rishi Detroja | `Sidebar.jsx` | Hides financial routes from non-financial analyst roles. |
| **1.3.1** | Dashboard Summary | Rishi Detroja | `Dashboard.jsx` | Displays key metric cards (Active Trucks, On Duty Drivers, Costs). |
| **1.4.1** | Recharts Pie Chart | Rishi Detroja | `StatusChart.jsx` | Renders interactive breakdown of vehicle statuses dynamically. |
| **1.4.3** | PDF/CSV Exporter | Rishi Detroja | `exportUtils.js` | Generates downloadable Excel-compatible CSV and formatted PDF reports. |
| **1.5.2** | Axios API Integration | Rishi Detroja | `api.js` | Fetches data from Express server with automatic JWT header inclusion. |

---

## 📊 3. WBS Work Breakdown by Phase

1. **Phase 1: Design Tokens & Layout Structure (WBS 1.1 - 1.2)**
   - Building the core stylesheet, responsive navbar, and layout wrapper.
2. **Phase 2: Screen Components & Interactive Views (WBS 1.3)**
   - Developing data tables, creation modals, and trip dispatch UI.
3. **Phase 3: Visual Analytics & Exports (WBS 1.4 - 1.5)**
   - Connecting charts with live API payload data and adding export features.
