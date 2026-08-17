# Software Project Management: Post Lecture Tasks
### Group Members:
* **Vaidik Rokad** (23BCE291)
* **Rishi Detroja** (23BCE288)

---

## 🛠️ Post Lecture Task – 1 (L-1: PLT-1)
### Title: Current Industry Tools and Their Usage Areas in Software Project Management

### 1. Introduction
Software Project Management (SPM) involves planning, organizing, monitoring, and delivering software projects efficiently. To manage these activities, organizations use various project management tools. These tools are mainly classified into Licensed (Commercial) and Open-Source tools.

### 2. Industry Tools and Their Usage
Below is a comparison of major software project management tools used in the industry today, detailing their types and usage areas:

| Tool | Type | Usage Area |
| :--- | :--- | :--- |
| **Jira** | Licensed | Agile project management, sprint planning, bug tracking, and release management. |
| **Microsoft Project** | Licensed | Portfolio management, resource allocation, project scheduling, and Gantt charts. |
| **Trello** | Licensed (Freemium) | Simple task management, team collaboration, and status tracking using Kanban boards. |
| **Asana** | Licensed | Workflow management, team collaboration, milestone tracking, and task lists. |
| **ClickUp** | Licensed | All-in-one productivity platform, task management, time tracking, and doc hosting. |
| **Redmine** | Open Source | Cross-platform project and issue tracking, custom databases, and wiki support. |
| **OpenProject** | Open Source | Collaborative project management, Gantt charts, Agile/Scrum boards, and time tracking. |
| **Taiga** | Open Source | Lightweight, developer-focused Scrum and Kanban project tracking. |
| **GitLab CE** | Open Source | DevOps lifecycle tool, git repository hosting, issue tracking, and CI/CD pipelines. |
| **GanttProject** | Open Source | Desktop tool for project scheduling, baseline creation, and Gantt chart reporting. |

### 3. Major Usage Areas
* **Project Planning:** Microsoft Project, GanttProject, OpenProject (used to map timelines, dependecies, and critical paths).
* **Task Management:** Trello, Asana, ClickUp (enabling team members to move tasks across cards or status boards).
* **Agile Management:** Jira, Taiga, OpenProject (designed around sprints, backlogs, user stories, and velocity tracking).
* **Issue/Bug Tracking:** Jira, Redmine, GitLab CE (allowing developers to report, assign, and resolve bugs directly linked to code commits).
* **Team Collaboration:** Asana, ClickUp, Trello (centralizing communication, file attachments, and updates).
* **Scheduling & Reporting:** Microsoft Project, OpenProject (offering advanced resource histograms and velocity charts).

### 4. Licensed vs Open-Source Tools Comparison
| Feature | Licensed Tools | Open-Source Tools |
| :--- | :--- | :--- |
| **Cost** | Paid licenses (per user/seat). | Free to use and host. |
| **Support** | Dedicated vendor support and SLAs. | Community support, forums, and developer documentation. |
| **Updates** | Automatic patches, security fixes, and upgrades. | Updates managed manually by self-hosting administrators. |
| **Customizability** | Limited to API plugins and built-in configurations. | Highly customizable; source code can be modified directly. |
| **Target Market** | Best for large enterprises with compliance needs. | Best for startups, students, and SMBs. |

---

## 📈 Post Lecture Task – 2 (L-1: PLT-2)
### Title: Software Product Case Study (FleetFlow)

### 1. What problem does the software solve?
FleetFlow is a Modular Fleet & Logistics Management System that integrates the operational processes of a logistics company. It solves the following core problems:
* **Manual Bottlenecks:** Replaces error-prone paper logbooks with a rule-based digital system.
* **Dispatch Mistakes:** Minimizes dispatcher error by validating that vehicle weight capacities are not exceeded and ensuring assigned drivers have valid, unexpired commercial licenses.
* **Coordination Gaps:** Integrates vehicle registries, trip logs, driver stats, and maintenance diaries, syncing vehicle status automatically (e.g. locks vehicle as `In Shop` when undergoing maintenance).
* **Cost Inefficiencies:** Provides financial transparency by calculating fuel efficiency (km/L) and vehicle ROI ratios to flag low-performing assets.

### 2. Who are its stakeholders?
* **Fleet Managers:** Administrators who oversee the entire fleet lifecycle and audit overall operational performance.
* **Dispatchers:** Team members who create trips, assign drivers/vehicles, and monitor cargo weights.
* **Safety Officers:** Compliance managers who verify driver licensing dates and vehicle service records.
* **Financial Analysts:** Auditors who trace expenses, log fuel purchases, and compute ROI metrics.
* **Drivers:** Field staff whose status, safety scores, and vehicle assignments are tracked.
* **Development Team:** The engineers maintaining the Node/Express backend and React frontend.

### 3. What development model does it follow, and why?
FleetFlow follows the **Agile Development Model**:
* **Why:** The system is modular, consisting of independent features (Authentication, Driver Registry, Vehicles, Trips, Expenses, Maintenance, Analytics).
* **Benefits:** An Agile workflow (specifically Scrum/Kanban) allows the team to deliver these features incrementally in 2-week sprints. If logic requirements change (e.g., introducing a new local vehicle safety regulation or expense category), Agile allows the team to adapt quickly without restarting a rigid pipeline.

### 4. Five Possible Project Risks
1. **State Machine Inconsistency:** Bug in status transitions leaving a vehicle permanently locked in `On Trip` status, blocking future assignments.
2. **License Validation Failures:** Delay in database checks allowing a suspended or expired driver to be dispatched, exposing the business to heavy regulatory fines.
3. **Data Loss/Leakage:** Improper security around JWT storage exposing employee payroll, driver safety scores, or vehicle expense logs.
4. **Third-Party Integration Outages:** Failure of SMTP services rendering account registration, notification triggers, and password resets unusable.
5. **Analytics Scalability:** Slower calculations for ROI% and cost-per-km as the MongoDB collections fill with hundreds of thousands of daily trip odometers.

### 5. Suggested Project Management Tool
**Jira** is the recommended tool for managing FleetFlow's development:
* **Why:** Jira provides strong support for Scrum and Kanban boards, backlog grooming, and workflow customization. It integrates seamlessly with GitHub, allowing commits (e.g. referencing a ticket number) to auto-transition issues from `In Progress` to `Review`, keeping the development team in sync.
