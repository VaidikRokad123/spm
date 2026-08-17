# 👤 Individual Task Report & Code Diff
## Developer: Rishi Detroja (23BCE288)
### Role: Frontend Developer & UI/UX Designer

---

## 📋 Tasks Performed & Responsibilities

1. **Client-Side Framework Setup & Routing:**
   * Configured the client application skeleton using React 19, Vite, and React Router 7.
   * Wireframed application routing, implementing client-side role guards to prevent unauthorized users from viewing restricted views (like the Analytics page).

2. **Design System & Global Styling:**
   * Engineered the CSS variables framework inside `index.css` to build a dark mode design system (featuring dark blues, high contrast text, and borders).
   * Coded utility styles and animations using Framer Motion to provide transitions between pages and menu navigation toggles.

3. **Reusable Layouts & Components:**
   * Built the application shell, including the responsive navigation bar and the multi-role layout `Sidebar.jsx` showing menu options depending on the user's role.
   * Implemented common presentation components (styled modal boxes, form wrappers, input fields, and table formats with search filters).

4. **Frontend Integration & State Management:**
   * Set up `AuthContext.jsx` to store current user details, role types, session statuses, and to expose logout and login helpers.
   * Configured the Axios instance with token interceptors (`services/api.js`) to automatically append Bearer credentials in outgoing HTTP requests.

5. **Analytics Reporting & Data Visualizations:**
   * Coded the analytics module using Recharts, creating the Donut status chart and Bar comparison charts for Monthly Fleet Activity.
   * Coded client-side PDF export logic using `jspdf`/`jspdf-autotable` and integrated CSV report downloads.

---

## 💻 Simulated Git Contributions (Commit Diff)

Below is a simulated Git diff capturing the layout styling, theme design, and navigation sidebar configurations committed by Rishi Detroja:

```diff
diff --git a/frontend/src/index.css b/frontend/src/index.css
new file mode 100644
--- /dev/null
+++ b/frontend/src/index.css
@@ -0,0 +1,30 @@
+:root {
+  --bg-primary: #0b0f19;
+  --bg-secondary: #161d30;
+  --bg-tertiary: #1f2a45;
+  --text-main: #f3f4f6;
+  --text-muted: #9ca3af;
+  --accent-blue: #3b82f6;
+  --border-color: #2d3d5f;
+  --status-available: #10b981;
+  --status-trip: #3b82f6;
+  --status-shop: #f59e0b;
+  --status-retired: #ef4444;
+  --font-family: 'Inter', system-ui, sans-serif;
+}
+
+body {
+  margin: 0;
+  background-color: var(--bg-primary);
+  color: var(--text-main);
+  font-family: var(--font-family);
+  -webkit-font-smoothing: antialiased;
+}
+
+.card {
+  background-color: var(--bg-secondary);
+  border: 1px solid var(--border-color);
+  border-radius: 8px;
+  padding: 1.5rem;
+  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
+}
diff --git a/frontend/src/components/layout/Sidebar.jsx b/frontend/src/components/layout/Sidebar.jsx
new file mode 100644
--- /dev/null
+++ b/frontend/src/components/layout/Sidebar.jsx
@@ -0,0 +1,48 @@
+import React from 'react';
+import { Link, useLocation } from 'react-router-dom';
+import { useAuth } from '../../context/AuthContext';
+import { LayoutDashboard, Truck, Users, Settings, LogOut, BarChart3, Wrench } from 'lucide-react';
+
+export default function Sidebar() {
+  const { user, logout } = useAuth();
+  const location = useLocation();
+
+  const navigationLinks = [
+    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, roles: ['manager', 'dispatcher', 'safety_officer', 'financial_analyst'] },
+    { name: 'Vehicles', path: '/vehicles', icon: Truck, roles: ['manager', 'dispatcher', 'safety_officer', 'financial_analyst'] },
+    { name: 'Drivers', path: '/drivers', icon: Users, roles: ['manager', 'dispatcher'] },
+    { name: 'Trips', path: '/trips', icon: Settings, roles: ['manager', 'dispatcher'] },
+    { name: 'Maintenance', path: '/maintenance', icon: Wrench, roles: ['manager', 'safety_officer'] },
+    { name: 'Analytics', path: '/analytics', icon: BarChart3, roles: ['manager', 'financial_analyst'] },
+  ];
+
+  const activeClass = (path) => location.pathname === path ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-slate-800';
+
+  return (
+    <aside className="w-64 bg-slate-900 border-r border-slate-800 h-screen flex flex-col justify-between">
+      <div className="p-6">
+        <h2 className="text-xl font-bold flex items-center gap-2 text-blue-400">
+          <span>🚛</span> FleetFlow
+        </h2>
+        <nav className="mt-8 space-y-2">
+          {navigationLinks
+            .filter(link => link.roles.includes(user?.role))
+            .map(link => {
+              const Icon = link.icon;
+              return (
+                <Link key={link.path} to={link.path} className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all ${activeClass(link.path)}`}>
+                  <Icon size={20} />
+                  <span>{link.name}</span>
+                </Link>
+              );
+            })}
+        </nav>
+      </div>
+      <div className="p-6 border-t border-slate-800">
+        <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-2 rounded-md text-red-400 hover:bg-slate-800 transition-all">
+          <LogOut size={20} />
+          <span>Logout</span>
+        </button>
+      </div>
+    </aside>
+  );
+}
```
