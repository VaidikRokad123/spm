# Software Project Management: Task-1 (PLT-1)
## Student: Rishi Detroja (23BCE288)
### Project: FleetFlow (Frontend UI & Charts)

---

## 🚛 Selected Project: FleetFlow
FleetFlow is a Fleet and Delivery Management System. It replaces manual paper logbooks with a digital system that tracks vehicle status, fuel costs, maintenance logs, and driver details.

---

## 🎯 1. Project Objectives (Goals)
* **Beautiful and Simple Interface:** Create a clean, easy-to-use dark mode website so users can track their fleet easily.
* **Easy-to-Read Charts:** Show database numbers (like expenses and trip counts) in visual charts (graphs) so managers can make quick decisions.
* **Hide/Show Pages Based on Roles:** Protect pages so that users only see what they are allowed to see (for example, showing cost pages to financial analysts but hiding them from safety officers).
* **Download Reports:** Let users download their data as Excel files (CSV) or save reports as PDF documents.

---

## 👥 2. Project Stakeholders (People Involved)
* **Dispatchers:** Need simple screens to add trips, pick available cars, and get warnings if the cargo load is too heavy.
* **Safety Officers:** Need a dashboard to see driver ratings and alerts for expired licenses.
* **Financial Analysts:** Need to see fuel bills, calculate car profits, and download PDF sheets.
* **Fleet Managers:** Need to see all pages and manage cars, drivers, and user roles.
* **Frontend Developer (Rishi Detroja):** The developer who designs the website look, makes the layout, programs the pages, and adds the charts.

---

## 🔍 3. Scope of Work (What Rishi Built)
* **Website Look & Feel (CSS):** Created colors, fonts, card styles, and hover effects in a main file (`index.css`) to make the app look premium.
* **Sidebar Menu:** Created a sidebar menu (`Sidebar.jsx`) that changes automatically depending on who is logged in.
* **Interactive Charts:** Added charts (using a tool called Recharts) to show:
  * A circle chart showing car statuses (like active, in repair, or retired).
  * A bar chart showing monthly trip numbers versus expenses.
* **Connecting Screens to Backend:** Programmed screens (Dashboard, Cars, Drivers, Trips, Expenses, Maintenance) to fetch data from the server.
* **Export Tool:** Wrote the code that lets users click a button to download CSV files or save PDF reports.

---

## 📦 4. Project Deliverables (What is Delivered)
* **React Frontend Code:** The complete code for the website interface.
* **Design File:** The main CSS theme file with colors and styles.
* **Dashboard Chart Components:** React components for visual charts and transition animations.
* **Page Route Security:** Code that blocks unauthorized users from viewing admin pages.

---

## ⚠️ 5. Project Constraints (Limitations)
* **Fast Load Times:** The website pages and graphs must load quickly without lag.
* **Responsive Screen Sizes:** The screens must look good on both small tablets (used by drivers) and big desktop monitors (used by managers).
* **Loading Indicators:** Must show loading icons or text when the app is fetching data from a slow server so users know it is working.
